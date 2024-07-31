import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar bg-gray-800 text-white h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Padrón General</h1>
      <ul>
        <li className={`mb-2 ${isActive('/users') ? 'text-activeOption' : ''}`}>
          <Link to="/users" className="hover:text-gray-400">Usuarios</Link>
        </li>
        <li className={`mb-2 ${isActive('/roles') ? 'text-activeOption' : ''}`}>
          <Link to="/roles" className="hover:text-gray-400">Roles</Link>
        </li>
        <li className="mb-2">
          <div className="hover:text-gray-400 cursor-pointer">
            <Link to="#" className="hover:text-gray-400">Opciones</Link>
            <ul className="ml-4 mt-2">
              <li className={`mb-2 ${isActive('/options') ? 'text-activeOption' : ''}`}>
                <Link to="/options" className="hover:text-gray-400">Gestión de Opciones</Link>
              </li>
              <li className={`mb-2 ${isActive('/options-by-roles') ? 'text-activeOption' : ''}`}>
                <Link to="/options-by-roles" className="hover:text-gray-400">Opciones por Roles</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <div className="hover:text-gray-400 cursor-pointer">
            <Link to="#" className="hover:text-gray-400">Información Trabajador</Link>
            <ul className="ml-4 mt-2">
              <li className={`mb-2 ${isActive('/tabs/DatosPersonales') ? 'text-activeOption' : ''}`}>
              <Link to="/tabs/DatosPersonales" className="hover:text-gray-400">Datos Básicos</Link>
              </li>
              <li className={`mb-2 ${isActive('/tabs/Direccion') ? 'text-activeOption' : ''}`}>
              <Link to="/tabs/Direccion" className="hover:text-gray-400">Dirección</Link>
              </li>
              <li className={`mb-2 ${isActive('/tabs/SistemaPensionario') ? 'text-activeOption' : ''}`}>
              <Link to="/tabs/SistemaPensionario" className="hover:text-gray-400">Sistema Pensionario</Link>
              </li>
              <li className={`mb-2 ${isActive('/tabs/DatosLaborales') ? 'text-activeOption' : ''}`}>
              <Link to="/tabs/DatosLaborales" className="hover:text-gray-400">Datos Laborales</Link>
              </li>
              <li className={`mb-2 ${isActive('/tabs/DatosEducativos') ? 'text-activeOption' : ''}`}>
              <Link to="/tabs/DatosEducativos" className="hover:text-gray-400">Datos Educativos</Link>
              </li>
              <li className={`mb-2 ${isActive('/tabs/TrabajoRemoto') ? 'text-activeOption' : ''}`}>
              <Link to="/tabs/TrabajoRemoto" className="hover:text-gray-400">Trabajo Remoto</Link>
              </li>
              <li className={`mb-2 ${isActive('/tabs/Otros') ? 'text-activeOption' : ''}`}>
              <Link to="/tabs/Otros" className="hover:text-gray-400">Otros</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={`mb-2 ${isActive('/basic-info') ? 'text-activeOption' : ''}`}>
          <Link to="/basic-info" className="hover:text-gray-400">Información Básica Trabajador</Link>
        </li>
        <li className="mb-2">
          <div className="hover:text-gray-400 cursor-pointer">
            <Link to="#" className="hover:text-gray-400">Recursos Humanos</Link>
            <ul className="ml-4 mt-2">
              <li className={`mb-2 ${isActive('/human-resources') ? 'text-activeOption' : ''}`}>
              <Link to="/human-resources" className="hover:text-gray-400">Datos complementarios</Link>
              </li>
              <li className={`mb-2 ${isActive('/DatosDerechohabiente') ? 'text-activeOption' : ''}`}>
              <Link to="/DatosDerechohabiente" className="hover:text-gray-400">Derecho habientes</Link>
              </li>
              <li className={`mb-2 ${isActive('/incidents') ? 'text-activeOption' : ''}`}>
              <Link to="/incidents" className="hover:text-gray-400">Incidencias</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={`mb-2 ${isActive('/payroll') ? 'text-activeOption' : ''}`}>
          <Link to="/payroll" className="hover:text-gray-400">Nóminas</Link>
        </li>
        <li className="mb-2">
          <div className="hover:text-gray-400 cursor-pointer">
            <Link to="#" className="hover:text-gray-400">Tablas</Link>
            <ul className="ml-4 mt-2">
              <li className={`mb-2 ${isActive('/tables/master-data') ? 'text-activeOption' : ''}`}>
                <Link to="/tables/master-data" className="hover:text-gray-400">Máster Data Base</Link>
              </li>
              <li className={`mb-2 ${isActive('/tables/projects') ? 'text-activeOption' : ''}`}>
                <Link to="/tables/projects" className="hover:text-gray-400">Proyectos</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <div className="hover:text-gray-400 cursor-pointer">
            <Link to="#" className="hover:text-gray-400">Evaluación</Link>
            <ul className="ml-4 mt-2">
              <li className={`mb-2 ${isActive('/evaluation/periodic') ? 'text-activeOption' : ''}`}>
                <Link to="/evaluation/periodic" className="hover:text-gray-400">Periódico</Link>
              </li>
              <li className={`mb-2 ${isActive('/evaluation/on-demand') ? 'text-activeOption' : ''}`}>
                <Link to="/evaluation/on-demand" className="hover:text-gray-400">A Demanda</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <div className="hover:text-gray-400 cursor-pointer">
            <Link to="#" className="hover:text-gray-400">Reportes</Link>
            <ul className="ml-4 mt-2">
              <li className={`mb-2 ${isActive('/reports/contracts') ? 'text-activeOption' : ''}`}>
                <Link to="/reports/contracts" className="hover:text-gray-400">Contratos</Link>
              </li>
              <li className={`mb-2 ${isActive('/reports/general') ? 'text-activeOption' : ''}`}>
                <Link to="/reports/general" className="hover:text-gray-400">Reportes Generales</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
