import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from '../i18n/locales/en/translation.json';
import translationTH from '../i18n/locales/th/translation.json';

// the translations
// (tip move them in a JSON file and import them)

const resources = {
  en: {
    translation: translationEN
  },
  th: {
    translation: translationTH
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('lng') || "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export class i18nHelper {

  public static translate(cell: string) {
    return (i18n.t(cell));
  }

  public static translateTH(cell: string) {
    return (i18n.t(cell,  {lng: 'th'}));
  }

  public static translateEN(cell: string) {
    return (i18n.t(cell,  {lng: 'en'}));
  }

  public static translatewithData(cell: string, jsonText: string) {
    let translateText = (i18n.t(cell));

    let jsonObject = JSON.parse(jsonText);

    for (let key in jsonObject) {
      translateText = translateText.replace(key, jsonObject[key]);
    }

    return { __html: translateText };
  }

  public static translateWithHTML(cell: string) {
    return { __html: (i18n.t(cell)) };
  }

  public static changeLanguage(lng: string) {
    return i18n.changeLanguage(lng);
  }

  public static getCurrentLanguage() {
    return i18n.language;
  }

};
