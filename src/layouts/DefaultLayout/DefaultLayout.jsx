import React from 'react';
import { Outlet } from 'react-router-dom';
import './DefaultLayout.css';

export function DefaultLayout() {
  return (
    <>
      <nav></nav>
      <div className="lg:mx-auto lg:max-w-[1251px]  ">
        <Outlet />
      </div>
    </>
  );
}
