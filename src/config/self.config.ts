type Skill = {
  name: string;
  experienceLevel: number;
  experience: string;
  experienceRate: number;
};


export const skillList : Skill[] = [
  {
    name: "Vue",
    experienceLevel: 1,
    experience: "精通",
    experienceRate: 90,
  },
  {
    name: "Element UI",
    experienceLevel: 2,
    experience: "熟练",
    experienceRate:85,
  },
  {
    name: "React",
    experienceLevel: 2,
    experience: "熟练",
    experienceRate: 75,
  },
  {
    name: "Astro",
    experienceLevel: 3,
    experience: "熟悉",
    experienceRate: 50,
  },
  {
    name: "Fastify",
    experienceLevel: 3,
    experience: "熟悉",
    experienceRate: 45,
  },
];


export const skills = skillList.map(skill => skill.name)

export const skillCompositions : Skill[] = [
  {
    name: "vue2 + vuex + vite",
    experienceLevel: 1,
    experience: "精通",
    experienceRate: 90,
  },
  {
    name: "vue3 + pina + vite",
    experienceLevel: 1,
    experience: "精通",
    experienceRate: 90,
  },
  {
    name: "react + react hook + vite",
    experienceLevel: 2,
    experience: "熟练",
    experienceRate: 80,
  },
  {
    name: "react + zustand + vite",
    experienceLevel: 2,
    experience: "熟练",
    experienceRate: 75,
  },
  {
    name: "react + nextjs",
    experienceLevel: 3,
    experience: "熟悉",
    experienceRate: 65,
  },
  {
    name: "fastify + betterAuth",
    experienceLevel: 3,
    experience: "熟悉",
    experienceRate: 60,
  },
]

export const activityList = [
  {
    icon: '💻',
    content: '使用astro和retroui重构个人站点',
    time: '一个月前'
  }
] 

