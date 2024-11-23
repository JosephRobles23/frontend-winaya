import { useState, useEffect, useRef } from 'react';
import {Paperclip, ArrowUp } from 'lucide-react';
import axios from 'axios';

export function MarketingAgent() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy Ana, tu Conectora Digital. Estoy aquí para ayudarte a crear estrategias efectivas de marketing, mejorar tu presencia en redes sociales y aumentar la visibilidad de tu marca. ¿Qué proyecto tienes en mente?',
      isBot: true,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true); // Nueva variable para controlar las sugerencias

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const suggestions = [ // Preguntas sugeridas
    '💡 Créame una campaña de marketing',
    '🎯 ¿Cómo puedo atraer más clientes sin gastar dinero?',
    '📢 ¿Qué tipo de anuncios funcionan mejor en redes sociales?',
    '💰 ¿Qué es el ROI ?',
  ];

  const handleSendMessage = async (text?: string) => {
    const messageToSend = text || inputText; // Usa el argumento 'text' si existe, o el 'inputText'

    if (messageToSend.trim() === '') return;

    const userMessage = { id: Date.now(), text: messageToSend, isBot: false };
    setMessages([...messages, userMessage]);
    setInputText(''); // Limpia el campo del input solo cuando el usuario escribe manualmente
    setLoading(true);
    setShowSuggestions(false); // Oculta las sugerencias al enviar un mensaje

    try {
      const response = await axios.post('https://811f-201-218-159-83.ngrok-free.app/financiamiento', {
        pregunta: messageToSend,
      });

      const botMessage = {
        id: Date.now() + 1,
        text: response.data.respuesta || `Hola. El panorama financiero para las microempresas es complejo, pero hay varias opciones disponibles para ellas.`,
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion); // Coloca la sugerencia en el input
    setShowSuggestions(false); // Oculta las sugerencias
    handleSendMessage(suggestion); // Envía automáticamente la sugerencia seleccionada
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (loading) {
      intervalRef.current = setInterval(() => {
        setDots((prev) => (prev.length === 3 ? '' : prev + '.'));
      }, 500);
    } else {
      setDots('');
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [loading]);

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="flex direction-row bg-white p-4 border-b justify-center gap-2">
        <h1 className="text-xl font-semibold text-purple-600 flex justify-center items-center">Conectora Digital</h1>
        <img
                src="https://i.postimg.cc/CxzsjdbH/Agente-Marketing.webp" // Cambia esta URL por la imagen del robot
                alt="Agente Financiera"
                className="w-11 h-11"
              />
      </div>

      <div className="flex-1 bg-white overflow-y-auto p-4 space-y-4 h-3/4 gap-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            {message.isBot && (
              <img
                src="https://i.postimg.cc/CxzsjdbH/Agente-Marketing.webp" // Cambia esta URL por la imagen del robot
                alt="Robot"
                className="w-12 h-12  mr-1"
              />
            )}
            <div
              className={`max-w-[80%]  rounded-lg px-4 py-2 ${message.isBot ? 'bg-plomo-chat text-black-400 font-normal shadow-md' : 'bg-purple-500 text-white shadow-md'}`}
            >
              <p>{message.text}</p>
            </div>
            {!message.isBot && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBD_ykDcG8TKeoMNSGsF88UYXjqjx3ZCeX-g&s"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-purple-500 ml-3"
              />
            )}
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            
            <div className="max-w-[80%] rounded-lg px-4 py-2 bg-plomo-chat text-black-400 shadow-md">
              <p>Consultando{dots}</p>
            </div>
          </div>
        )}

        {/* Contenedor de sugerencias */}
        {showSuggestions && (
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="bg-turquesa-claro hover:bg-turquesa text-black px-3 py-2 rounded-lg shadow-md transition-all"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer Input */}
      <div className="p-3 border-3 bg-purple-200 mx-4 rounded-3xl border-transparent hover:border-3 hover:border-purple-700 transition-all">
        <div className="relative flex items-center gap-3">
          <textarea
            placeholder="Envia un mensaje a Ana"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            className="flex-1 px-4 py-2 rounded-3xl text-black-400 focus:outline-none resize-none bg-purple-200"
            style={{ overflow: 'hidden' }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto'; // Restablecer altura
              target.style.height = `${target.scrollHeight}px`; // Ajustar según contenido
            }}
          />
          <button>
            <Paperclip className='w-5 h5' />
          </button>
          <button
            onClick={() => handleSendMessage()} // Llama a la función sin argumentos
            className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
          >
            <ArrowUp className="w-5 h-5 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1" />
          </button>

        </div>
      </div>
    </div>
  );
}
