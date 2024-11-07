import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import LeftSidebar from './components/Layout/LeftSidebar';
import RightSidebar from './components/Layout/RightSidebar';
import Feed from './components/Feed/Feed';
import Events from './components/Events/Events';
import Forum from './components/Forum/Forum';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="pt-16 flex justify-center sm:justify-start">
          <div className="hidden sm:block">   {/* LeftSidebar se oculta en pantallas menores que 'sm' */}
            <LeftSidebar />
          </div>
          <main className="flex-1 w-full sm:w-auto sm:ml-64 sm:mr-64 px-4 sm:px-0">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/events" element={<Events />} />
              <Route path="/forum" element={<Forum />} />
            </Routes>
          </main>
          <div className="hidden sm:block"> {/* RightSidebar se oculta en pantallas menores que 'sm' */}
            <RightSidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
