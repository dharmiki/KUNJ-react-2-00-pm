const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h4 className="text-lg font-semibold text-gray-800">{p.name}</h4>
            <p className="text-gray-600">₹{p.price}</p>
            <p className="text-gray-500 flex-1">{p.desc}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => onEdit(i)}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(i)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
