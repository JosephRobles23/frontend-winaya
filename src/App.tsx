import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Navbar from './components/Layout/Navbar';
import LeftSidebar from './components/Layout/LeftSidebar';
import RightSidebar from './components/Layout/RightSidebar';
import Feed from './components/Feed/Feed';
import Events from './components/Events/Events';
import Forum from './components/Forum/Forum';
import { Store } from './components/Store';
import { ProductDetail } from './components/ProductDetail';
import { Chat } from './components/Chat';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile';
import { FinancialAgent } from './components/agents/FinancialAgent';
import { MarketAgent } from './components/agents/MarketAgent';
import { MarketingAgent } from './components/agents/MarketingAgent';
import Welcome from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="pt-16 flex justify-center sm:justify-start">
          <div className="hidden sm:block">
            <LeftSidebar />
          </div>
          <main className="flex-1 w-full sm:w-auto sm:ml-64 sm:mr-64 px-4 sm:px-0">
            <Layout>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route 
                  path="/" 
                  element={<Feed />}
                />
                <Route path="/feed" element={<Feed />} />
                <Route path="/events" element={<Events />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/store" element={<Store />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/agent/financial" element={<FinancialAgent />} />
                <Route path="/agent/market" element={<MarketAgent />} />
                <Route path="/agent/marketing" element={<MarketingAgent />} />
              </Routes>
            </Layout>
          </main>
          <div className="hidden sm:block">
            <RightSidebar />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
