import React from 'react';
import { Typography } from '../ui/Typography';

import './Post.css';

export function Post({ post, handleDelete, handleUpdate }) {
  return (
    <div className=" md:w-[60%] bg-secondary p-4  rounded-md shadow-sm">
      <div className="max-w-[90%]">
        <Typography size="lg">{post.title}</Typography>
        <Typography size="sm">{post.body}</Typography>
      </div>
      <div className=" flex gap-2 justify-end mt-2">
        <button onClick={handleUpdate}>update</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
}
