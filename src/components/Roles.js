import React, { useState } from 'react';

const Roles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Trabajador' },
    { id: 2, name: 'Recursos Humanos' },
    { id: 3, name: 'Nóminas' },
    { id: 4, name: 'Supervisor' },
  ]);

  const handleEdit = (id) => {
    // Lógica para editar rol
    console.log(`Edit role with id ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para eliminar rol
    setRoles(roles.filter(role => role.id !== id));
  };

  const handleAddRole = () => {
    // Lógica para añadir un nuevo rol
    console.log('Add new role');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Roles</h1>
      <button 
        onClick={handleAddRole} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Añadir Rol
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Rol</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td className="py-2 px-4 border-b border-gray-200">{role.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button 
                  onClick={() => handleEdit(role.id)} 
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => handleDelete(role.id)} 
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

export default Roles;
