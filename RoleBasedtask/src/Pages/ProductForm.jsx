import { useState, useEffect } from "react";
import ProductList from "./ProductList";

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleSubmit = () => {
    if (!name || !price) return;

    const newProduct = { image, name, price, desc };

    if (editIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }

    setName("");
    setPrice("");
    setDesc("");
    setImage("");
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const product = products[index];
    setName(product.name);
    setPrice(product.price);
    setDesc(product.desc);
    setImage(product.image);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 py-10 px-6">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="bg-white/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-pink-200 mb-10">
          <h3 className="text-2xl font-extrabold text-center text-purple-700 mb-6 tracking-wide">
            {editIndex !== null ? "🌸 Edit Product" : "🌸 Add Product"}
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white/60 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition bg-white/60 placeholder-gray-500"
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white/60 placeholder-gray-500"
            />
            <textarea
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition bg-white/60 placeholder-gray-500"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition"
            >
              {editIndex !== null ? "✨ Update Product" : "✨ Add Product"}
            </button>
          </div>
        </div>

        {/* Product List */}
        <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default ProductForm;
