import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { NavTabs } from './NavTabs';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-auzrix-black border-b border-auzrix-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-auzrix-white text-2xl font-cinzel font-black tracking-[0.3em]">
              AUZRIX
            </Link>
          </div>
          
          <NavTabs />

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="text-auzrix-gray hover:text-auzrix-white transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link 
              to="/shop"
              className="btn-auzrix btn-glow"
            >
              <span className="btn-content">
                SHOP NOW
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};