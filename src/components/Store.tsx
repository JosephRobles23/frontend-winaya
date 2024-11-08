import { Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Rosa Pastelería',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://i.pinimg.com/564x/9a/36/fe/9a36fec0b2a1ea95644bf2bdc0c9bc24.jpg',
  },
  {
    id: 2,
    title: 'Perfumería París',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
  },
  {
    id: 3,
    title: 'Perfumería París',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
  },
  {
    id: 4,
    title: 'Perfumería París',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
  },
  {
    id: 5,
    title: 'Perfumería París',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
  },
  {
    id: 6,
    title: 'Perfumería París',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
  },
  {
    id: 7,
    title: 'Perfumería París',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
  },
  {
    id: 8,
    title: 'Perfumería París',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
  },
  {
    id: 9,
    title: 'Perfumería París',
    description: 'Tortas, kekes, bocaditos y tortas a pedido',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
  },

  
  // Add more products...
];

export function Store() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
  <div>
    <h1 className="text-2xl font-semibold mb-2">Bienvenida a la tienda</h1>
    <p className="text-gray-600">Te mostramos productos que quizás te interesen</p>
  </div>
  {/* Contenedor de búsqueda que cambia de columna en pantallas pequeñas */}
  <div className="relative mt-4 lg:mt-0 lg:w-1/3 w-full">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type="search"
      placeholder="Buscar producto"
      className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
    />
  </div>
</div>


      <button className="flex items-center gap-2 mb-8 bg-purple-50 text-purple-600 px-4 py-2 rounded-lg">
        <Plus className="w-5 h-5" />
        <span>Publica aquí los productos que ofreces y crea un catálogo</span>
      </button>

      {/* Contenedor de productos responsivo usando flex-wrap */}
      <div className="flex flex-wrap gap-6 justify-evenly">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group w-full sm:w-1/2 lg:w-1/4">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-medium mb-1">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}