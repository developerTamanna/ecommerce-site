'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.svg" alt="Car Doctor" className="w-10 h-10" />

          <span className="font-bold text-xl text-gray-800">Car Doctor</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Icons + Button */}
        <div className="flex items-center space-x-5">
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
      </div>
    </header>
  );
};

export default Navbar;
