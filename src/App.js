import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
//importing pages
import Private from './components/ProtectedRoute';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Index';
import Schedule from './pages/schedule/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}></Route>
          <Route path="/dashboard" exact element={<Private Component={Dashboard} />}></Route>
          <Route path="/schedule" exact element={<Private Component={Schedule} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
