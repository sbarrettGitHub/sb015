import { createI18n } from "vue-i18n";
import en from "../../../sb015.web.common/i18n/en.json";
import fr from "../../../sb015.web.common/i18n/fr.json";
const messages = {
  en: en,
  fr: fr,
};
const DEFAULT_LOCALE = "en";
const extractLanguageFromLlocale = (locale: string) => {
  return locale.split("-")[0];
};
/**
 * Check the local storage, browser locale to determine what default locale to use
 * @returns the defualt locale
 */
export function getDefaultLocale() {
  // Check local strage first
  const persistedLocale = localStorage.getItem("locale");
  if (persistedLocale) {
    return persistedLocale;
  }

  const availableLocales = getAvailableLocales();
  const navigatorLocale = navigator.language;

  // If the navigator locale e.g. en-GB is explicitly supported then use it
  if (availableLocales.includes(navigatorLocale)) {
    return navigatorLocale;
  }

  // Extract the language from the locale and use if supported
  const navigatorLanguage = extractLanguageFromLlocale(navigatorLocale);
  if (navigatorLocale.split("-").length > 1) {
    if (availableLocales.includes(navigatorLanguage)) {
      return navigatorLanguage;
    }
  }

  // en-GB available but en-US needed fallback on en if supported
  const fallback = availableLocales.find(
    (locale) =>
      extractLanguageFromLlocale(locale.toString()) === navigatorLanguage
  );
  return fallback ?? DEFAULT_LOCALE;
}
function getAvailableLocales(): string[] {
  const availableLocales = Reflect.ownKeys(messages);
  return availableLocales.map((l) => l.toString());
}

export default createI18n({
  locale: getDefaultLocale(),
  legacy: false,
  globalInjection: true,
  messages,
});
