import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Solutions',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'Process Automation'
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Updated background to deep blue
    <footer className="bg-[#002D62] text-white relative overflow-hidden">
      {/* Background Pattern - changed to golden-yellow with low opacity */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Updated logo background to golden-yellow */}
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-montserrat font-bold text-xl">D</span>
              </div>
              <span className="font-montserrat font-bold text-2xl">DigiTransform</span>
            </div>
            
            <p className="font-poppins text-gray-300 leading-relaxed">
              Your trusted partner in digital transformation. We help businesses thrive 
              in the digital age through innovative solutions and cutting-edge technology.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  // Updated social link button colors and hover effect
                  className="bg-white/5 hover:bg-yellow-400 p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg text-white hover:text-gray-900"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    // Updated link hover color
                    className="font-poppins text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    // Updated link hover color
                    className="font-poppins text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                {/* Updated icon color */}
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-gray-300">
                    123 Innovation Drive<br />
                    Tech Valley, CA 94025
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Updated icon color and link hover color */}
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="font-poppins text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Updated icon color and link hover color */}
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:hello@digitransform.com" className="font-poppins text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  hello@digitransform.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="font-montserrat font-medium text-lg mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  // Updated input styling
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  // Updated button styling
                  className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg transition-colors duration-300 text-gray-900"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-poppins text-gray-400 text-center md:text-left">
              © 2024 DigiTransform. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            
            <button
              onClick={scrollToTop}
              // Updated button styling
              className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-900"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
