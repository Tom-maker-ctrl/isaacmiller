import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Store } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const instagramLink = "https://www.instagram.com/jjlisaacmiller/";
  const googleMyBusinessLink = "https://maps.google.com/?cid=YOUR_CID_HERE"; 
  const emailAddress = "isaac.miller@avocat.be";
  const newLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/00ea6419077a4ca9eca48ee0986716f3.png";

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-1 bg-transparent rounded-full flex items-center justify-center">
                <img src={newLogoUrl} alt="Logo Isaac Miller" className="h-10 w-10 object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold">{t('footer.title')}</span>
                <p className="text-slate-300 text-sm">{t('footer.subtitle')}</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{t('footer.location')}</span>
              </div>
              <div className="text-slate-300">
                <span className="text-sm">{t('footer.vat')}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">{t('footer.navigation_title')}</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.nav_home')}
                </Link>
              </li>
              <li>
                <Link to="/domaine" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.nav_expertise')}
                </Link>
              </li>
              <li>
                <Link to="/medias" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.nav_media')}
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.nav_booking')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">{t('footer.contact_title')}</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">0471 60 94 63</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <a href={`mailto:${emailAddress}`} className="text-slate-300 hover:text-white transition-colors">
                  {emailAddress}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <Instagram className="h-5 w-5 text-slate-400 mr-2" />
                  Instagram
                </a>
              </div>
              <div className="flex items-center space-x-3">
                 <a href={googleMyBusinessLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <Store className="h-5 w-5 text-slate-400 mr-2" />
                  {t('footer.google_business')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer">
                {t('footer.legal_notice')}
              </span>
              <span className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer">
                {t('footer.privacy_policy')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;