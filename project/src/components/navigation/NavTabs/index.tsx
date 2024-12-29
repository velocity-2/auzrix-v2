import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';
import { shopItems } from './data';

export const NavTabs: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink 
        to="/"
        className={({ isActive }) => `
          nav-link font-cinzel text-auzrix-gray hover:text-auzrix-white transition-colors
          ${isActive ? 'text-auzrix-white after:w-full' : ''}
        `}
      >
        HOME
      </NavLink>

      <NavLink 
        to="/about"
        className={({ isActive }) => `
          nav-link font-cinzel text-auzrix-gray hover:text-auzrix-white transition-colors
          ${isActive ? 'text-auzrix-white after:w-full' : ''}
        `}
      >
        ABOUT
      </NavLink>

      <NavDropdown title="SHOP" items={shopItems} />

      <NavLink 
        to="/contact"
        className={({ isActive }) => `
          nav-link font-cinzel text-auzrix-gray hover:text-auzrix-white transition-colors
          ${isActive ? 'text-auzrix-white after:w-full' : ''}
        `}
      >
        CONTACT
      </NavLink>
    </nav>
  );
};