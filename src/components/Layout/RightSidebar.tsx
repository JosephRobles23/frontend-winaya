import React from 'react';

export default function RightSidebar() {
  const ads = [
    {
      title: "Udemy",
      subtitle: "udemy.com",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      title: "Domestika",
      subtitle: "domestika.org",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80"
    }
  ];

  return (
    <div className="fixed right-0 top-16 w-64 h-[calc(100vh-4rem)] border-l border-gray-200 bg-white p-4">
      <h3 className="font-semibold text-gray-500 mb-4">Publicidad</h3>
      <div className="space-y-4">
        {ads.map((ad, index) => (
          <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
            <img src={ad.image} alt={ad.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <h4 className="font-semibold">{ad.title}</h4>
              <p className="text-sm text-gray-500">{ad.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}