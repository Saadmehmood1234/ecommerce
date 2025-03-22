import React from "react";

const Featers = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col p-6 bg-gradient-to-tr from-[#160A25] via-[#180A25] to-[#0D0F29]">
      <div className="flex justify-center items-center flex-col">
        <div className="max-w-4xl text-center w-full">
          <h1 className="text-5xl mb-8">How It Works</h1>
          <p className="text-xl font-mono text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            distinctio porro et molestiae quaerat laboriosam saepe ut nesciunt,
          </p>
        </div>
        <div className="relative flex w-full justify-between items-center mt-12 gap-4">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"></div>
          <div className="relative w-32 h-32 bg-white rounded-full flex justify-center items-center z-10">
            <span className="text-black text-xl">1</span>
          </div>
          <div className="relative w-32 h-32 bg-white rounded-full flex justify-center items-center z-10">
            <span className="text-black text-xl">2</span>
          </div>
          <div className="relative w-32 h-32 bg-white rounded-full flex justify-center items-center z-10">
            <span className="text-black text-xl">3</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="max-w-4xl text-center w-full">
          <h1 className="text-5xl mb-8">
            A Simple and Easy to Purchase The Best Subscription at Lowest Price
          </h1>
          <p className="text-xl font-mono text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            distinctio porro et molestiae quaerat laboriosam saepe ut nesciunt,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featers;
