"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserRound, ShoppingCart, Package } from "lucide-react";
import { ShieldCheck, BadgeCheck, Tags } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(circlesRef.current, {
        duration: 1,
        scale: 0,
        rotate: 180,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: circlesRef.current[0],
          start: "top center+=100",
        },
      });
      gsap.from(titleRef.current, {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power4.out",
      });
      featureCardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          duration: 0.8,
          opacity: 0,
          y: 50,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
          },
          delay: i * 0.1,
        });
      });
      gsap.from(ctaRef.current, {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top center+=150",
        },
      });
      featureCardsRef.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.02, background: "rgba(12, 27, 68, 0.8)" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, background: "#0C1B44" });
        });
      });
    });

    return () => ctx.revert();
  }, []);

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
      <div className="flex mx-1 justify-center items-center flex-col">
        <div className="max-w-4xl text-center w-full" ref={titleRef}>
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl mb-8">
            How to purchase
          </h1>
          <p className="text-xl font-mono text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            distinctio porro et molestiae quaerat laboriosam saepe ut nesciunt,
          </p>
        </div>
        <div className="relative flex w-full justify-between items-center my-12 gap-4">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#A92EDF]"></div>
          {[UserRound, ShoppingCart, Package].map((Icon, index) => (
            <div
              key={index}
              ref={(el) => {
                circlesRef.current[index] = el;
              }}
              className="relative w-32 cursor-pointer h-32 flex justify-center items-center bg-[#0C1B44] rounded-full"
            >
              <Icon className="text-[#A92EDF] size-12" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center w-full my-10 max-md:my-4">
        <div className="w-full max-w-7xl mx-auto px-4">
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
                    ref={(el) => {
                      if (el) featureCardsRef.current[index] = el;
                    }}
                    className={`bg-gradient-to-tr ${feature.color} w-fit p-3 rounded-2xl mb-4`}
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
      <div
        className="flex w-full sm:p-12 p-4 py-8 justify-center items-center flex-col"
        ref={ctaRef}
      >
        <div className="max-w-4xl text-center w-full">
          <h1 className="text-5xl w-full max-lg:text-4xl max-md:text-3xl mb-8">
            The Best Subscription at Lowest Price
          </h1>
          <button className="w-64 mt-12 rounded-2xl text-2xl h-16 hover:scale-[1.02] cursor-pointer bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] px-6">
            Get Subscriptions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
