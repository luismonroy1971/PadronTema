import React, { useState } from 'react';

const initialData = {
  workers: [
    { id: 1, name: 'Gregor Alfredo Abarca Chavez', dni: '73671897', birthDate: '21/02/1995', nationality: 'PERÚ', gender: 'MASCULINO', position: 'Ingeniero' },
    { id: 2, name: 'Jesus Alexander Aburto Santiago', dni: '43505153', birthDate: '17/08/1984', nationality: 'PERÚ', gender: 'MASCULINO', position: 'Supervisor' },
    // ... otros registros
  ],
  contracts: [
    { id: 1, workerName: 'Juan González', contractType: 'Indefinido', startDate: '2020-01-01', endDate: '2025-01-01', position: 'Ingeniero' },
    { id: 2, workerName: 'Ana Rodríguez', contractType: 'Temporal', startDate: '2022-05-15', endDate: '2023-05-15', position: 'Supervisor' },
    // ... otros registros
  ],
  incidents: [
    { id: 1, code: 'HE001', description: 'Horas extras', days: 0, hours: 10, amount: 200, month: 'Enero', year: 2024 },
    { id: 2, code: 'BN001', description: 'Bonos', days: 0, hours: 0, amount: 500, month: 'Enero', year: 2024 },
    // ... otros registros
  ]
};

const Reports = () => {
  const [data] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFields, setSelectedFields] = useState([]);
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState([]);

  const categories = Object.keys(data);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedFields([]);
    setFilters({});
  };

  const handleFieldChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFields(prevFields => 
      checked ? [...prevFields, name] : prevFields.filter(field => field !== name)
    );
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleGenerateReport = () => {
    if (selectedCategory) {
      const filteredData = data[selectedCategory].filter(item => 
        Object.entries(filters).every(([key, value]) => 
          item[key]?.toString().toLowerCase().includes(value.toLowerCase())
        )
      );
      setResults(filteredData);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reportes Generales</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Seleccionar Categoría</label>
        <select value={selectedCategory} onChange={handleCategoryChange} className="border border-gray-300 rounded p-2 w-full">
          <option value="">Seleccionar</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      {selectedCategory && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Seleccionar Campos</label>
            {Object.keys(data[selectedCategory][0]).map(field => (
              <div key={field} className="flex items-center mb-2">
                <input type="checkbox" name={field} checked={selectedFields.includes(field)} onChange={handleFieldChange} />
                <label className="ml-2">{field}</label>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Filtros</label>
            {selectedFields.map(field => (
              <div key={field} className="mb-2">
                <label className="block text-gray-700 mb-1">{field}</label>
                <input type="text" name={field} value={filters[field] || ''} onChange={handleFilterChange} className="border border-gray-300 rounded p-2 w-full" />
              </div>
            ))}
          </div>
          <button onClick={handleGenerateReport} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Generar Reporte</button>
          {results.length > 0 && (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  {selectedFields.map(field => (
                    <th key={field} className="py-2 px-4 border-b border-gray-200">{field}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((item, index) => (
                  <tr key={index}>
                    {selectedFields.map(field => (
                      <td key={field} className="py-2 px-4 border-b border-gray-200">{item[field]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default Reports;
