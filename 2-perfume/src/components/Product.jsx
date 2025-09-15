import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';

import product1 from '../assets/product1.png';
import product2 from '../assets/product2.webp';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.webp';
import product9 from '../assets/product9.webp';
import product10 from '../assets/product10.webp';
import product11 from '../assets/product11.jpg';
import product12 from '../assets/product12.avif';
import product13 from '../assets/product13.jpg';
import product14 from '../assets/product14.png';
import product15 from '../assets/product15.webp';

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);

  const Products = [
    { id: 1, name: 'Aqua Fresh Perfume', price: 59.99, rating: 4.5, image: product1, discount: 15 },
    { id: 2, name: 'Royal Oud Perfume', price: 149.99, rating: 4.8, image: product2, discount: 20 },
    { id: 3, name: 'Rose Bloom Perfume', price: 79.99, rating: 4.6, image: product3, discount: 10 },
    { id: 4, name: 'Citrus Splash Perfume', price: 69.99, rating: 4.3, image: product4, discount: 12 },
    { id: 5, name: 'Vanilla Essence Perfume', price: 89.99, rating: 4.4, image: product5, discount: 18 },
    { id: 6, name: 'Amber Nights Perfume', price: 129.99, rating: 4.7, image: product6, discount: 22 },
    { id: 7, name: 'Jasmine Bliss Perfume', price: 74.99, rating: 4.2, image: product7, discount: 14 },
    { id: 8, name: 'Spicy Musk Perfume', price: 99.99, rating: 4.5, image: product8, discount: 19 },
    { id: 9, name: 'Ocean Breeze Perfume', price: 64.99, rating: 4.1, image: product9, discount: 10 },
    { id: 10, name: 'Sandalwood Charm Perfume', price: 119.99, rating: 4.6, image: product10, discount: 25 },
    { id: 11, name: 'Lavender Mist Perfume', price: 84.99, rating: 4.4, image: product11, discount: 15 },
    { id: 12, name: 'Luxury Gold Perfume', price: 199.99, rating: 4.9, image: product12, discount: 30 },
    { id: 13, name: 'Coconut Paradise Perfume', price: 69.99, rating: 4.3, image: product13, discount: 12 },
    { id: 14, name: 'Mint Cool Perfume', price: 54.99, rating: 4.0, image: product14, discount: 8 },
    { id: 15, name: 'Exotic Spice Perfume', price: 139.99, rating: 4.7, image: product15, discount: 20 },
  ];

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(Products.length / productsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [productsPerPage, totalSlides]);

  const visibleProducts = Products.slice(
    currentSlide * productsPerPage,
    (currentSlide + 1) * productsPerPage
  );

  return (
   
    <section id="products" className="py-12 scroll-mt-20 bg-gray-50">
      <div className="container mx-auto px-4">
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

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />

                  {product.discount > 0 && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  )}

                  <button className="absolute top-3 left-3 p-2 bg-white rounded-full">
                    <FiHeart size={18} />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-pink-600 font-bold">${product.price.toFixed(2)}</p>

                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-pink-600">
                        ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                      </span>
                      {product.discount > 0 && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
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



