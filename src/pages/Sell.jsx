// src/pages/Sell.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  DollarSign,
  TrendingUp,
  Calculator,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Users,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const SellPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: send to backend / email service
    alert("Thank you! We'll contact you shortly with a free valuation.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Updated with background image */}
      <section className="relative bg-[url('/images/img1.webp')] bg-cover bg-center bg-[rgba(0,0,0,.5)] bg-blend-darken py-30">
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tight mb-8 drop-shadow-2xl"
          >
            Sell Your Home with Confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 opacity-95 drop-shadow-lg leading-relaxed"
          >
            Get the best price, faster. Expert agents, powerful marketing, and
            zero stress.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="bg-white text-indigo-700 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group shadow-xl backdrop-blur-sm">
              Get Free Valuation
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition"
              />
            </button>
            <button className="border-2 border-white/80 bg-white/10 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 shadow-lg">
              <Phone size={24} />
              Call an Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              {
                icon: <TrendingUp size={40} />,
                title: "98%",
                desc: "Homes Sold Above Asking",
              },
              {
                icon: <Clock size={40} />,
                title: "18 Days",
                desc: "Average Days on Market",
              },
              {
                icon: <Users size={40} />,
                title: "10,000+",
                desc: "Happy Sellers",
              },
              {
                icon: <DollarSign size={40} />,
                title: "$2.8B+",
                desc: "In Sales Volume",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-lg text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make selling your home fast, fair, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Free Professional Valuation",
                desc: "Our local experts analyze market data and visit your property to provide an accurate, no-obligation valuation.",
                icon: <Calculator size={48} />,
              },
              {
                step: "2",
                title: "Premium Marketing Launch",
                desc: "Professional photos, virtual tours, targeted ads, and listing on top portals to attract qualified buyers.",
                icon: <Star size={48} />,
              },
              {
                step: "3",
                title: "Close with Confidence",
                desc: "We handle negotiations, paperwork, and coordination — you get the best price with minimal stress.",
                icon: <Shield size={48} />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-10 shadow-xl text-center hover:shadow-2xl transition"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
                  <span className="text-4xl font-black">{item.step}</span>
                </div>
                <div className="text-indigo-600 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Valuation Form */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Get Your Free Home Valuation Today
              </h2>
              <p className="text-xl text-gray-600">
                No obligation • Instant estimate • Expert follow-up within 24
                hours
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg"
              />
              <input
                type="text"
                name="address"
                placeholder="Property Address"
                required
                value={formData.address}
                onChange={handleChange}
                className="px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg"
              />
              <select
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
                className="px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg"
              >
                <option value="">Property Type</option>
                <option>House</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Apartment</option>
                <option>Multi-Family</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your property (optional)"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="md:col-span-2 px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg resize-none"
              />

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all inline-flex items-center gap-4"
                >
                  Get My Free Valuation
                  <ChevronRight size={28} />
                </button>
              </div>
            </form>

            <div className="mt-12 flex justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-500" />
                <span>No Spam</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-500" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to Sell at the Best Price?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of homeowners who sold faster and for more with
            DreamHome.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-4"
            >
              <Phone size={28} />
              Call Now: (555) 123-4567
            </a>
            <a
              href="mailto:sell@dreamhome.com"
              className="border-2 border-white px-10 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-4"
            >
              <Mail size={28} />
              Email an Agent
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;
