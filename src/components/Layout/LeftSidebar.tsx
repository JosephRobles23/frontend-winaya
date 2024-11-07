import React from 'react';
import { Users, Bookmark } from 'lucide-react';

export default function LeftSidebar() {
  return (
    <div className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://i.ibb.co/s9wY3Wv/Ari.png"
          alt="Arianna Yauri"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="font-semibold">Arianna Yauri</h2>
          <p className="text-sm text-gray-500">@arianna_yauri</p>
        </div>
      </div>

      <div className="space-y-4">
        <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg">
          <Users className="w-5 h-5 text-pink-500" />
          <span>Amigos (70 conectadas)</span>
        </button>
        <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg">
          <Bookmark className="w-5 h-5 text-pink-500" />
          <span>Guardados</span>
        </button>
      </div>
    </div>
  );
}