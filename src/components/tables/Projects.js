import React, { useState } from 'react';

const initialProjects = [
  { id: 1, code: '61750', name: 'Saneamiento Napa Freática', client: 'RELAPASAA', startDate: '17/01/2022', endDate: '30/04/2024' },
  { id: 2, code: '61795', name: 'Plan de Abandono Lote XIII', client: 'OLYMPIC', startDate: '10/07/2021', endDate: '30/12/2024' },
  { id: 3, code: '61850', name: 'Adecuación de ER y PdC a ERS y PRE', client: 'VALERO', startDate: '01/01/2022', endDate: '31/12/2024' },
  { id: 4, code: '61870', name: 'Supervision satelital', client: 'PETROPERU', startDate: '06/12/2021', endDate: '05/12/2024' },
  { id: 5, code: '62082', name: '(PDS) COLQUIJIRCA', client: 'ELBROCAL', startDate: '01/05/2022', endDate: '31/12/2022' },
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const handleEdit = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (selectedProject.id) {
      setProjects(projects.map(project => (project.id === selectedProject.id ? selectedProject : project)));
    } else {
      selectedProject.id = projects.length + 1;
      setProjects([...projects, selectedProject]);
    }
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? project.client === filter : true)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
      <div className="mb-4 flex justify-between">
        <button
          onClick={() => {
            setSelectedProject({ id: '', code: '', name: '', client: '', startDate: '', endDate: '' });
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Añadir Proyecto
        </button>
        <input
          type="text"
          placeholder="Buscar..."
          className="border border-gray-300 rounded p-2 w-1/3"
          value={search}
          onChange={handleSearch}
        />
        <select className="border border-gray-300 rounded p-2 w-1/4" value={filter} onChange={handleFilter}>
          <option value="">Todos los Clientes</option>
          <option value="RELAPASAA">RELAPASAA</option>
          <option value="OLYMPIC">OLYMPIC</option>
          <option value="VALERO">VALERO</option>
          <option value="PETROPERU">PETROPERU</option>
          <option value="ELBROCAL">ELBROCAL</option>
        </select>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">CODIGO</th>
            <th className="py-2 px-4 border-b border-gray-200">PROYECTO</th>
            <th className="py-2 px-4 border-b border-gray-200">CLIENTE</th>
            <th className="py-2 px-4 border-b border-gray-200">FECHA I</th>
            <th className="py-2 px-4 border-b border-gray-200">FECHA F</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.id}>
              <td className="py-2 px-4 border-b border-gray-200">{project.code}</td>
              <td className="py-2 px-4 border-b border-gray-200">{project.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{project.client}</td>
              <td className="py-2 px-4 border-b border-gray-200">{project.startDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{project.endDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedProject.id ? 'Editar Proyecto' : 'Añadir Proyecto'}</h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Código</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedProject.code}
                  onChange={(e) => setSelectedProject({ ...selectedProject, code: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Proyecto</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedProject.name}
                  onChange={(e) => setSelectedProject({ ...selectedProject, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Cliente</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedProject.client}
                  onChange={(e) => setSelectedProject({ ...selectedProject, client: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Fecha Inicio</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedProject.startDate}
                  onChange={(e) => setSelectedProject({ ...selectedProject, startDate: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Fecha Fin</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded p-2 w-full"
                  value={selectedProject.endDate}
                  onChange={(e) => setSelectedProject({ ...selectedProject, endDate: e.target.value })}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
