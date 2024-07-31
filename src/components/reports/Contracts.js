// Contracts.js
import React, { useState } from 'react';

const initialContracts = [
  { id: 1, workerName: 'Juan González', contractType: 'Indefinido', startDate: '2020-01-01', endDate: '2025-01-01', position: 'Ingeniero' },
  { id: 2, workerName: 'Ana Rodríguez', contractType: 'Temporal', startDate: '2022-05-15', endDate: '2023-05-15', position: 'Supervisor' }
];

const Contracts = () => {
  const [contracts] = useState(initialContracts);
  const [workerNameFilter, setWorkerNameFilter] = useState('');
  const [contractTypeFilter, setContractTypeFilter] = useState('');
  const [startDateFilter, setStartDateFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState('');

  const filteredContracts = contracts.filter(contract =>
    (!workerNameFilter || contract.workerName.toLowerCase().includes(workerNameFilter.toLowerCase())) &&
    (!contractTypeFilter || contract.contractType === contractTypeFilter) &&
    (!startDateFilter || contract.startDate >= startDateFilter) &&
    (!endDateFilter || contract.endDate <= endDateFilter)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Impresión de Contratos</h1>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Nombre del trabajador"
          value={workerNameFilter}
          onChange={(e) => setWorkerNameFilter(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <select
          value={contractTypeFilter}
          onChange={(e) => setContractTypeFilter(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">Tipo de Contrato</option>
          <option value="Indefinido">Indefinido</option>
          <option value="Temporal">Temporal</option>
        </select>
        <input
          type="date"
          placeholder="Fecha de Inicio"
          value={startDateFilter}
          onChange={(e) => setStartDateFilter(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <input
          type="date"
          placeholder="Fecha de Fin"
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Nombre del Trabajador</th>
            <th className="py-2 px-4 border-b border-gray-200">Tipo de Contrato</th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha de Inicio</th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha de Fin</th>
            <th className="py-2 px-4 border-b border-gray-200">Puesto</th>
          </tr>
        </thead>
        <tbody>
          {filteredContracts.map(contract => (
            <tr key={contract.id}>
              <td className="py-2 px-4 border-b border-gray-200">{contract.workerName}</td>
              <td className="py-2 px-4 border-b border-gray-200">{contract.contractType}</td>
              <td className="py-2 px-4 border-b border-gray-200">{contract.startDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{contract.endDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{contract.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contracts;
