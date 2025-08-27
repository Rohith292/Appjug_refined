import  { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle the header's background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Set the scrolled state if the user scrolls more than 10 pixels
      setIsScrolled(window.scrollY > 10);
    };

    // Add and clean up the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // An array of navigation items
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  // Function to smooth scroll to a section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior:'smooth' });
    }
    // Close the mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent text-white'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FFC300] to-[#FFD700] rounded-lg flex items-center justify-center">
              <span className="text-gray-900  font-bold text-lg">A</span>
            </div>
            <span className={`font-montserrat font-bold text-xl ${
              isScrolled ? 'text-[#FFC300]' : 'text-white'
            }`}>
              AppJug
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-poppins font-medium transition-colors duration-300 hover:text-[#FFC300] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#FFC300] text-gray-900 px-6 py-2 rounded-lg font-poppins font-medium hover:bg-[#FFD700] transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-[#FFC300]' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-[#FFC300]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-gray-900 rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#FFC300] font-poppins"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-4 bg-[#FFC300] text-gray-900 px-6 py-2 rounded-lg font-poppins font-medium hover:bg-[#FFD700] transition-colors">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
