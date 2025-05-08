import { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  };

  useEffect(() => {
    loadCart();

    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const emptyCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);

    // Trigger cart update for other components
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="border p-2 mb-2">
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <div className="text-right font-bold mt-4">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button
            onClick={emptyCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Empty Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
