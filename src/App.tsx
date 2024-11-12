import React from 'react';
import EventMap from './components/Map';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold text-pink-600">
              Women Entrepreneurs Events
            </h1>
          </div>
        </div>
      </nav>
      <main className="flex-1 h-[calc(100vh-4rem)]">
        <EventMap />
      </main>
    </div>
  );
}
export default App;
