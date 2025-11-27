import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Logo
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
            >
              Products
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
            >
              Contact
            </a>
            <button className="w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
