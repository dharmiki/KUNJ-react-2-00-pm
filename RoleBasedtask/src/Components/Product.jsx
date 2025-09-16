import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [products, setProducts] = useState([]);

  // Load products from localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(1);
      } else if (window.innerWidth < 748) {
        setProductsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(3);
      } else {
        setProductsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / productsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-slide every 4s
  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [productsPerPage, totalSlides, products.length]);

  // Slice visible products
  const visibleProducts = products.slice(
    currentSlide * productsPerPage,
    (currentSlide + 1) * productsPerPage
  );

  if (products.length === 0) {
    return (
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-xl font-bold text-gray-600">No Products Available</h2>
      </section>
    );
  }

  return (
    <section id="products" className="py-12 scroll-mt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="md:text-3xl text-2xl font-bold text-amber-900">Featured Products</h2>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors"
              aria-label="Previous Slide"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors"
              aria-label="Next Slide"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
              >
                {/* Image + Heart */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />

                  {/* Heart Button */}
                  <button className="absolute top-3 left-3 p-2 bg-white rounded-full">
                    <FiHeart size={18} />
                  </button>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-pink-600 font-bold">${product.price}</p>
                  <p className="text-sm text-gray-500 mt-1">{product.desc}</p>

                  {/* Static Stars (since no rating in localStorage data) */}
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        className={i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">(4.0)</span>
                  </div>

                  {/* Price + Cart */}
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-pink-600">${product.price}</span>
                    <button className="p-2 bg-pink-950 rounded-full text-white hover:bg-pink-700 transition-colors">
                      <FiShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
