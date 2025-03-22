import React from "react";
import { UserRound, ShoppingCart, Package } from "lucide-react";
import { ShieldCheck, BadgeCheck, Tags, ArrowRight } from "lucide-react";
const Featers = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Transactions",
      description:
        "Bank-grade security for all your purchases with end-to-end encryption",
      color: "from-[#500150] via-[#42026d] to-[#031877]",
    },
    {
      icon: BadgeCheck,
      title: "Verified Services",
      description: "Authentic subscriptions verified by our expert team",
      color: "from-[#03464d] via-[#025d42] to-[#024d6d]",
    },
    {
      icon: Tags,
      title: "Best Discounts",
      description:
        "Get exclusive deals and save up to 70% on premium subscriptions",
      color: "from-[#5d0101] via-[#6d0242] to-[#4d026d]",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center flex-col bg-gradient-to-tr from-[#160A25] via-[#180A25] to-[#0D0F29] pt-12">
      <div className="flex justify-center items-center flex-col">
        <div className="max-w-4xl text-center w-full">
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl mb-8">
            How to purchase
          </h1>
          <p className="text-xl font-mono text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            distinctio porro et molestiae quaerat laboriosam saepe ut nesciunt,
          </p>
        </div>
        <div className="relative flex w-full justify-between items-center my-12 gap-4">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"></div>
          <div className="relative w-32 h-32 max-lg:w-24 max-lg:h-24 max-md:w-20 max-md:h-20 max-sm:w-16 max-sm:h-16 bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] rounded-full flex justify-center items-center z-10">
            <UserRound className="text-white size-12 max-lg:size-10 max:md-size-8 max-sm:size-6" />
          </div>
          <div className="relative w-32 h-32 max-lg:w-24 max-lg:h-24 max-md:w-20 max-md:h-20 max-sm:w-16 max-sm:h-16  bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] rounded-full flex justify-center items-center z-10">
            <ShoppingCart className="text-white size-12 max-lg:size-10 max:md-size-8 max-sm:size-6" />
          </div>

          <div className="relative w-32 h-32 max-lg:w-24 max-lg:h-24 max-md:w-20 max-md:h-20 max-sm:w-16 max-sm:h-16 bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] rounded-full flex justify-center items-center z-10">
            <Package className="text-white size-12 max-lg:size-10 max:md-size-8 max-sm:size-6" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full my-20">
        <div className="w-full  max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 xl:gap-12">
            <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl text-[#A92EDF] font-semibold">
                Why Choose Us
              </h2>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white">
                The Most Trusted Subscription Platform
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl lg:pr-8 mx-auto lg:mx-0">
                Discover why thousands of users trust us for their subscription
                needs. Get instant access to premium services at unbeatable
                prices.
              </p>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#0C1B44] rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300 group flex-1 min-h-[200px]"
                  >
                    <div
                      className={`bg-gradient-to-tr ${feature.color} w-fit p-3 rounded-2xl mb-4`}
                    >
                      <feature.icon className="text-white size-6 sm:size-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                      {feature.description}
                    </p>
                  
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full p-12  justify-center items-center flex-col">
        <div className="max-w-4xl text-center w-full">
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl mb-8">
            A Simple and Easy to Purchase The Best Subscription at Lowest Price
          </h1>
          <p className="text-xl font-mono text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            distinctio porro et molestiae quaerat laboriosam saepe ut nesciunt,
          </p>
          <button className="w-64 mt-12 rounded-2xl text-2xl h-16 hover:scale-[1.02] cursor-pointer bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] px-6">Get Subscriptions</button>
        </div>
      </div>
    </div>
  );
};

export default Featers;
