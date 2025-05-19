import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importing translations manually
import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';
import guTranslation from './locales/gu/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      gu: { translation: guTranslation }
    },
    supportedLngs: ['en', 'hi', 'gu'],
    fallbackLng: 'en',
    react: {
      useSuspense: false
    }
  });

export default i18n;
