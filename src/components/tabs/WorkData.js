import React from 'react';

const WorkData = ({ workers }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">ID</th>
          <th className="py-2 px-4 border-b border-gray-200">Puesto</th>
          <th className="py-2 px-4 border-b border-gray-200">Departamento</th>
          <th className="py-2 px-4 border-b border-gray-200">Fecha de Ingreso</th>
          {/* Añade más columnas según sea necesario */}
        </tr>
      </thead>
      <tbody>
        {workers.map(worker => (
          <tr key={worker.id}>
            <td className="py-2 px-4 border-b border-gray-200">{worker.id}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.position}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.department}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.hireDate}</td>
            {/* Añade más celdas según sea necesario */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkData;
