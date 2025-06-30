import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);
  const { t, i18n } = useTranslation();

  const newLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/00ea6419077a4ca9eca48ee0986716f3.png";

  const navigation = [
    { name: t('header.home'), href: '/' },
    { name: t('header.booking'), href: '/reservation' },
    {
      name: t('header.media'),
      href: '/medias',
      submenu: [
        { name: t('header.press'), href: '/medias/presse' },
        { name: t('header.photos'), href: '/medias/photos' },
        { name: t('header.videos'), href: '/medias/videos' },
      ]
    },
    {
      name: t('header.expertise'),
      href: '/domaine',
      submenu: [
        { name: t('header.pretrial_detention'), href: '/domaine/detention-preventive' },
        { name: t('header.assizes_court'), href: '/domaine/cour-assises' },
        { name: t('header.police_court'), href: '/domaine/tribunal-police' },
        { name: t('header.criminal_court'), href: '/domaine/tribunal-correctionnel' },
      ]
    },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleMouseEnter = (itemName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (itemName) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === itemName ? null : itemName);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileSubmenuOpen(null);
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, [location.pathname]);

  // Re-render component when language changes
  useEffect(() => {}, [i18n.language]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-1 bg-transparent rounded-full group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <img src={newLogoUrl} alt="Logo Isaac Miller" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800">{t('header.title')}</span>
              <p className="text-sm text-slate-600 -mt-1">{t('header.subtitle')}</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-slate-800 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, display: 'none' }}
                    animate={activeDropdown === item.name 
                      ? { opacity: 1, y: 0, display: 'block', transition: { duration: 0.2 } } 
                      : { opacity: 0, y: 10, transition: { duration: 0.2 }, transitionEnd: { display: 'none' } }}
                    className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-200/75 py-2 z-20"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center ml-6 space-x-4">
            <LanguageSwitcher />
            <Link
              to="/reservation"
              className="bg-gradient-to-r from-slate-800 to-slate-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {t('header.book_appointment')}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-gray-200 py-4 overflow-y-auto"
              style={{ maxHeight: 'calc(100vh - 5rem)' }} 
            >
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-base font-medium transition-colors text-left ${
                          isActive(item.href)
                            ? 'text-slate-800 bg-slate-100'
                            : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                        aria-expanded={mobileSubmenuOpen === item.name}
                      >
                        <span>{item.name}</span>
                        {mobileSubmenuOpen === item.name ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-slate-800 bg-slate-100'
                            : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    <AnimatePresence>
                    {item.submenu && mobileSubmenuOpen === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-3"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-slate-200 flex justify-center">
                  <LanguageSwitcher />
                </div>
                <Link
                  to="/reservation"
                  className="block w-full mt-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white px-6 py-3 rounded-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.book_appointment')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;