// src/components/Options.js
import React, {
  useState
} from 'react';
import OptionForm from './OptionForm';

const Options = () => {
  const [options, setOptions] = useState([{
      id: 1,
      name: 'Usuarios'
    },
    {
      id: 2,
      name: 'Roles'
    },
    {
      id: 3,
      name: 'Opciones'
    },
    {
      id: 4,
      name: 'Información Básica Trabajador'
    },
    {
      id: 5,
      name: 'Recursos Humanos'
    },
    {
      id: 6,
      name: 'Nóminas'
    },
    {
      id: 7,
      name: 'Tablas'
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [optionToDelete, setOptionToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (option) => {
    setCurrentOption(option);
    setIsFormOpen(true);
  };

  const handleDelete = (option) => {
    setOptionToDelete(option);
    setConfirmDelete(true);
  };

  const handleAddOption = () => {
    setCurrentOption(null);
    setIsFormOpen(true);
  };

  const handleSaveOption = (option) => {
    if (currentOption) {
      setOptions(options.map(o => (o.id === option.id ? option : o)));
    } else {
      setOptions([...options, {
        ...option,
        id: options.length + 1
      }]);
    }
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  const handleConfirmDelete = () => {
    setOptions(options.filter(option => option.id !== optionToDelete.id));
    setConfirmDelete(false);
    setOptionToDelete(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return ( <
    div >
    <
    h1 className = "text-2xl font-bold mb-4" > Opciones < /h1> <
    div className = "flex mb-4" >
    <
    button onClick = {
      handleAddOption
    }
    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
    Añadir Opción <
    /button> <
    input type = "text"
    placeholder = "Buscar opción..."
    value = {
      searchTerm
    }
    onChange = {
      handleSearchChange
    }
    className = "ml-4 p-2 border border-gray-300 rounded" /
    >
    <
    /div> <
    table className = "min-w-full bg-white" >
    <
    thead >
    <
    tr >
    <
    th className = "py-2 px-4 border-b border-gray-200" > Opción < /th> <
    th className = "py-2 px-4 border-b border-gray-200" > Acciones < /th> < /
    tr > <
    /thead> <
    tbody > {
      filteredOptions.map(option => ( <
        tr key = {
          option.id
        } >
        <
        td className = "py-2 px-4 border-b border-gray-200" > {
          option.name
        } < /td> <
        td className = "py-2 px-4 border-b border-gray-200" >
        <
        button onClick = {
          () => handleEdit(option)
        }
        className = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2" >
        Editar <
        /button> <
        button onClick = {
          () => handleDelete(option)
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
        OptionForm option = {
          currentOption
        }
        onSave = {
          handleSaveOption
        }
        onCancel = {
          handleCancel
        }
        />
      )
    } {
      confirmDelete && ( <
        div className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
        <
        div className = "bg-white p-6 rounded shadow-lg" >
        <
        h2 className = "text-2xl mb-4" > Confirmar Eliminación < /h2> <
        p > ¿Estás seguro de que quieres eliminar la opción {
          optionToDelete.name
        } ? < /p> <
        div className = "flex justify-end mt-4" >
        <
        button onClick = {
          () => setConfirmDelete(false)
        }
        className = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" >
        Cancelar <
        /button> <
        button onClick = {
          handleConfirmDelete
        }
        className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >
        Eliminar <
        /button> < /
        div > <
        /div> < /
        div >
      )
    } <
    /div>
  );
};

export default Options;