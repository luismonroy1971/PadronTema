import React, {
    useState,
    useEffect
} from 'react';

const UserForm = ({
    user,
    onSave,
    onCancel
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return ( <
        div className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
        <
        div className = "bg-white p-6 rounded shadow-lg" >
        <
        h2 className = "text-2xl mb-4" > {
            user ? 'Editar Usuario' : 'Añadir Usuario'
        } < /h2> <
        form onSubmit = {
            handleSubmit
        } >
        <
        div className = "mb-4" >
        <
        label className = "block mb-2" > Nombre < /label> <
        input type = "text"
        name = "name"
        value = {
            formData.name
        }
        onChange = {
            handleChange
        }
        className = "w-full p-2 border border-gray-300 rounded"
        required /
        >
        <
        /div> <
        div className = "mb-4" >
        <
        label className = "block mb-2" > Correo Electrónico < /label> <
        input type = "email"
        name = "email"
        value = {
            formData.email
        }
        onChange = {
            handleChange
        }
        className = "w-full p-2 border border-gray-300 rounded"
        required /
        >
        <
        /div> <
        div className = "mb-4" >
        <
        label className = "block mb-2" > Rol < /label> <
        input type = "text"
        name = "role"
        value = {
            formData.role
        }
        onChange = {
            handleChange
        }
        className = "w-full p-2 border border-gray-300 rounded"
        required /
        >
        <
        /div> <
        div className = "flex justify-end" >
        <
        button type = "button"
        onClick = {
            onCancel
        }
        className = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" >
        Cancelar <
        /button> <
        button type = "submit"
        className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Guardar <
        /button> < /
        div > <
        /form> < /
        div > <
        /div>
    );
};

export default UserForm;