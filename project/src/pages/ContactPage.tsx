import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-auzrix-black">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-cinzel font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-auzrix-gray max-w-3xl mx-auto"
          >
            Have questions? We're here to help you on your journey to greatness.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20"
            >
              <h2 className="text-2xl font-cinzel font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-cinzel text-auzrix-gray mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-auzrix-black border border-auzrix-gray/20 rounded-md focus:border-auzrix-white/40 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-cinzel text-auzrix-gray mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-auzrix-black border border-auzrix-gray/20 rounded-md focus:border-auzrix-white/40 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-cinzel text-auzrix-gray mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 bg-auzrix-black border border-auzrix-gray/20 rounded-md focus:border-auzrix-white/40 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-cinzel text-auzrix-gray mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-3 bg-auzrix-black border border-auzrix-gray/20 rounded-md focus:border-auzrix-white/40 transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-auzrix btn-glow w-full"
                >
                  <span className="btn-content">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5" />
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20">
                <h2 className="text-2xl font-cinzel font-bold mb-8">Connect With Us</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-auzrix-white/5 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-cinzel font-bold">Email</h3>
                      <p className="text-auzrix-gray">support@auzrix.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-auzrix-white/5 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-cinzel font-bold">Phone</h3>
                      <p className="text-auzrix-gray">(385) 414-6571</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-auzrix-white/5 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-cinzel font-bold">Location</h3>
                      <p className="text-auzrix-gray">Utah, Kearns</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-auzrix-white/5 rounded-full">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-cinzel font-bold">Social</h3>
                      <a 
                        href="https://instagram.com/auzrix"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-auzrix-gray hover:text-auzrix-white transition-colors"
                      >
                        @auzrix
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20">
                <h2 className="text-2xl font-cinzel font-bold mb-4">Support Hours</h2>
                <p className="text-auzrix-gray mb-4">We're here to help you 24/7.</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-auzrix-gray">Monday - Friday</span>
                    <span className="text-auzrix-white">24 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-auzrix-gray">Saturday - Sunday</span>
                    <span className="text-auzrix-white">24 Hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}