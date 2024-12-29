import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20 bg-auzrix-black border-t border-auzrix-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">Stay Strong</h2>
          <p className="text-auzrix-gray mb-8 font-secondary">
            Join our community and receive exclusive insights, offers, and motivation to fuel your journey.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-md bg-auzrix-black text-auzrix-white border border-auzrix-gray/20 focus:border-auzrix-white/40 focus:outline-none transition-colors duration-300 font-secondary"
              disabled={status === 'loading'}
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-auzrix-black text-auzrix-white font-cinzel rounded-md flex items-center justify-center group border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-colors duration-300 disabled:opacity-50"
            >
              {status === 'loading' ? (
                'Subscribing...'
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-500">Successfully subscribed!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}