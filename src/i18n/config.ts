import ENLocales from "./locales/en";
import ZHLocales from "./locales/zh";
import type { I18nStrings } from "./types";

export type LocaleProfile = {
  name: string;
  messages: I18nStrings;
  langTag: string;
  direction: "rtl" | "ltr" | "auto";
  //   googleFontName: string;
  default?: boolean;
};

export const localeToProfile = {
  en: {
    name: "English",
    messages: ENLocales,
    direction: "ltr",
    langTag: "en-US",
    flag: '🇬🇧'
  },
  zh: {
    name: "中文",
    messages: ZHLocales,
    direction: "ltr", // "rtl",
    langTag: "zh-CN",
    flag: '🇨🇳'
  },
};

export type LocaleKey = keyof typeof localeToProfile;
export const SUPPORT_LOCALES = Object.keys(localeToProfile) as LocaleKey[];

export const DEFAULT_LOCALE =
  SUPPORT_LOCALES.find(
    (locale) => (localeToProfile[locale] as LocaleProfile).default === true
  ) ?? SUPPORT_LOCALES[0];

