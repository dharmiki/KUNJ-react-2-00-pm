const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-6 w-full">
      {products.map((p, i) => (
        <div
          key={i}
          className="bg-white/40 backdrop-blur-lg border border-pink-200 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition transform hover:scale-105"
        >
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h4 className="text-lg font-bold text-purple-700">{p.name}</h4>
            <p className="text-pink-600 font-semibold">₹{p.price}</p>
            <p className="text-gray-600 flex-1 mt-2">{p.desc}</p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => onEdit(i)}
                className="flex-1 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md transition"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => onDelete(i)}
                className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
