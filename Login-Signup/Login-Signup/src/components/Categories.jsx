import React from "react";
import {motion} from "framer-motion";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";

const Categories = () => {
  const categories = [
    { img: product1, alt: "Men's Perfumes", title: "Men's Collection", description: "Exclusive fragrances for men." },
    { img: product2, alt: "Women's Perfumes", title: "Women's Collection", description: "Elegant perfumes for women." },
    { img: product3, alt: "Unisex Perfumes", title: "Unisex Collection", description: "Fragrances for everyone." },
    { img: product4, alt: "Luxury Perfumes", title: "Luxury Collection", description: "Premium perfumes for special occasions." },
    { img: product5, alt: "Daily Wear", title: "Daily Collection", description: "Perfect perfumes for everyday use." },
    { img: product6, alt: "Fresh Perfumes", title: "Fresh Collection", description: "Refreshing scents for all seasons." },
  ];

  return (
    <section id="categories" className="py-16 scroll-mt-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-950 mb-3">
            ✨ Explore Our Fragrance Collections ✨
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Discover our hand-picked fragrance categories designed for every mood and occasion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Image */}
              <motion.div
                className="flex items-center justify-center h-64 bg-gray-100"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={category.img}
                  alt={category.alt}
                  className="max-h-60 w-auto object-contain transition-transform duration-500"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <p className="text-gray-200 mt-1">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;




