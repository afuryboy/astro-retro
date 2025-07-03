export const SITE = {
  name: 'RetroBlog',
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
};



export const navConfig = {
  topNavItems: [
    { title: "Home", key: "site.nav.home", href: "/" },
    { title: "Posts", key: "site.nav.posts", href: "/posts" },
    { title: "Tags", key: "site.nav.tags", href: "/tags" },
    { title: "About", key: "site.nav.about", href: "/about" },
    { title: "Contact", key: "site.nav.contact", href: "/contact" },
  ],
}