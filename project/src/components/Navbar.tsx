import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-auzrix-black border-b border-auzrix-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-auzrix-white text-2xl font-cinzel font-black tracking-[0.3em]">
              AUZRIX
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-auzrix-gray hover:text-auzrix-white transition-colors font-cinzel tracking-wider">Shop</Link>
            <Link to="/collections" className="text-auzrix-gray hover:text-auzrix-white transition-colors font-cinzel tracking-wider">Collections</Link>
            <Link to="/about" className="text-auzrix-gray hover:text-auzrix-white transition-colors font-cinzel tracking-wider">About</Link>
            <Link to="/contact" className="text-auzrix-gray hover:text-auzrix-white transition-colors font-cinzel tracking-wider">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-auzrix-gray hover:text-auzrix-white transition-colors">
              <Search className="h-6 w-6" />
            </button>
            <Link to="/cart" className="text-auzrix-gray hover:text-auzrix-white transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}