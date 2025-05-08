function MenuItem({ name, description, price, onAdd }) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold">${price.toFixed(2)}</span>
        <button
          onClick={onAdd}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
