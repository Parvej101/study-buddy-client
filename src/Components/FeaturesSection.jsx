import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const features = [
  {
    icon: '💡',
    title: 'Innovative Ideas',
    desc: 'We bring creative ideas to life with cutting-edge technology and thoughtful design.',
  },
  {
    icon: '🚀',
    title: 'Fast Performance',
    desc: 'Our platform is optimized for speed, providing an exceptional user experience.',
  },
  {
    icon: '🛡️',
    title: 'Security First',
    desc: 'We prioritize security, ensuring your data is protected with top-tier encryption.',
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    desc: 'Our platform is fully responsive, ensuring a seamless experience across all devices.',
  },
  {
    icon: '⚙️',
    title: 'Customization',
    desc: 'Tailor the platform to your needs with extensive customization options.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    desc: 'Our platform connects users globally, allowing you to collaborate and learn from anywhere.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="lg:text-4xl text-2xl font-extrabold text-slate-700 mb-12">
          Our Amazing Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="text-blue-600 text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
