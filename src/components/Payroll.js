import React, { useState } from 'react';

const initialWorkers = [
  { id: 1, dni: '73671897', name: 'Gregor Alfredo Abarca Chavez', afpOnp: 'AFP', commissionType: 'Mixta', bank: 'BCP', bankAccount: '191-1234567890', workerStatus: 'Activo' },
  { id: 2, dni: '43505153', name: 'Jesus Alexander Aburto Santiago', afpOnp: 'ONP', commissionType: 'Ninguna', bank: 'BBVA', bankAccount: '001-9876543210', workerStatus: 'Cesado' },
  { id: 2, dni: '09283833', name: 'Luis Fernando Aburto Santiago', afpOnp: 'AFP', commissionType: 'Mixta', bank: 'BCP', bankAccount: '193-9811111210', workerStatus: 'Reingreso' }
];

const Nominas = () => {
  const [workers, setWorkers] = useState(initialWorkers);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? worker.workerStatus === filter : true)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Nóminas</h1>
      <div className="mb-4 flex justify-between">
        <button
          onClick={() => {
            setSelectedWorker({ id: '', dni: '', name: '', afpOnp: '', commissionType: '', bank: '', bankAccount: '', workerStatus: '' });
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Añadir Trabajador
        </button>
        <input
          type="text"
          placeholder="Buscar..."
          className="border border-gray-300 rounded p-2 w-1/3"
          value={search}
          onChange={handleSearch}
        />
        <select className="border border-gray-300 rounded p-2 w-1/4" value={filter} onChange={handleFilter}>
          <option value="">Todos los Estados</option>
          <option value="Activo">Activo</option>
          <option value="Cesado">Cesado</option>
        </select>
      </div>
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
          {filteredWorkers.map((worker) => (
            <tr key={worker.id}>
              <td className="py-2 px-4 border-b border-gray-200">{worker.dni}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.afpOnp}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.commissionType}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.bank}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.bankAccount}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.workerStatus}</td>
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
                <label className="block text-gray-700 mb-2">DNI</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.dni}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, dni: e.target.value })}
                />
              </div>
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
                <label className="block text-gray-700 mb-2">AFP/ONP</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.afpOnp}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, afpOnp: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Tipo de Comisión</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.commissionType}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, commissionType: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Banco</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.bank}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, bank: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Cuenta Bancaria</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker.bankAccount}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, bankAccount: e.target.value })}
                />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 mb-2">Estado de Trabajador</label>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-full"
                value={selectedWorker.workerStatus}
                onChange={(e) => setSelectedWorker({ ...selectedWorker, workerStatus: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Guardar
              </button>
              <button type="button" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
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

export default Nominas;
