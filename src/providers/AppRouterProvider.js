import { RouterProvider } from 'react-router-dom';
import { router } from '../router';

export const AppRouterProvider = ({ children }) => (
  <RouterProvider router={router}> {children} </RouterProvider>
);
