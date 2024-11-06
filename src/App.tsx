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
        <div className="pt-16 flex">
          <LeftSidebar />
          <main className="flex-1 ml-64 mr-64">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/events" element={<Events />} />
              <Route path="/forum" element={<Forum />} />
            </Routes>
          </main>
          <RightSidebar />
        </div>
      </div>
    </Router>
  );
}
export default App;
