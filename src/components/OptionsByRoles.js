import React, { useState } from 'react';
import OptionByRoleForm from './OptionByRoleForm';

const OptionsByRoles = () => {
    const [optionsByRoles, setOptionsByRoles] = useState([
        { id: 1, role: 'Admin', options: ['Usuarios', 'Roles'] },
        { id: 2, role: 'User', options: ['Información Básica Trabajador', 'Recursos Humanos'] },
        { id: 3, role: 'Supervisor', options: ['Nóminas', 'Tablas'] },
    ]);

    const [search, setSearch] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);

    const handleAdd = () => {
        setCurrentData(null);
        setIsFormOpen(true);
    };

    const handleEdit = (data) => {
        setCurrentData(data);
        setIsFormOpen(true);
    };

    const handleDelete = (id) => {
        setOptionsByRoles(optionsByRoles.filter(optionByRole => optionByRole.id !== id));
    };

    const handleSave = (data) => {
        if (currentData) {
            setOptionsByRoles(optionsByRoles.map(optionByRole => 
                optionByRole.id === currentData.id ? { ...optionByRole, ...data } : optionByRole
            ));
        } else {
            setOptionsByRoles([...optionsByRoles, { id: optionsByRoles.length + 1, ...data }]);
        }
        setIsFormOpen(false);
    };

    const handleCancel = () => {
        setIsFormOpen(false);
        setCurrentData(null);
    };

    const filteredOptionsByRoles = optionsByRoles.filter(optionByRole =>
        optionByRole.role.toLowerCase().includes(search.toLowerCase()) ||
        optionByRole.options.join(', ').toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Opciones por Roles</h1>
            <button
                onClick={handleAdd}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Añadir Opción por Rol
            </button>
            <input
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200">Rol</th>
                        <th className="py-2 px-4 border-b border-gray-200">Opciones</th>
                        <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOptionsByRoles.map(optionByRole => (
                        <tr key={optionByRole.id}>
                            <td className="py-2 px-4 border-b border-gray-200">{optionByRole.role}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{optionByRole.options.join(', ')}</td>
                            <td className="py-2 px-4 border-b border-gray-200">
                                <button
                                    onClick={() => handleEdit(optionByRole)}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(optionByRole.id)}
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
                <OptionByRoleForm
                    option={currentData}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default OptionsByRoles;
