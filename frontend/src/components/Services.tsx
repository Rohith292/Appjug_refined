
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Shield, 
  Cog, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import AnimatedText from './AnimatedText';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and exceptional user experience.",
      features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "Custom CMS"],
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications designed to engage users and drive business growth across all devices.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and seamless migration services to modernize and future-proof your business operations.",
      features: ["AWS & Azure", "Cloud Migration", "DevOps Integration", "Serverless Architecture"],
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, machine learning, and intelligent visualization tools.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "AI/ML Integration"],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain customer trust.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Threat Monitoring"],
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Process Automation",
      description: "Streamline operations and boost efficiency with intelligent automation solutions that reduce costs and human error.",
      features: ["Workflow Automation", "RPA Implementation", "System Integration", "AI-Powered Tools"],
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gray-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-poppins text-yellow-500 font-medium text-lg tracking-wide"
            >
              Our Expertise
            </motion.span>
          </div>
          <div className="font-montserrat font-bold text-5xl lg:text-6xl text-gray-900 mb-6">
            <AnimatedText 
              text="Comprehensive"
              className="block"
              delay={0.4}
            />
            <AnimatedText 
              text="Digital Solutions"
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 block"
              delay={0.6}
            />
          </div>
          <AnimatedSection delay={0.8}>
            <p className="font-poppins text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From concept to deployment, we deliver end-to-end digital solutions that transform 
              your business operations and accelerate your growth in the digital marketplace.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.2 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 overflow-hidden"
            >
              {/* Card Content */}
              <div className="relative p-10">
                {/* Icon with animated background */}
                <div className="relative mb-8">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block"
                  >
                    <div className="relative text-gray-900 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {service.icon}
                    </div>
                  </motion.div>
                </div>
                
                <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-4 group-hover:text-[#FFC300] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-poppins text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Feature Tags */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center space-x-3 group/feature"
                    >
                      <div className="w-2 h-2 rounded-full bg-yellow-400 group-hover/feature:scale-125 transition-transform duration-300"></div>
                      <span className="font-poppins text-gray-600 group-hover/feature:text-gray-800 transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="group/btn flex items-center space-x-2 font-poppins font-semibold text-gray-900 hover:text-[#FFC300] transition-all duration-300"
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover/btn:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Updated to use the new color scheme */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-20">
            <div className="bg-[#002D62] rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
              <div className="relative z-10">
                <AnimatedText 
                  text="Ready to Transform Your Business?"
                  className="font-montserrat font-bold text-3xl mb-4"
                  delay={0.7}
                />
                <AnimatedSection delay={0.9}>
                  <p className="font-poppins text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Let's discuss how our comprehensive digital solutions can accelerate your growth 
                    and help you stay ahead of the competition.
                  </p>
                </AnimatedSection>
                <motion.button 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FFC300] text-gray-900 px-8 py-4 rounded-xl font-poppins font-semibold hover:bg-[#FFD700] transition-colors duration-300 shadow-md"
                >
                  Schedule a Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;