import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';

export default function Feed() {
  const posts = [
    {
      author: {
        name: "Maria Casas Rojas",
        title: "CEO & Founder - SHANON",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80",
        time: "20:29 am"
      },
      content: "Querida comunidad vengo a contarles que eh abierto mi nuevo emprendimiento de ropa.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      likes: 3,
      comments: 7
    },
    {
      author: {
        name: "Kristina Alejandro Casas",
        title: "CEO & Founder - SHANON",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80",
        time: "19:45 am"
      },
      content: "Querida comunidad vengo a contarles que eh abierto mi nuevo emprendimiento de pastelerías.",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      likes: 3,
      comments: 7
    }
  ];

  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      <CreatePost />
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}