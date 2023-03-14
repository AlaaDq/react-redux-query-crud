import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ page = 1, limit = 5 }) =>
        `/posts?_start=${(page - 1) * limit}&_limit=${limit}`,
      transformResponse: (res, config) => {
        const total = Number(config.response.headers.get('X-Total-Count'));
        return { data: res, total };
      },
      providesTags: ['Posts'], //  as using jsonplaceholder api won't change data in server
    }),
    createPost: builder.mutation({
      query: (postData) => ({
        url: '/posts',
        method: 'POST',
        body: postData,
      }),
      invalidatesTags: ['Posts'], //  as using jsonplaceholder api won't change data in server
    }),
    updatePost: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['Posts'], //  as using jsonplaceholder api won't change data in server
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (_, config) => {
        const id = Number(config.request.url.split('/').splice(-1)[0]);
        return id;
      },
      invalidatesTags: ['Posts'], //  as using jsonplaceholder api won't change data in server
    }),
  }),
});

// Export actions for use in Redux store
export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
