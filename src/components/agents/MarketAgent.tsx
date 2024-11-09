// src/components/agents/MarketAgent.tsx
import { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

export function MarketAgent() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy Max, tu Agente de Mercado. Estoy aquí para ayudarte a entender las tendencias del mercado, analizar a tu competencia y encontrar oportunidades de crecimiento. ¿Qué te gustaría analizar hoy?',
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
      // const response = await axios.post('http://127.0.0.1:8000/mercado', {
      //   pregunta: inputText,
      // });
      const response = await axios.post('https://5483-38-25-30-89.ngrok-free.app/mercado', {
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
        <h1 className="text-xl font-semibold text-blue-600">Agente de Mercado</h1>
        <p className="text-gray-600">Tu experto en análisis de mercado y competencia</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.isBot ? 'bg-blue-50 text-blue-900' : 'bg-blue-600 text-white'
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
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
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
