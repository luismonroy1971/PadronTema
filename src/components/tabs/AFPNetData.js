import React from 'react';

const AFPNetData = ({ workers }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">ID</th>
          <th className="py-2 px-4 border-b border-gray-200">AFP</th>
          <th className="py-2 px-4 border-b border-gray-200">Código de AFP</th>
          <th className="py-2 px-4 border-b border-gray-200">Tipo de Comisión</th>
          {/* Añade más columnas según sea necesario */}
        </tr>
      </thead>
      <tbody>
        {workers.map(worker => (
          <tr key={worker.id}>
            <td className="py-2 px-4 border-b border-gray-200">{worker.id}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.afp}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.afpCode}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.commissionType}</td>
            {/* Añade más celdas según sea necesario */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AFPNetData;
