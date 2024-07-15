import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Datos de ejemplo
    const exampleData = [
      { 
        CODIGO: 61750, PROYECTO: "Saneamiento Napa Freática", CLIENTE: "RELAPASAA", 
        "FECHA I": "17/01/2022", "FECHA F": "30/04/2024" 
      },
      { 
        CODIGO: 61795, PROYECTO: "Plan de Abandono Lote XIII", CLIENTE: "OLYMPIC", 
        "FECHA I": "10/07/2021", "FECHA F": "30/12/2024" 
      },
      { 
        CODIGO: 61850, PROYECTO: "Adecuación de ER y PdC a ERS y PRE", CLIENTE: "VALERO", 
        "FECHA I": "", "FECHA F": "" 
      },
      { 
        CODIGO: 61870, PROYECTO: "Supervision satelital", CLIENTE: "PETROPERU", 
        "FECHA I": "6/12/2021", "FECHA F": "5/12/2024" 
      },
      { 
        CODIGO: 62082, PROYECTO: "(PDS) COLQUIJIRCA", CLIENTE: "ELBROCAL", 
        "FECHA I": "1/05/2022", "FECHA F": "31/12/2022" 
      },
      // Añadir más registros según sea necesario
    ];
    setData(exampleData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
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

export default Projects;
