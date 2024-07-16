import React, { useState } from 'react';

const initialEvaluations = [
  { id: 1, dni: '12345678', surname: 'González', lastname: 'Pérez', name: 'Juan', period: '2023', date: '01/01/2024', supervisor: 'Supervisor A', status: 'Vetado', quality: 4, programs: 3, learning: 5, compliance: 4 },
  { id: 2, dni: '87654321', surname: 'Rodríguez', lastname: 'Sánchez', name: 'Ana', period: '2023', date: '01/02/2024', supervisor: 'Supervisor B', status: 'Bueno', quality: 4, programs: 5, learning: 4, compliance: 5 },
  { id: 3, dni: '11223344', surname: 'Martínez', lastname: 'López', name: 'Carlos', period: '2023', date: '01/03/2024', supervisor: 'Supervisor C', status: 'Extraordinario', quality: 5, programs: 5, learning: 5, compliance: 5 },
];

const PeriodicEvaluation = () => {
  const [evaluations, setEvaluations] = useState(initialEvaluations);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const handleEdit = (evaluation) => {
    setSelectedEvaluation(evaluation);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setEvaluations(evaluations.filter(evaluation => evaluation.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (selectedEvaluation.id) {
      setEvaluations(evaluations.map(evaluation => (evaluation.id === selectedEvaluation.id ? selectedEvaluation : evaluation)));
    } else {
      selectedEvaluation.id = evaluations.length + 1;
      setEvaluations([...evaluations, selectedEvaluation]);
    }
    setIsModalOpen(false);
    setSelectedEvaluation(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedEvaluation(null);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredEvaluations = evaluations.filter(evaluation =>
    evaluation.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? evaluation.status === filter : true)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Evaluación Periódica</h1>
      <div className="mb-4 flex justify-between">
        <button
          onClick={() => {
            setSelectedEvaluation({ id: '', dni: '', surname: '', lastname: '', name: '', period: '', date: '', supervisor: '', status: '', quality: '', programs: '', learning: '', compliance: '' });
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Añadir Evaluación
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
          <option value="Vetado">Vetado</option>
          <option value="Bueno">Bueno</option>
          <option value="Extraordinario">Extraordinario</option>
        </select>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">DNI</th>
            <th className="py-2 px-4 border-b border-gray-200">Apellidos</th>
            <th className="py-2 px-4 border-b border-gray-200">Nombres</th>
            <th className="py-2 px-4 border-b border-gray-200">Periodo</th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha</th>
            <th className="py-2 px-4 border-b border-gray-200">Supervisor</th>
            <th className="py-2 px-4 border-b border-gray-200">Estado</th>
            <th className="py-2 px-4 border-b border-gray-200">Calidad en desarrollos</th>
            <th className="py-2 px-4 border-b border-gray-200">Manejo de programas informáticos</th>
            <th className="py-2 px-4 border-b border-gray-200">Capacidad de aprendizaje</th>
            <th className="py-2 px-4 border-b border-gray-200">Cumplimiento de procesos</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvaluations.map((evaluation) => (
            <tr key={evaluation.id}>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.dni}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.surname} {evaluation.lastname}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.period}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.date}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.supervisor}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.status}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.quality}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.programs}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.learning}</td>
              <td className="py-2 px-4 border-b border-gray-200">{evaluation.compliance}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleEdit(evaluation)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(evaluation.id)}
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
            <h2 className="text-xl font-bold mb-4">{selectedEvaluation.id ? 'Editar Evaluación' : 'Añadir Evaluación'}</h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">DNI</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.dni}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, dni: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Apellidos</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.surname}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, surname: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nombres</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.name}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Periodo</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.period}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, period: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Fecha</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.date}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, date: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Supervisor</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.supervisor}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, supervisor: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Estado</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.status}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, status: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Calidad en desarrollos</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.quality}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, quality: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Manejo de programas informáticos</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.programs}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, programs: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Capacidad de aprendizaje</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.learning}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, learning: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Cumplimiento de procesos</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedEvaluation.compliance}
                  onChange={(e) => setSelectedEvaluation({ ...selectedEvaluation, compliance: e.target.value })}
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

export default PeriodicEvaluation;
