import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '@/locales/en/common.json';
import enHome from '@/locales/en/home.json';
import enBooking from '@/locales/en/booking.json';
import enMedia from '@/locales/en/media.json';
import enExpertise from '@/locales/en/expertise.json';

import frCommon from '@/locales/fr/common.json';
import frHome from '@/locales/fr/home.json';
import frBooking from '@/locales/fr/booking.json';
import frMedia from '@/locales/fr/media.json';
import frExpertise from '@/locales/fr/expertise.json';

import nlCommon from '@/locales/nl/common.json';
import nlHome from '@/locales/nl/home.json';
import nlBooking from '@/locales/nl/booking.json';
import nlMedia from '@/locales/nl/media.json';
import nlExpertise from '@/locales/nl/expertise.json';

const resources = {
  en: {
    translation: {
      ...enCommon,
      ...enHome,
      ...enBooking,
      ...enMedia,
      ...enExpertise,
    },
  },
  fr: {
    translation: {
      ...frCommon,
      ...frHome,
      ...frBooking,
      ...frMedia,
      ...frExpertise,
    },
  },
  nl: {
    translation: {
      ...nlCommon,
      ...nlHome,
      ...nlBooking,
      ...nlMedia,
      ...nlExpertise,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;