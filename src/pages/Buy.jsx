// src/pages/Buy.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Filter,
  Grid,
  List,
  ChevronDown,
  Home,
  Building2,
  Star,
  X,
} from "lucide-react";

const BuyPage = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [savedProperties, setSavedProperties] = useState(new Set());

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [newListingsOnly, setNewListingsOnly] = useState(false);
  const [openHouses, setOpenHouses] = useState(false);
  const [virtualTours, setVirtualTours] = useState(false);

  // Full mock property dataset
  const allProperties = [
    {
      id: 1,
      title: "Luxury Modern Villa",
      price: 2850000,
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      sqft: 5200,
      type: "House",
      featured: true,
      new: true,
      openHouse: true,
      virtualTour: true,
      image: "https://source.unsplash.com/random/800x600/?luxury-villa,1",
    },
    {
      id: 2,
      title: "Downtown Penthouse Loft",
      price: 1890000,
      location: "New York, NY",
      beds: 3,
      baths: 3,
      sqft: 2800,
      type: "Condo",
      featured: false,
      new: false,
      openHouse: false,
      virtualTour: true,
      image: "https://source.unsplash.com/random/800x600/?penthouse,2",
    },
    {
      id: 3,
      title: "Waterfront Family Residence",
      price: 1450000,
      location: "Miami Beach, FL",
      beds: 4,
      baths: 3,
      sqft: 3500,
      type: "House",
      featured: true,
      new: true,
      openHouse: true,
      virtualTour: false,
      image: "https://source.unsplash.com/random/800x600/?beach-house,3",
    },
    {
      id: 4,
      title: "Contemporary Townhouse",
      price: 920000,
      location: "San Francisco, CA",
      beds: 3,
      baths: 2,
      sqft: 2100,
      type: "Townhouse",
      featured: false,
      new: true,
      openHouse: false,
      virtualTour: true,
      image: "https://source.unsplash.com/random/800x600/?townhouse,4",
    },
    {
      id: 5,
      title: "Suburban Dream Home",
      price: 680000,
      location: "Austin, TX",
      beds: 4,
      baths: 3,
      sqft: 3200,
      type: "House",
      featured: false,
      new: false,
      openHouse: true,
      virtualTour: false,
      image: "https://source.unsplash.com/random/800x600/?suburban-home,5",
    },
    {
      id: 6,
      title: "Elegant Urban Loft",
      price: 1150000,
      location: "Chicago, IL",
      beds: 2,
      baths: 2,
      sqft: 1800,
      type: "Condo",
      featured: true,
      new: true,
      openHouse: false,
      virtualTour: true,
      image: "https://source.unsplash.com/random/800x600/?loft-apartment,6",
    },
    {
      id: 7,
      title: "Mountain View Retreat",
      price: 2100000,
      location: "Aspen, CO",
      beds: 6,
      baths: 5,
      sqft: 5800,
      type: "House",
      featured: true,
      new: false,
      openHouse: true,
      virtualTour: true,
      image: "https://source.unsplash.com/random/800x600/?mountain-house,7",
    },
    {
      id: 8,
      title: "Modern Beach Condo",
      price: 1350000,
      location: "San Diego, CA",
      beds: 3,
      baths: 2,
      sqft: 2200,
      type: "Condo",
      featured: false,
      new: true,
      openHouse: false,
      virtualTour: true,
      image: "https://source.unsplash.com/random/800x600/?beach-condo,8",
    },
  ];

  // Real-time filtering using useMemo
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      // Search by title or location
      const matchesSearch =
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Property type filter
      const matchesType =
        selectedType === "All" || property.type === selectedType;

      // Price range
      const matchesMinPrice =
        minPrice === "" || property.price >= Number(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || property.price <= Number(maxPrice);

      // Additional filters
      const matchesNew = !newListingsOnly || property.new;
      const matchesOpenHouse = !openHouses || property.openHouse;
      const matchesVirtualTour = !virtualTours || property.virtualTour;

      return (
        matchesSearch &&
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesNew &&
        matchesOpenHouse &&
        matchesVirtualTour
      );
    });
  }, [
    searchQuery,
    selectedType,
    minPrice,
    maxPrice,
    newListingsOnly,
    openHouses,
    virtualTours,
  ]);

  const toggleSave = (id) => {
    const newSaved = new Set(savedProperties);
    if (newSaved.has(id)) newSaved.delete(id);
    else newSaved.add(id);
    setSavedProperties(newSaved);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center text-white" {...fadeIn}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Find Your Perfect Home
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Explore {allProperties.length} properties for sale in your dream
              location
            </p>
          </motion.div>

          {/* Advanced Search Bar */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 -mt-12 relative z-10"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
              {/* Location Search */}
              <div className="relative md:col-span-4">
                <MapPin
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="City, neighborhood, ZIP or property name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-4 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Property Type */}
              <div className="md:col-span-2">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Types</option>
                  <option>House</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="md:col-span-3 flex gap-2">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Search Button */}
              <div className="md:col-span-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Search size={20} />
                  Search ({filteredProperties.length})
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newListingsOnly}
                  onChange={(e) => setNewListingsOnly(e.target.checked)}
                  className="rounded"
                />
                New Listings Only
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={openHouses}
                  onChange={(e) => setOpenHouses(e.target.checked)}
                  className="rounded"
                />
                Open Houses
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={virtualTours}
                  onChange={(e) => setVirtualTours(e.target.checked)}
                  className="rounded"
                />
                Virtual Tours
              </label>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Properties for Sale
              </h2>
              <p className="text-gray-600 mt-1">
                Showing {filteredProperties.length}{" "}
                {filteredProperties.length === 1 ? "result" : "results"}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition">
                <Filter size={18} />
                More Filters
                <ChevronDown size={16} />
              </button>

              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg transition ${
                    viewMode === "grid" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg transition ${
                    viewMode === "list" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Property Grid - Now 4 columns on large screens */}
          <motion.div
            layout
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
              viewMode === "list" ? "lg:grid-cols-1" : ""
            }`}
          >
            {filteredProperties.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <p className="text-2xl text-gray-500">
                  No properties match your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("All");
                    setMinPrice("");
                    setMaxPrice("");
                    setNewListingsOnly(false);
                    setOpenHouses(false);
                    setVirtualTours(false);
                  }}
                  className="mt-6 text-blue-600 hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover"
                    />
                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star size={14} className="fill-current" />
                        Featured
                      </div>
                    )}
                    {property.new && (
                      <div className="absolute top-4 right-12 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        New
                      </div>
                    )}
                    <button
                      onClick={() => toggleSave(property.id)}
                      className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur rounded-full hover:bg-white transition shadow-md"
                    >
                      <Heart
                        size={20}
                        className={
                          savedProperties.has(property.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-700"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {property.title}
                      </h3>
                    </div>
                    <p className="text-2xl font-extrabold text-blue-600 mb-3">
                      ${property.price.toLocaleString()}
                    </p>

                    <p className="flex items-center text-gray-600 mb-4 text-sm">
                      <MapPin size={16} className="mr-2" />
                      {property.location}
                    </p>

                    <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Bed size={18} />
                        {property.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={18} />
                        {property.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Square size={18} />
                        {property.sqft.toLocaleString()} sqft
                      </span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
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

export default BuyPage;
