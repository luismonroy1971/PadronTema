import React, { useEffect, useState } from 'react';

const Periodic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Datos de ejemplo
    const exampleData = [
      { 
        DNI: "12345678", Apellidos: "González Pérez", Nombres: "Juan", Periodo: "2023", 
        Fecha: "01/01/2024", Supervisor: "Supervisor A", Estado: "Vetado", 
        "Calidad en desarrollos": 4, "Manejo de programas informáticos": 3,
        "Capacidad de aprendizaje": 5, "Cumplimiento de los procedimientos del SIG": 4, "Trabajo en Equipo": 4,
        "Comunicación asertiva": 3, "Flexibilidad y adaptación al cambio": 4, "Capacidad de resolución, creatividad y proactividad": 5,
        "Organización y Gestión del tiempo": 4, "Orientación al cliente": 5, "Compromiso": 3, "Manejo de situaciones criticas": 4,
        "Liderazgo": 4, "Gestión de personas": 3, "Empowerment": 4, "Orientación al resultado": 5
      },
      { 
        DNI: "87654321", Apellidos: "Rodríguez Sánchez", Nombres: "Ana", Periodo: "2023", 
        Fecha: "01/02/2024", Supervisor: "Supervisor B", Estado: "Bueno", 
        "Calidad en desarrollos": 4, "Manejo de programas informáticos": 5,
        "Capacidad de aprendizaje": 4, "Cumplimiento de los procedimientos del SIG": 5, "Trabajo en Equipo": 5,
        "Comunicación asertiva": 4, "Flexibilidad y adaptación al cambio": 5, "Capacidad de resolución, creatividad y proactividad": 4,
        "Organización y Gestión del tiempo": 4, "Orientación al cliente": 4, "Compromiso": 5, "Manejo de situaciones criticas": 4,
        "Liderazgo": 5, "Gestión de personas": 4, "Empowerment": 5, "Orientación al resultado": 4
      },
      { 
        DNI: "11223344", Apellidos: "Martínez López", Nombres: "Carlos", Periodo: "2023", 
        Fecha: "01/03/2024", Supervisor: "Supervisor C", Estado: "Extraordinario", 
         "Calidad en desarrollos": 5, "Manejo de programas informáticos": 5,
        "Capacidad de aprendizaje": 5, "Cumplimiento de los procedimientos del SIG": 5, "Trabajo en Equipo": 5,
        "Comunicación asertiva": 5, "Flexibilidad y adaptación al cambio": 5, "Capacidad de resolución, creatividad y proactividad": 5,
        "Organización y Gestión del tiempo": 5, "Orientación al cliente": 5, "Compromiso": 5, "Manejo de situaciones criticas": 5,
        "Liderazgo": 5, "Gestión de personas": 5, "Empowerment": 5, "Orientación al resultado": 5
      },
      // Añadir más registros según sea necesario
    ];
    setData(exampleData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Evaluación Periódica</h1>
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

export default Periodic;
