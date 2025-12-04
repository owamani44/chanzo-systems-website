import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BusinessWebsite() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const logo = require('./Assets/csys.png');
  //const api = require('./Assets/api.png');
  //const ent = require('./Assets/enterprise.webp');
  //const sftw = require('./Assets/sli2.jpg');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/*header section*/}
      <header className="bg-white border-b p-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center space-x-3">
            <img className="w-20 h-20 bg-none-200 rounded-full" 
              src={logo} alt="Chanzo Systems Logo" />

            <h1 className="text-2xl font-bold text-blue-800">Chanzo Systems</h1>
          </div>

          <nav className="space-x-6 text-lg">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#contact" className="hover:text-blue-700">Get in touch</a>
          </nav>
        </div>
      </header>

      {/*Home Section*/} 
      <section id="home" className="py-28 px-4 bg-blue-50">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold text-blue-900 mb-6"
          >
            Empowering Uganda Through Modern Technology
          </motion.h2>
          <p className="text-xl leading-relaxed text-gray-700">
          Chanzo Systems is dedicated to accelerating digital transformation across Uganda.
          We design and develop custom software, enterprise systems, and fully tailored APIs 
          that solve real operational challenges for local organizations.
          Our solutions are built with performance, security, and reliability at their core — helping 
          businesses automate processes, improve decision-making, and scale with confidence in a modern, 
          connected economy.
          </p>
        </div>
      </section>

      {/* Pain Points & Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-6 text-blue-900">The Challenges. Our Solutions.</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Many Ugandan businesses rely on manual processes, outdated systems, and unreliable integrations.
            This leads to inefficiency, data problems, and slowed growth.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-100 p-10 rounded-2xl shadow-md"
          >
            <p className="text-gray-800 text-lg leading-relaxed">
              At Chanzo Systems, we modernize business operations using secure APIs, automated enterprise
              software, and custom digital tools built for East African businesses. We solve real problems
              with stable, scalable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 container mx-auto px-4 bg-blue-50">
        <h3 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "API Development",
              icon: "🔌",
             // image: api,
              desc: "Secure and scalable APIs that power digital ecosystems.",
            },
            {
              title: "Enterprise Systems",
              //image: ent,
              icon: "🏢",
              desc: "Automated systems that improve efficiency and workflow.",
            },
            {
              title: "Custom Software Solutions",
              //image: sftw,
              icon: "💻",
              desc: "Software built for the unique needs of Ugandan businesses.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h4 className="text-2xl font-semibold mb-4 text-blue-800">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get in Touch */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold mb-6 text-blue-900">About Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our mission is to build secure, scalable, and innovative software solutions tailored to
             customer's needs — helping organizations operate smarter, grow faster, and compete with confidence
              in a digital world. 
              Our vision is to drive technological evolution by delivering world-class
               digital solutions that empower businesses and transform industries.
          </p>

          <div className="bg-blue-50 p-10 rounded-2xl shadow-lg text-left">
            <h4 className="text-2xl font-semibold mb-4 text-center text-blue-800">Contact Details</h4>
            <p className="mb-2"><strong>Email:</strong> chanzo.ug@gmail.com</p>
            <p className="mb-2"><strong>Phone:</strong> +256 745012004</p>
            <p className="mb-6"><strong>Location:</strong> Kampala, Uganda</p>

            {submitted ? (
              <p className="text-green-600 font-semibold text-center">Message Sent Successfully!</p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-xl"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-xl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border rounded-xl h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button className="bg-blue-700 text-white px-6 py-3 rounded-xl w-full font-semibold hover:bg-blue-800">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-blue-900 text-white">
        <p className="text-lg font-semibold mb-2">Secure • Stable • Scalable</p>
        © {new Date().getFullYear()} Chanzo Systems. All rights reserved.
      </footer>
    </div>
  );
}
