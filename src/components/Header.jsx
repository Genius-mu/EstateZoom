// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Search,
  Heart,
  Phone,
  User,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to add subtle background and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Buy", hasDropdown: true, linkTo: "buy" },
    { name: "Rent", hasDropdown: true, linkTo: "rent" },
    { name: "Sell", hasDropdown: false, linkTo: "sell" },
    {
      name: "Saved Homes",
      icon: <Heart size={18} />,
      hasDropdown: false,
      linkTo: "savedHomes",
    },
    {
      name: "Contact",
      icon: <Phone size={18} />,
      hasDropdown: false,
      linkTo: "contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="relative">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg">
                <Home className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </Link>
            <div>
              <h1
                className={`text-3xl font-extrabold tracking-tight ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                EstateZoom
              </h1>
              <p
                className={`text-xs tracking-wider ${
                  isScrolled ? "text-gray-500" : "text-white/70"
                }`}
              >
                FIND YOUR PERFECT PLACE
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <a
                  href={link.linkTo}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  {link.icon && <span>{link.icon}</span>}
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform group-hover:rotate-180"
                    />
                  )}
                </a>

                {/* Dropdown placeholder (you can expand this later) */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-2xl shadow-2xl py-3 border border-gray-100">
                      <a
                        href="#"
                        className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Houses
                      </a>
                      <a
                        href="#"
                        className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Apartments
                      </a>
                      <a
                        href="#"
                        className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Condos
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className={`p-3 rounded-xl transition-all ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search
                size={24}
                className={isScrolled ? "text-gray-700" : "text-white"}
              />
            </motion.button>

            <motion.button
              className={`p-3 rounded-xl transition-all ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <User
                size={24}
                className={isScrolled ? "text-gray-700" : "text-white"}
              />
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              List Your Property
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                size={32}
                className={isScrolled ? "text-gray-900" : "text-white"}
              />
            ) : (
              <Menu
                size={32}
                className={isScrolled ? "text-gray-900" : "text-white"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white shadow-2xl border-t border-gray-100"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.linkTo}
                  href={link.linkTo}
                  className="flex items-center space-x-4 text-xl font-medium text-gray-800 hover:text-blue-600 py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon && <span>{link.icon}</span>}
                  <span>{link.name}</span>
                </a>
              ))}

              <div className="pt-6 space-y-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-2xl font-semibold shadow-lg">
                  List Your Property
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 hover:border-blue-600 hover:text-blue-600 transition">
                  <User size={22} />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
