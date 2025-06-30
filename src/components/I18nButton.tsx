import { Languages } from "lucide-react";
import { Button } from "./retroui/Button";
import { useEffect, useState } from "react";
import { Select } from "./retroui/Select";
import {
  DEFAULT_LOCALE,
  SUPPORT_LOCALES,
  localeToProfile,
} from "@/i18n/config";
import { getLocaleInfo, getRelativeLocalePath, stripBaseAndLocale } from "@/i18n/utils";
export default function I18nButton({ url, locale, className = '' }) {
  const unLocalizedPathname = stripBaseAndLocale(
    locale,
    url
  );
  const localeProfile = getLocaleInfo(locale);
  const [localeVal, setLocale] = useState(locale);
  const selectHandle = (v) => {
    setLocale(v);
    location.href = getRelativeLocalePath(v, unLocalizedPathname)
  };
  return (
    <div className={className}>
      <Select value={localeVal} onValueChange={selectHandle}>
        <Select.Trigger className="rounded-md px-2 py-0.5" aria-label="language switch button">
          {/* <Select.Icon className="SelectIcon">
            <Languages size="18" />
          </Select.Icon> */}
          <Select.Value>{localeToProfile[localeVal]?.flag}{localeToProfile[localeVal]?.name}</Select.Value>
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            {SUPPORT_LOCALES.map((locale) => (
              <Select.Item value={locale} key={locale}>
                {localeToProfile[locale]?.flag}{localeToProfile[locale]?.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  );
}
