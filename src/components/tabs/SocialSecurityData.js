import React from 'react';

const SocialSecurityData = ({ workers }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">ID</th>
          <th className="py-2 px-4 border-b border-gray-200">Número de Seguro Social</th>
          <th className="py-2 px-4 border-b border-gray-200">AFP</th>
          <th className="py-2 px-4 border-b border-gray-200">EPS</th>
          {/* Añade más columnas según sea necesario */}
        </tr>
      </thead>
      <tbody>
        {workers.map(worker => (
          <tr key={worker.id}>
            <td className="py-2 px-4 border-b border-gray-200">{worker.id}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.socialSecurityNumber}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.afp}</td>
            <td className="py-2 px-4 border-b border-gray-200">{worker.eps}</td>
            {/* Añade más celdas según sea necesario */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SocialSecurityData;
