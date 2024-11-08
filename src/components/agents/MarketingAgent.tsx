import { useState } from 'react';
import { Send } from 'lucide-react';

export function MarketingAgent() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy Ana, tu Agente de Marketing. Estoy aquí para ayudarte a crear estrategias efectivas de marketing, mejorar tu presencia en redes sociales y aumentar la visibilidad de tu marca. ¿Qué proyecto tienes en mente?',
      isBot: true,
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="bg-white p-4 border-b">
        <h1 className="text-xl font-semibold text-pink-600">Agente de Marketing</h1>
        <p className="text-gray-600">Tu estratega en marketing digital y branding</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.isBot ? 'bg-pink-50 text-pink-900' : 'bg-pink-600 text-white'
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}