import React, {
    useState
} from 'react';

const DatosLaborales = ({
    workers
}) => {
    const [selectedWorker, setSelectedWorker] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEdit = (worker) => {
        setSelectedWorker(worker);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        // Lógica para eliminar el trabajador
        console.log(`Eliminar trabajador con id ${id}`);
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Lógica para guardar los cambios
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedWorker(null);
    };

    return ( <
        div >
        <
        table className = "min-w-full bg-white" >
        <
        thead >
        <
        tr >
        <
        th className = "py-2 px-4 border-b border-gray-200" > ID < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Nombre < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > DNI < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Fecha de Inicio < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Fecha de Fin < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Organización < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Motivo de Baja < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Remuneración < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Acciones < /th> < /
        tr > <
        /thead> <
        tbody > {
            workers.map((worker) => ( <
                tr key = {
                    worker.id
                } >
                <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.id
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.name
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.dni
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.hireDate
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.contractType
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.organization
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.reason
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.salary
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" >
                <
                button onClick = {
                    () => handleEdit(worker)
                }
                className = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2" >
                Editar <
                /button> <
                button onClick = {
                    () => handleDelete(worker.id)
                }
                className = "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" >
                Eliminar <
                /button> < /
                td > <
                /tr>
            ))
        } <
        /tbody> < /
        table >

        {
            isModalOpen && ( <
                div className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
                <
                div className = "bg-white p-6 rounded-lg shadow-lg" >
                <
                h2 className = "text-xl font-bold mb-4" > Editar Datos Laborales < /h2> <
                form onSubmit = {
                    handleSave
                } >
                <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > Fecha de Inicio < /label> <
                input type = "date"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker.hireDate
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        hireDate: e.target.value
                    })
                }
                /> < /
                div > <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > Fecha de Fin < /label> <
                input type = "date"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker.contractType
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        contractType: e.target.value
                    })
                }
                /> < /
                div > <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > Organización < /label> <
                input type = "text"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker.organization
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        organization: e.target.value
                    })
                }
                /> < /
                div > <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > Motivo de Baja < /label> <
                input type = "text"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker.reason
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        reason: e.target.value
                    })
                }
                /> < /
                div > <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > Remuneración < /label> <
                input type = "number"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker.salary
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        salary: e.target.value
                    })
                }
                /> < /
                div > <
                div className = "flex justify-end" >
                <
                button type = "submit"
                className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" >
                Guardar <
                /button> <
                button type = "button"
                onClick = {
                    handleCancel
                }
                className = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" >
                Cancelar <
                /button> < /
                div > <
                /form> < /
                div > <
                /div>
            )
        } <
        /div>
    );
};

export default DatosLaborales;