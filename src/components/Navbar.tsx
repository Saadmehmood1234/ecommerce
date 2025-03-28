"use client";
import { Home, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#1F133D] shadow-lg">

      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer">
            <h1 className="text-[#C27AFF] text-3xl">
              Dark<span className="text-white">Sale</span>
            </h1>
          </div>
        </Link>
        <div className="hidden md:flex items-center relative w-[400px]">
          <Search className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tinder, Amazon Prime, etc.."
            className="w-full h-10 bg-[#310557] text-white rounded-lg pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#A92EDF]"
          />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/cart">
            <ShoppingCart className="text-white cursor-pointer hover:text-[#C27AFF] transition-all" size={24} />
          </Link>
          <Link href="/auth/signin">
            <button className="text-white font-bold bg-[#A92EDF] hover:bg-[#8e5ea3] px-5 py-2 rounded-lg cursor-pointer transition-all">
              Sign In
            </button>
          </Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
      <div className={`md:hidden transition-all ${isMobileMenuOpen ? "block" : "hidden"} bg-[#1F133D]`}>
        <div className="flex flex-col items-center py-4 gap-4">
          <Link href="/" className="text-white hover:text-[#C27AFF] transition-all">Home</Link>
          <Link href="/cart" className="text-white hover:text-[#C27AFF] transition-all">Cart</Link>
          <Link href="/auth/signin">
            <button className="text-white font-bold bg-[#C27AFF] px-5 py-2 rounded-lg hover:bg-[#9C5EC3] transition-all">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1F133D] text-white p-4 shadow-lg flex justify-around">
        <Link href="/" className="flex flex-col items-center">
          <Home className="text-[#C27AFF]" size={24} />
          <span>Home</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center">
          <ShoppingCart className="text-[#C27AFF]" size={24} />
          <span>Cart</span>
        </Link>
        <Link href="/account" className="flex flex-col items-center">
          <User className="text-[#C27AFF]" size={24} />
          <span>Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
