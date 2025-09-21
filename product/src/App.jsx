import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filtering + Searching + Sorting
  const filteredData = products
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => (category === "all" ? true : item.category === category))
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
         React Product Finder
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder=" Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded-lg w-full md:w-1/3 shadow-sm focus:ring-2 focus:ring-indigo-400"
        />

         {/* Filter */} 
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>

        {/* Sorting */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Sort by</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* Products shows */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-semibold text-gray-800 truncate">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="text-lg font-bold text-indigo-600 mt-2">
              ₹ {item.price}
            </p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
