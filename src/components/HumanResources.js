import React, { useState } from 'react';

const initialWorkers = [
  { id: 1, dni: '73671897', name: 'Gregor Alfredo Abarca Chavez', salary: 3000, startDate: '01/01/2020', contractType: 'Indefinido', endDate: '31/12/2024', projectCode: 'PRJ001', occupation: 'Ingeniero', position: 'Ingeniero de Proyectos', educationLevel: 'Universitario', supervisor: 'Juan Pérez' },
  { id: 2, dni: '43505153', name: 'Jesus Alexander Aburto Santiago', salary: 2500, startDate: '15/05/2018', contractType: 'Temporal', endDate: '15/05/2023', projectCode: 'PRJ002', occupation: 'Supervisor', position: 'Supervisor de Operaciones', educationLevel: 'Técnico', supervisor: 'Ana García' },
];

const RecursosHumanos = () => {
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
    (filter ? worker.educationLevel === filter : true)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recursos Humanos</h1>
      <div className="mb-4 flex justify-between">
        <button
          onClick={() => {
            setSelectedWorker({ id: '', dni: '', name: '', salary: '', startDate: '', contractType: '', endDate: '', projectCode: '', occupation: '', position: '', educationLevel: '', supervisor: '' });
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
          <option value="">Todos los Niveles Educativos</option>
          <option value="Universitario">Universitario</option>
          <option value="Técnico">Técnico</option>
        </select>
      </div>
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
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredWorkers.map((worker) => (
            <tr key={worker.id}>
              <td className="py-2 px-4 border-b border-gray-200">{worker.dni}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.salary}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.startDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.contractType}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.endDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.projectCode}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.occupation}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.position}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.educationLevel}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.supervisor}</td>
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
                  value={selectedWorker ? selectedWorker.dni : ''}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, dni: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker ? selectedWorker.name : ''}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Sueldo</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedWorker ? selectedWorker.salary : ''}
                  onChange={(e) => setSelectedWorker({ ...selectedWorker, salary: e.target.value })}
                />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 mb-2">Fecha Inicio Contrato</label>
<input
  type="date"
  className="border border-gray-300 rounded p-2 w-full"
  value={selectedWorker ? selectedWorker.startDate : ''}
  onChange={(e) => setSelectedWorker({ ...selectedWorker, startDate: e.target.value })}
/>
</div>
<div className="mb-4">
  <label className="block text-gray-700 mb-2">Tipo de Contrato</label>
  <input
    type="text"
    className="border border-gray-300 rounded p-2 w-full"
    value={selectedWorker ? selectedWorker.contractType : ''}
    onChange={(e) => setSelectedWorker({ ...selectedWorker, contractType: e.target.value })}
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 mb-2">Fecha Término Contrato</label>
  <input
    type="date"
    className="border border-gray-300 rounded p-2 w-full"
    value={selectedWorker ? selectedWorker.endDate : ''}
    onChange={(e) => setSelectedWorker({ ...selectedWorker, endDate: e.target.value })}
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 mb-2">Código de Proyecto</label>
  <input
    type="text"
    className="border border-gray-300 rounded p-2 w-full"
    value={selectedWorker ? selectedWorker.projectCode : ''}
    onChange={(e) => setSelectedWorker({ ...selectedWorker, projectCode: e.target.value })}
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 mb-2">Ocupación</label>
  <input
    type="text"
    className="border border-gray-300 rounded p-2 w-full"
    value={selectedWorker ? selectedWorker.occupation : ''}
    onChange={(e) => setSelectedWorker({ ...selectedWorker, occupation: e.target.value })}
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 mb-2">Cargo en la Boleta</label>
  <input
    type="text"
    className="border border-gray-300 rounded p-2 w-full"
    value={selectedWorker ? selectedWorker.position : ''}
    onChange={(e) => setSelectedWorker({ ...selectedWorker, position: e.target.value })}
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 mb-2">Nivel Educativo</label>
  <input
    type="text"
    className="border border-gray-300 rounded p-2 w-full"
    value={selectedWorker ? selectedWorker.educationLevel : ''}
    onChange={(e) => setSelectedWorker({ ...selectedWorker, educationLevel: e.target.value })}
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 mb-2">Supervisor Inmediato</label>
  <input
    type="text"
    className="border border-gray-300 rounded p-2 w-full"
    value={selectedWorker ? selectedWorker.supervisor : ''}
    onChange={(e) => setSelectedWorker({ ...selectedWorker, supervisor: e.target.value })}
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

export default RecursosHumanos;
