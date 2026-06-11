import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

export type Page = string;

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    setIsOpen(false);
    setOpenSubmenu(null);
    onNavigate(page as Page);
  };

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenSubmenu(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 200);
  };

  const toggleMobileSubmenu = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  // Dynamic styles based on scroll state or page
  // If not on home page, always show "scrolled" style (solid background) for readability
  const isSolid = scrolled || currentPage !== 'home';

  const navContainerClasses = isSolid
    ? 'bg-white/90 backdrop-blur-xl border-gray-200/50 shadow-lg text-gray-800'
    : 'bg-black/20 backdrop-blur-md border-white/10 text-white';

  const linkClasses = (isActive: boolean) => isSolid
    ? `${isActive ? 'text-teal-700 font-bold bg-teal-50' : 'text-gray-700 hover:text-teal-700 hover:bg-teal-50'}`
    : `${isActive ? 'text-white font-bold bg-white/20' : 'text-white/90 hover:text-white hover:bg-white/20'}`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300 print:hidden">
      <nav 
        className={`w-full max-w-7xl rounded-[30px] transition-all duration-500 ease-in-out border px-4 sm:px-6 lg:px-8 ${navContainerClasses}`}
      >
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center">
              <Logo 
                variant={isSolid ? 'default' : 'white'} 
                className="h-9 sm:h-12 w-auto transition-all duration-300" 
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center lg:space-x-0 xl:space-x-1">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                onMouseLeave={() => item.subItems && handleMouseLeave()}
              >
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-1 font-medium text-[13px] lg:px-2.5 xl:px-4 xl:text-sm py-2.5 rounded-[30px] transition-all duration-200 ${linkClasses(currentPage === item.href)}`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown size={14} className={`transition-transform duration-200 ${openSubmenu === item.label ? 'rotate-180' : ''}`} />}
                </a>

                {/* Desktop Dropdown */}
                {item.subItems && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-56 rounded-2xl shadow-xl border overflow-hidden transition-all duration-300 origin-top-left ${
                      openSubmenu === item.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                    } ${isSolid ? 'bg-white border-gray-100' : 'bg-white/95 backdrop-blur-xl border-white/20'}`}
                  >
                    <div className="py-2">
                      {item.subItems.map((subItem, idx) => (
                        <a
                          key={idx}
                          href={`#${subItem.href}`}
                          onClick={(e) => handleNavClick(e, subItem.href || item.href)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="lg:pl-1 xl:pl-2">
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className={`lg:px-4 xl:px-6 py-2.5 rounded-[30px] text-[13px] xl:text-sm font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5 ${
                    isSolid 
                      ? 'bg-burgundy-700 text-white hover:bg-burgundy-800' 
                      : 'bg-white text-burgundy-900 hover:bg-gray-100'
                  }`}
                >
                  Get in Touch
                </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-[30px] focus:outline-none transition-colors ${
                isSolid 
                  ? 'text-gray-500 hover:text-teal-700 hover:bg-teal-50' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[80vh] opacity-100 pb-6 overflow-y-auto' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2 pt-2 border-t border-gray-200/20">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="w-full">
                {item.subItems ? (
                  <>
                    <button
                      onClick={(e) => toggleMobileSubmenu(e, item.label)}
                      className={`flex w-full items-center justify-between px-4 py-3 rounded-[20px] text-base font-medium ${linkClasses(currentPage === item.href)}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={18} className={`transition-transform duration-200 ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Mobile Submenu */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 space-y-1 ${
                        openSubmenu === item.label ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <a
                        href={`#${item.href}`}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block px-4 py-2 rounded-[16px] text-sm font-medium ${
                          isSolid ? 'text-gray-500 hover:text-teal-700 hover:bg-teal-50' : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        Overview
                      </a>
                      {item.subItems.map((subItem, idx) => (
                        <a
                          key={idx}
                          href={`#${subItem.href}`}
                          onClick={(e) => handleNavClick(e, subItem.href || item.href)}
                          className={`block px-4 py-2 rounded-[16px] text-sm font-medium ${
                            isSolid ? 'text-gray-500 hover:text-teal-700 hover:bg-teal-50' : 'text-white/70 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={`#${item.href}`}
                    className={`block px-4 py-3 rounded-[20px] text-base font-medium ${linkClasses(currentPage === item.href)}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block w-full text-center mt-4 bg-burgundy-700 text-white px-4 py-3 rounded-[30px] text-base font-medium hover:bg-burgundy-800"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;