import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  title: string;
  path: string;
  description?: string;
  image?: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 px-4 py-2 text-auzrix-gray hover:text-auzrix-white transition-colors"
      >
        <span className="font-cinzel">{title}</span>
        <ChevronDown className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-48 bg-auzrix-black border border-auzrix-gray/20 rounded-lg shadow-xl z-50"
          >
            <div className="p-2">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 rounded-lg hover:bg-auzrix-white/5 text-auzrix-gray hover:text-auzrix-white transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};