import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  title: string;
  path: string;
  description: string;
  image: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 nav-link font-cinzel text-auzrix-gray hover:text-auzrix-white transition-colors">
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-[480px] bg-auzrix-black border border-auzrix-gray/20 rounded-lg shadow-xl z-50 mt-2"
          >
            <div className="p-4 grid grid-cols-1 gap-2">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-auzrix-white/5 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-auzrix-white">{item.title}</h3>
                    <p className="text-sm text-auzrix-gray">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};