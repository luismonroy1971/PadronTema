import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', role: 'Admin' },
    { id: 2, name: 'Ana García', email: 'ana.garcia@example.com', role: 'User' },
    { id: 3, name: 'Luis Torres', email: 'luis.torres@example.com', role: 'User' },
  ]);

  const handleEdit = (id) => {
    // Lógica para editar usuario
    console.log(`Edit user with id ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para eliminar usuario
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAddUser = () => {
    // Lógica para añadir un nuevo usuario
    console.log('Add new user');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Usuarios de la aplicación</h1>
      <button 
        onClick={handleAddUser} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Añadir Usuario
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Apellidos y Nombres</th>
            <th className="py-2 px-4 border-b border-gray-200">Correo Electrónico</th>
            <th className="py-2 px-4 border-b border-gray-200">Rol</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.role}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button 
                  onClick={() => handleEdit(user.id)} 
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => handleDelete(user.id)} 
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

export default Users;
