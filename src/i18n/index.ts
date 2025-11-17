import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locals/en.json";
import el from "./locals/el.json";

const options: InitOptions = {
  debug: import.meta.env.DEV,
  fallbackLng: "en",
  supportedLngs: ["en", "el"],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { common: en }, // 👈 namespace "common"
    el: { common: el }, // 👈 namespace "common"
  },
  defaultNS: "common",
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
