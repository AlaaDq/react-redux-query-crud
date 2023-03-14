import React from 'react';
import './EditPost.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input, Typography } from '../../components';
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { useUpdatePostMutation } from '../../features/posts/postsApi';

export function EditPost() {
  const [
    updatePost,
    { isLoading: updateLoading, isError: updateError, isSuccess },
  ] = useUpdatePostMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const post = location?.state?.post;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // userId:11,
      ...post,
    },
  });

  const onSubmit = async (data) => {
    try {
      await updatePost({ id: post.id, payload: { ...data } });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-2 flex flex-col gap-4  items-center">
      {isSuccess ? (
        <div>
          updated !! <br />
          back
        </div>
      ) : (
        <>
          <Typography size="lg">edit post</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="title"
              label="title"
              errors={errors}
              register={register}
              validationSchema={{
                required: 'required !!',
              }}
              required
            />
            <Input
              type="text"
              name="body"
              label="body"
              errors={errors}
              register={register}
              validationSchema={{
                required: 'required !!',
              }}
              required
            />
            <Input
              type="hidden"
              name="userId"
              label=""
              errors={errors}
              register={register}
              className=" !min-h-[0px]"
            />
            <button type="submit">submit</button>
          </form>
        </>
      )}
    </div>
  );
}
