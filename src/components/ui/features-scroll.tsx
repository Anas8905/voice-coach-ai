import React from 'react';
import { FiZap, FiClock, FiUsers, FiShield, FiSmartphone } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap className="h-6 w-6 text-indigo-500" />,
    title: 'Instant Support',
    description: 'Deliver 24/7 answers using your coaching knowledge.',
  },
  {
    icon: <FiClock className="h-6 w-6 text-indigo-500" />,
    title: 'Save Time',
    description: 'Automate repetitive Q&A and streamline operations.',
  },
  {
    icon: <FiUsers className="h-6 w-6 text-indigo-500" />,
    title: 'Scalable Service',
    description: 'Handle more clients without increasing workload.',
  },
  {
    icon: <FiShield className="h-6 w-6 text-indigo-500" />,
    title: 'Secure by Design',
    description: 'Privacy-first, encrypted data handling.',
  },
  {
    icon: <FiSmartphone className="h-6 w-6 text-indigo-500" />,
    title: 'Mobile-Friendly',
    description: 'Optimized for all devices and platforms.',
  },
];

const ScrollingFeatures: React.FC = () => {
  const scrollingFeatures = [...features, ...features]; // duplicate for seamless scroll

  return (
    <section className="bg-white dark:bg-gray-900 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">

        <div className="overflow-hidden relative">
          <div className="animate-scroll flex space-x-6 w-max">
            {scrollingFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ScrollingFeatures;
