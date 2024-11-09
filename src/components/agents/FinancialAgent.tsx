// src/components/agents/FinancialAgent.tsx
import { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

export function FinancialAgent() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy Luna, tu Agente Financiero personal. Estoy aquí para ayudarte con tus consultas sobre finanzas, presupuestos, inversiones y estrategias para hacer crecer tu negocio. ¿En qué puedo ayudarte hoy?',
      isBot: true,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // const response = await axios.post('http://127.0.0.1:8000/financiamiento', {
      //   pregunta: inputText,
      // });
      const response = await axios.post('https://e1e2-132-251-2-146.ngrok-free.app/financiamiento', {
        pregunta: inputText,
      });

      const botMessage = {
        id: messages.length + 2,
        text: response.data.respuesta,
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error al consultar el bot:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: 'Lo siento, hubo un error al procesar tu solicitud.',
        isBot: true,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-screen flex flex-col">
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
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            disabled={isLoading}
          />
          <button
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
