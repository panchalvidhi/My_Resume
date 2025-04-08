import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 no-print transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-md overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 mr-2 flex items-center justify-center text-white font-bold ${
              scrolled ? 'opacity-100' : 'opacity-90'
            }`}>
              VP
            </div>
            <h1 className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-blue-300'}`}>
              Vidhi Panchal
            </h1>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#profile" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Profile
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#awards" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Awards
                </a>
              </li>
              <li>
                <a 
                  href="#certificates" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Certificates
                </a>
              </li>

              <li>
                <a 
                  href="#contact" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden focus:outline-none ${
              scrolled ? 'text-white' : 'text-gray-200'
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden pb-4 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="space-y-2 py-2">
            <li>
              <a 
                href="#profile" 
                className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Profile
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#awards" 
                className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Awards
              </a>
            </li>
            <li>
              <a 
                href="#certificates" 
                className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Certificates
              </a>
            </li>

            <li>
              <a 
                href="#contact" 
                className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
