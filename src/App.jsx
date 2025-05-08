import { Link, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import CartIcon from './components/CartIcon';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="flex justify-between items-center p-6 bg-red-500 text-white shadow">
        <div className="text-2xl font-bold">🍽️ My Restaurant</div>
        <nav className="space-x-4">
          <Link to="/menu" className="hover:underline">Menu</Link>
          <Link to="/cart" className="hover:underline relative inline-block">
            <CartIcon />
          </Link>
        </nav>
      </header>
          
      
      <main className="p-8 text-center">
          
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={
            <div>
              <h1 className="text-4xl font-bold mb-4">Welcome to My Restaurant!</h1>
              <p className="text-lg text-gray-600">Click on the Menu to start ordering.</p>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
