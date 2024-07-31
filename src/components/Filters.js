import React from 'react';

// Filtro global
export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <span>
            Buscar:{' '}
            <input
                value={filter || ''}
                onChange={(e) => setFilter(e.target.value)}
                style={{
                    fontSize: '1.1rem',
                    border: '0',
                    backgroundColor: '#f5f5f5', // Color blanco humo
                    padding: '5px', // Añadido padding para mejor apariencia
                    borderRadius: '5px', // Añadido border-radius para bordes redondeados
                }}
            />
        </span>
    );
};

// Filtro por defecto para columnas
export const DefaultColumnFilter = ({ column: { filterValue, preFilteredRows, setFilter } }) => {
    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ''}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
            placeholder={`Search ${count} records...`}
            style={{
                backgroundColor: '#f5f5f5', // Color blanco humo
                padding: '5px', // Añadido padding para mejor apariencia
                borderRadius: '5px', // Añadido border-radius para bordes redondeados
            }}
        />
    );
};
