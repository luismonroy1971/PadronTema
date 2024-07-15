import React from 'react';

const IdentificationData = ({ workers }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">ID</th>
          <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
          <th className="py-2 px-4 border-b border-gray-200">Apellidos</th>
          <th className="py-2 px-4 border-b border-gray-200">DNI</th>
          {/* Añade más columnas según sea necesario */}
        </tr>
      </thead>
      <tbody>
        {workers.map(worker => (
          <tr key={worker.id}>
            <td className="py-2 px-4 border-b border-gray-200">{worker.id}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.name}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.surname}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.dni}</td>
            {/* Añade más celdas según sea necesario */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IdentificationData;
