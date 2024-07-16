import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Users from './components/Users';
import Roles from './components/Roles';
import Options from './components/Options';
import BasicInfo from './components/BasicInfo';
import HumanResources from './components/HumanResources';
import Payroll from './components/Payroll';
import MasterData from './components/tables/MasterData';
import Projects from './components/tables/Projects';
import Periodic from './components/evaluation/Periodic';
import OnDemand from './components/evaluation/OnDemand';
import LoginPage from './components/LoginPage';

import OptionsByRoles from './components/OptionsByRoles'; // Importar el nuevo componente
import ReportGenerator from './components/Reports';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="flex h-screen">
        {isAuthenticated ? (
          <>
            <Sidebar />
            <div className="flex-grow p-4">
              <Routes>

                <Route path="/users" element={<Users />} />{' '}
                <Route path="/roles" element={<Roles />} />{' '}
                <Route path="/options" element={<Options />} />{' '}
                <Route path="/options-by-roles" element={<OptionsByRoles />} />{' '}
                <Route path="/basic-info" element={<BasicInfo />} />{' '}
                <Route path="/human-resources" element={<HumanResources />} />{' '}
                <Route path="/payroll" element={<Payroll />} />{' '}
                <Route path="/tables/master-data" element={<MasterData />} />{' '}
                <Route path="/tables/projects" element={<Projects />} />{' '}
                <Route path="/evaluation/periodic" element={<Periodic />} />{' '}
                <Route path="/evaluation/on-demand" element={<OnDemand />} />{' '}
                <Route path="/reportes" element={<ReportGenerator />} />{' '}
                <Route path="*" element={<Navigate to="/users" />} />{' '}
              </Routes>{' '}
            </div>{' '}
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
