/**
 * Portfolio Configuration & Profile Data
 * Profile: Nikitha Patnala — UI/UX Designer & Full Stack Developer
 */
const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Nikitha Patnala",
    role: "UI/UX Designer & Full Stack Developer",
    college: "GITAM University",
    gradYear: "2028",
    statusBadge: "Open to UI/UX Design, Full-Stack & Hackathons",
    location: "Visakhapatnam, India / Remote",
    avatarUrl: "assets/images/nikitha.png",
    bio: "Computer Science & Engineering student at GITAM University (Class of 2028) with a core focus on UI/UX Design and Full-Stack Engineering. Passionate about crafting intuitive, visually stunning user experiences and bringing them to life with clean, modular code. Actively bridging design systems with modern backend APIs, Local LLMs, and AI agents.",
    stats: [
      { label: "Core Focus", value: "UI/UX & Full-Stack" },
      { label: "University", value: "GITAM" },
      { label: "Year & Degree", value: "3rd Year CSE" },
      { label: "Design & Code", value: "Pixel-Perfect" }
    ],
    socials: {
      github: "https://github.com/patnalanikitha",
      linkedin: "https://www.linkedin.com/in/nikitha-patnala-256a07323/",
      email: "nikitha.patnala7@gmail.com",
      discord: "Available on request"
    }
  },

  capabilities: [
    {
      icon: "palette",
      title: "UI/UX & Product Design",
      description: "Crafting intuitive user journeys, wireframes, and high-fidelity interactive prototypes in Figma. Focused on visual hierarchy, clean layouts, responsive typography, and reusable design systems."
    },
    {
      icon: "layout",
      title: "Design-to-Code Frontend",
      description: "Translating design visions into pixel-perfect, accessible, and fluid web experiences using modern CSS, Tailwind CSS, JavaScript (ES6+), and component architectures."
    },
    {
      icon: "server",
      title: "Backend APIs & Databases",
      description: "Building robust RESTful services and schemas using Node.js, Express, MongoDB, and MySQL, with comprehensive API validation via Postman."
    },
    {
      icon: "bot",
      title: "Local LLMs & AI Engineering",
      description: "Experimenting with prompt engineering, local open-source LLM inference, autonomous AI agents, and intelligent, user-centric AI workflows."
    }
  ],

  projects: [
    {
      id: "studyflow",
      title: "StudyFlow — AI Academic Companion & Pixel Focus Studio",
      tagline: "AI flashcards, SM-2 spaced repetition, procedural ambient audio & pixel focus studio.",
      category: "ai-edtech",
      badge: "Deployed on Vercel",
      description: "An AI-powered academic companion and gamified focus studio. Features automated flashcard and quiz generation via Google Gemini AI, an authentic SuperMemo-2 (SM-2) spaced repetition algorithm, real-time procedural audio synthesis (binaural beats, rain, cafe noise), and a cozy pixel companion progression system.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini AI", "Web Audio API", "SM-2 Algorithm"],
      demoUrl: "https://studyflow-zeta-nine.vercel.app/",
      githubUrl: "https://github.com/patnalanikitha/studyflow",
      caseStudyUrl: "studyflow.html",
      elementLogos: [
        { icon: "sparkles", label: "Gemini AI" },
        { icon: "refresh-cw", label: "SM-2 Spaced Repetition" },
        { icon: "volume-2", label: "Procedural Sound" },
        { icon: "code-2", label: "React / TS" },
        { icon: "palette", label: "Tailwind CSS" }
      ],
      highlights: [
        "Automated AI flashcard & quiz synthesis from lecture notes using Google Gemini",
        "SM-2 cognitive algorithm calculating dynamic memory retention intervals",
        "Zero-asset procedural sound engine generating rain, binaural alpha waves, and retro 8-bit chimes",
        "Gamified Pixel Focus Studio featuring virtual companion ('Mochi'), XP, and loft cosmetics"
      ],
      architecture: "React 18 + TypeScript frontend deployed on Vercel, with Google Gemini AI integration, native Web Audio API oscillators/filters, and resilient local state synchronization."
    },
    {
      id: "komorebi",
      title: "Komorebi Café — A Cozy Barista Experience",
      tagline: "Artisan coffee crafting simulator, procedural sound engine & pixel cafe story.",
      category: "interactive-sim",
      badge: "Deployed on Vercel",
      description: "An artisan coffee simulator and cozy auditory sanctuary inspired by Japanese cafe aesthetics and specialty coffee culture. Features authentic drink crafting across multiple vessels (Demitasse, Gibraltar, Ribbed Glass), real-time liquid physics and steam rendering, a custom zero-asset procedural Web Audio engine (rain soundscapes, espresso pulls, harmonic service bells), and charming pixel customers with unique tastes.",
      techStack: ["React 19", "Vite", "Tailwind CSS", "Web Audio API", "SVG Pixel Art", "UI/UX Design"],
      demoUrl: "https://komorebi-cafe-tan.vercel.app/",
      githubUrl: "https://github.com/patnalanikitha/komorebi-cafe",
      caseStudyUrl: "komorebi.html",
      elementLogos: [
        { icon: "coffee", label: "Brewing Engine" },
        { icon: "volume-2", label: "Procedural Audio" },
        { icon: "palette", label: "Pixel UI/UX" },
        { icon: "code-2", label: "React 19 / Vite" },
        { icon: "layers", label: "Tailwind CSS" }
      ],
      highlights: [
        "Interactive Barista Grimoire with authentic recipes: Flat White, Cortado, Long Black, Affogato",
        "Zero-sample procedural sound engine synthesizing ambient rain, steaming wands, and cup clinks",
        "Layered beverage density rendering: espresso crema, microfoam integration, and gelato submergence",
        "Narrative customer progression featuring distinct pixel personas, custom orders, and reward stamps"
      ],
      architecture: "React 19 + Vite frontend deployed on Vercel. Features an object-oriented ProceduralAudio engine using native Web Audio API biquad filters and custom Pink/Brown noise buffer curves."
    }
  ],

  skills: {
    design: [
      { name: "UI/UX & Product Design", level: "Core Strength", icon: "palette" },
      { name: "Figma & Prototyping", level: "Advanced", icon: "layout" },
      { name: "Design Systems & Components", level: "Advanced", icon: "layers" },
      { name: "Wireframing & User Flows", level: "Advanced", icon: "git-commit" },
      { name: "Micro-Interactions & Animation", level: "Beginner", icon: "sparkles" }
    ],
    languages: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "code" },
      { name: "Python", level: "Proficient", icon: "terminal" },
      { name: "Java", level: "Proficient", icon: "file-code" },
      { name: "C / C++", level: "Proficient", icon: "cpu" },
      { name: "SQL (MySQL)", level: "Proficient", icon: "database" }
    ],
    frameworksAndTools: [
      { name: "Tailwind CSS & Modern CSS", level: "Advanced", icon: "palette" },
      { name: "Node.js & Express", level: "Intermediate", icon: "server" },
      { name: "MongoDB", level: "Intermediate", icon: "database" },
      { name: "Git & GitHub", level: "Advanced", icon: "git-branch" },
      { name: "Postman & API Testing", level: "Intermediate", icon: "check-circle" },
      { name: "Local LLMs & AI Agents", level: "Exploring & Building", icon: "bot" }
    ],
    developerFocus: [
      { name: "Design-First Engineering", desc: "Seamlessly uniting aesthetic UI/UX with clean, scalable, maintainable code" },
      { name: "Pixel-Perfect Implementation", desc: "Transforming high-fidelity Figma concepts into responsive, accessible web interfaces" },
      { name: "Full-Stack Craftsmanship", desc: "Building dependable Node.js backend services and data models that power seamless UIs" },
      { name: "AI-Enhanced Interfaces", desc: "Designing human-centered user experiences for AI agents, prompt tools, and LLMs" }
    ]
  },

  journey: [
    {
      period: "2024 – 2028",
      title: "B.Tech in Computer Science & Engineering",
      institution: "GITAM University",
      description: "Currently in 3rd year. Mastering core CS fundamentals: Data Structures, Algorithms, DBMS, Operating Systems, while specializing in UI/UX Design and modern web engineering."
    },
    {
      period: "Current Focus",
      title: "UI/UX Design & Full-Stack AI Engineering",
      institution: "Independent Builder",
      description: "Designing modern product interfaces in Figma, implementing them with Tailwind CSS & Node.js, and actively experimenting with Local LLMs and agentic workflows."
    },
    {
      period: "Foundations",
      title: "Programming & Visual Design Foundations",
      institution: "GITAM University",
      description: "Built strong problem-solving fundamentals in C, C++, and Java alongside visual design principles, typography, and responsive web design."
    }
  ]
};

// Function to get active portfolio data
function getPortfolioData() {
  return DEFAULT_PORTFOLIO_DATA;
}
