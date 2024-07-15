import React from 'react';
import { Outlet } from 'react-router-dom';

const Tables = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tablas</h1>
      <Outlet />
    </div>
  );
};

export default Tables;
