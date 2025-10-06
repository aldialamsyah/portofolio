import React from 'react';
import { motion } from 'framer-motion';
import { Server, Network, Settings, Headphones } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const categoryIcons = {
    'Network & Infrastructure': Network,
    'Server & Storage': Server,
    'System Administration': Settings,
    'Technical Support': Headphones
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6 tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Core competencies in network engineering, system administration, and infrastructure management
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => {
            const IconComponent = categoryIcons[category.category] || Settings;
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Category Icon & Title */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-cyan-400 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-cyan-500 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-cyan-400 uppercase tracking-wide">
                    {category.items.length} Skills
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-900 p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Continuously expanding knowledge in emerging technologies including AI, cloud infrastructure, and modern networking solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;