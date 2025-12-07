import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '/' },
    { 
      label: 'WHO WE ARE', 
      href: '#',
      dropdown: [
        { label: 'Our History', href: '/our-history' },
        { label: 'Mission and Vision', href: '/mission-vision' },
        { label: 'Our Beliefs', href: '/our-beliefs' },
        { label: 'Our Structure', href: '/our-structure' },
      ]
    },
    { 
      label: 'WHAT WE DO', 
      href: '#',
      dropdown: [
        { label: 'Our Ministries', href: '/ministries' },
        { label: 'Service Times', href: '/#services' },
        { label: 'Events', href: '/events' },
        { label: 'Sermons', href: '/sermons' },
      ]
    },
    { 
      label: 'ONLINE GIVING', 
      href: '/giving',
    },
    { 
      label: 'USEFUL LINKS', 
      href: '#',
      dropdown: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Find a Parish', href: '/contact' },
        { label: 'Prayer Request', href: '/contact' },
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[black] shadow-lg' : 'bg-[]/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="RCCG Logo" 
              className="w-14 h-14 object-contain"
              style={{ 
                mixBlendMode: 'multiply',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            />
            <div className="hidden md:block">
              <h1 className="text-white font-bold text-lg leading-tight">PSCM</h1>
              {/* <p className="text-[#d4af37] text-xs">Passion For Souls</p> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button className="text-white text-sm font-medium hover:text-[#d4af37] transition-colors duration-200 cursor-pointer">
                      {item.label}
                    </button>
                    {openDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 pt-4 z-50"
                      >
                        <div className="w-56 bg-white rounded-lg shadow-xl py-2 animate-fade-in">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-3 text-[#2d3748] hover:bg-[#f8f9fa] hover:text-[#d4af37] transition-colors duration-200 font-medium cursor-pointer"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white text-sm font-medium hover:text-[#d4af37] transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full text-left py-3 text-white text-sm font-medium hover:text-[#d4af37] transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 pb-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-white/80 text-sm hover:text-[#d4af37] transition-colors duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-white text-sm font-medium hover:text-[#d4af37] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;