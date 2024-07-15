import React, { useEffect, useState } from 'react';

const MasterData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Datos de ejemplo
    const exampleData = [
      {
        "ID": 1, "Surname1": "González", "Surname2": "Pérez", "Name1": "Juan", "Name2": "", "Name3": "",
        "DNINumber": "12345678", "DNIType": "DNI", "BirthDate": "01/01/1990", "Correlative": 1,
        "Apellidosy1Nombre": "González Pérez Juan", "Apellidosy2Nombres": "González Pérez Juan",
        "Apellidosy3Nombres": "González Pérez Juan", "Apellidos": "González Pérez", "Nombres": "Juan",
        "Abreviatura": "JP", "Centro Costo": "CC01"
      },
      {
        "ID": 2, "Surname1": "Rodríguez", "Surname2": "Sánchez", "Name1": "Ana", "Name2": "", "Name3": "",
        "DNINumber": "87654321", "DNIType": "DNI", "BirthDate": "02/02/1992", "Correlative": 2,
        "Apellidosy1Nombre": "Rodríguez Sánchez Ana", "Apellidosy2Nombres": "Rodríguez Sánchez Ana",
        "Apellidosy3Nombres": "Rodríguez Sánchez Ana", "Apellidos": "Rodríguez Sánchez", "Nombres": "Ana",
        "Abreviatura": "AS", "Centro Costo": "CC02"
      }
      // Añadir más registros según sea necesario
    ];
    setData(exampleData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Máster Data Base</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((header, index) => (
              <th key={index} className="py-2 px-4 border-b border-gray-200">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="py-2 px-4 border-b border-gray-200">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterData;
