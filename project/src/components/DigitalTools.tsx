import React from 'react';
import { Download, Code, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const tools = [
  {
    id: 1,
    name: 'Snappora',
    icon: Download,
    description: 'Take control of your social media presence. Download and share content across platforms with ease and efficiency.',
    price: 'Free - $9.99/month',
    features: ['Multi-platform support', 'Batch downloading', 'Content scheduler', 'Analytics dashboard']
  },
  {
    id: 2,
    name: 'Trendly',
    icon: Code,
    description: 'Your ultimate trend analysis and prediction platform. Perfect for creators, businesses, and marketers looking to stay ahead of the curve.',
    price: '$19/month - $499/month',
    features: [
      'Real-time trend tracking',
      'Predictive analytics',
      'Competitor insights',
      'Custom dashboards',
      'AI content suggestions'
    ]
  },
  {
    id: 3,
    name: 'Forge',
    icon: Bot,
    description: 'No-code platform powered by AI for creating apps, automating workflows, and designing custom UI without writing a single line of code.',
    price: 'Free - $49.99/month',
    features: [
      'Automated project creation',
      'Drag-and-drop interface',
      'AI-assisted logic and optimization',
      'Customizable UI/UX templates',
      'Instant cloud deployment'
    ]
  }
];

export default function DigitalTools() {
  return (
    <section className="py-20 bg-auzrix-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">
            Other Apps I Built
          </h2>
          <p className="text-auzrix-gray max-w-2xl mx-auto font-secondary">
            Powerful tools designed to enhance your digital presence and automate your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-auzrix-white" />
                </div>
                
                <h3 className="text-2xl font-cinzel font-bold text-auzrix-white mb-3">{tool.name}</h3>
                <p className="text-auzrix-gray mb-4">{tool.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-auzrix-gray/80 text-sm">
                      <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mt-0.5 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <p className="text-auzrix-white font-cinzel font-semibold mb-6">{tool.price}</p>
                
                <button className="w-full bg-auzrix-black text-auzrix-white font-cinzel py-3 rounded-md relative overflow-hidden group border border-auzrix-white/20 hover:border-auzrix-white transition-colors duration-300">
                  <span className="relative z-10 group-hover:text-auzrix-white transition-colors duration-300">
                    Get Started
                  </span>
                  <div className="absolute inset-0 bg-auzrix-white/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}