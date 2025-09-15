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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">
        {editIndex !== null ? "Edit Product" : "Add Product"}
      </h3>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          {editIndex !== null ? "Update Product" : "Add Product"}
        </button>
      </div>

      <hr className="my-6" />

      <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default ProductForm;
