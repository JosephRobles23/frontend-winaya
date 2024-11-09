import { ReactNode, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Search, Store, ShoppingCart, Calendar, MessageCircle, Bot, User, Bell, MessageSquare} from 'lucide-react';
import NotificationsDropdown from './Notifications/NotificationsDropdown'

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

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  /*  const navigate = useNavigate(); */

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        {/* <div className="max-w-[1920px] mx-auto px-4 h-16 flex items-center justify-between"> */}
          <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-1 sm:gap-8">
              <Link to="/" className="text-xl font-bold">WINAYA</Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar en WIMNAYA"
                  className="w-[300px] pl-4 pr-10 py-2 rounded-full bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 hidden sm:block"
                />
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center sm:hidden"> {/* Solo para dispotivos mobiles */}
                  <Search className="text-gray-400 w-5 h-5" />
                </div>
                <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 hidden sm:block" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/store">
                <Store className="w-6 h-6 text-gray-600" />
              </Link>
              <Link to="/events">
                <Calendar className="w-6 h-6 text-gray-600 cursor-pointer hover:text-pink-500" />
              </Link>
              <Link to="/chat">
                <MessageCircle className="w-6 h-6 text-gray-600" />
              </Link>
              <Link to="/forum">
                <MessageSquare className="w-6 h-6 text-gray-600 cursor-pointer hover:text-pink-500" />
                {/* <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span> */}
              </Link>
              <div className="relative" ref={notificationsRef}>
                <button
                  className="relative"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-pink-500" />
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    2
                  </span>
                </button>
                <NotificationsDropdown isOpen={isNotificationsOpen} />
              </div>
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
                <img
                  src="https://i.ibb.co/s9wY3Wv/Ari.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-pink-500" />
              </button>
            </div>
          </nav>
        {/* </div> */}
      </header>
      <main className="pt-14 min-h-screen">{children}</main>
    </div>
  );
}