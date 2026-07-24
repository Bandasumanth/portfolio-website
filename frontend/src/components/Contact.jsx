import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactService } from '../services/api';

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactService.submitMessage(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Let's work together</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="p-4 rounded-lg bg-primary/20 h-fit">
                    <FaPhone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-4 rounded-lg bg-primary/20 h-fit">
                    <FaEnvelope className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">your-email@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-4 rounded-lg bg-primary/20 h-fit">
                    <FaMapMarkerAlt className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/Bandasumanth" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-effect hover:bg-primary/20 transition">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://linkedin.com/in/sumanth-manu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-effect hover:bg-primary/20 transition">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass-card"
            >
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                ></textarea>
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-4 rounded-lg bg-green-500/20 text-green-600 dark:text-green-400 text-center"
                >
                  Message sent successfully! 🎉
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
