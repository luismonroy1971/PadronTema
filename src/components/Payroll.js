import React, { useState } from 'react';

const workers = [
  { id: 1, dni: '73671897', name: 'Gregor Alfredo Abarca Chavez', afpOnp: 'AFP', commissionType: 'Mixta', bank: 'BCP', bankAccount: '191-1234567890', workerStatus: 'Activo' },
  { id: 2, dni: '43505153', name: 'Jesus Alexander Aburto Santiago', afpOnp: 'ONP', commissionType: 'Flujo', bank: 'BBVA', bankAccount: '001-9876543210', workerStatus: 'Cesado' },
  // Añadir más registros según sea necesario
];

const Payroll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const workersPerPage = 10;

  // Obtener los trabajadores de la página actual
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (id) => {
    // Lógica para editar trabajador
    console.log(`Edit worker with id ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para eliminar trabajador
    console.log(`Delete worker with id ${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Nóminas</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">DNI</th>
            <th className="py-2 px-4 border-b border-gray-200">Apellidos y Nombres</th>
            <th className="py-2 px-4 border-b border-gray-200">AFP/ONP</th>
            <th className="py-2 px-4 border-b border-gray-200">Tipo de Comisión</th>
            <th className="py-2 px-4 border-b border-gray-200">Banco</th>
            <th className="py-2 px-4 border-b border-gray-200">Cuenta Bancaria</th>
            <th className="py-2 px-4 border-b border-gray-200">Estado de Trabajador</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentWorkers.map(worker => (
            <tr key={worker.id}>
              <td className="py-2 px-4 border-b border-gray-200">{worker.dni}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.afpOnp}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.commissionType}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.bank}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.bankAccount}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.workerStatus}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button onClick={() => handleEdit(worker.id)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">Editar</button>
                <button onClick={() => handleDelete(worker.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {[...Array(Math.ceil(workers.length / workersPerPage)).keys()].map(number => (
          <button key={number} onClick={() => handlePageChange(number + 1)} className="mr-2">{number + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Payroll;
