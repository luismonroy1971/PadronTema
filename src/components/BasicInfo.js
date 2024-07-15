import React, { useState } from 'react';
import IdentificationData from './tabs/IdentificationData';
import AddressData from './tabs/AddressData';
import WorkData from './tabs/WorkData';
import SocialSecurityData from './tabs/SocialSecurityData';
import AFPNetData from './tabs/AFPNetData';

const workers = [
    // Fusionar los datos de prueba en un solo array
    { id: 1, name: 'Gregor Alfredo Abarca Chavez', dni: '73671897', birthDate: '21/02/1995', nationality: 'PERÚ', gender: 'MASCULINO', contactNumber: '978698736', email: 'alfredoabarca98@gmail.com', category: 'TRABAJADOR', address: 'Jirón San Juan 123, Lima, Lima', district: 'Lima', province: 'Lima', department: 'Lima', position: 'Ingeniero', hireDate: '01/01/2020', contractType: 'Indefinido', socialSecurity: 'ESSALUD REGULAR', socialSecurityStartDate: '02/01/2024', pensionFund: 'HABITAT', afpCode: 'TR05', afp: 'HABITAT', commissionType: 'Mixta' },
    { id: 2, name: 'Jesus Alexander Aburto Santiago', dni: '43505153', birthDate: '17/08/1984', nationality: 'PERÚ', gender: 'MASCULINO', contactNumber: '964583859', email: 'jesusalexander290404@gmail.com', category: 'TRABAJADOR', address: 'Avenida La Marina 456, Callao, Callao', district: 'Callao', province: 'Callao', department: 'Callao', position: 'Supervisor', hireDate: '15/05/2018', contractType: 'Temporal', socialSecurity: 'ESSALUD REGULAR', socialSecurityStartDate: '07/01/2024', pensionFund: 'INTEGRA', afpCode: 'TR02', afp: 'INTEGRA', commissionType: 'Flujo' },
    // Añadir más registros según sea necesario
  ];
  
const BasicInfo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState('identification');
  const workersPerPage = 10;

  // Obtener los trabajadores de la página actual
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);

  const renderTab = () => {
    switch (currentTab) {
      case 'identification':
        return <IdentificationData workers={currentWorkers} />;
      case 'address':
        return <AddressData workers={currentWorkers} />;
      case 'work':
        return <WorkData workers={currentWorkers} />;
      case 'socialSecurity':
        return <SocialSecurityData workers={currentWorkers} />;
      case 'afpnet':
        return <AFPNetData workers={currentWorkers} />;
      default:
        return null;
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Información Básica (Formulario 1.0)</h1>
      <div className="mb-4">
        <button onClick={() => setCurrentTab('identification')} className="mr-2">Datos Identificación</button>
        <button onClick={() => setCurrentTab('address')} className="mr-2">Dirección</button>
        <button onClick={() => setCurrentTab('work')} className="mr-2">Datos Laborales</button>
        <button onClick={() => setCurrentTab('socialSecurity')} className="mr-2">Seguridad Social</button>
        <button onClick={() => setCurrentTab('afpnet')} className="mr-2">AFPNet</button>
      </div>
      {renderTab()}
      <div className="mt-4">
        {[...Array(Math.ceil(workers.length / workersPerPage)).keys()].map(number => (
          <button key={number} onClick={() => handlePageChange(number + 1)} className="mr-2">{number + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default BasicInfo;
