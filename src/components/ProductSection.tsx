"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "Amazon Prime",
    description:
      "Enjoy fast streaming entertainment, exclusive deals with Prime membership.",
    originalPrice: 120,
    discount: "30% Discount",
    finalPrice: 86,
    image: "/amaz.png",
  },
  {
    id: 2,
    name: "Netflix",
    description:
      "Stream unlimited movies, TV shows, and more with Netflix premium membership.",
    originalPrice: 199,
    discount: "20% Discount",
    finalPrice: 159,
    image: "/net.png",
  },
  {
    id: 3,
    name: "Spotify Premium",
    description:
      "Enjoy ad-free music, offline downloads, and high-quality audio with Spotify Premium.",
    originalPrice: 99,
    discount: "40% Discount",
    finalPrice: 59,
    image: "/sportify.svg",
  },
];

const ProductSection = () => {
  return (
    <section className="flex w-full justify-center items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center px-8 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-24 bg-white bg-clip-text text-transparent">
          Discover Trending Subscriptions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-xl:gap-18 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative w-full max-w-sm"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="rounded-full w-32 h-32  bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] border-8 border-blue-100 shadow-lg">
                  <img
                    src={product.image}
                    alt={`${product.name} Logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                className="bg-[#0C1B44] w-full flex flex-col justify-center items-center hover:border-2 border-[#A92EDF] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mt-20 text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-gray-300 mb-6 max-w-md">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-2xl max-lg:text-xl font-semibold line-through">
                      ₹{product.originalPrice}/month
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-green-400 text-2xl max-lg:text-xl">
                      {product.discount}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl max-lg:text-xl mt-4">
                      ₹{product.finalPrice}/month
                    </h2>
                  </div>
                  <Link href={`/product/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 transform"
                    >
                      Purchase Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductSection;
