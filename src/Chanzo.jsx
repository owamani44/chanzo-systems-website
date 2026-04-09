import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./chanzo.css";
import teamBg from "./Assets/team.jpg";

export default function Chanzo() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="chanzo-page">
      
      <Navbar/> 

      <div
        className="container1"
        style={{
          backgroundImage: `url(${teamBg})`,
        }}
      >
        <div className="home-section1 intro-section">
          <h2>
            Grow Your Business with Smart Digital Solutions 
          </h2>
          <p className="section-paragraph">
          Chanzo Systems is dedicated to accelerating digital transformation across businesses and institutions.
          We help organisations simplify operations, increase efficiency and scale with technology.
           Are you struggling with Manual processess slowing your business ?
           Poor record keeping ?
           Too much paperwork ?
           Lack of visilibilty in your operations ?
          Chanzo helps you -- Digitize your business processes , Manage data easily and securely,
           Automate daily operations , Improve decission making with better insights.
          </p>
        </div>
      

      
        <div className="home-section1 solutions-section">
          <h2>The Challenges. Our Solutions.</h2>
          <p className="section-paragraph">
            Many Ugandan businesses rely on manual processes, outdated systems, and unreliable integrations.
            This leads to inefficiency, data problems, and slowed growth.
          </p>

          <div className="highlight-block">
            <p className="section-paragraph">
              Our solutions include --websites for personal and business purposes, 
              Custom built applications both mobile and desktop tailored to a customer's needs,
                Business management systems ,
              School management platforms
            </p>
          </div>
        </div>
      </div>

     

      {/* Get in Touch */}
      <section id="contact" className="contact-section py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold mb-6 text-blue-900">About Us</h3>
          <p className="about-paragraph text-lg text-gray-700 leading-relaxed mb-6">
            Our mission is to build secure, scalable, and innovative software solutions tailored to
             customer's needs — helping organizations operate smarter, grow faster, and compete with confidence
              in a digital world. 
              Our vision is to drive technological evolution by delivering world-class
               digital solutions that empower businesses and transform industries.
          </p>

          <div className="contact-card bg-blue-50 p-10 rounded-2xl shadow-lg text-left">
            <h4 className="text-2xl font-semibold mb-4 text-center text-blue-800">Contact Details</h4>
            <p className="contact-item mb-2"><strong>Email:</strong> chanzo.ug@gmail.com</p>
            <p className="contact-item mb-2"><strong>Phone:</strong> +256 745012004</p>
            <p className="contact-item mb-6"><strong>Location:</strong> Kampala, Uganda</p>

            {submitted ? (
              <p className="text-green-600 font-semibold text-center">Message Sent Successfully!</p>
            ) : (
              <form action="https://formspree.io/f/mabcdxyz"
                    method="POST"
                    className="space-y-4" onSubmit={handleSubmit}>
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
