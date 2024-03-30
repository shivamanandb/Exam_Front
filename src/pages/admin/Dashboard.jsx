import React from 'react';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 m-5'>
      <div className='lg:w-2/12'>
        <div className='sm:w-full'>
          <Sidebar />
        </div>
      </div>
      <div className='w-full lg:w-10/12'>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
