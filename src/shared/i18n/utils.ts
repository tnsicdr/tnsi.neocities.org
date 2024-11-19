import { ui, defaultLang } from "./ui";

/**
 * Retrieves the language code of a path
 * @param {URL} url - URL of current view
 * @returns {string} Language Code of the URL
 */
export function getLangFromUri(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Retrieves a function to get the translated strings for a given code
 * @param {keyof typeof ui} lang - Language code to retrieve strings for
 * @returns {string} The string or default for a given language
 */
export function useTranslation(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
