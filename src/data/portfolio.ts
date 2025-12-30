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
    { name: "Next.js", icon: "fas fa-n", color: "#000000" },
    { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
    { name: "Styled Components", icon: "fas fa-paint-brush", color: "#db7093" },
    { name: "Sass/SCSS", icon: "fab fa-sass", color: "#cc6699" },
  ],
  backend: [
    { name: "Node.js", icon: "fab fa-node-js", color: "#8cc84b" },
    { name: "Python", icon: "fab fa-python", color: "#3776ab" },
    { name: "Express.js", icon: "fab fa-node-js", color: "#000000" },
    { name: "NestJS", icon: "fas fa-cube", color: "#e0234e" },
    { name: "FastAPI", icon: "fas fa-bolt", color: "#009688" },
  ],
  ai: [
    { name: "LangGraph", icon: "fas fa-project-diagram", color: "#ec4899" },
    { name: "LangChain", icon: "fas fa-link", color: "#2dd4bf" },
    { name: "OpenAI/LLMs", icon: "fas fa-brain", color: "#10a37f" },
    { name: "RAG", icon: "fas fa-search-plus", color: "#8b5cf6" },
    { name: "Prompt Engineering", icon: "fas fa-magic", color: "#f59e0b" },
    { name: "Multi-Agent AI", icon: "fas fa-users-cog", color: "#3b82f6" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
    { name: "MongoDB", icon: "fas fa-database", color: "#47a248" },
    { name: "Redis", icon: "fas fa-database", color: "#d82c20" },
    { name: "Elasticsearch", icon: "fas fa-search", color: "#005571" },
    { name: "Vector DBs", icon: "fas fa-cubes", color: "#8b5cf6" },
  ],
  cloud: [
    { name: "GCP", icon: "fab fa-google", color: "#4285f4" },
    { name: "AWS", icon: "fab fa-aws", color: "#ff9900" },
    { name: "Azure", icon: "fab fa-microsoft", color: "#00a4ef" },
    { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
    { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "#326ce5" },
  ],
  data: [
    { name: "Apache Beam", icon: "fas fa-stream", color: "#e97627" },
    { name: "Pandas/NumPy", icon: "fas fa-project-diagram", color: "#150458" },
    { name: "Tableau", icon: "fas fa-chart-bar", color: "#e97627" },
    { name: "Power BI", icon: "fas fa-chart-pie", color: "#f2c811" },
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
  "aiChat",
  "quillbotFlow",
  "chatPdf",
  "cmsMultiSite",
  "paraphrasingTool",
  "citationGenerator",
  "grammarChecker",
  "speechToText",
  "textToSpeech",
  "imageToText",
  "qrCodeGenerator",
  "wordCloud",
  "i18n",
  "bigData",
  "ascendLos",
] as const;

export type ProjectKey = (typeof projectKeys)[number];

export const projectMeta: Record<
  ProjectKey,
  { link?: string; linkIcon?: string; isWide: boolean }
> = {
  aiChat: { link: "https://quillbot.com/ai-chat", isWide: true },
  quillbotFlow: { link: "https://quillbot.com/flow", isWide: true },
  chatPdf: { link: "https://quillbot.com/chat-pdf", isWide: true },
  cmsMultiSite: { link: "https://spinbot.com", isWide: true },
  paraphrasingTool: { link: "https://quillbot.com/paraphrasing-tool", isWide: false },
  citationGenerator: { link: "https://quillbot.com/citation-generator", isWide: false },
  grammarChecker: { link: "https://quillbot.com/grammar-check", isWide: false },
  speechToText: { link: "https://quillbot.com/speech-to-text", isWide: false },
  textToSpeech: { link: "https://quillbot.com/text-to-speech", isWide: false },
  imageToText: { link: "https://quillbot.com/image-to-text", isWide: false },
  qrCodeGenerator: { link: "https://quillbot.com/qr-code-generator", isWide: false },
  wordCloud: { link: "https://quillbot.com/word-cloud-generator", isWide: false },
  i18n: { isWide: false },
  bigData: { isWide: false },
  ascendLos: {
    link: "https://play.google.com/store/apps/details?id=com.lcgm.ascend_loan&pcampaignid=web_share",
    linkIcon: "fab fa-google-play",
    isWide: false,
  },
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
  aiChat: ["Multi-Agent AI", "RAG", "TypeScript", "Python", "Vector DB", "GCP"],
  quillbotFlow: ["React", "AI Integration", "TinyMCE", "Full Stack", "Real-time"],
  chatPdf: ["RAG", "PDF Parsing", "AI", "React", "Node.js"],
  cmsMultiSite: ["Next.js", "Tina CMS", "SEO", "Multi-tenant", "Headless CMS"],
  paraphrasingTool: ["NLP", "LLM", "React", "Node.js", "High Scale"],
  citationGenerator: ["Elasticsearch", "Apache Beam", "Node.js", "React"],
  grammarChecker: ["NLP", "ML/LLM", "React", "Node.js", "Real-time"],
  speechToText: ["AI", "Speech Recognition", "Real-time", "Multilingual"],
  textToSpeech: ["AI", "Voice Synthesis", "Audio Processing"],
  imageToText: ["OCR", "AI", "Image Processing", "React"],
  qrCodeGenerator: ["React", "Canvas", "Utility"],
  wordCloud: ["Data Visualization", "React", "Canvas"],
  i18n: ["i18n", "React", "Localization"],
  bigData: ["Apache Beam", "Elasticsearch", "GCP"],
  ascendLos: ["Android", "React", "Node.js"],
};

// Project categories (non-translatable category IDs)
export const projectCategories: Record<ProjectKey, string[]> = {
  aiChat: ["web", "ai"],
  quillbotFlow: ["web", "ai"],
  chatPdf: ["web", "ai"],
  cmsMultiSite: ["web"],
  paraphrasingTool: ["web", "ai"],
  citationGenerator: ["web", "data"],
  grammarChecker: ["web", "ai"],
  speechToText: ["web", "ai"],
  textToSpeech: ["web", "ai"],
  imageToText: ["web", "ai"],
  qrCodeGenerator: ["web"],
  wordCloud: ["web"],
  i18n: ["web"],
  bigData: ["data"],
  ascendLos: ["web", "mobile"],
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
