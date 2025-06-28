import { navConfig } from "@/config/site.config";
import { Badge } from "./retroui/Badge";
import { Text } from "./retroui/Text";
import I18nButton from "./I18nButton";
import { translateFor } from "@/i18n/utils";

export default function SideNav({url, locale}) {
  const t = translateFor(locale)
  return (
    <div
      className={`fixed right-auto border-r-2 h-screen overflow-y-scroll transition-transform transform md:translate-x-0 w-60 bg-background flex flex-col`}
    >
      <I18nButton url={url} locale={locale} className="flex justify-center my-5" />
      <nav className="flex flex-col items-start px-6 space-y-4">
        {navConfig.topNavItems.map((item) => (
          <div key={item.title} className="w-full">
            <a
              key={item.title}
              href={item.href}
              className={`px-2 py-1 w-full border border-transparent ${
                url === item.href && "bg-primary text-black"
              }`}
            >
              {t(`${item.key}`)}
              {item.tag && (
                <Badge size="sm" className="ml-2">
                  {item.tag}
                </Badge>
              )}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
}
