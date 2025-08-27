import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedText from './AnimatedText';
import AnimatedSection from './AnimatedSection';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Solutions' },
    { id: 'analytics', label: 'Data Analytics' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with advanced analytics and mobile-first design",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      description: "Telemedicine platform connecting patients with healthcare providers",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React Native", "Firebase", "HealthKit"]
    },
    {
      id: 3,
      title: "Cloud Migration Project",
      category: "cloud",
      description: "Enterprise cloud infrastructure modernization for Fortune 500 company",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AWS", "Docker", "Kubernetes"]
    },
    {
      id: 4,
      title: "Business Intelligence Dashboard",
      category: "analytics",
      description: "Real-time analytics dashboard for data-driven decision making",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Python", "D3.js", "PostgreSQL"]
    },
    {
      id: 5,
      title: "Financial Trading Platform",
      category: "web",
      description: "High-frequency trading platform with real-time market data",
      image: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "WebSocket", "Redis"]
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      category: "analytics",
      description: "Industrial IoT solution for monitoring and predictive maintenance",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["IoT", "Machine Learning", "Azure"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Our Portfolio"
            className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-4"
            delay={0.2}
          />
          <AnimatedSection delay={0.4}>
            <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our successful digital transformation projects across various industries
            </p>
          </AnimatedSection>
        </div>

        {/* Filter Buttons */}
        <AnimatedSection delay={0.6}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-poppins font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-yellow-400 text-gray-900 shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#002D62]/80 to-transparent"
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="font-montserrat font-semibold text-xl text-gray-900 mb-3 group-hover:text-yellow-400 transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="font-poppins text-gray-600 mb-4 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-poppins font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;