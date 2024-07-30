import React, { useState } from 'react';

const TrabajoRemoto = () => {
    const [data, setData] = useState([
        { id: 1, dni: '12345678', remoteWork: 'Sí', computerType: 'Laptop', internetConnection: 'Buena', homeEnvironment: 'Adecuado' },
        { id: 2, dni: '87654321', remoteWork: 'No', computerType: 'PC de Escritorio', internetConnection: 'Regular', homeEnvironment: 'No Adecuado' },
    ]);
    const [searchDni, setSearchDni] = useState('');
    const [searchRemoteWork, setSearchRemoteWork] = useState('');
    const [searchComputerType, setSearchComputerType] = useState('');
    const [searchInternetConnection, setSearchInternetConnection] = useState('');
    const [searchHomeEnvironment, setSearchHomeEnvironment] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSearchDniChange = (e) => {
        setSearchDni(e.target.value);
    };

    const handleSearchRemoteWorkChange = (e) => {
        setSearchRemoteWork(e.target.value);
    };

    const handleSearchComputerTypeChange = (e) => {
        setSearchComputerType(e.target.value);
    };

    const handleSearchInternetConnectionChange = (e) => {
        setSearchInternetConnection(e.target.value);
    };

    const handleSearchHomeEnvironmentChange = (e) => {
        setSearchHomeEnvironment(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.dni.includes(searchDni) &&
        item.remoteWork.toLowerCase().includes(searchRemoteWork.toLowerCase()) &&
        item.computerType.toLowerCase().includes(searchComputerType.toLowerCase()) &&
        item.internetConnection.toLowerCase().includes(searchInternetConnection.toLowerCase()) &&
        item.homeEnvironment.toLowerCase().includes(searchHomeEnvironment.toLowerCase())
    );

    const handleAdd = () => {
        setIsFormOpen(true);
        setFormData({});
    };

    const handleEdit = (item) => {
        setIsFormOpen(true);
        setFormData(item);
    };

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleFormSubmit = (form) => {
        if (form.id) {
            setData(data.map(item => item.id === form.id ? form : item));
        } else {
            setData([...data, { ...form, id: data.length + 1 }]);
        }
        setIsFormOpen(false);
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar por DNI..."
                    value={searchDni}
                    onChange={handleSearchDniChange}
                    className="border border-gray-300 rounded p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Buscar por Trabajo Remoto..."
                    value={searchRemoteWork}
                    onChange={handleSearchRemoteWorkChange}
                    className="border border-gray-300 rounded p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Buscar por Tipo de Computadora..."
                    value={searchComputerType}
                    onChange={handleSearchComputerTypeChange}
                    className="border border-gray-300 rounded p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Buscar por Conexión a Internet..."
                    value={searchInternetConnection}
                    onChange={handleSearchInternetConnectionChange}
                    className="border border-gray-300 rounded p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Buscar por Ambiente en Casa..."
                    value={searchHomeEnvironment}
                    onChange={handleSearchHomeEnvironmentChange}
                    className="border border-gray-300 rounded p-2 mb-2"
                />
            </div>
            <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                Añadir
            </button>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200">DNI</th>
                        <th className="py-2 px-4 border-b border-gray-200">Trabajo Remoto</th>
                        <th className="py-2 px-4 border-b border-gray-200">Tipo de Computadora</th>
                        <th className="py-2 px-4 border-b border-gray-200">Conexión a Internet</th>
                        <th className="py-2 px-4 border-b border-gray-200">Ambiente en Casa</th>
                        <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td className="py-2 px-4 border-b border-gray-200">{item.dni}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.remoteWork}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.computerType}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.internetConnection}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.homeEnvironment}</td>
                            <td className="py-2 px-4 border-b border-gray-200">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
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
                <Form
                    data={formData}
                    onSubmit={handleFormSubmit}
                    onCancel={() => setIsFormOpen(false)}
                />
            )}
        </div>
    );
};

const Form = ({ data, onSubmit, onCancel }) => {
    const [form, setForm] = useState(data);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">{form.id ? 'Editar Trabajo Remoto' : 'Añadir Trabajo Remoto'}</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">DNI</label>
                    <input
                        type="text"
                        name="dni"
                        value={form.dni || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Trabajo Remoto</label>
                    <input
                        type="text"
                        name="remoteWork"
                        value={form.remoteWork || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Tipo de Computadora</label>
                    <input
                        type="text"
                        name="computerType"
                        value={form.computerType || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Conexión a Internet</label>
                    <input
                        type="text"
                        name="internetConnection"
                        value={form.internetConnection || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Ambiente en Casa</label>
                    <input
                        type="text"
                        name="homeEnvironment"
                        value={form.homeEnvironment || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Guardar
                    </button>
                    <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancelar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default TrabajoRemoto;
