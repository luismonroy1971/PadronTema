import React, { useState } from 'react';

const Options = () => {
  const [options, setOptions] = useState([
    { id: 1, name: 'Usuarios' },
    { id: 2, name: '´Roles' },
    { id: 3, name: 'Opciones' },
    { id: 4, name: 'Información Básica (Formulario 1.0)' },
    { id: 5, name: 'Recursos Humanos' },
    { id: 6, name: 'Nóminas' },
    { id: 7, name: 'Tablas' },  
]);

  const handleEdit = (id) => {
    // Lógica para editar opción
    console.log(`Edit option with id ${id}`);
  };
  

  const handleDelete = (id) => {
    // Lógica para eliminar opción
    setOptions(options.filter(option => option.id !== id));
  };

  const handleAddOption = () => {
    // Lógica para añadir una nueva opción
    console.log('Add new option');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Opciones</h1>
      <button 
        onClick={handleAddOption} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Añadir Opción
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Opción</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {options.map(option => (
            <tr key={option.id}>
              <td className="py-2 px-4 border-b border-gray-200">{option.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button 
                  onClick={() => handleEdit(option.id)} 
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => handleDelete(option.id)} 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Options;
