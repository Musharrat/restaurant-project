import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Load initial count
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCount(cart.length);
    };

    updateCount();

    // Listen for cart updates
    window.addEventListener('cartUpdated', updateCount);

    // Clean up event
    return () => {
      window.removeEventListener('cartUpdated', updateCount);
    };
  }, []);

  return (
    <Link to="/cart" className="relative">
      🛒
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;