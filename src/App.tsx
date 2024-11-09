import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/" 
          element={
            <div className="p-4">
              <Link to="/" className="text-xl font-bold">WINAYA</Link>
            </div>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;