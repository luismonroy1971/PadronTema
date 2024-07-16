import React, {
    useState
} from 'react';

const SistemaPensionario = ({
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

    if (!workers) {
        return <div > No hay datos disponibles < /div>;
    }

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
        th className = "py-2 px-4 border-b border-gray-200" > Fondo de Pensión < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Código AFP < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > AFP < /th> <
        th className = "py-2 px-4 border-b border-gray-200" > Tipo de Comisión < /th> <
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
                    worker.pensionFund
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.afpCode
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.afp
                } < /td> <
                td className = "py-2 px-4 border-b border-gray-200" > {
                    worker.commissionType
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
                h2 className = "text-xl font-bold mb-4" > Editar Sistema Pensionario < /h2> <
                form onSubmit = {
                    handleSave
                } >
                <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > Fondo de Pensión < /label> <
                input type = "text"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker ? selectedWorker.pensionFund : ''
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        pensionFund: e.target.value
                    })
                }
                /> < /
                div > <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > Código AFP < /label> <
                input type = "text"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker ? selectedWorker.afpCode : ''
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        afpCode: e.target.value
                    })
                }
                /> < /
                div > <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > AFP < /label> <
                input type = "text"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker ? selectedWorker.afp : ''
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        afp: e.target.value
                    })
                }
                /> < /
                div > <
                div className = "mb-4" >
                <
                label className = "block text-gray-700 mb-2" > Tipo de Comisión < /label> <
                input type = "text"
                className = "border border-gray-300 rounded p-2 w-full"
                value = {
                    selectedWorker ? selectedWorker.commissionType : ''
                }
                onChange = {
                    (e) =>
                    setSelectedWorker({
                        ...selectedWorker,
                        commissionType: e.target.value
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

export default SistemaPensionario;