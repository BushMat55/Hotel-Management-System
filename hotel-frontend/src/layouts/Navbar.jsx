
import React, { useState, useEffect } from 'react';

const Navbar = ({ language, onLanguageChange, translations }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', label: translations.home || 'Home', icon: '🏨' },
    { id: 'rooms', label: translations.rooms || 'Rooms', icon: '🛏️' },
    { id: 'dining', label: translations.dining || 'Dining', icon: '🍽️' },
    { id: 'spa', label: translations.spa || 'Spa', icon: '🏊' },
    { id: 'events', label: translations.events || 'Events', icon: '📅' },
    { id: 'contact', label: translations.contact || 'Contact', icon: '📞' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-md border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="text-white text-lg font-bold">KJ</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hidden sm:block">
                Kimjai
              </span>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-1 text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium text-sm group"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Language Selector - Compact */}
            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="bg-amber-50 rounded-lg px-3 py-1.5 text-sm font-medium border border-amber-200 cursor-pointer outline-none transition-all hover:bg-amber-100 focus:ring-2 focus:ring-amber-500"
              >
                <option value="en">🇬🇧</option>
                <option value="es">🇪🇸</option>
                <option value="fr">🇫🇷</option>
                <option value="sw">🇰🇪</option>
                <option value="zh">🇨🇳</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu - Simple Bottom Icons */}
          <div className="md:hidden flex justify-around pb-2 pt-1 border-t border-amber-100">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-amber-600 transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;