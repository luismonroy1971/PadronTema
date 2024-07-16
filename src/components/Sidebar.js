import React from 'react';
import {
  Link
} from 'react-router-dom';

const Sidebar = () => {
  return ( <
    div className = "w-64 bg-gray-800 text-white h-screen" >
    <
    div className = "p-4" >
    <
    h1 className = "text-2xl font-bold mb-4" > Admin Panel < /h1> <
    ul >
    <
    li className = "mb-2" >
    <
    Link to = "/users"
    className = "hover:text-gray-400" > Usuarios < /Link> < /
    li > <
    li className = "mb-2" >
    <
    Link to = "/roles"
    className = "hover:text-gray-400" > Roles < /Link> < /
    li > <
    li className = "mb-2" >
    <
    div className = "hover:text-gray-400 cursor-pointer" >
    <
    Link to = "#"
    className = "hover:text-gray-400" > Opciones < /Link> <
    ul className = "ml-4 mt-2" >
    <
    li className = "mb-2" >
    <
    Link to = "/options"
    className = "hover:text-gray-400" > Gestión de Opciones < /Link> < /
    li > <
    li className = "mb-2" >
    <
    Link to = "/options-by-roles"
    className = "hover:text-gray-400" > Opciones por Roles < /Link> < /
    li > <
    /ul> < /
    div > <
    /li> <
    li className = "mb-2" >
    <
    Link to = "/basic-info"
    className = "hover:text-gray-400" > Información Básica Trabajador < /Link> < /
    li > <
    li className = "mb-2" >
    <
    Link to = "/human-resources"
    className = "hover:text-gray-400" > Recursos Humanos < /Link> < /
    li > <
    li className = "mb-2" >
    <
    Link to = "/payroll"
    className = "hover:text-gray-400" > Nóminas < /Link> < /
    li > <
    li className = "mb-2" >
    <
    div className = "hover:text-gray-400 cursor-pointer" >
    <
    Link to = "#"
    className = "hover:text-gray-400" > Tablas < /Link> <
    ul className = "ml-4 mt-2" >
    <
    li className = "mb-2" >
    <
    Link to = "/tables/master-data"
    className = "hover:text-gray-400" > Máster Data Base < /Link> < /
    li > <
    li className = "mb-2" >
    <
    Link to = "/tables/projects"
    className = "hover:text-gray-400" > Proyectos < /Link> < /
    li > <
    /ul> < /
    div > <
    /li> <
    li className = "mb-2" >
    <
    div className = "hover:text-gray-400 cursor-pointer" >
    <
    Link to = "#"
    className = "hover:text-gray-400" > Evaluación < /Link> <
    ul className = "ml-4 mt-2" >
    <
    li className = "mb-2" >
    <
    Link to = "/evaluation/periodic"
    className = "hover:text-gray-400" > Periódico < /Link> < /
    li > <
    li className = "mb-2" >
    <
    Link to = "/evaluation/on-demand"
    className = "hover:text-gray-400" > A Demanda < /Link> < /
    li > <
    /ul> < /
    div > <
    /li> < /
    ul > <
    /div> < /
    div >
  );
};

export default Sidebar;