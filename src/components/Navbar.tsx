"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import {
  Home,
  Phone,
  User,
  ShoppingCart,
  ChevronDown,
  MenuIcon,
} from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = false;

  return (
    <nav className="bg-[#FFF4E6] border-b-2 border-[#FF6B35] text-[#333333] shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between relative">
        {/* LEFT LINKS - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="flex items-center text-[#444444] hover:text-[#FF6B35] transition-colors duration-300 group"
          >
            <Home
              className="mr-2 text-[#FF6B35] opacity-70 group-hover:opacity-100"
              size={20}
            />
            Homepage
          </Link>
          <Link
            href="/menu"
            className="flex items-center text-[#444444] hover:text-[#FF6B35] transition-colors duration-300 group"
          >
            <MenuIcon
              className="mr-2 text-[#FF6B35] opacity-70 group-hover:opacity-100"
              size={20}
            />
            Menu
          </Link>
          <Link
            href="/contact"
            className="flex items-center text-[#444444] hover:text-[#FF6B35] transition-colors duration-300 group"
          >
            Contact
          </Link>
        </div>

        {/* LOGO */}
        <div className="text-3xl font-bold text-center flex-grow md:flex-grow-0">
          <Link
            href="/"
            className="text-[#FF6B35] hover:text-[#FF8A5B] transition-colors duration-300"
          >
            Pizza Hut
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Menu />
        </div>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Phone Contact */}
          <div
            className="flex items-center bg-[#FF6B35]/10 text-[#444444] px-4 py-2 rounded-full cursor-pointer hover:bg-[#FF6B35]/20 transition-all duration-300"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Phone className="mr-2 text-[#FF6B35]" size={16} />
            <span className="text-sm font-medium">123 456 78</span>
            <ChevronDown
              className={`ml-2 text-[#FF6B35] transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              size={16}
            />
          </div>

          {/* Login/Orders */}
          {!user ? (
            <Link
              href="/login"
              className="flex items-center bg-[#FF6B35] text-white px-4 py-2 rounded-full hover:bg-[#FF8A5B] transition-all duration-300 transform hover:scale-105"
            >
              <User className="mr-2" size={20} />
              Login
            </Link>
          ) : (
            <Link
              href="/orders"
              className="flex items-center bg-[#FF6B35] text-white px-4 py-2 rounded-full hover:bg-[#FF8A5B] transition-all duration-300 transform hover:scale-105"
            >
              Orders
            </Link>
          )}

          {/* Cart Icon */}
            <CartIcon  />
      
        </div>

        {/* Phone Dropdown (if needed) */}
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg p-4 z-50">
            <p>Call us at: 123 456 78</p>
            <p>Working Hours: 10am - 10pm</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
