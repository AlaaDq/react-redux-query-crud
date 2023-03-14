import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../features/posts/postsApi';
// import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    // posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
  devTools: true,
});
