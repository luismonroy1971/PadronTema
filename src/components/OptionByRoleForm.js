import React, {
    useState,
    useEffect
} from 'react';

const OptionByRoleForm = ({
    option,
    onSave,
    onCancel
}) => {
    const [role, setRole] = useState('');
    const [options, setOptions] = useState('');

    useEffect(() => {
        if (option) {
            setRole(option.role);
            setOptions(option.options.join(', '));
        }
    }, [option]);

    const handleSave = () => {
        const optionsArray = options.split(',').map(opt => opt.trim());
        onSave({
            id: option ? option.id : null,
            role,
            options: optionsArray
        });
    };

    return ( <
        div className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
        <
        div className = "bg-white p-6 rounded-lg shadow-lg" >
        <
        h2 className = "text-xl font-bold mb-4" > {
            option ? 'Editar Opción por Rol' : 'Añadir Opción por Rol'
        } < /h2> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 mb-2" > Rol < /label> <
        input type = "text"
        className = "border border-gray-300 rounded p-2 w-full"
        value = {
            role
        }
        onChange = {
            (e) => setRole(e.target.value)
        }
        /> < /
        div > <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 mb-2" > Opciones(separadas por coma) < /label> <
        input type = "text"
        className = "border border-gray-300 rounded p-2 w-full"
        value = {
            options
        }
        onChange = {
            (e) => setOptions(e.target.value)
        }
        /> < /
        div > <
        div className = "flex justify-end" >
        <
        button onClick = {
            handleSave
        }
        className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" >
        Guardar <
        /button> <
        button onClick = {
            onCancel
        }
        className = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" >
        Cancelar <
        /button> < /
        div > <
        /div> < /
        div >
    );
};

export default OptionByRoleForm;