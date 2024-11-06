import React from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';

interface PostProps {
  author: {
    name: string;
    title: string;
    avatar: string;
    time: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

export default function Post({ author, content, image, likes, comments }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow mb-4">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{author.title} • {author.time}</p>
          </div>
        </div>
        <p className="mb-4">{content}</p>
        {image && (
          <img src={image} alt="Post content" className="w-full rounded-lg mb-4" />
        )}
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500">
              <Heart className="w-5 h-5" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500">
              <MessageCircle className="w-5 h-5" />
              <span>{comments}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500">
              <Share className="w-5 h-5" />
            </button>
          </div>
          <button className="text-gray-600 hover:text-pink-500">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}