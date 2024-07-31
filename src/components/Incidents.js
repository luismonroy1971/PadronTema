import React, { useState } from 'react';

const initialIncidents = [
  { id: 1, code: 'HE001', description: 'Horas extras', days: 0, hours: 10, amount: 200, month: 'Enero', year: 2024 },
  { id: 2, code: 'BN001', description: 'Bonos', days: 0, hours: 0, amount: 500, month: 'Enero', year: 2024 },
  { id: 3, code: 'GR001', description: 'Gratificación Extraordinaria', days: 0, hours: 0, amount: 1000, month: 'Enero', year: 2024 },
  { id: 4, code: 'OT001', description: 'Otros', days: 2, hours: 0, amount: 300, month: 'Enero', year: 2024 }
];

const Incidents = () => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [monthFilter, setMonthFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  const handleAdd = () => {
    setIsFormOpen(true);
    setFormData({});
  };

  const handleEdit = (incident) => {
    setIsFormOpen(true);
    setFormData(incident);
  };

  const handleDelete = (id) => {
    setIncidents(incidents.filter(incident => incident.id !== id));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setIncidents(incidents.map(incident => incident.id === formData.id ? formData : incident));
    } else {
      setIncidents([...incidents, { ...formData, id: incidents.length + 1 }]);
    }
    setIsFormOpen(false);
  };

  const filteredData = incidents.filter(incident =>
    (!monthFilter || incident.month === monthFilter) &&
    (!yearFilter || incident.year === parseInt(yearFilter))
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Incidencias Mensuales</h1>
      <div className="flex mb-4">
        <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Añadir Incidencia
        </button>
        <select
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="border border-gray-300 rounded p-2 mr-4"
        >
          <option value="">Todos los Meses</option>
          <option value="Enero">Enero</option>
          <option value="Febrero">Febrero</option>
          <option value="Marzo">Marzo</option>
          <option value="Abril">Abril</option>
          <option value="Mayo">Mayo</option>
          <option value="Junio">Junio</option>
          <option value="Julio">Julio</option>
          <option value="Agosto">Agosto</option>
          <option value="Septiembre">Septiembre</option>
          <option value="Octubre">Octubre</option>
          <option value="Noviembre">Noviembre</option>
          <option value="Diciembre">Diciembre</option>
        </select>
        <input
          type="number"
          placeholder="Año"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Código</th>
            <th className="py-2 px-4 border-b border-gray-200">Descripción</th>
            <th className="py-2 px-4 border-b border-gray-200">Días</th>
            <th className="py-2 px-4 border-b border-gray-200">Horas</th>
            <th className="py-2 px-4 border-b border-gray-200">Importe (S/.)</th>
            <th className="py-2 px-4 border-b border-gray-200">Mes</th>
            <th className="py-2 px-4 border-b border-gray-200">Año</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(incident => (
            <tr key={incident.id}>
              <td className="py-2 px-4 border-b border-gray-200">{incident.code}</td>
              <td className="py-2 px-4 border-b border-gray-200">{incident.description}</td>
              <td className="py-2 px-4 border-b border-gray-200">{incident.days}</td>
              <td className="py-2 px-4 border-b border-gray-200">{incident.hours}</td>
              <td className="py-2 px-4 border-b border-gray-200">{incident.amount}</td>
              <td className="py-2 px-4 border-b border-gray-200">{incident.month}</td>
              <td className="py-2 px-4 border-b border-gray-200">{incident.year}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleEdit(incident)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(incident.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFormOpen && (
        <form onSubmit={handleFormSubmit} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{formData.id ? 'Editar Incidencia' : 'Añadir Incidencia'}</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Código</label>
              <input
                type="text"
                name="code"
                value={formData.code || ''}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Descripción</label>
              <input
                type="text"
                name="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Días</label>
              <input
                type="number"
                name="days"
                value={formData.days || ''}
                onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Horas</label>
              <input
                type="number"
                name="hours"
                value={formData.hours || ''}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Importe (S/.)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount || ''}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Mes</label>
              <input
                type="text"
                name="month"
                value={formData.month || ''}
                onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Año</label>
              <input
                type="number"
                name="year"
                value={formData.year || ''}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Guardar
              </button>
              <button type="button" onClick={() => setIsFormOpen(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Incidents;
