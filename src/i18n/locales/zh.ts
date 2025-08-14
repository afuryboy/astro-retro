import type { I18nStrings } from "../types";

const siteLocales = {
  "site.name": "Retro博客",
  "site.description": "这个网站基于astro、react、retroui开发的博客网站",
  "site.nav.home": "首页",
  "site.nav.posts": "文章",
  "site.nav.tags": "标签",
  "site.nav.projects": "项目",
  "site.nav.about": "关于",
  "site.nav.contact": "联系",
  "site.footer.Copyright": "版权所有 © {year} | 保留所有权利",

  "notFound": "未找到",
  "author.name": "酱爆",
  "author.description": "这家伙很懒，什么也没留下"
};

const constantLocales = {
  'Master': '精通',
  "Expert": "专家级",
  "Advanced": "高级",
  'Proficient': '熟练',
  "Familiar": "熟悉",
  "Basic": "基础",

  "FEATURED": "精选",
}
const ZHLocales: I18nStrings = {
  ...siteLocales,
  ...constantLocales,
  "date.published": "发布于",
  "date.updated": "更新于",
  "pageWithNo": "第 {no} 页",
  "a11y.breadcrumb": "面包屑导航",
  // home section
  "home.hero.text": '欢迎来到我的',
  "home.hero.subtext1": "这个网站的开发是基于",
  "home.hero.subtext2": "主要用于博客和个人职业和技能展示用",
  "home.skill.title": "技能箱",
  "home.skill.subtitle": "工欲善其事，必先利其器",
  "home.skill.topSkill": "Top5 技能",
  "home.skill.topSkillSet": "Top5 技能组合",
  "home.blog.title": "最新博客",
  "home.blog.subtitle": "记录我的前端技术文章",
  "home.project.title": "做过的项目",
  "home.project.subtitle": "曾经开发过项目，仅用于个人技术展示使用",
  "home.project.item1.title": "欧易法币项目",
  "home.project.item1.description": "世界Top3比特币交易所法币响应式改版",
  "home.project.item2.title": "大屏抓取",
  "home.project.item2.description": "商汤人脸抓取大屏",
  "home.project.item3.title": "场景编辑器",
  "home.project.item3.description": "机器人任务自由定制",
  // blog section
  "blog.title": "博客",
  "blog.subtitle": "记录自己的前端技术文章",
  "blog.read": "阅读文章",
  "blog.readMore": "阅读更多文章",
  // tag section
  "tag.title": "标签",
  // project section
  "project.title": "项目",
  "project.subtitle": "我曾经开发过的项目",
  // about section
  "about.description": "一个10年前端老兵",
  "about.career": "2015年毕业于安徽皖西学院电子信息专业，至今已有10年前端开发经验。曾任职于百度、商汤、OK币所、朴津智能等公司， 热衷于编写整洁的代码和用户体验。",
  "about.experience": '工作经验 10年',
  "about.location": '安徽安庆, 中国🇨🇳',
  "about.education": '本科，电子信息科学与技术专业',
};

export default ZHLocales;
