import React, {
  useState,
  useMemo
} from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter
} from 'react-table';
import {
  GlobalFilter,
  DefaultColumnFilter
} from './Filters'; // Asegúrate de crear estos componentes o usa los predeterminados
import UserForm from './UserForm'; // Importar el nuevo componente UserForm

const Users = () => {
  const [users, setUsers] = useState([{
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      role: 'Admin'
    },
    {
      id: 2,
      name: 'Ana García',
      email: 'ana.garcia@example.com',
      role: 'User'
    },
    {
      id: 3,
      name: 'Luis Torres',
      email: 'luis.torres@example.com',
      role: 'User'
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const columns = useMemo(
    () => [{
        Header: 'Apellidos y Nombres',
        accessor: 'name',
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Correo Electrónico',
        accessor: 'email',
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Rol',
        accessor: 'role',
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Acciones',
        accessor: 'actions',
        disableFilters: true,
        Cell: ({
          row
        }) => ( <
          div >
          <
          button onClick = {
            () => handleEdit(row.original)
          }
          className = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2" >
          Editar <
          /button> <
          button onClick = {
            () => handleDelete(row.original)
          }
          className = "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" >
          Eliminar <
          /button> < /
          div >
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({
    columns,
    data: users,
    defaultColumn: {
      Filter: DefaultColumnFilter
    }
  }, useFilters, useGlobalFilter);

  const {
    globalFilter
  } = state;

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsFormOpen(true);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setConfirmDelete(true);
  };

  const handleAddUser = () => {
    setCurrentUser(null);
    setIsFormOpen(true);
  };

  const handleSaveUser = (user) => {
    if (currentUser) {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, {
        ...user,
        id: users.length + 1
      }]);
    }
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter(user => user.id !== userToDelete.id));
    setConfirmDelete(false);
    setUserToDelete(null);
  };

  return ( <
    div >
    <
    h1 className = "text-2xl font-bold mb-4" > Usuarios de la aplicación < /h1> <
    button onClick = {
      handleAddUser
    }
    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" >
    Añadir Usuario <
    /button> <
    GlobalFilter filter = {
      globalFilter
    }
    setFilter = {
      setGlobalFilter
    }
    /> <
    table {
      ...getTableProps()
    }
    className = "min-w-full bg-white" >
    <
    thead > {
      headerGroups.map(headerGroup => ( <
        tr {
          ...headerGroup.getHeaderGroupProps()
        } > {
          headerGroup.headers.map(column => ( <
            th {
              ...column.getHeaderProps()
            }
            className = "py-2 px-4 border-b border-gray-200" > {
              column.render('Header')
            } <
            div > {
              column.canFilter ? column.render('Filter') : null
            } < /div> < /
            th >
          ))
        } <
        /tr>
      ))
    } <
    /thead> <
    tbody {
      ...getTableBodyProps()
    } > {
      rows.map(row => {
        prepareRow(row);
        return ( <
          tr {
            ...row.getRowProps()
          } > {
            row.cells.map(cell => ( <
              td {
                ...cell.getCellProps()
              }
              className = "py-2 px-4 border-b border-gray-200" > {
                cell.render('Cell')
              } <
              /td>
            ))
          } <
          /tr>
        );
      })
    } <
    /tbody> < /
    table > {
      isFormOpen && ( <
        UserForm user = {
          currentUser
        }
        onSave = {
          handleSaveUser
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
        p > ¿Estás seguro de que quieres eliminar a {
          userToDelete.name
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

export default Users;