"use client";
import { Home, Search, ShoppingCart, User, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="p-4">
      <div className=" flex items-center bg-[#1F133D] justify-between fixed   z-[110] px-4 py-2 drop-shadow-md w-[90vw] top-6 left-[50%] translate-[-50%]  rounded-2xl h-[60px] mt-5">
        <div className="text-2xl font-bold">
          <h1 className="text-[#C27AFF] text-3xl">
            Dark<span className="text-white">Sale</span>
          </h1>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <form action="" className="flex items-center justify-center relative">
            <Search className="absolute left-2 text-[#6d6d6dc4]" size={20} />
            <input
              type="text"
              placeholder="Tinder, Amazon Prime, etc.."
              className="h-[40px] outline-none border-none bg-[#310557] pl-8 rounded text-white w-[350px]"
            />
          </form>
          <Link href="/auth/register">
            <button className="text-white bg-[#310557] w-[120px] h-[39px] font-bold rounded  cursor-pointer hover:bg-[#1F133D] ">
              Sign up
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-[#1F133D] text-white z-[110] p-4 shadow-lg ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-around items-center">
          <Link href="#" className="flex flex-col items-center">
            <Home className="text-[#503277]" />
            <span>Home</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <User className="text-[#503277]" />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
