import React, { useEffect, useState } from 'react';

const OnDemand = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Datos de ejemplo
    const exampleData = [
      { 
        DNI: "12345678", Apellidos: "González Pérez", Nombres: "Juan", Estado: "Vetado", 
        Sustento: "Ejecución de actividades personales dentro de su horario laboral sin comunicación previa de manera reiterativa",
        Fecha: "01/01/2024", Supervisor: "Supervisor A"
      },
      { 
        DNI: "87654321", Apellidos: "Rodríguez Sánchez", Nombres: "Ana", Estado: "Bueno", 
        Sustento: "Muy colaborador, puntual",
        Fecha: "01/02/2024", Supervisor: "Supervisor B"
      },
      { 
        DNI: "11223344", Apellidos: "Martínez López", Nombres: "Carlos", Estado: "Extraordinario", 
        Sustento: "Realiza el trabajo de más de un colaborador, ayuda a los demás, muy eficiente y eficaz en su trabajo",
        Fecha: "01/03/2024", Supervisor: "Supervisor C"
      },
      // Añadir más registros según sea necesario
    ];
    setData(exampleData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Evaluación a demanda</h1>
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

export default OnDemand;
