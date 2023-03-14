import React from 'react';
import './AddPost.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input, Typography } from '../../components';
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { useCreatePostMutation } from '../../features/posts/postsApi';

export function AddPost() {
  const [
    createPost,
    { isLoading: updateLoading, isError: updateError, isSuccess },
  ] = useCreatePostMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userId: 11, // fake auth user id
    },
  });

  const onSubmit = async (data) => {
    try {
      await createPost({ ...data });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-2 flex flex-col gap-4  items-center ">
      {isSuccess ? (
        <div>
          created !! <br />
          back
        </div>
      ) : (
        <>
          <Typography size="lg">create new post</Typography>

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
