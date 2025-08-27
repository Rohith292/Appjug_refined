import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, Users, Zap, Shield, Headphones } from 'lucide-react';
import AnimatedText from './AnimatedText';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs = () => {
  const [activeAccordion, setActiveAccordion] = useState(-1); // Use -1 to start with no item active

  const accordionItems = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Proven Expertise",
      content: "Our team brings together years of experience across various industries, with a proven track record of successful digital transformations. We've helped over 200 companies modernize their operations and achieve measurable results."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client-Centric Approach",
      content: "We put our clients at the center of everything we do. Our collaborative approach ensures that every solution is tailored to your specific needs, goals, and business context. Your success is our primary measure of achievement."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Cutting-Edge Technology",
      content: "We stay ahead of the curve by leveraging the latest technologies and methodologies. From AI and machine learning to cloud computing and automation, we ensure your business benefits from the most advanced digital solutions available."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      content: "Security is paramount in today's digital landscape. We implement robust security measures and ensure compliance with industry standards and regulations, giving you peace of mind as you embrace digital transformation."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Ongoing Support",
      content: "Our relationship doesn't end at project completion. We provide comprehensive ongoing support, maintenance, and optimization services to ensure your digital solutions continue to deliver value and evolve with your business needs."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Why Choose AppJug?"
            className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-4"
            delay={0.2}
          />
          <AnimatedSection delay={0.4}>
            <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
              Discover what sets us apart in the digital transformation landscape
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }} // Simplified delay for a cleaner effect
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-[#FFC300] bg-yellow-100 p-2 rounded-lg">
                        {item.icon}
                      </div>
                      <h3 className="font-montserrat font-semibold text-xl text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === index ? 'max-h-48 pb-6' : 'max-h-0'
                  }`}>
                    <div className="px-6">
                      <p className="font-poppins text-gray-700 leading-relaxed pl-14">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs;