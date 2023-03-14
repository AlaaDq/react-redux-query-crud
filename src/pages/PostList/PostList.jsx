import React from 'react';

import './PostList.css';
import { usePosts } from '../../features/posts/usePosts';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../components/Post';
export function PostList() {
  const navigate = useNavigate();
  const navigateToEdit = (post) => {
    navigate(`/edit-post/${post.id}`, { state: { post } });
  };
  const navigateToAdd = () => {
    navigate(`/add-post`);
  };

  const {
    posts,
    isLoading,
    error,
    handleDeletePost,
    dispatchNextPage,
    dispatchPrevPage,
    isPrevEnabled,
    isNextEnabled,
  } = usePosts();
  return (
    <div className="p-2">
      <div className="my-2 w-full flex justify-around ">
        <button onClick={dispatchPrevPage} disabled={!isPrevEnabled}>
          prev
        </button>
        <button
          onClick={navigateToAdd}
          className="flex-grow-[2] mx-2 md:max-w-[60%]"
        >
          create
        </button>
        <button onClick={dispatchNextPage} disabled={!isNextEnabled}>
          next
        </button>
      </div>
      <div className="flex flex-col gap-4  items-center ">
        {isLoading ? (
          <div>loading ...</div>
        ) : (
          posts.map((post, index) => (
            <Post
              key={`${post.id}`}
              post={post}
              handleDelete={() => handleDeletePost(post.id)}
              handleUpdate={() => navigateToEdit(post)}
            ></Post>
          ))
        )}
      </div>
    </div>
  );
}
