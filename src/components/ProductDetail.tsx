import { Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ProductDetail() {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate('/chat');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <div className="w-1/3">
          <img
            src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400"
            alt="Product"
            className="w-full rounded-xl"
          />
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400"
                alt="Seller"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">Petter Robles</h3>
                <p className="text-gray-600 text-sm">Repostero</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <MapPin className="w-4 h-4" />
              Lima, Perú
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Rosa Pastelería</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">4.5</span>
            </div>
            <span className="text-gray-600">·</span>
            <span className="text-gray-600">300+ Entregas</span>
          </div>

          <div className="prose max-w-none mb-8">
            <p>
              Descubre el placer de los sabores únicos y el arte en cada detalle
              con Dulces Momentos. Una pastelería que se especializa en productos
              artesanales ofreciendo una selección de pasteles, cupcakes y
              galletas personalizadas para todas tus ocasiones especiales.
            </p>
            <h3>Servicios Destacados:</h3>
            <ul>
              <li>Pasteles personalizados para cumpleaños, bodas y eventos corporativos</li>
              <li>Galletas decoradas y temáticas, perfectas para obsequios y regalos</li>
              <li>Cupcakes exclusivos, con sabores únicos y diseños cautivadores</li>
            </ul>
          </div>

          <button
            onClick={handleBuy}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
}