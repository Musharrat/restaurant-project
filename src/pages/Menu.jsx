import MenuItem from "../components/MenuItem";
import { addToCart } from '../utils/cart';

function Menu() {
  const burgers = [
    { id: 1, name: "Classic Burger", description: "Juicy beef patty with lettuce and tomato", price: 8.99 },
    { id: 2, name: "Cheese Burger", description: "Beef patty with melted cheese", price: 9.49 },
    { id: 3, name: "Bacon Burger", description: "Crispy bacon and smoky flavor", price: 9.99 },
  ];

  const handleAdd = (item) => {
    console.log("Add to cart:", item.name);
    // TODO: integrate with your cart logic
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🍔 Burgers</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {burgers.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            onAdd={() => addToCart(item.name, item.price)}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
