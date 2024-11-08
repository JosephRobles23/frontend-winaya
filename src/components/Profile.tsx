import { Award, Users, Heart, MessageCircle, Share2 } from 'lucide-react';

export function Profile() {
  const posts = [
    {
      id: 1,
      content: 'Nuevo diseño para la campaña de primavera 🌸',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      likes: 124,
      comments: 15,
      time: '2h'
    },
    {
      id: 2,
      content: 'Mi último proyecto de ilustración infantil ✨',
      image: 'https://images.unsplash.com/photo-1594735812599-e2ad264b0d31?w=400',
      likes: 89,
      comments: 8,
      time: '5h'
    }
  ];

  const experiences = [
    {
      id: 1,
      content: 'Participación en el Hackathon Internacional de NASA Space Apps Challenge.',
      date: 'Octubre 2024',
      image: 'https://images.unsplash.com/photo-1502767089025-6572583495b8?w=400'
    },
    {
      id: 2,
      content: 'Presentación en el evento Juntas Somos Más.',
      date: 'Septiembre 2024',
      image: 'https://images.unsplash.com/photo-1566722326043-4a3af02e915e?w=400'
    }
  ];

  const upcomingMeetings = [
    'CONAME',
    'Juntas Somos Más',
    'Encuentro Mujeres Líderes LATAM'
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <div>
            <h1 className="text-2xl font-semibold">Alexandara Simonic</h1>
            <p className="text-gray-600 mb-2">3D artista, Diseño gráfico</p>
            <p className="text-gray-600">Lima, Perú</p>
            <button className="mt-4 text-purple-600 font-medium">Ver en tienda</button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-8 sm:gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-xl font-semibold">57</div>
            <div className="text-gray-600">Eventos</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-xl font-semibold">300</div>
            <div className="text-gray-600">Entregas</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-xl font-semibold">10</div>
            <div className="text-gray-600">Insignias</div>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Insignias</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { icon: Award, title: 'Primeros pasos', desc: 'Para usuarios que completaron su perfil empresarial' },
            { icon: Users, title: 'Conectora', desc: 'Por participar en más de 30 eventos de networking' },
            { icon: Award, title: 'Top Seller', desc: 'Para emprendedoras que alcanzan una meta de ventas en la tienda' },
            { icon: Award, title: 'Mentora', desc: 'Para quienes ofrecen mentoría a otras emprendedoras' },
          ].map((badge, i) => (
            <div key={i} className="bg-white rounded-xl p-4 text-center flex-1 min-w-[120px]">
              <div className="w-16 h-16 mx-auto mb-2 bg-pink-100 rounded-lg flex items-center justify-center">
                <badge.icon className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="font-medium mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Experiencias y Logros</h2>
        <div className="space-y-4">
          {experiences.map(exp => (
            <div key={exp.id} className="bg-white rounded-xl shadow-sm flex p-4 gap-4 items-center">
              <img src={exp.image} alt="Experience" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <p className="text-gray-800 mb-1">{exp.content}</p>
                <span className="text-sm text-gray-500">{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Próximas Reuniones</h2>
        <div className="space-y-4">
          {upcomingMeetings.map((meeting, index) => (
            <div key={index} className="bg-pink-100 rounded-lg shadow-sm p-6 text-center">
              <p className="text-xl font-semibold text-gray-800">{meeting}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Publicaciones</h2>
        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm">
              <img src={post.image} alt="Post" className="w-full aspect-video object-cover rounded-t-xl" />
              <div className="p-4">
                <div className="flex gap-4 mb-4">
                  <button className="flex items-center gap-2 text-gray-600">
                    <Heart className="w-6 h-6" />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600">
                    <MessageCircle className="w-6 h-6" />
                    {post.comments}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
                <p className="mb-2">{post.content}</p>
                <span className="text-sm text-gray-500">{post.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
