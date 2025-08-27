import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimatedText from './AnimatedText';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Get In Touch"
            className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-4"
            delay={0.2}
          />
          <AnimatedSection delay={0.4}>
            <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your digital goals.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection direction="left" delay={0.6}>
            <div className="space-y-8">
              <div>
                <AnimatedText 
                  text="Let's Start a Conversation"
                  className="font-montserrat font-semibold text-2xl text-gray-900 mb-6"
                  delay={0.8}
                />
                <AnimatedSection delay={1.0}>
                  <p className="font-poppins text-gray-700 leading-relaxed mb-8">
                    We're here to answer your questions and discuss how our digital transformation 
                    services can propel your business forward. Reach out to us through any of the 
                    channels below.
                  </p>
                </AnimatedSection>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Phone", info: "+1 (555) 123-4567" },
                  { icon: Mail, title: "Email", info: "hello@digitransform.com" },
                  { icon: MapPin, title: "Office", info: "123 Innovation Drive\nTech Valley, CA 94025" }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-4 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-gray-200 p-3 rounded-lg group-hover:bg-[#002D62] transition-all duration-300"
                    >
                      <contact.icon className="h-6 w-6 text-yellow-400 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <h4 className="font-poppins font-semibold text-gray-900">{contact.title}</h4>
                      <p className="font-poppins text-gray-600 whitespace-pre-line">{contact.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#002D62]/20"></div>
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                  </motion.div>
                  <p className="font-poppins text-gray-900 font-medium">Interactive Map</p>
                  <p className="font-poppins text-sm text-gray-600">Located in Tech Valley</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.8}>
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full -translate-y-16 translate-x-16"></div>
              
              <AnimatedText 
                text="Send Us a Message"
                className="font-montserrat font-semibold text-2xl text-gray-900 mb-6 relative z-10"
                delay={0.8}
              />

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  </motion.div>
                  <h4 className="font-montserrat font-semibold text-xl text-gray-900 mb-2">
                    Thank You!
                  </h4>
                  <p className="font-poppins text-gray-600">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6 relative z-10"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Doe' },
                      { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@company.com' }
                    ].map((field, index) => (
                      <motion.div 
                        key={field.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                      >
                        <label className="block font-poppins font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.label.includes('*')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 font-poppins"
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                  >
                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 font-poppins"
                      placeholder="Your Company Name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                  >
                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 font-poppins resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </motion.form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;