import { Candy, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-purple-900/95 via-pink-800/95 to-red-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-purple-900 via-pink-800 to-red-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Candy className="h-8 w-8 text-pink-400 animate-spin-slow" />
              <span className="text-2xl font-bold gradient-text">Tydomet</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="nav-link text-white hover:text-pink-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="nav-link text-white hover:text-pink-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
                About
              </Link>
              <Link to="/contact" className="nav-link text-white hover:text-pink-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="wonka-button p-2 rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-purple-900/95 to-pink-900/95 backdrop-blur-md">
            <Link
              to="/"
              className="nav-link block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="nav-link block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}