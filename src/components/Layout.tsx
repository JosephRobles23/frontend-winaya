import { ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Store, MessageCircle, Bot, User, Bell } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const [showAgentMenu, setShowAgentMenu] = useState(false);

  const agents = [
    { title: 'Agente Financiero', path: '/agent/financial' },
    { title: 'Agente de Mercado', path: '/agent/market' },
    { title: 'Agente de Marketing', path: '/agent/marketing' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <Home className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/store">
              <Store className="w-6 h-6 text-gray-600" />
            </Link>
            <Link to="/chat">
              <MessageCircle className="w-6 h-6 text-gray-600" />
            </Link>
            <div className="relative">
              <button 
                onClick={() => setShowAgentMenu(!showAgentMenu)}
                className="focus:outline-none"
              >
                <Bot className="w-6 h-6 text-gray-600" />
              </button>
              {showAgentMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border">
                  {agents.map((agent) => (
                    <Link
                      key={agent.path}
                      to={agent.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      onClick={() => setShowAgentMenu(false)}
                    >
                      {agent.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => navigate('/profile')}>
              <User className="w-6 h-6 text-gray-600" />
            </button>
            <Bell className="w-6 h-6 text-gray-600" />
          </div>
        </nav>
      </header>
      <main className="pt-14 min-h-screen">{children}</main>
    </div>
  );
}