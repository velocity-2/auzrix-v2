import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  title: string;
  path: string;
  items?: Array<{ title: string; path: string }>;
}

interface NavMobileProps {
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
}

export const NavMobile: React.FC<NavMobileProps> = ({ items, isOpen, onToggle }) => {
  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden p-2 text-auzrix-gray hover:text-auzrix-white transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-auzrix-black border-l border-auzrix-gray/20 shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-end mb-6">
                <button
                  onClick={onToggle}
                  className="p-2 text-auzrix-gray hover:text-auzrix-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-6">
                {items.map((item) => (
                  <div key={item.path} className="space-y-2">
                    <Link
                      to={item.path}
                      onClick={onToggle}
                      className="block font-cinzel text-lg font-bold text-auzrix-white hover:text-auzrix-gray transition-colors"
                    >
                      {item.title}
                    </Link>
                    {item.items && (
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={onToggle}
                            className="block text-auzrix-gray hover:text-auzrix-white transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};