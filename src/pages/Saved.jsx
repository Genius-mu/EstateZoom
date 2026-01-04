// src/pages/SavedHomes.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Share2,
  Phone,
  Mail,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Mock saved homes data (in a real app this would come from context/API)
const mockSavedHomes = [
  {
    id: 1,
    price: "$749,000",
    address: "123 Sunset Boulevard, Los Angeles, CA",
    beds: 3,
    baths: 2,
    sqft: 1850,
    image: "/images/home1.webp", // placeholder
    featured: true,
  },
  {
    id: 2,
    price: "$1,250,000",
    address: "456 Ocean Drive, Malibu, CA",
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "/images/home2.webp",
    featured: false,
  },
  {
    id: 3,
    price: "$525,000",
    address: "789 Palm Street, Santa Monica, CA",
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: "/images/home3.webp",
    featured: false,
  },
  {
    id: 4,
    price: "$899,000",
    address: "321 Coastal Avenue, Venice Beach, CA",
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    image: "/images/home4.webp",
    featured: true,
  },
];

const SavedHomesPage = () => {
  const [savedHomes, setSavedHomes] = useState(mockSavedHomes);

  const removeHome = (id) => {
    setSavedHomes(savedHomes.filter((home) => home.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/img6.webp')] bg-cover bg-center bg-[rgba(0,0,0,.3)] bg-blend-darken py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tight mb-8 drop-shadow-2xl"
          >
            Your Saved Homes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 opacity-95 drop-shadow-lg leading-relaxed"
          >
            {savedHomes.length > 0
              ? `You've saved ${savedHomes.length} beautiful properties. Keep track of your favorites and reach out when you're ready to take the next step.`
              : "You haven't saved any homes yet. Start exploring and ❤️ the ones you love!"}
          </motion.p>

          {savedHomes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="bg-white text-indigo-700 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group shadow-xl backdrop-blur-sm">
                Schedule a Tour
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition"
                />
              </button>
              <button className="border-2 border-white/80 bg-white/10 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 shadow-lg">
                <Phone size={24} />
                Contact an Agent
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Saved Homes Grid */}
      {savedHomes.length > 0 ? (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {savedHomes.map((home, i) => (
                <motion.div
                  key={home.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className="relative">
                    <div
                      className="h-64 bg-gray-200 bg-cover bg-center"
                      style={{ backgroundImage: `url(${home.image})` }}
                    />
                    {home.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Featured
                      </div>
                    )}
                    <button
                      onClick={() => removeHome(home.id)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Heart size={20} className="fill-current text-red-500" />
                    </button>
                    <button className="absolute top-16 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">
                      <Share2 size={20} />
                    </button>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-black text-gray-900 mb-3">
                      {home.price}
                    </h3>
                    <p className="text-lg text-gray-700 flex items-center gap-2 mb-6">
                      <MapPin size={20} />
                      {home.address}
                    </p>

                    <div className="flex items-center justify-between text-gray-600 border-t pt-6">
                      <div className="flex items-center gap-2">
                        <Bed size={24} />
                        <span className="font-semibold">{home.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath size={24} />
                        <span className="font-semibold">
                          {home.baths} Baths
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Square size={24} />
                        <span className="font-semibold">{home.sqft} sqft</span>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        View Details
                        <ChevronRight size={20} />
                      </button>
                      <button className="px-6 py-4 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all">
                        <Phone size={24} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-32 bg-gray-50">
          <div className="text-center">
            <Heart size={80} className="text-gray-300 mx-auto mb-8" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              No Saved Homes Yet
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Browse our listings and save the homes that catch your eye. Your
              dream home might be just a click away.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all inline-flex items-center gap-4">
              Start Browsing Homes
              <ArrowRight size={28} />
            </button>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to Make One of These Your Home?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Our expert agents are here to answer questions, schedule private
              tours, and guide you through every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-4"
              >
                <Phone size={28} />
                Call Now: (555) 123-4567
              </a>
              <a
                href="mailto:hello@dreamhome.com"
                className="border-2 border-gray-900 text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-4"
              >
                <Mail size={28} />
                Email an Agent
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavedHomesPage;
