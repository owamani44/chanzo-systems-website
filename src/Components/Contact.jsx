import React, { useState } from 'react';
import Navbar from './Navbar';
import './contact.css';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-container">
        <div className="contact-content">
          <section className="contact-panel contact-details-panel">
            <h2 className="panel-title">Contact Details</h2>
            <p className="panel-subtitle">Reach out using any of the channels below.</p>

            <p className="info">
              <span>Email</span>
              <a href="mailto:chanzo.ug@gmail.com" className="contact-link">chanzo.ug@gmail.com</a>
            </p>
            <p className="info">
              <span>Phone</span>
              <a href="tel:+256745012004" className="contact-link">+256 745012004</a>
            </p>
            <p className="info">
              <span>Location</span>
              Kampala, Uganda
            </p>
          </section>

          <section className="contact-panel contact-form-panel">
            <h2 className="panel-title">Send Us a Message</h2>
            {submitted ? (
              <p className="success-message">Message Sent Successfully!</p>
            ) : (
              <form className="form" onSubmit={handleSubmit} netlify>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  value={formData.name}
                  required
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  required
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  placeholder="Message"
                  className="form-input"
                  value={formData.message}
                  required
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button className="form-button" type="submit">
                  Send Message
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Contact;
