"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const categories = [
  { id: 1, name: "Netflix Premium", img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" },
  { id: 2, name: "YouTube Premium", img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" },
  { id: 3, name: "Spotify Premium", img: "https://www.scdn.co/i/_global/open-graph-default.png" },
  { id: 4, name: "Udemy & Coursera Courses", img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg" },
  { id: 5, name: "Amazon Prime", img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg" },
  { id: 6, name: "Disney+ Hotstar", img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg" },
];

// Duplicate the categories to create an infinite effect
const duplicatedCategories = [...categories, ...categories];

const Category = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const itemWidth = slider.scrollWidth / 2; // Get half width
    const duration = 15; // Speed of animation

    gsap.to(slider, {
      x: `-${itemWidth}px`,
      duration: duration,
      ease: "linear",
      repeat: -1,
      onComplete: () => {
        gsap.set(slider, { x: 0 }); // Reset position when animation completes
      },
    });
  }, []);

  return (
    <div className="py-10 px-6 overflow-hidden relative">
      <h1 className="text-center font-bold text-4xl max-md:text-3xl text-white mb-8">
        Popular <span className="text-[#C27AFF]">Categories</span>
      </h1>
      <div className="w-full flex items-center overflow-hidden">
        <div ref={sliderRef} className="flex gap-10 min-w-max">
          {duplicatedCategories.map((category, index) => (
            <Link
              href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
            >
              <div className="flex flex-col items-center gap-3 cursor-pointer transform transition duration-300 hover:scale-105">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-[100px] h-[100px] max-md:w-[80px] max-md:h-[80px] object-contain bg-white p-2 rounded-full border-2 border-gray-400 shadow-lg"
                />
                <h3 className="text-lg font-semibold max-sm:text-sm text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
