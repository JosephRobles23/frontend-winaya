import { useState } from 'react';
import { Paperclip, Send, ArrowLeft } from 'lucide-react';

const chats = [
  {
    id: 1,
    sender: 'Alexandara Simonic',
    time: '10:30 PM',
    text: 'Estoy interesada en tu negocio',
    profilePicture: 'https://i.pinimg.com/736x/ce/6a/81/ce6a8105ee6297710c0306312e0c07a1.jpg'
  },
  {
    id: 2,
    sender: 'Johana Doe',
    time: '9:00 PM',
    text: 'Hola Marina, ¿vamos juntas a CONAME?',
    profilePicture: 'https://i.pinimg.com/564x/a9/b5/1f/a9b51f323d71c9ec28b6a0bc54a6aaf0.jpg'
  },
  {
    id: 3,
    sender: 'Milagros Cruz',
    time: '8:53 PM',
    text: 'Me encantó tu producto',
    profilePicture: 'https://i.pinimg.com/564x/21/db/71/21db71ecfcef058147d8491d142289a3.jpg'
  },
  {
    id: 4,
    sender: 'Beatriz Capitan',
    time: '6:30 PM',
    text: 'Gran speech en la conferencia',
    profilePicture: 'https://i.pinimg.com/564x/f6/74/88/f674885bb968be67489dcebaf80dac7a.jpg'
  },
  {
    id: 5,
    sender: 'Camila Montañez',
    time: '5:20 PM',
    text: 'Hola, ¿ya has realizado un prestamo?',
    profilePicture: 'https://i.pinimg.com/564x/25/41/7b/25417b57010be6ff53c8e948de4b3ef1.jpg'
  },
  {
    id: 6,
    sender: 'Luisa Saldaña',
    time: '2:30 PM',
    text: '¡Gracias por tu compra!',
    profilePicture: 'https://i.pinimg.com/564x/bd/12/03/bd120336c01e302d7533a8f268f8407b.jpg'
  },
];

export function Chat() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [messages, setMessages] = useState([
    { id: 1, text: selectedChat.text, time: selectedChat.time, isUserMessage: true },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setMessages([{ id: chat.id, text: chat.text, time: chat.time, isUserMessage: false }]);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUserMessage: true,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* Lista de chats */}
      <div className={`lg:w-1/3 border-r ${selectedChat ? 'hidden lg:block' : 'block'}`}>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Chats</h2>
          <div className="space-y-4">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleChatSelect(chat)}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <img
                  src={chat.profilePicture}
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

      {/* Ventana de mensajes */}
      <div className={`flex-1 flex flex-col ${selectedChat ? 'block' : 'hidden lg:flex'}`}>
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            {selectedChat && (
              <button onClick={handleBack} className="lg:hidden p-2">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
            )}
            <img
              src={selectedChat?.profilePicture || 'https://i.pinimg.com/736x/ce/6a/81/ce6a8105ee6297710c0306312e0c07a1.jpg'}
              alt="Chat profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{selectedChat?.sender || 'Chat'}</h3>
              <p className="text-sm text-gray-600">@{selectedChat?.sender.split(" ")[0]}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-3/4  ">
          {/* Mostrar todos los mensajes */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUserMessage ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.isUserMessage ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{message.text}</p>
                <span className="text-xs opacity-75 mt-1 block">{message.time}</span>
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
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}