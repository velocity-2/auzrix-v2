import React from 'react';
import { Instagram, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = {
  shop: [
    { name: 'All Products', path: '/shop' },
    { name: 'Featured', path: '/shop/featured' },
    { name: 'New Arrivals', path: '/shop/new' },
    { name: 'Best Sellers', path: '/shop/best-sellers' }
  ],
  collections: [
    { name: 'Clothing', path: '/collections/clothing' },
    { name: 'Apps', path: '/collections/apps' },
    { name: 'Notion Templates', path: '/collections/templates' },
    { name: 'Limited Edition', path: '/collections/limited' }
  ],
  support: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Shipping', path: '/shipping' },
    { name: 'Returns', path: '/returns' }
  ]
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-auzrix-black text-auzrix-white border-t border-auzrix-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="block">
              <h3 className="text-2xl font-cinzel font-black tracking-[0.3em]">AUZRIX</h3>
            </Link>
            <p className="text-auzrix-gray font-secondary max-w-sm">
              Forge your path. Build your legacy. Join our community of warriors dedicated to growth and excellence.
            </p>
            {/* Newsletter Signup */}
            <div className="pt-4">
              <h4 className="text-sm font-cinzel font-semibold mb-3">JOIN THE LEGION</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-auzrix-black border border-auzrix-gray/20 rounded-md focus:border-auzrix-white/40 transition-colors text-sm"
                />
                <button className="btn-auzrix">
                  <span className="btn-content">Join</span>
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 grid grid-cols-3 gap-8">
            {/* Shop Links */}
            <div>
              <h4 className="text-sm font-cinzel font-semibold mb-4">SHOP</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-auzrix-gray hover:text-auzrix-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections Links */}
            <div>
              <h4 className="text-sm font-cinzel font-semibold mb-4">COLLECTIONS</h4>
              <ul className="space-y-3">
                {footerLinks.collections.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-auzrix-gray hover:text-auzrix-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-cinzel font-semibold mb-4">SUPPORT</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-auzrix-gray hover:text-auzrix-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-cinzel font-semibold">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-auzrix-gray text-sm">
                <Mail className="w-4 h-4" />
                <span>support@auzrix.com</span>
              </li>
              <li className="flex items-center gap-3 text-auzrix-gray text-sm">
                <Phone className="w-4 h-4" />
                <span>(385) 414-6571</span>
              </li>
              <li className="flex items-center gap-3 text-auzrix-gray text-sm">
                <MapPin className="w-4 h-4" />
                <span>Utah, Kearns</span>
              </li>
              <li>
                <a 
                  href="https://instagram.com/auzrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-auzrix-gray hover:text-auzrix-white transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@auzrix</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-auzrix-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center items-center gap-2 text-sm text-auzrix-gray">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-auzrix-white animate-pulse" />
            <span>by Auzrix</span>
          </div>
        </div>
      </div>
    </footer>
  );
};