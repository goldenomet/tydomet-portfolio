import { Github, Twitter, Linkedin, Mail, Heart, Candy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showCandy, setShowCandy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowCandy(footerPosition < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-purple-900/95 via-pink-900/95 to-red-900/95 backdrop-blur-lg">
      {/* Animated Candy */}
      <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
        showCandy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <Candy className="h-24 w-24 text-pink-400 animate-bounce" />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-800/20 to-red-900/20 animate-gradient-shift"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="group flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-pink-400 group-hover:animate-ping" />
              <span className="text-2xl font-bold gradient-text">Tydomet</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md hover:text-white transition-colors duration-300">
              Creating beautiful digital experiences while pursuing my dreams in software engineering. 
              Join me on this exciting journey of growth and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center">
                  <span className="hover:translate-x-2 transition-transform duration-300 inline-block">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center">
                  <span className="hover:translate-x-2 transition-transform duration-300 inline-block">About</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center">
                  <span className="hover:translate-x-2 transition-transform duration-300 inline-block">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center">
                  <span className="hover:translate-x-2 transition-transform duration-300 inline-block">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com"
                className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
              © {new Date().getFullYear()} Tydomet. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}