import React from 'react';
import { Outlet } from 'react-router-dom';

const Evaluation = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Evaluación</h1>
      <Outlet />
    </div>
  );
};

export default Evaluation;
