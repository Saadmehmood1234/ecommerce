"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const slides = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
      text: "Get Netflix Premium at the Lowest Price!",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/weblanding/prime/hero/PrimeVideo_Logo.png",
      text: "Amazon Prime Membership - Limited Offer!",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
      text: "YouTube Premium at Unbeatable Prices!",
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
      text: "Top Udemy & Coursera Courses at Huge Discounts!",
    },
    {
      id: 5,
      img: "https://www.scdn.co/i/_global/open-graph-default.png",
      text: "Spotify Premium for Less - Enjoy Unlimited Music!",
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <header className="relative w-full mt-10">
      <Slider {...settings} className="md:w-[90vw] m-auto rounded-2xl">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[400px] rounded-2xl ">
            <img
              src={slide.img}
              alt="Product Offer"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
              <h1 className="text-4xl font-bold">{slide.text}</h1>
              <button className="mt-4 px-6 py-3 bg-[#180F2F] cursor-pointer text-white font-semibold rounded-md hover:bg-[#49315e] transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </header>
  );
};

export default Header;
