"use client";
import { Home, Search, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="p-4">
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <h1 className="text-[#C27AFF] text-3xl">
            Dark<span className="text-white">Sale</span>
          </h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <form action="" className="flex items-center justify-center relative">
            <Search className="absolute left-2 text-[#6d6d6dc4]" size={20} />
            <input
              type="text"
              placeholder="Tinder, Amazon Prime, etc.."
              className="h-[40px] outline-none border-none bg-[#1F133D] pl-8 rounded text-white w-[350px]"
            />
          </form>
          <Link href="/auth/register">
            <button className="text-white bg-[#1F133D] w-[120px] h-[39px] font-bold rounded  cursor-pointer hover:bg-[#C27AFF] ">
              Sign up
            </button>
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="text-[#482307]" />
        </button>
      </div>
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-[#FFF7E2] text-[#482307] p-4 shadow-lg ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-around items-center">
          <Link href="#" className="flex flex-col items-center">
            <Home className="text-[#A1724E]" />
            <span>Home</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <Search className="text-[#A1724E]" />
            <span>Search</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <ShoppingCart className="text-[#A1724E]" />
            <span>Cart</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <User className="text-[#A1724E]" />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
