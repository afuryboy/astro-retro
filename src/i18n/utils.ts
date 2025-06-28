import { getRelativeLocaleUrl, type GetLocaleOptions } from "astro:i18n";
import { DEFAULT_LOCALE, localeToProfile, SUPPORT_LOCALES, type LocaleKey, type LocaleProfile } from "./config";
import { UnsupportedLocale } from "./errors";
import type { I18nKeys, I18nStrings } from "./types";


export function isLocaleKey(
  locale: string | undefined,
  supportedLocales: LocaleKey[] = SUPPORT_LOCALES
): locale is LocaleKey {
  if (typeof locale !== "string") return false;
  return supportedLocales.includes(locale as LocaleKey);
}



export function getLocaleInfo(
  locale?: string,
  _isLocaleKey: (locale?: string) => locale is LocaleKey = isLocaleKey
): LocaleProfile {
  if (!_isLocaleKey(locale)) throw new UnsupportedLocale(locale);

  return localeToProfile[locale];
}

export function getLocaleMsgs(
  locale: LocaleKey,
  getLocaleConfig: (locale: LocaleKey) => LocaleProfile = getLocaleInfo
): I18nStrings {
  return getLocaleConfig(locale).messages;
}

export function translateFor(
  locale: string | undefined,
  _isLocaleKey: (
    locale: string | undefined
  ) => locale is LocaleKey = isLocaleKey,
  _getLocaleMsgs: (locale: LocaleKey) => I18nStrings = getLocaleMsgs
) {
  if (!_isLocaleKey(locale)) throw new UnsupportedLocale(locale);
  const msgs = _getLocaleMsgs(locale);

  return (key: I18nKeys, substitutions?: Record<string, string | number>) => {
    let translation = msgs[key];

    for (const key in substitutions) {
      const value = substitutions[key];
      translation = translation.replace(`{${key}}`, String(value));
    }

    return translation;
  };
}

export function getRelativeLocalePath(
  locale: string | undefined,
  path: string = "/",
  {
    _isLocaleKey = isLocaleKey,
    ...options
  }: GetLocaleOptions & {
    _isLocaleKey?: (locale?: string) => locale is LocaleKey;
  } = {}
): string {
  if (!_isLocaleKey(locale)) throw new UnsupportedLocale(locale);

  const localizedPath = getRelativeLocaleUrl(locale, path, options);

  const hasTrailingSlash = path.endsWith("/") || localizedPath === "/";

  if (hasTrailingSlash) return localizedPath;

  return localizedPath.replace(/\/+$/, "");
}

export function stripBaseAndLocale(
  locale: string | undefined,
  path: string,
  _isLocaleKey: (locale?: string) => locale is LocaleKey = isLocaleKey,
  _buildPrefix: (locale: LocaleKey) => string = buildPrefix
): string {
  if (!_isLocaleKey(locale)) throw new UnsupportedLocale(locale);

  const prefix = _buildPrefix(locale);

  return new URL(path.slice(prefix.length), "http://aaatest.com").pathname;
}


export function buildPrefix(
  locale: LocaleKey,
  defaultLocale: LocaleKey = DEFAULT_LOCALE,
  baseUrl: string = import.meta.env.BASE_URL
): string {
  const isDefaultLocale = locale === defaultLocale;
  const baseWithLocale =
    baseUrl.replace(/\/+$/, "") + (isDefaultLocale ? "" : `/${locale}`);

  return new URL(baseWithLocale, "http://aaatest.com").pathname;
}

