'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.svg" alt="Car Doctor" className="w-10 h-10" />
          <span className="font-bold text-xl text-gray-800">Car Doctor</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:text-red-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons + Appointment */}
        <div className="hidden md:flex items-center space-x-5">
          <button>
            <i className="ri-shopping-bag-line text-xl"></i>
          </button>
          <button>
            <i className="ri-search-line text-xl"></i>
          </button>
          <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md font-semibold hover:bg-red-500 hover:text-white transition">
            Appointment
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block text-gray-700 font-medium hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center space-x-4 mt-4">
            <button>
              <i className="ri-shopping-bag-line text-xl"></i>
            </button>
            <button>
              <i className="ri-search-line text-xl"></i>
            </button>
          </div>

          <button className="w-full border border-red-500 text-red-500 px-4 py-2 rounded-md font-semibold hover:bg-red-500 hover:text-white transition mt-4">
            Appointment
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
