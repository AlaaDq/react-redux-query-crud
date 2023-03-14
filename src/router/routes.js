import { Typography } from '../components';
import { DefaultLayout } from '../layouts';
import { PostList, EditPost, AddPost } from '../pages';

export const routes = [
  {
    path: '/',
    name: 'app',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <PostList />,
      },
      {
        path: '/add-post',
        name: 'add-post',
        element: <AddPost />,
      },
      {
        path: '/edit-post/:id',
        name: '/edit-post',
        element: <EditPost />,
      },
    ],
  },
  {
    path: '*',
    name: 'not-found',
    element: (
      <Typography size="xl" className=" w-full flex justify-center">
        page not found
      </Typography>
    ),
  },
];
