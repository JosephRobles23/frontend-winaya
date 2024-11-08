import { useState } from 'react';
import { Send } from 'lucide-react';

export function FinancialAgent() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy Luna, tu Agente Financiero personal. Estoy aquí para ayudarte con tus consultas sobre finanzas, presupuestos, inversiones y estrategias para hacer crecer tu negocio. ¿En qué puedo ayudarte hoy?',
      isBot: true,
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="bg-white p-4 border-b">
        <h1 className="text-xl font-semibold text-purple-600">Agente Financiero</h1>
        <p className="text-gray-600">Tu asistente para decisiones financieras inteligentes</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.isBot ? 'bg-purple-50 text-purple-900' : 'bg-purple-600 text-white'
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
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}