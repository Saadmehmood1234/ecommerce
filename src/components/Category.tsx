"use client";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const categories = [
  { id: 1, name: "Netflix Premium", img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" },
  { id: 2, name: "YouTube Premium", img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" },
  { id: 3, name: "Spotify Premium", img: "https://www.scdn.co/i/_global/open-graph-default.png" },
  { id: 4, name: "Udemy & Coursera Courses", img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg" },
  { id: 5, name: "Amazon Prime", img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg" },
  { id: 6, name: "Disney+ Hotstar", img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg" },
];

const Category = () => {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]); // ✅ Correctly typed ref

  useGSAP(() => {
    gsap.fromTo(
      categoryRefs.current.filter(Boolean), // ✅ Ensure null values are removed
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="py-10 px-6">
      <h1 className="text-center font-bold text-4xl max-md:text-3xl text-white mb-8">
        Popular <span className="text-[#C27AFF]">Categories</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <Link href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`} key={category.id}>
            <div
              ref={(el) => {
                categoryRefs.current[index] = el;
              }}
              className="flex flex-col items-center gap-3 cursor-pointer transform transition duration-300 hover:scale-105"
            >
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
  );
};

export default Category;
