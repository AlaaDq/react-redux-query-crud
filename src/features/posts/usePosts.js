import {
  useGetPostsQuery,
  useDeletePostMutation,
} from './postsApi';
import { useEffect, useState } from 'react';

export const usePosts = () => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    total: 0,
    limit: 5,
  });
  const dispatchNextPage = () =>
    setPagination((pagination) => ({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    }));
  const dispatchPrevPage = () =>
    setPagination((pagination) => ({
      ...pagination,
      currentPage: pagination.currentPage - 1,
    }));
  const isPrevEnabled = pagination?.currentPage > 1;
  const isNextEnabled =
    pagination?.currentPage * pagination?.limit < pagination?.total;

  const {
    data,
    isLoading,
    isError: error,
    isSuccess,
  } = useGetPostsQuery({
    page: pagination.currentPage,
    limit: pagination.limit,
  }); // data of request result

  useEffect(() => {
    if (isSuccess) {
      setPagination((pagination) => ({ ...pagination, total: data.total }));
    }
  }, [data, isSuccess]);

  const [deletePost, { isLoading: deleteLoading, isError: deleteError }] =
    useDeletePostMutation();

  const handleDeletePost = async () => {
    try {
      await deletePost(1);
    } catch (error) {
      console.error('deletePost error', error);
    }
  };

  return {
    posts: data?.data || [], // this data won't updated because of using fake api not real api and db
    isLoading: isLoading || deleteLoading,
    error: error || deleteError,
    deletePost,
    handleDeletePost,
    dispatchNextPage,
    dispatchPrevPage,
    isPrevEnabled,
    isNextEnabled,
  };
};
