// src/pages/Rent.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Heart,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  Star,
  X,
  Calendar,
  Dog,
  Sofa,
} from "lucide-react";

const RentPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [savedProperties, setSavedProperties] = useState(new Set());

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("Any");
  const [availability, setAvailability] = useState("Any");
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [furnished, setFurnished] = useState(false);

  // Mock Data
  const allProperties = [
    {
      id: 1,
      title: "Luxury Downtown Penthouse",
      price: 4500,
      location: "New York, NY",
      beds: 2,
      baths: 2,
      sqft: 1400,
      type: "Apartment",
      featured: true,
      available: "Immediately",
      pets: true,
      furnished: true,
      image: "https://source.unsplash.com/random/800x600/?luxury-apartment,1",
    },
    {
      id: 2,
      title: "Modern Family Townhouse",
      price: 3200,
      location: "Austin, TX",
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      type: "Townhouse",
      featured: false,
      available: "02/01/2026",
      pets: true,
      furnished: false,
      image: "https://source.unsplash.com/random/800x600/?townhouse-rental,2",
    },
    {
      id: 3,
      title: "Oceanfront Condo",
      price: 5800,
      location: "Miami Beach, FL",
      beds: 3,
      baths: 3,
      sqft: 2100,
      type: "Condo",
      featured: true,
      available: "Immediately",
      pets: false,
      furnished: true,
      image: "https://source.unsplash.com/random/800x600/?beach-condo,3",
    },
    {
      id: 4,
      title: "Cozy Studio Apartment",
      price: 1850,
      location: "San Francisco, CA",
      beds: 0,
      baths: 1,
      sqft: 650,
      type: "Apartment",
      featured: false,
      available: "01/15/2026",
      pets: true,
      furnished: true,
      image: "https://source.unsplash.com/random/800x600/?studio-apartment,4",
    },
    {
      id: 5,
      title: "Spacious Suburban House",
      price: 2800,
      location: "Denver, CO",
      beds: 4,
      baths: 3,
      sqft: 2400,
      type: "House",
      featured: true,
      available: "03/01/2026",
      pets: true,
      furnished: false,
      image:
        "https://source.unsplash.com/random/800x600/?suburban-house-rental,5",
    },
    {
      id: 6,
      title: "Urban Loft with Views",
      price: 3900,
      location: "Chicago, IL",
      beds: 2,
      baths: 2,
      sqft: 1600,
      type: "Loft",
      featured: false,
      available: "Immediately",
      pets: false,
      furnished: true,
      image: "https://source.unsplash.com/random/800x600/?loft-apartment,6",
    },
    {
      id: 7,
      title: "Pet-Friendly Condo",
      price: 2650,
      location: "Seattle, WA",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Condo",
      featured: true,
      available: "02/15/2026",
      pets: true,
      furnished: false,
      image: "https://source.unsplash.com/random/800x600/?pet-friendly-condo,7",
    },
    {
      id: 8,
      title: "Fully Furnished House",
      price: 4200,
      location: "Los Angeles, CA",
      beds: 3,
      baths: 2.5,
      sqft: 2000,
      type: "House",
      featured: false,
      available: "Immediately",
      pets: false,
      furnished: true,
      image: "https://source.unsplash.com/random/800x600/?furnished-house,8",
    },
    {
      id: 9,
      title: "Luxury High-Rise Apartment",
      price: 6200,
      location: "Boston, MA",
      beds: 3,
      baths: 3,
      sqft: 1900,
      type: "Apartment",
      featured: true,
      available: "01/20/2026",
      pets: true,
      furnished: true,
      image: "https://source.unsplash.com/random/800x600/?luxury-highrise,9",
    },
    {
      id: 10,
      title: "Charming Bungalow",
      price: 2400,
      location: "Portland, OR",
      beds: 3,
      baths: 1.5,
      sqft: 1500,
      type: "House",
      featured: false,
      available: "02/01/2026",
      pets: true,
      furnished: false,
      image: "https://source.unsplash.com/random/800x600/?bungalow-rental,10",
    },
  ];

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === "All" || property.type === selectedType;

      const matchesMinPrice =
        minPrice === "" || property.price >= Number(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || property.price <= Number(maxPrice);

      const matchesBedrooms =
        bedrooms === "Any" ||
        (bedrooms === "Studio" && property.beds === 0) ||
        (bedrooms === "3+" && property.beds >= 3) ||
        property.beds === parseInt(bedrooms);

      const matchesAvailability =
        availability === "Any" ||
        (availability === "Immediately" &&
          property.available === "Immediately") ||
        (availability === "Next 30 Days" &&
          [
            "Immediately",
            "01/15/2026",
            "01/20/2026",
            "02/01/2026",
            "02/15/2026",
          ].includes(property.available));

      const matchesPets = !petsAllowed || property.pets;
      const matchesFurnished = !furnished || property.furnished;

      return (
        matchesSearch &&
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBedrooms &&
        matchesAvailability &&
        matchesPets &&
        matchesFurnished
      );
    });
  }, [
    searchQuery,
    selectedType,
    minPrice,
    maxPrice,
    bedrooms,
    availability,
    petsAllowed,
    furnished,
  ]);

  const toggleSave = (id) => {
    const newSaved = new Set(savedProperties);
    newSaved.has(id) ? newSaved.delete(id) : newSaved.add(id);
    setSavedProperties(newSaved);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/img1.webp')] bg-cover bg-center bg-[rgba(0,0,0,.5)] bg-blend-darken py-30">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tight mb-6"
          >
            Find Your Perfect Rental
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95"
          >
            Explore {allProperties.length} beautiful homes and apartments
            available now
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-7xl mx-auto px-6 lg:px-8 -mt-12"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
              <div className="relative md:col-span-4">
                <MapPin
                  className="absolute left-5 top-5 text-gray-400"
                  size={22}
                />
                <input
                  type="text"
                  placeholder="City, neighborhood, ZIP..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-12 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-5 top-5 text-gray-400 hover:text-gray-600"
                  >
                    <X size={22} />
                  </button>
                )}
              </div>

              <div className="md:col-span-3">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 text-lg"
                >
                  <option value="All">All Property Types</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                  <option>Loft</option>
                </select>
              </div>

              <div className="md:col-span-3 flex gap-3">
                <input
                  type="number"
                  placeholder="Min price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 text-lg"
                />
                <input
                  type="number"
                  placeholder="Max price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 text-lg"
                />
              </div>

              <div className="md:col-span-2">
                <button className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-3">
                  <Search size={24} />
                  Search ({filteredProperties.length})
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-6 justify-center text-base">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petsAllowed}
                  onChange={(e) => setPetsAllowed(e.target.checked)}
                  className="w-5 h-5 rounded text-emerald-600"
                />
                <Dog size={20} className="text-gray-600" />
                <span>Pet Friendly</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={furnished}
                  onChange={(e) => setFurnished(e.target.checked)}
                  className="w-5 h-5 rounded text-emerald-600"
                />
                <Sofa size={20} className="text-gray-600" />
                <span>Furnished</span>
              </label>

              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                <option>Any Bedrooms</option>
                <option>Studio</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>

              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                <option>Any Availability</option>
                <option>Immediately</option>
                <option>Next 30 Days</option>
              </select>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Available Rentals
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                {filteredProperties.length}{" "}
                {filteredProperties.length === 1 ? "property" : "properties"}{" "}
                found
              </p>
            </div>

            <div className="flex items-center gap-5">
              <button className="flex items-center gap-3 px-6 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition font-medium">
                <Filter size={20} />
                More Filters
                <ChevronDown size={18} />
              </button>

              <div className="flex bg-gray-100 rounded-2xl p-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-4 rounded-xl transition ${
                    viewMode === "grid"
                      ? "bg-white shadow-md"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <Grid3X3 size={22} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-4 rounded-xl transition ${
                    viewMode === "list"
                      ? "bg-white shadow-md"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <List size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            layout
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
              viewMode === "list" ? "lg:grid-cols-1" : ""
            }`}
          >
            {filteredProperties.length === 0 ? (
              <div className="col-span-full text-center py-32">
                <p className="text-3xl text-gray-400 mb-6">
                  No rentals match your criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("All");
                    setMinPrice("");
                    setMaxPrice("");
                    setBedrooms("Any");
                    setAvailability("Any");
                    setPetsAllowed(false);
                    setFurnished(false);
                  }}
                  className="text-emerald-600 text-xl font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {property.featured && (
                      <div className="absolute top-5 left-5 bg-emerald-600 text-white px-4 py-2 rounded-full text-[12px] font-semibold flex items-center gap-2">
                        <Star size={16} className="fill-current" />
                        Featured
                      </div>
                    )}

                    {property.available === "Immediately" && (
                      <div className="absolute top-5 right-5 bg-orange-500 text-white px-4 py-2 rounded-full text-[12px] font-semibold">
                        Available Now
                      </div>
                    )}

                    <button
                      onClick={() => toggleSave(property.id)}
                      className="absolute top-5 right-5 p-3.5 bg-white/95 backdrop-blur rounded-full shadow-lg hover:scale-110 transition"
                    >
                      <Heart
                        size={22}
                        className={
                          savedProperties.has(property.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-700"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                      {property.title}
                    </h3>

                    <p className="text-3xl font-black text-emerald-600 mb-4">
                      ${property.price.toLocaleString()}
                      <span className="text-lg font-normal text-gray-600">
                        /mo
                      </span>
                    </p>

                    <p className="flex items-center text-gray-600 mb-5 text-base">
                      <MapPin size={18} className="mr-2" />
                      {property.location}
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-center mb-6">
                      <div>
                        <BedDouble
                          size={22}
                          className="mx-auto mb-1 text-gray-500"
                        />
                        <p className="text-sm text-gray-600">
                          {property.beds === 0
                            ? "Studio"
                            : property.beds === 1
                            ? "1 Bed"
                            : `${property.beds} Beds`}
                        </p>
                      </div>
                      <div>
                        <Bath
                          size={22}
                          className="mx-auto mb-1 text-gray-500"
                        />
                        <p className="text-sm text-gray-600">
                          {property.baths} Bath{property.baths !== 1 ? "s" : ""}
                        </p>
                      </div>
                      <div>
                        <Ruler
                          size={22}
                          className="mx-auto mb-1 text-gray-500"
                        />
                        <p className="text-sm text-gray-600">
                          {property.sqft.toLocaleString()} sqft
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {property.pets && (
                        <span className="px-3 py-1.5 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                          <Dog size={14} />
                          Pets Allowed
                        </span>
                      )}
                      {property.furnished && (
                        <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1">
                          <Sofa size={14} />
                          Furnished
                        </span>
                      )}
                    </div>

                    <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RentPage;
