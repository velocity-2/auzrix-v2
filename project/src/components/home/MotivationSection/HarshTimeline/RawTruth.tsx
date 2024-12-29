import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface RawTruthProps {
  truths: string[];
}

export const RawTruth: React.FC<RawTruthProps> = ({ truths }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 bg-auzrix-black/50 border border-auzrix-red/20 rounded-lg p-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-auzrix-red/10 p-4 rounded-full">
          <Flame className="w-8 h-8 text-auzrix-red" />
        </div>
        <h3 className="text-2xl font-cinzel font-bold text-auzrix-white">THE RAW TRUTH</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {truths.map((truth, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <span className="w-2 h-2 bg-auzrix-red rounded-full flex-shrink-0" />
            <p className="text-auzrix-gray">{truth}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl font-cinzel text-auzrix-white mb-4">
          Winners aren't more motivated.<br />
          They're more disciplined.
        </p>
        <p className="text-auzrix-gray">
          Stop waiting for motivation.<br />
          Start building discipline.<br />
          That's the only path forward.
        </p>
      </div>
    </motion.div>
  );
};