import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import AnimatedText from './AnimatedText';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const highlights = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovative Approach",
      description: "Cutting-edge solutions tailored to your unique challenges"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Creativity & Usability",
      description: "Beautiful designs that prioritize user experience"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Seasoned professionals with diverse industry expertise"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Results",
      description: "Track record of successful digital transformations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100"> {/* Use a slightly darker off-white for background */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="About AppJug" // Changed the company name for consistency
            className="font-montserrat font-bold text-4xl lg:text-5xl text-[#08396b] mb-4"
            delay={0.2}
          />
          <AnimatedSection delay={0.4}>
            <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
              We are digital transformation experts dedicated to helping businesses navigate 
              the evolving digital landscape with confidence and success.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left" delay={0.2}>
            <AnimatedText 
              text="Our Mission & Values"
              className="font-montserrat font-semibold text-2xl text-[#08396b] mb-6"
              delay={0.6}
            />
            <AnimatedSection delay={0.8}>
              <p className="font-poppins text-gray-700 mb-6 leading-relaxed">
                At AppJug, we believe that every business deserves access to world-class 
                digital solutions. Our mission is to bridge the gap between traditional business 
                practices and modern digital capabilities, ensuring our clients not only adapt 
                but thrive in the digital age.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={1.0}>
              <p className="font-poppins text-gray-700 mb-8 leading-relaxed">
                With over a decade of combined experience in digital transformation, our team 
                has helped hundreds of businesses streamline operations, enhance customer 
                experiences, and drive sustainable growth through strategic technology implementation.
              </p>
            </AnimatedSection>
            
            {/* Team Photo Placeholder - Updated to use the new color scheme */}
            <AnimatedSection delay={1.2}>
              <div className="bg-[#002D62] rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 bg-gray-700 rounded-full border-2 border-gray-500"></div>
                    <div className="w-12 h-12 bg-gray-700 rounded-full border-2 border-gray-500"></div>
                    <div className="w-12 h-12 bg-gray-700 rounded-full border-2 border-gray-500"></div>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold">Meet Our Team</p>
                    <p className="font-poppins text-sm opacity-90">50+ Digital Experts</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Right Content - Key Differentiators */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-yellow-400 bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-xl text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="font-poppins text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;