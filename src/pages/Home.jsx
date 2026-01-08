// src/App.js
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Star,
  Heart,
  Home,
  Building2,
  DollarSign,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/img1.webp')] bg-cover bg-center filter brightness-50"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-2xl md:text-7xl font-bold mb-4"
            variants={fadeInUp}
          >
            Find Your Dream Home
          </motion.h1>
          <motion.p
            className="text-[14px] md:text-2xl mb-8"
            variants={fadeInUp}
          >
            Discover the perfect property in your ideal location
          </motion.p>
          <motion.div
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-full p-1 sm:p-2 flex items-center"
            variants={fadeInUp}
          >
            <MapPin className="text-white ml-4 sm:w-5 sm:h-5 w-3 h-3" />
            <input
              type="text"
              placeholder="Enter city, neighborhood, or ZIP code"
              className="flex-grow bg-transparent text-white placeholder-white/70 px-2 py-1 sm:px-4 sm:py-2 focus:outline-none text-[13px]"
            />
            <button className="bg-blue-600 text-[13px] sm:text-[15px] text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full flex items-center">
              <Search className="mr-2" size={18} />
              Search
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Featured Properties
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "/images/img2.webp",
                title: "Luxury Villa",
                price: "$2,500,000",
                location: "Beverly Hills, CA",
                beds: 5,
                baths: 4,
              },
              {
                img: "/images/img3.webp",
                title: "Modern Apartment",
                price: "$850,000",
                location: "New York, NY",
                beds: 3,
                baths: 2,
              },
              {
                img: "/images/img11.webp",
                title: "Beachfront Condo",
                price: "$1,200,000",
                location: "Miami, FL",
                beds: 4,
                baths: 3,
              },
              {
                img: "/images/img6.webp",
                title: "Beachfront Condo",
                price: "$1,200,000",
                location: "Miami, FL",
                beds: 4,
                baths: 3,
              },
            ].map((property, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {property.title}
                  </h3>
                  <p className="text-blue-600 font-bold text-xl mb-2">
                    {property.price}
                  </p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2" />
                    {property.location}
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center">
                      <Home size={16} className="mr-2" /> {property.beds} Beds
                    </span>
                    <span className="flex items-center">
                      <Building2 size={16} className="mr-2" /> {property.baths}{" "}
                      Baths
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search size={40} />,
                title: "Easy Search",
                desc: "Intuitive tools to find your perfect home",
              },
              {
                icon: <Heart size={40} />,
                title: "Personalized Matches",
                desc: "Tailored recommendations based on your preferences",
              },
              {
                icon: <DollarSign size={40} />,
                title: "Best Deals",
                desc: "Competitive pricing and exclusive offers",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-md"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-blue-600 mb-4 mx-auto flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                text: "Found my dream home in no time! The process was seamless.",
                rating: 5,
              },
              {
                name: "Jane Smith",
                text: "Excellent service and great property options. Highly recommend!",
                rating: 5,
              },
              {
                name: "Mike Johnson",
                text: "Professional team that made buying easy and stress-free.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md"
                variants={fadeInUp}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-4xl font-bold mb-4" variants={fadeInUp}>
            Ready to Find Your New Home?
          </motion.h2>
          <motion.p className="text-xl mb-8" variants={fadeInUp}>
            Get started today and let us help you on your journey.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
