import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: __IS_DEV__,
    cleanCode: true,
    lowerCaseLng: true,
    keySeparator: false,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      overrideMimeType: false,
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'fr', 'de', 'es'],
    load: 'languageOnly',
  });

export default i18n;
