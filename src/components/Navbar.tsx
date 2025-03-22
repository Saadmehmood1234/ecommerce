"use client";
import { Home, Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-[#FFF7E2] text-[#482307] p-4">
      {/* Desktop Navbar */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">MyStore</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-[#A1724E]">Home</Link>
          <Link href="#" className="hover:text-[#A1724E]">Shop</Link>
          <Link href="#" className="hover:text-[#A1724E]">Cart</Link>
          <Link href="#" className="hover:text-[#A1724E]">Account</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="text-[#482307]" />
        </button>
      </div>

      {/* Mobile Navbar (Footer-like Layout) */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-[#FFF7E2] text-[#482307] p-4 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
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