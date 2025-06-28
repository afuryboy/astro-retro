export interface I18nStrings {
  "site.name": string;
  "site.nav.home": string;
  "site.nav.posts": string;
  "site.nav.tags": string;
  "site.nav.about": string;
  "site.footer.Copyright": string;

  "date.published": string;
  "date.updated": string;
  "pageWithNo": string;
  "a11y.breadcrumb": string;


  // constant section
  'Master': string;
  "Expert": string;
  "Advanced": string;
  'Proficient': string;
  "Familiar": string;
  "Basic": string;
  "FEATURED": string;
  // home section
  "home.hero.text": string;
  "home.hero.subtext1": string;
  "home.hero.subtext2": string;
  "home.skill.title": string;
  "home.skill.subtitle": string;
  "home.skill.topSkill": string;
  "home.skill.topSkillSet": string;
  "home.blog.title": string;
  "home.blog.subtitle": string;
  "home.project.title": string;
  "home.project.subtitle": string;
  "home.project.item1.title": string;
  "home.project.item1.description": string;
  "home.project.item2.title": string;
  "home.project.item2.description": string;
  "home.project.item3.title": string;
  "home.project.item3.description": string;
  // blog section
  "blog.title": string;
  "blog.subtitle": string;
  "blog.read": string;
  "blog.readMore": string;
  // tag section
  "tag.title": string;

  // about section
  "about.description": string;
  "about.career": string;
  "about.experience": string;
  "about.location": string;
  "about.education": string;
}

export type I18nKeys = keyof I18nStrings;
