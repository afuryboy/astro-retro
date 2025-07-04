import type { I18nStrings } from "../types";
const siteLocales = {
  "site.name": "RetroBlog",
  "site.description": "This website is a blog website developed based on astro, react, and retroui",
  "site.nav.home": "Home",
  "site.nav.posts": "Posts",
  "site.nav.tags": "Tags",
  "site.nav.about": "About",
  "site.nav.contact": "Contact",
  "site.footer.Copyright": "Copyright © {year} | All rights reserved",

   "notFound": "Not Found",
   "author.name": "JiangBao",
   "author.description": "This guy is lazy and leaves nothing behind"
};
const constantLocales = {
  'Master': 'Master',
  "Expert": "Expert",
  "Advanced": "Advanced",
  'Proficient': 'Proficient',
  "Familiar": "Familiar",
  "Basic": "Basic",

  "FEATURED": "FEATURED",
}
const ENLocales: I18nStrings = {
  ...siteLocales,
  ...constantLocales,
  "date.published": "Published",
  "date.updated": "Updated",
  "pageWithNo": "第 {no} 页",
  "a11y.breadcrumb": "面包屑导航",
  // home section
  "home.hero.text": 'Welcome come to my',
  "home.hero.subtext1": "This website is developed based on ",
  "home.hero.subtext2": "Mainly used for blogging and personal career and skills display",
  "home.skill.title": "My ToolBox",
  "home.skill.subtitle": "If you want to do your work well, you must first sharpen your tools",
  "home.skill.topSkill": "Top5 Skills",
  "home.skill.topSkillSet": "Top5 Skill Set",
  "home.blog.title": "Latest Blog",
  "home.blog.subtitle": "Record your own front-end technical articles",
  "home.project.title": "My Projects",
  "home.project.subtitle": "I have developed a project before, and it is only used for personal technology demonstration",
  "home.project.item1.title": "okx crypto project",
  "home.project.item1.description": "Top 3 Bitcoin exchanges have been redesigned to be responsive to crypto",
  "home.project.item2.title": "Large screen face capture",
  "home.project.item2.description": "SenseTime face capture large screen",
  "home.project.item3.title": "Scene Editor",
  "home.project.item3.description": "Atomization of robot task customization",
  // blog section
  "blog.title": "Blog",
  "blog.subtitle": "Record my web technology articles",
  "blog.read": "Read Article",
  "blog.readMore": "Read More Article",
  // tag section
  "tag.title": "tags",

  // about section
  "about.description": "A 10-year front-end veteran",
  "about.career": "Graduated from Anhui Wanxi University with a major in electronic information in 2015, he has 10 years of front-end development experience. He has worked for Baidu, SenseTime, OKCoin, Pujin Intelligence and other companies, and is passionate about writing clean code and user experience.",
  "about.experience": 'Work experience 10 years',
  "about.location": 'Anqing, Anhui, China 🇨🇳',
  "about.education": `Bachelor's degree, major in Electronic Information Science and Technology`,
};
export default ENLocales;
