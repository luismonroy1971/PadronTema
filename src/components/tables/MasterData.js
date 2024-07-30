import React, { useState } from 'react';

const initialData = [
  { id: 1, surname1: 'González', surname2: 'Pérez', name1: 'Juan', name2: '', name3: '', dniNumber: '12345678', dniType: 'DNI', birthDate: '01/01/1990', correlative: 1, fullName: 'González Pérez Juan' },
  { id: 2, surname1: 'Rodríguez', surname2: 'Sánchez', name1: 'Ana', name2: '', name3: '', dniNumber: '87654321', dniType: 'DNI', birthDate: '02/02/1992', correlative: 2, fullName: 'Rodríguez Sánchez Ana' },
];

const MasterDataBase = () => {
  const [data, setData] = useState(initialData);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filterDniType, setFilterDniType] = useState('');
  const [filterDni, setFilterDni] = useState('');

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setData(data.filter(record => record.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (selectedRecord.id) {
      setData(data.map(record => (record.id === selectedRecord.id ? selectedRecord : record)));
    } else {
      selectedRecord.id = data.length + 1;
      setData([...data, selectedRecord]);
    }
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterDniTypeChange = (e) => {
    setFilterDniType(e.target.value);
  };

  const handleFilterDniChange = (e) => {
    setFilterDni(e.target.value);
  };

  const filteredData = data.filter(record =>
    record.fullName.toLowerCase().includes(search.toLowerCase()) &&
    (filterDniType ? record.dniType === filterDniType : true) &&
    (filterDni ? record.dniNumber.includes(filterDni) : true)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Máster Data Base</h1>
      <div className="mb-4 flex justify-between">
        <button
          onClick={() => {
            setSelectedRecord({ id: '', surname1: '', surname2: '', name1: '', name2: '', name3: '', dniNumber: '', dniType: '', birthDate: '', correlative: '', fullName: '' });
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Añadir Registro
        </button>
        <input
          type="text"
          placeholder="Buscar por Nombre..."
          className="border border-gray-300 rounded p-2 w-1/3"
          value={search}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          placeholder="Buscar por DNI..."
          className="border border-gray-300 rounded p-2 w-1/4"
          value={filterDni}
          onChange={handleFilterDniChange}
        />
        <select className="border border-gray-300 rounded p-2 w-1/4" value={filterDniType} onChange={handleFilterDniTypeChange}>
          <option value="">Todos los Tipos de DNI</option>
          <option value="DNI">DNI</option>
          {/* Agregar más opciones si es necesario */}
        </select>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Apellido Paterno</th>
            <th className="py-2 px-4 border-b border-gray-200">Apellido Materno</th>
            <th className="py-2 px-4 border-b border-gray-200">Primer Nombre</th>
            <th className="py-2 px-4 border-b border-gray-200">Segundo Nombre</th>
            <th className="py-2 px-4 border-b border-gray-200">Tercer Nombre</th>
            <th className="py-2 px-4 border-b border-gray-200">Número de DNI</th>
            <th className="py-2 px-4 border-b border-gray-200">Tipo de DNI</th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha de Nacimiento</th>
            <th className="py-2 px-4 border-b border-gray-200">Correlativo</th>
            <th className="py-2 px-4 border-b border-gray-200">Apellidos y Nombres</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((record) => (
            <tr key={record.id}>
              <td className="py-2 px-4 border-b border-gray-200">{record.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.surname1}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.surname2}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.name1}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.name2}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.name3}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.dniNumber}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.dniType}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.birthDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.correlative}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.fullName}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleEdit(record)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(record.id)}
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
            <h2 className="text-xl font-bold mb-4">{selectedRecord.id ? 'Editar Registro' : 'Añadir Registro'}</h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Apellido Paterno</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.surname1 : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, surname1: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Apellido Materno</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.surname2 : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, surname2: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Primer Nombre</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.name1 : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, name1: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Segundo Nombre</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.name2 : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, name2: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Tercer Nombre</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.name3 : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, name3: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Número de DNI</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.dniNumber : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, dniNumber: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Tipo de DNI</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.dniType : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, dniType: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Fecha de Nacimiento</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.birthDate : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, birthDate: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Correlativo</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.correlative : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, correlative: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Apellidos y Nombre</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedRecord ? selectedRecord.fullName : ''}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, fullName: e.target.value })}
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

export default MasterDataBase;
