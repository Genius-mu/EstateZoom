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
  Shield,
  CreditCard,
  Truck,
  HeadphonesIcon,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Buy a Home", href: "#" },
    { label: "Rent a Home", href: "#" },
    { label: "Sell Your Home", href: "#" },
    { label: "Mortgage Calculator", href: "#" },
    { label: "Neighborhood Guides", href: "#" },
    { label: "Market Reports", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Blog", href: "#" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const trustFeatures = [
    {
      icon: <Shield size={28} />,
      title: "Secure Transactions",
      desc: "Bank-level encryption",
    },
    {
      icon: <CreditCard size={28} />,
      title: "No Hidden Fees",
      desc: "Transparent pricing",
    },
    {
      icon: <Truck size={28} />,
      title: "Fast Process",
      desc: "Quick approvals",
    },
    {
      icon: <HeadphonesIcon size={28} />,
      title: "24/7 Support",
      desc: "Always here to help",
    },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      {/* Trust Bar - Above main footer */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-4 bg-white/10 backdrop-blur rounded-2xl mb-4">
                  <div className="text-blue-300">{feature.icon}</div>
                </div>
                <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Description - Wider column */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl">
                <Home size={36} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  DreamHome
                </h2>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  Find Your Perfect Place
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Leading real estate platform connecting buyers, sellers, and
              renters with their dream properties. Trusted by millions across
              the country.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-300">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Contact */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-300">
              Get in Touch
            </h3>
            <div className="space-y-5 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin
                  size={22}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <p className="text-gray-400">
                  123 Dream Street
                  <br />
                  Real Estate City, RC 12345
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={22} className="text-blue-400" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-white transition"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={22} className="text-blue-400" />
                <a
                  href="mailto:hello@dreamhome.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  hello@dreamhome.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <h4 className="font-medium mb-3">Stay Updated</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl font-medium hover:shadow-lg transition">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Support Links at bottom of columns */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {supportLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Final Bottom Bar */}
      <div className="bg-black/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 DreamHome. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all group"
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
