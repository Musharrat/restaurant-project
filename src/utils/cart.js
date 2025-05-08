export function addToCart(itemName, itemPrice) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: itemName, price: itemPrice });
  localStorage.setItem('cart', JSON.stringify(cart));

  // Trigger cart update event (optional, useful for updating cart count)
  const event = new Event('cartUpdated');
  window.dispatchEvent(event);
}

export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}
