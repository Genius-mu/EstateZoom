// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Company: ["About Us", "Careers", "Blog", "Press", "Partners"],
    Services: [
      "Buy a Home",
      "Rent a Home",
      "Sell Your Home",
      "Property Management",
      "Mortgage Calculator",
    ],
    Resources: [
      "Guides & Tips",
      "Neighborhood Info",
      "Market Reports",
      "FAQ",
      "Contact Support",
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Licenses",
      "Accessibility",
    ],
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl">
                <Home size={32} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  DreamHome
                </h2>
                <p className="text-sm text-gray-400">Find Your Perfect Place</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect home. We connect
              dreams with addresses across the nation.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="p-3 bg-gray-700 rounded-xl hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-gray-700 rounded-xl hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-gray-700 rounded-xl hover:bg-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-gray-700 rounded-xl hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-300">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & Newsletter */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-400" />
                <span className="text-gray-400">
                  123 Dream Street, Real Estate City, RC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400" />
                <span className="text-gray-400">hello@dreamhome.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for exclusive listings and market insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 DreamHome. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp
              size={24}
              className="text-gray-400 group-hover:text-white"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
