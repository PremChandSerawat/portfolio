// Portfolio Data - Contains non-translatable data like URLs, icons, and structural info
// Translatable content is in messages/en.json

export const personalInfo = {
  email: "serawatpremchand143@gmail.com",
  phone: "7619790922",
  github: "https://github.com/premchandserawat",
  linkedin: "https://linkedin.com/in/premchandserawat",
  twitter: "https://x.com/PremChand194921",
};

export const skills = {
  frontend: [
    { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
    { name: "Next.js", icon: "fab fa-js", color: "#f7df1e" },
    { name: "HTML5", icon: "fab fa-html5", color: "#e34c26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#2965f1" },
  ],
  backend: [
    { name: "Node.js", icon: "fab fa-node-js", color: "#8cc84b" },
    { name: "NestJS", icon: "fas fa-cube", color: "#e0234e" },
    { name: "Express.js", icon: "fab fa-node-js", color: "#8cc84b" },
    { name: "Python", icon: "fab fa-python", color: "#3776ab" },
  ],
  databases: [
    { name: "MongoDB", icon: "fas fa-database", color: "#47a248" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
    { name: "MySQL", icon: "fas fa-database", color: "#00758f" },
    { name: "Redis", icon: "fas fa-database", color: "#d82c20" },
  ],
  cloud: [
    { name: "GCP", icon: "fab fa-google", color: "#4285f4" },
    { name: "Azure", icon: "fab fa-microsoft", color: "#00a4ef" },
    { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
    { name: "CI/CD", icon: "fas fa-code-branch", color: "#6e5494" },
  ],
  data: [
    { name: "Tableau", icon: "fas fa-chart-bar", color: "#e97627" },
    { name: "Power BI", icon: "fas fa-chart-pie", color: "#1f77b4" },
    { name: "Pandas/NumPy", icon: "fas fa-project-diagram", color: "#e5c07b" },
    { name: "Matplotlib/Seaborn", icon: "fas fa-chart-line", color: "#e34c26" },
  ],
  tools: [
    { name: "Web Scraping", icon: "fas fa-spider", color: "#64ffda" },
    { name: "Elasticsearch", icon: "fas fa-search", color: "#005571" },
    { name: "Machine Learning", icon: "fas fa-robot", color: "#64ffda" },
    { name: "Git", icon: "fas fa-code", color: "#64ffda" },
  ],
};

export const competencies = {
  core: [
    { nameKey: "softwareDevelopment", icon: "fas fa-laptop-code" },
    { nameKey: "cloudComputing", icon: "fas fa-cloud" },
    { nameKey: "dataVisualization", icon: "fas fa-chart-bar" },
    { nameKey: "dataEngineering", icon: "fas fa-database" },
    { nameKey: "machineLearning", icon: "fas fa-robot" },
  ],
  soft: [
    { nameKey: "crossCulturalComm", icon: "fas fa-users" },
    { nameKey: "trainingDev", icon: "fas fa-chalkboard-teacher" },
    { nameKey: "interpersonal", icon: "fas fa-handshake" },
    { nameKey: "strategicInsight", icon: "fas fa-lightbulb" },
    { nameKey: "stakeholderEmp", icon: "fas fa-user-shield" },
    { nameKey: "relationshipBuilding", icon: "fas fa-network-wired" },
  ],
};

// Project keys for i18n lookup
export const projectKeys = [
  "quillbotFlow",
  "cms",
  "paraphrasingTool",
  "citationGenerator",
  "i18n",
  "grammarChecker",
  "bigData",
  "ascendLos",
  "aiChat",
] as const;

export type ProjectKey = (typeof projectKeys)[number];

export const projectMeta: Record<
  ProjectKey,
  { link?: string; linkIcon?: string; isWide: boolean }
> = {
  quillbotFlow: { isWide: true },
  cms: { isWide: false },
  paraphrasingTool: {
    link: "https://quillbot.com/paraphrasing-tool",
    isWide: false,
  },
  citationGenerator: {
    link: "https://quillbot.com/citation-generator",
    isWide: true,
  },
  i18n: { isWide: true },
  grammarChecker: { link: "https://quillbot.com/grammar-check", isWide: false },
  bigData: { isWide: false },
  ascendLos: {
    link: "https://play.google.com/store/apps/details?id=com.lcgm.ascend_loan&pcampaignid=web_share",
    linkIcon: "fab fa-google-play",
    isWide: true,
  },
  aiChat: { link: "https://quillbot.com/ai-chat", isWide: true },
};

// Navigation links with i18n keys
export const navLinkKeys = [
  { href: "#about", labelKey: "about" },
  { href: "#skills", labelKey: "skills" },
  { href: "#projects", labelKey: "projects" },
  { href: "#experience", labelKey: "experience" },
  { href: "#education", labelKey: "education" },
  { href: "#contact", labelKey: "contact" },
] as const;

// Tech tags for projects (non-translatable tech names)
export const projectTags: Record<ProjectKey, string[]> = {
  quillbotFlow: ["React", "TinyMCE", "AI"],
  cms: ["Next.js", "SEO", "API"],
  paraphrasingTool: ["React", "NLP", "UX"],
  citationGenerator: ["Elasticsearch", "Apache Beam", "API"],
  i18n: ["i18n", "React", "Localization"],
  grammarChecker: ["React", "NLP", "UX"],
  bigData: ["Apache Beam", "Elasticsearch", "GCP"],
  ascendLos: ["Android", "React", "Node.js"],
  aiChat: ["React", "LLM", "API"],
};

// Project categories (non-translatable category IDs)
export const projectCategories: Record<ProjectKey, string[]> = {
  quillbotFlow: ["web", "ai"],
  cms: ["web"],
  paraphrasingTool: ["web", "ai"],
  citationGenerator: ["web", "data"],
  i18n: ["web"],
  grammarChecker: ["web", "ai"],
  bigData: ["data"],
  ascendLos: ["web", "mobile"],
  aiChat: ["web", "ai"],
};

// Experience company data (skills are non-translatable tech names)
export const companyData: Record<string, { color: string; skills: string[] }> =
  {
    QuillBot: {
      color: "#7c3aed",
      skills: ["React", "Next.js", "Node.js", "Python", "Elasticsearch", "GCP"],
    },
    Ascend: {
      color: "#f59e0b",
      skills: ["React", "Node.js", "Android", "MongoDB"],
    },
  };

// Certification links (non-translatable URLs)
export const certificationLinks: Record<string, string> = {
  deepLearning:
    "https://www.coursera.org/account/accomplishments/specialization/OD4A545SZ4UX",
  aiAgents: "https://www.coursera.org/account/accomplishments/verify/0F6SK050ZUWP",
  neuralNetworks:
    "https://www.coursera.org/account/accomplishments/verify/YPBJJA81HT0X",
  improvingDnn:
    "https://www.coursera.org/account/accomplishments/verify/CKRJHBNE0NJH",
  structuringMl:
    "https://www.coursera.org/account/accomplishments/verify/7QJ571OJVES1",
  cnn: "https://www.coursera.org/account/accomplishments/verify/Z1ACM8L5KQYY",
  sequenceModels:
    "https://www.coursera.org/account/accomplishments/verify/0QG9JLU92QSM",
};
