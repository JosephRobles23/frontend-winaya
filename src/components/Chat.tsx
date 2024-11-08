import { useState } from 'react';
import { Paperclip, Send, ArrowLeft } from 'lucide-react';

const messages = [
  { id: 1, sender: 'Merchandising', time: '10:30 AM', text: 'This is a sample message', isSelf: false },
  { id: 2, sender: 'John Doe', time: '10:30 AM', text: 'This is a sample message', isSelf: true },
  // Agrega más mensajes aquí si es necesario...
];

export function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* Lista de chats, visible en pantallas grandes o cuando no se ha seleccionado un chat en móviles */}
      <div
        className={`lg:w-1/3 border-r ${
          selectedChat ? 'hidden lg:block' : 'block'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Chats</h2>
          <div className="space-y-4">
            {messages.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleChatSelect(chat)}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${chat.isSelf ? '1539571696357-5a69c17a67c6' : '1494790108377-be9c29b29330'}?w=400`}
                  alt={chat.sender}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium truncate">{chat.sender}</h3>
                    <span className="text-sm text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mensajes - visible cuando se selecciona un chat */}
      <div
        className={`flex-1 flex flex-col ${
          selectedChat ? 'block' : 'hidden lg:flex'
        }`}
      >
        <div className="p-4 border-b">
          {/* Botón de volver para móviles */}
          <div className="flex items-center gap-3">
            {selectedChat && (
              <button onClick={handleBack} className="lg:hidden p-2">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
            )}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
              alt="Chat profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{selectedChat?.sender || 'Chat'}</h3>
              <p className="text-sm text-gray-600">@LuisaRamirez</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.isSelf ? 'bg-purple-600 text-white' : 'bg-gray-100'
                }`}
              >
                <p>{message.text}</p>
                <span className="text-xs opacity-75 mt-1 block">
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Paperclip className="w-5 h-5 text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Mensaje..."
              className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
