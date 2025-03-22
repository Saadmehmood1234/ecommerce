import React from "react";

const categories = [
  {
    id: 1,
    name: "Netflix Premium",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  },

  {
    id: 3,
    name: "YouTube Premium",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
  },
  {
    id: 4,
    name: "Spotify Premium",
    img: "https://www.scdn.co/i/_global/open-graph-default.png",
  },
  {
    id: 5,
    name: "Udemy & Coursera Courses",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
  },
  {
    id: 31,
    name: "YouTube Premium",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
  },
  {
    id: 41,
    name: "Spotify Premium",
    img: "https://www.scdn.co/i/_global/open-graph-default.png",
  },
  {
    id: 51,
    name: "Udemy & Coursera Courses",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
  },
];

const Category = () => {
  return (
    <div className="flex flex-col gap-3 m-10">
      <h1 className="text-center font-bold text-3xl text-[#fff] ">
        Categories
      </h1>
      <div className="xl:w-[95%] m-auto  flex flex-wrap gap-8  justify-center">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center gap-2 cursor-pointer">
            <img
              src={category.img}
              alt={category.name}
              className="w-[120px] h-[120px] object-cover rounded-full border-2 border-gray-300 shadow-md "
            />
            <h3 className="text-sm font-medium text-[#fff]">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
