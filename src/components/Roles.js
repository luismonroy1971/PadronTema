import React, { useState } from 'react';
import RoleForm from './RoleForm'; // Asegúrate de importar el formulario de rol

const Roles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Trabajador' },
    { id: 2, name: 'Recursos Humanos' },
    { id: 3, name: 'Nóminas' },
    { id: 4, name: 'Supervisor' },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (role) => {
    setCurrentRole(role);
    setIsFormOpen(true);
  };

  const handleDelete = (role) => {
    setRoleToDelete(role);
    setConfirmDelete(true);
  };

  const handleAddRole = () => {
    setCurrentRole(null);
    setIsFormOpen(true);
  };

  const handleSaveRole = (role) => {
    if (currentRole) {
      setRoles(roles.map(r => (r.id === role.id ? role : r)));
    } else {
      setRoles([...roles, { ...role, id: roles.length + 1 }]);
    }
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  const handleConfirmDelete = () => {
    setRoles(roles.filter(role => role.id !== roleToDelete.id));
    setConfirmDelete(false);
    setRoleToDelete(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Roles</h1>
      <div className="flex mb-4">
        <button
          onClick={handleAddRole}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Añadir Rol
        </button>
        <input
          type="text"
          placeholder="Buscar rol..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="ml-4 p-2 border border-gray-300 rounded"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Rol</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoles.map(role => (
            <tr key={role.id}>
              <td className="py-2 px-4 border-b border-gray-200">{role.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleEdit(role)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(role)}
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
        <RoleForm
          role={currentRole}
          onSave={handleSaveRole}
          onCancel={handleCancel}
        />
      )}
      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Confirmar Eliminación</h2>
            <p>¿Estás seguro de que quieres eliminar el rol {roleToDelete?.name}?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setConfirmDelete(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roles;
