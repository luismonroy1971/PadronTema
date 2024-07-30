import React, { useState } from 'react';

const DatosEducativos = () => {
    const [data, setData] = useState([
        { id: 1, dni: '12345678', yearOfGraduation: '2015', profession: 'Ingeniería', specialization: 'Software', institution: 'UNI', country: 'Perú' },
        { id: 2, dni: '87654321', yearOfGraduation: '2010', profession: 'Administración', specialization: 'Finanzas', institution: 'PUCP', country: 'Perú' },
    ]);
    const [searchDni, setSearchDni] = useState('');
    const [searchYear, setSearchYear] = useState('');
    const [searchProfession, setSearchProfession] = useState('');
    const [searchSpecialization, setSearchSpecialization] = useState('');
    const [searchInstitution, setSearchInstitution] = useState('');
    const [searchCountry, setSearchCountry] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSearchDniChange = (e) => {
        setSearchDni(e.target.value);
    };

    const handleSearchYearChange = (e) => {
        setSearchYear(e.target.value);
    };

    const handleSearchProfessionChange = (e) => {
        setSearchProfession(e.target.value);
    };

    const handleSearchSpecializationChange = (e) => {
        setSearchSpecialization(e.target.value);
    };

    const handleSearchInstitutionChange = (e) => {
        setSearchInstitution(e.target.value);
    };

    const handleSearchCountryChange = (e) => {
        setSearchCountry(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.dni.includes(searchDni) &&
        item.yearOfGraduation.includes(searchYear) &&
        item.profession.toLowerCase().includes(searchProfession.toLowerCase()) &&
        item.specialization.toLowerCase().includes(searchSpecialization.toLowerCase()) &&
        item.institution.toLowerCase().includes(searchInstitution.toLowerCase()) &&
        item.country.toLowerCase().includes(searchCountry.toLowerCase())
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
                    placeholder="Buscar por Año de Egreso..."
                    value={searchYear}
                    onChange={handleSearchYearChange}
                    className="border border-gray-300 rounded p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Buscar por Profesión..."
                    value={searchProfession}
                    onChange={handleSearchProfessionChange}
                    className="border border-gray-300 rounded p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Buscar por Especialización..."
                    value={searchSpecialization}
                    onChange={handleSearchSpecializationChange}
                    className="border border-gray-300 rounded p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Buscar por Institución..."
                    value={searchInstitution}
                    onChange={handleSearchInstitutionChange}
                    className="border border-gray-300 rounded p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Buscar por País..."
                    value={searchCountry}
                    onChange={handleSearchCountryChange}
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
                        <th className="py-2 px-4 border-b border-gray-200">Año de Egreso</th>
                        <th className="py-2 px-4 border-b border-gray-200">Profesión</th>
                        <th className="py-2 px-4 border-b border-gray-200">Especialización</th>
                        <th className="py-2 px-4 border-b border-gray-200">Institución</th>
                        <th className="py-2 px-4 border-b border-gray-200">País</th>
                        <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td className="py-2 px-4 border-b border-gray-200">{item.dni}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.yearOfGraduation}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.profession}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.specialization}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.institution}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{item.country}</td>
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
                <h2 className="text-xl font-bold mb-4">{form.id ? 'Editar Datos Educativos' : 'Añadir Datos Educativos'}</h2>
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
                    <label className="block text-gray-700 mb-2">Año de Egreso</label>
                    <input
                        type="text"
                        name="yearOfGraduation"
                        value={form.yearOfGraduation || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Profesión</label>
                    <input
                        type="text"
                        name="profession"
                        value={form.profession || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Especialización</label>
                    <input
                        type="text"
                        name="specialization"
                        value={form.specialization || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Institución</label>
                    <input
                        type="text"
                        name="institution"
                        value={form.institution || ''}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">País</label>
                    <input
                        type="text"
                        name="country"
                        value={form.country || ''}
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

export default DatosEducativos;
