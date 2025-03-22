"use client";
import React, { useState } from "react";
import { ShoppingCart, CheckCircle } from "lucide-react";
import Image from "next/image";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Netflix Premium Account",
    price: "₹299",
    description:
      "Get access to unlimited movies & shows with a Netflix Premium account at a discounted price.",
    features: [
      "4K Ultra HD Streaming",
      "No Ads, Unlimited Viewing",
      "Supports 4 Screens at Once",
      "Instant Delivery After Purchase",
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Netflix_logo.svg",
    ],
  };

  const addToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row  text-white p-6 rounded-lg ">
        {/* Product Images */}
        <div className="md:w-1/2 flex flex-col items-center">
          {/* Main Image */}
          <img
            src={product.images[selectedImage]}
            alt={product.name}
        
            className="rounded shadow-lg  h-[300px] w-[300px] "
          />

          {/* Image Thumbnails */}
          <div className="flex space-x-4 mt-4">
            {product.images.map((img, index) => (
              <button key={index} onClick={() => setSelectedImage(index)}>
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
              
                  className={`rounded-lg border-2 w-[70px] h-[70px] transition-all duration-300 ${
                    selectedImage === index ? "border-[#C27AFF] scale-110" : "border-transparent opacity-70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-4xl font-extrabold text-[#C27AFF] tracking-wide">{product.name}</h1>

          {/* Price Section */}
          <div className="mt-3 text-3xl font-bold bg-gradient-to-r from-[#C27AFF] to-[#A05BD3] text-transparent bg-clip-text">
            {product.price}
          </div>

          <p className="text-gray-300 mt-3 leading-relaxed tracking-wide">{product.description}</p>

          {/* Features */}
          <div className="mt-6 space-y-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center text-lg">
                <CheckCircle className="text-[#C27AFF] mr-2" size={22} />
                <span className="font-medium text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4 items-center ">
            <button
              className="flex items-center bg-[#503277] hover:bg-[#402066] text-white font-bold py-3 px-12 rounded-full transition-all duration-300 shadow-md cursor-pointer"
              onClick={addToCart}
            >
              <ShoppingCart className="mr-2" size={20} />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
