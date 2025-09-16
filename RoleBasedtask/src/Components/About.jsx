import React from "react";
import { motion } from "framer-motion";
import product from "../assets/product12.avif";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          
          {/* Left Side - Image */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
              <motion.img
                src={product}
                alt="Luxury perfumes"
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Since 2010</h3>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, illo beatae. Ratione explicabo doloremque magni debitis
              libero dolorum placeat culpa dolore soluta facilis. Maiores
              corporis architecto maxime deleniti suscipit unde.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { number: "500+", text: "Unique Fragrances" },
                { number: "50+", text: "Countries Worldwide" },
                { number: "100%", text: "Customer Satisfaction" },
                { number: "24/7", text: "Customer Support" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-semibold text-pink-600">{item.number}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;




