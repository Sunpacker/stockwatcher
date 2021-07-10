import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// en
import enCommon from "./en/common.json";
import enRoutes from "./en/routes.json";

// ru
import ruCommon from "./ru/common.json";
import ruRoutes from "./ru/routes.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: enCommon,
      routes: enRoutes,
    },
    ru: {
      translation: ruCommon,
      routes: ruRoutes,
    },
  },
});

export default i18next;
