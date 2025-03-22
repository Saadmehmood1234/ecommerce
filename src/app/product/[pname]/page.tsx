"use client";
import React, { useState } from "react";
import { ShoppingCart, CheckCircle } from "lucide-react";
import Image from "next/image";

const ProductDetail = () => {
  const [addedToCart, setAddedToCart] = useState(false);

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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg", // Netflix Logo as an example
  };

  const addToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 sec
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-[#1F133D] text-white p-6 rounded-lg shadow-lg">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-[#C27AFF]">{product.name}</h1>
          <p className="text-xl font-semibold mt-2">{product.price}</p>
          <p className="text-gray-300 mt-3">{product.description}</p>

          {/* Features */}
          <ul className="mt-4 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-[#C27AFF] mr-2" size={20} />
                {feature}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-[#C27AFF] hover:bg-[#A05BD3] text-white font-bold py-2 px-6 rounded">
              Buy Now
            </button>
            <button
              className={`flex items-center bg-[#503277] hover:bg-[#402066] text-white font-bold py-2 px-6 rounded ${
                addedToCart ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={addToCart}
              disabled={addedToCart}
            >
              <ShoppingCart className="mr-2" size={18} />
              {addedToCart ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
