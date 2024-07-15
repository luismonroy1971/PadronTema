import React, { useState } from 'react';

const workers = [
  { id: 1, dni: '73671897', name: 'Gregor Alfredo Abarca Chavez', salary: '3000', startDate: '01/01/2020', contractType: 'Indefinido', endDate: '31/12/2024', projectCode: 'PRJ001', occupation: 'Ingeniero', payrollPosition: 'Ingeniero de Proyectos', educationLevel: 'Universitario', supervisor: 'Juan Pérez' },
  { id: 2, dni: '43505153', name: 'Jesus Alexander Aburto Santiago', salary: '2500', startDate: '15/05/2018', contractType: 'Temporal', endDate: '15/05/2023', projectCode: 'PRJ002', occupation: 'Supervisor', payrollPosition: 'Supervisor de Operaciones', educationLevel: 'Técnico', supervisor: 'Ana García' },
  // Añadir más registros según sea necesario
];

const HumanResources = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const workersPerPage = 10;

  // Obtener los trabajadores de la página actual
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recursos Humanos</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">DNI</th>
            <th className="py-2 px-4 border-b border-gray-200">Apellidos y Nombres</th>
            <th className="py-2 px-4 border-b border-gray-200">Sueldo</th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha Inicio Contrato</th>
            <th className="py-2 px-4 border-b border-gray-200">Tipo de Contrato</th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha Término Contrato</th>
            <th className="py-2 px-4 border-b border-gray-200">Código de Proyecto</th>
            <th className="py-2 px-4 border-b border-gray-200">Ocupación</th>
            <th className="py-2 px-4 border-b border-gray-200">Cargo en la Boleta</th>
            <th className="py-2 px-4 border-b border-gray-200">Nivel Educativo</th>
            <th className="py-2 px-4 border-b border-gray-200">Supervisor Inmediato</th>
          </tr>
        </thead>
        <tbody>
          {currentWorkers.map(worker => (
            <tr key={worker.id}>
              <td className="py-2 px-4 border-b border-gray-200">{worker.dni}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.salary}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.startDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.contractType}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.endDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.projectCode}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.occupation}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.payrollPosition}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.educationLevel}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.supervisor}</td>
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

export default HumanResources;
