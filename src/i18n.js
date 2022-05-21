import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {LANGUAGE_COOKIE_KEY, LANGUAGE_QUERY_STRING_KEY} from "./constants";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],

      lookupQuerystring: LANGUAGE_QUERY_STRING_KEY,
      lookupCookie: LANGUAGE_COOKIE_KEY,
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      caches: ['localStorage', 'cookie'],

      cookieMinutes: 10,
      cookieDomain: 'localhost',

      htmlTag: document.documentElement,
      cookieOptions: { path: '/', sameSite: 'strict' }
    }
  });

export default i18n;