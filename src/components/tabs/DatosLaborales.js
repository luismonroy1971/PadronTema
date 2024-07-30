import React, { useState } from 'react';

const initialWorkers = [
  { id: 1, name: 'Gregor Alfredo Abarca Chavez', dni: '73671897', startDate: '01/01/2020', endDate: '31/12/2024', contractType: 'Indefinido', organization: 'Company A', reasonForLeaving: '', salary: 3000 },
  { id: 2, name: 'Jesus Alexander Aburto Santiago', dni: '43505153', startDate: '15/05/2018', endDate: '15/05/2023', contractType: 'Temporal', organization: 'Company B', reasonForLeaving: 'Contract ended', salary: 2500 },
];

const DatosLaborales = () => {
  const [workers, setWorkers] = useState(initialWorkers);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchDni, setSearchDni] = useState('');
  const [searchContractType, setSearchContractType] = useState('');
  const [searchOrganization, setSearchOrganization] = useState('');

  const handleEdit = (worker) => {
    setSelectedWorker(worker);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setWorkers(workers.filter(worker => worker.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (selectedWorker.id) {
      setWorkers(workers.map(worker => (worker.id === selectedWorker.id ? selectedWorker : worker)));
    } else {
      selectedWorker.id = workers.length + 1;
      setWorkers([...workers, selectedWorker]);
    }
    setIsModalOpen(false);
    setSelectedWorker(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedWorker(null);
  };

  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchDniChange = (e) => {
    setSearchDni(e.target.value);
  };

  const handleSearchContractTypeChange = (e) => {
    setSearchContractType(e.target.value);
  };

  const handleSearchOrganizationChange = (e) => {
    setSearchOrganization(e.target.value);
  };

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchName.toLowerCase()) &&
    worker.dni.includes(searchDni) &&
    worker.contractType.toLowerCase().includes(searchContractType.toLowerCase()) &&
    worker.organization.toLowerCase().includes(searchOrganization.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Datos Laborales</h1>
      <div className="mb-4 flex justify-between">
        <button
          onClick={() => {
            setSelectedWorker({ id: '', name: '', dni: '', startDate: '', endDate: '', contractType: '', organization: '', reasonForLeaving: '', salary: '' });
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Añadir Trabajador
        </button>
        <div className="flex">
          <input
            type="text"
            placeholder="Buscar por Nombre..."
            className="border border-gray-300 rounded p-2 mr-2"
            value={searchName}
            onChange={handleSearchNameChange}
          />
          <input
            type="text"
            placeholder="Buscar por DNI..."
            className="border border-gray-300 rounded p-2 mr-2"
            value={searchDni}
            onChange={handleSearchDniChange}
          />
          <input
            type="text"
            placeholder="Buscar por Tipo de Contrato..."
            className="border border-gray-300 rounded p-2 mr-2"
            value={searchContractType}
            onChange={handleSearchContractTypeChange}
          />
          <input
            type="text"
            placeholder="Buscar por Organización..."
            className="border border-gray-300 rounded p-2"
            value={searchOrganization}
            onChange={handleSearchOrganizationChange}
          />
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
            <th className="py-2 px-4 border-b border-gray-200">DNI</th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha de Inicio</th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha de Fin</th>
            <th className="py-2 px-4 border-b border-gray-200">Tipo de Contrato</th>
            <th className="py-2 px-4 border-b border-gray-200">Organización</th>
            <th className="py-2 px-4 border-b border-gray-200">Motivo de Baja</th>
            <th className="py-2 px-4 border-b border-gray-200">Remuneración</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredWorkers.map((worker) => (
            <tr key={worker.id}>
              <td className="py-2 px-4 border-b border-gray-200">{worker.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.dni}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.startDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.endDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.contractType}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.organization}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.reasonForLeaving}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.salary}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleEdit(worker)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(worker.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedWorker.id ? 'Editar Trabajador' : 'Añadir Trabajador'}</h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.name}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">DNI</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.dni}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, dni: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Fecha de Inicio</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.startDate}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, startDate: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Fecha de Fin</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.endDate}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, endDate: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Tipo de Contrato</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.contractType}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, contractType: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Organización</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.organization}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, organization: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Motivo de Baja</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.reasonForLeaving}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, reasonForLeaving: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Remuneración</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.salary}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, salary: e.target.value })}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatosLaborales;
