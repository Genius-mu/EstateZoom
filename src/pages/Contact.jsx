// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: send to backend / email service
    alert(
      "Thank you! Your message has been sent. We'll get back to you shortly."
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/img7.webp')] bg-cover bg-center bg-[rgba(0,0,0,.2)] bg-blend-darken py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tight mb-8 drop-shadow-2xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 opacity-95 drop-shadow-lg leading-relaxed"
          >
            We're here to help you find your dream home. Reach out today — our
            team responds quickly and personally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="tel:08020666256"
              className="bg-white text-indigo-700 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group shadow-xl backdrop-blur-sm"
            >
              Call Us Now
              <Phone size={24} className="group-hover:scale-110 transition" />
            </a>
            <a
              href="mailto:adegbitemustapha73@gmail.com"
              className="border-2 border-white/80 bg-white/10 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              <Mail size={24} />
              Send Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Phone size={40} className="text-indigo-600" />,
                title: "Phone",
                details: ["08020666256"],
                action: "tel:08020666256",
              },
              {
                icon: <Mail size={40} className="text-indigo-600" />,
                title: "Email",
                details: ["adegbitemustapha73@gmail.com"],
                action: "mailto:adegbitemustapha73@gmail.com",
              },
              {
                icon: <Clock size={40} className="text-indigo-600" />,
                title: "Hours",
                details: [
                  "Monday - Friday: 9:00 AM - 6:00 PM",
                  "Saturday: 10:00 AM - 4:00 PM",
                  "Sunday: By Appointment",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-10 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition"
              >
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                {item.details.map((line, idx) => (
                  <p key={idx} className="text-[14px] sm:text-lg text-gray-600 mb-2">
                    {line}
                  </p>
                ))}
                {item.action && (
                  <a
                    href={item.action}
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold mt-4 hover:underline"
                  >
                    {item.title === "Phone" ? "Call Now" : "Send Email"}
                    <ArrowRight size={20} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold sm:font-extrabold md:text-5xl font-black text-gray-900 mb-2 sm:mb-6">
                Send Us a Message
              </h2>
              <p className="text-[15px] sm:text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
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
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                className="md:col-span-2 px-6 py-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 text-lg resize-none"
              />

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 w-full sm:w-fit justify-center sm:px-12 py-6 rounded-2xl font-bold text-[16px] sm:text-xl hover:shadow-2xl transition-all inline-flex items-center gap-4"
                >
                  Send Message
                  <Send className="w-5 h-5 sm:w-7 sm:h-7" size={28} />
                </button>
              </div>
            </form>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-500" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-500" />
                <span>No Spam</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-500" />
                <span>Personal Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl sm:font-extrabold font-bold mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Call or message us today — your perfect home is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:08020666256"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-4"
            >
              <Phone size={28} />
              Call: 08020666256
            </a>
            <a
              href="mailto:adegbitemustapha73@gmail.com"
              className="border-2 border-white px-10 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-4"
            >
              <Mail size={28} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
