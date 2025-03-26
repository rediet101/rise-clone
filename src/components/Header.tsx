"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-3 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Rise Logo" width={90} height={50} />
      </div>

      {/* Desktop Navigation (visible on larger screens) */}
      <nav className="hidden md:flex space-x-6 ml-6">
        <Link href="/" className="text-gray-700 hover:text-gray-900 text-lg font-bold">
          Home
        </Link>
        <Link href='/About' className="text-gray-700 hover:text-gray-900 text-lg font-bold">
          About
        </Link>
        <Link href="/products" className="text-gray-700 hover:text-gray-900 text-lg font-bold">
          Product
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900 text-lg font-bold">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button (visible on smaller screens) */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none p-2 rounded-full"
        style={{ backgroundColor: '#3d628c' }}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Navigation (visible when menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 right-0 bg-white shadow-md w-full">
          <nav className="flex flex-col space-y-3 p-3 items-center">
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-lg font-bold">
              Home
            </Link>
            <Link href="/About" className="text-gray-700 hover:text-gray-900 text-lg font-bold">
              About
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900 text-lg font-bold">
              Product
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 text-lg font-bold">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;