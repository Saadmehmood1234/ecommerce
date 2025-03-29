"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProduct } from "@/app/actions.ts/product.actions";
import { Product } from "@/lib/types";
import ProductDetail from "./ProductDetail";
const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [sendDetail, setSendDetail] = useState<Product | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProduct();
        if (!res.success) {
          setError(res.message || "Error in fetcing the data");
          setMessage("");
          setTimeout(() => {
            setError("");
          }, 2000);
          return;
        } else {
          setMessage(res.message || "Data fetched Successfully");
          setProducts(res.data || []);
          setError("");
          setTimeout(() => {
            setMessage("");
          }, 2000);
        }
      } catch (error: any) {
        setError(error.message || "Error in fetcing the data");
        setMessage("");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    };
    fetchData();
  }, []);
  const handleDetail = (data: Product) => {
    setSendDetail(data);
    setIsDetailOpen(true);
  };

  return (
    <>
      {!isDetailOpen ? (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8  xl:grid-cols-3">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative w-full max-w-sm mb-12"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="rounded-full w-32 h-32  bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] border-8 border-blue-100 shadow-lg">
                      <img
                        src={product.logoImage}
                        alt={`${product.logoImage} Logo`}
                        className="w-full h-full  object-cover rounded-full"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-[#0C1B44] w-full flex flex-col justify-center items-center hover:border-2 border-[#A92EDF] rounded-3xl px-8 pb-8 shadow-xl hover:shadow-2xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mt-20 text-center text-white">
                      <h3 className="text-2xl font-bold mb-4">
                        {product.title}
                      </h3>
                      <p className="text-gray-300 text-base max-sm:text-md  leading-relaxed">
                        {product.description.length > 80
                          ? product.description.substring(0, 80) 
                          : product.description}
                      </p>

                      <div className="flex items-center justify-center gap-4">
                        <span className="text-xl max-lg:text-xl font-semibold line-through">
                          ₹{product.originalPrice}/month
                        </span>
                        <span className="text-gray-400">|</span>
                        <span className="text-green-400 text-xl max-lg:text-xl">
                          {product.discount} %
                        </span>
                      </div>
                      <div>
                        <h2 className="text-2xl max-lg:text-xl mt-4">
                          ₹{product.price}/month
                        </h2>
                      </div>
                      {/* <Link href={`/product/${product.id}`}> */}
                      <motion.button
                        onClick={() => handleDetail(product)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 transform"
                      >
                        Purchase Now
                      </motion.button>
                      {/* </Link> */}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      ) : (
        <ProductDetail
          setIsDetailOpen={setIsDetailOpen}
          isDetailOpen={isDetailOpen}
          product={sendDetail}
        />
      )}
    </>
  );
};

export default ProductSection;
