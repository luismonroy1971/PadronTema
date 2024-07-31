import React, { useState } from 'react';
import DatosPersonales from './tabs/DatosPersonales';
import Direccion from './tabs/Direccion';
import SistemaPensionario from './tabs/SistemaPensionario';
import DatosLaborales from './tabs/DatosLaborales';
import DatosEducativos from './tabs/DatosEducativos';
import TrabajoRemoto from './tabs/TrabajoRemoto';
import Otros from './tabs/Otros';

const workers = [
  {
    id: 1,
    name: 'Gregor Alfredo Abarca Chavez',
    dni: '73671897',
    birthDate: '21/02/1995',
    nationality: 'PERÚ',
    gender: 'MASCULINO',
    contactNumber: '978698736',
    email: 'alfredoabarca98@gmail.com',
    category: 'TRABAJADOR',
    address: 'Jirón San Juan 123, Lima, Lima',
    district: 'Lima',
    province: 'Lima',
    department: 'Lima',
    position: 'Ingeniero',
    hireDate: '01/01/2020',
    contractType: 'Indefinido',
    socialSecurity: 'ESSALUD REGULAR',
    socialSecurityStartDate: '02/01/2024',
    pensionFund: 'HABITAT',
    afpCode: 'TR05',
    afp: 'HABITAT',
    commissionType: 'Mixta',
    graduationYear: '2010',
    profession: 'Ingeniero',
    specialization: 'Ingeniería Civil'
  },
  {
    id: 2,
    name: 'Jesus Alexander Aburto Santiago',
    dni: '43505153',
    birthDate: '17/08/1984',
    nationality: 'PERÚ',
    gender: 'MASCULINO',
    contactNumber: '964583859',
    email: 'jesusalexander290404@gmail.com',
    category: 'TRABAJADOR',
    address: 'Avenida La Marina 456, Callao, Callao',
    district: 'Callao',
    province: 'Callao',
    department: 'Callao',
    position: 'Supervisor',
    hireDate: '15/05/2018',
    contractType: 'Temporal',
    socialSecurity: 'ESSALUD REGULAR',
    socialSecurityStartDate: '07/01/2024',
    pensionFund: 'INTEGRA',
    afpCode: 'TR02',
    afp: 'INTEGRA',
    commissionType: 'Flujo',
    graduationYear: '2005',
    profession: 'Administrador',
    specialization: 'Administración de Empresas'
  },
];

const BasicInfo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState('personal');
  const [workersData] = useState(workers);
  const workersPerPage = 10;

  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workersData.slice(indexOfFirstWorker, indexOfLastWorker);

  const renderTab = () => {
    switch (currentTab) {
      case 'personal':
        return <DatosPersonales workers={currentWorkers} />;
      case 'address':
        return <Direccion workers={currentWorkers} />;
      case 'pension':
        return <SistemaPensionario workers={currentWorkers} />;
      case 'work':
        return <DatosLaborales workers={currentWorkers} />;
      case 'education':
        return <DatosEducativos workers={currentWorkers} />;
      case 'remote':
        return <TrabajoRemoto workers={currentWorkers} />;
      case 'others':
        return <Otros workers={currentWorkers} />;
      default:
        return null;
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Información Básica(Formulario 1.0)</h1>
      <div className="mb-4">
        <button
          onClick={() => setCurrentTab('personal')}
          className={`mr-2 ${currentTab === 'personal' ? 'active-tab' : ''}`}
        >
          Datos Personales
        </button>
        <button
          onClick={() => setCurrentTab('address')}
          className={`mr-2 ${currentTab === 'address' ? 'active-tab' : ''}`}
        >
          Dirección
        </button>
        <button
          onClick={() => setCurrentTab('pension')}
          className={`mr-2 ${currentTab === 'pension' ? 'active-tab' : ''}`}
        >
          Sistema Pensionario
        </button>
        <button
          onClick={() => setCurrentTab('work')}
          className={`mr-2 ${currentTab === 'work' ? 'active-tab' : ''}`}
        >
          Datos Laborales
        </button>
        <button
          onClick={() => setCurrentTab('education')}
          className={`mr-2 ${currentTab === 'education' ? 'active-tab' : ''}`}
        >
          Datos Educativos
        </button>
        <button
          onClick={() => setCurrentTab('remote')}
          className={`mr-2 ${currentTab === 'remote' ? 'active-tab' : ''}`}
        >
          Trabajo Remoto
        </button>
        <button
          onClick={() => setCurrentTab('others')}
          className={`mr-2 ${currentTab === 'others' ? 'active-tab' : ''}`}
        >
          Otros
        </button>
      </div>
      {renderTab()}
      <div className="mt-4">
        {[...Array(Math.ceil(workers.length / workersPerPage)).keys()].map(number => (
          <button
            key={number}
            onClick={() => handlePageChange(number + 1)}
            className="mr-2"
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BasicInfo;
