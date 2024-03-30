import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export const UserDashboard = () => {
  return (
    <div className='flex flex-col md:flex-row md:gap-5 m-5'>
      <div className='md:w-2/12'>
        <div className=''>
          <Sidebar />
        </div>
      </div>
      <div className='md:w-10/12 mt-5 md:mt-0'>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
