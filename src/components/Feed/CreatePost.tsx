import React from 'react';
import { Image, Video, Paperclip } from 'lucide-react';

export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="¿En que piensas Arianna?"
          className="flex-1 bg-pink-50 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500">
            <Image className="w-5 h-5" />
            <span>Image</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500">
            <Video className="w-5 h-5" />
            <span>Videos</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500">
            <Paperclip className="w-5 h-5" />
            <span>Attach</span>
          </button>
        </div>
      </div>
    </div>
  );
}