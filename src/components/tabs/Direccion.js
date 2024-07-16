import React, {
    useState
} from 'react';

const Direccion = () => {
    const [data, setData] = useState([{
            id: 1,
            tipoVia: 'Jirón',
            nombreVia: 'San Juan',
            numeroVia: '123',
            departamento: 'Lima',
            provincia: 'Lima',
            distrito: 'Lima'
        },
        {
            id: 2,
            tipoVia: 'Avenida',
            nombreVia: 'La Marina',
            numeroVia: '456',
            departamento: 'Callao',
            provincia: 'Callao',
            distrito: 'Callao'
        },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.nombreVia.toLowerCase().includes(searchTerm.toLowerCase())
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
            setData([...data, {
                ...form,
                id: data.length + 1
            }]);
        }
        setIsFormOpen(false);
    };

    return ( <
        div >
        <
        input type = "text"
        placeholder = "Buscar..."
        value = {
            searchTerm
        }
        onChange = {
            handleSearchChange
        }
        className = "border border-gray-300 rounded p-2 mb-4" /
        >
        <
        button onClick = {
            handleAdd
        }
        className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" >
        Añadir <
        /button> <
        table className = "min-w-full bg-white" >
        <
        thead >
        <
        tr >
        <
        th className = "py-2 px-4 border-b border-gray-200" > Tipo de Vía < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Nombre de Vía < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Número < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Departamento < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Provincia < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Distrito < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Acciones < /th> < /
        tr > <
        /thead> <
        tbody > {
            filteredData.map(item => ( <
                tr key = {
                    item.id
                } >
                <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    item.tipoVia
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    item.nombreVia
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    item.numeroVia
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    item.departamento
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    item.provincia
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    item.distrito
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" >
                <
                button onClick = {
                    () => handleEdit(item)
                }
                className = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2" >
                Editar <
                /button> <
                button onClick = {
                    () => handleDelete(item.id)
                }
                className = "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" >
                Eliminar <
                /button> < /
                td > <
                /tr>
            ))
        } <
        /tbody> < /
        table > {
            isFormOpen && ( <
                Form data = {
                    formData
                }
                onSubmit = {
                    handleFormSubmit
                }
                onCancel = {
                    () => setIsFormOpen(false)
                }
                />
            )
        } <
        /div>
    );
};

const Form = ({
    data,
    onSubmit,
    onCancel
}) => {
    const [form, setForm] = useState(data);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return ( <
        form onSubmit = {
            handleSubmit
        }
        className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
        <
        div className = "bg-white p-6 rounded-lg shadow-lg" >
        <
        h2 className = "text-xl font-bold mb-4" > {
            form.id ? 'Editar Dirección' : 'Añadir Dirección'
        } < /h2> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 mb-2" > Tipo de Vía < /label> <
        input type = "text"
        name = "tipoVia"
        value = {
            form.tipoVia || ''
        }
        onChange = {
            handleChange
        }
        className = "border border-gray-300 rounded p-2 w-full" /
        >
        <
        /div> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 mb-2" > Nombre de Vía < /label> <
        input type = "text"
        name = "nombreVia"
        value = {
            form.nombreVia || ''
        }
        onChange = {
            handleChange
        }
        className = "border border-gray-300 rounded p-2 w-full" /
        >
        <
        /div> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 mb-2" > Número < /label> <
        input type = "text"
        name = "numeroVia"
        value = {
            form.numeroVia || ''
        }
        onChange = {
            handleChange
        }
        className = "border border-gray-300 rounded p-2 w-full" /
        >
        <
        /div> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 mb-2" > Departamento < /label> <
        input type = "text"
        name = "departamento"
        value = {
            form.departamento || ''
        }
        onChange = {
            handleChange
        }
        className = "border border-gray-300 rounded p-2 w-full" /
        >
        <
        /div> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 mb-2" > Provincia < /label> <
        input type = "text"
        name = "provincia"
        value = {
            form.provincia || ''
        }
        onChange = {
            handleChange
        }
        className = "border border-gray-300 rounded p-2 w-full" /
        >
        <
        /div> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 mb-2" > Distrito < /label> <
        input type = "text"
        name = "distrito"
        value = {
            form.distrito || ''
        }
        onChange = {
            handleChange
        }
        className = "border border-gray-300 rounded p-2 w-full" /
        >
        <
        /div> <
        div className = "flex justify-end" >
        <
        button type = "submit"
        className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" >
        Guardar <
        /button> <
        button type = "button"
        onClick = {
            onCancel
        }
        className = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" >
        Cancelar <
        /button> < /
        div > <
        /div> < /
        form >
    );
};

export default Direccion;