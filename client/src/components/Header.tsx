import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50 no-print">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-semibold text-primary">Vidhi Panchal</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#profile" 
                  className="text-gray-900 hover:text-primary transition-colors duration-300"
                >
                  Profile
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-900 hover:text-primary transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="text-gray-900 hover:text-primary transition-colors duration-300"
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-900 hover:text-primary transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-900 hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button 
            className="md:hidden text-gray-900 focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden pb-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <ul className="space-y-2">
            <li>
              <a 
                href="#profile" 
                className="block py-2 text-gray-900 hover:text-primary transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Profile
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="block py-2 text-gray-900 hover:text-primary transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="block py-2 text-gray-900 hover:text-primary transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="block py-2 text-gray-900 hover:text-primary transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 text-gray-900 hover:text-primary transition-colors duration-300"
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
