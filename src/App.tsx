import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Insert from './pages/insert';
import Update from './pages/update';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/"  element={<Dashboard />} />
        <Route path="adduser"  element={<Insert />} />
        <Route path="updateUser/:id"  element={<Update />} />
      </Routes>
    
    </div>
  );
}

export default App;
