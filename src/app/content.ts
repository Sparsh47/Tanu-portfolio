// ============================================================
// ✏️  PORTFOLIO CONTENT — Edit Everything Here
// ============================================================
// This is the ONLY file you need to edit to update your portfolio.
// Change any text, add/remove items, update links, etc.
// ============================================================

import profileImg from "../../public/profile.jpg";

export const PORTFOLIO = {

  // ─── Personal Info ───────────────────────────────────────
  name: "Tanzil Shandilya",
  title: "Marketing & Business Strategy",
  tagline: "Turning ideas into",
  rotatingWords: ["insight.", "strategy.", "impact.", "growth."],
  heroSubtitle:
    "I’m an MBA candidate specialising in Marketing and Business Analytics, interested in the intersection of consumer behaviour, brand strategy, digital marketing and business growth. I turn research and ideas into thoughtful strategies and meaningful execution.",
  ctaText: "Let's Connect",
  profileImage: profileImg,

  // ─── Marquee Keywords ────────────────────────────────────
  marqueeWords: [
    "Marketing Strategy",
    "Business Analytics",
    "Brand Development",
    "Consumer Research",
    "Digital Marketing",
    "Market Research",
    "Go-to-Market Strategy",
    "Product Thinking",
    "Content Strategy",
    "Campaign Execution",
    "Event Management",
    "Leadership",
  ],

  // ─── About Me ────────────────────────────────────────────
  about: {
    headline: "Curiosity, Strategy & Meaningful Execution",
    bio: `Hi, I'm Tanzil. Thanks for dropping by!

I'm an MBA candidate specialising in Marketing and Business Analytics, with a keen interest in marketing strategy, consumer behaviour, branding, and business research. I enjoy exploring ideas, understanding people, and figuring out how things work.

Beyond the professional side, I'm actively involved in social work, community initiatives, and volunteering. I love organising events, managing teams, and creating experiences that bring people together.

Outside all that, you'll probably find me dancing, exploring musical instruments, or getting involved in something creative.

Always up for a good conversation, creative collaborations, and brainstorming ideas. Feel free to say hello!`,
    stats: [
      { value: 2, suffix: "", label: "Internship Experiences" },
      { value: 4, suffix: "+", label: "Digital Platforms Used in Rurali Project" },
      { value: 15, suffix: "+", label: "Companies Benchmarked" },
      { value: 5000, suffix: "+", label: "Event Footfall Coordinated" },
    ],
  },

  // ─── Work Experience ─────────────────────────────────────
  workExperience: [
    {
      company: "Kritical Edge Consulting Pvt. Ltd.",
      role: "Research and Strategy Trainee",
      duration: "May 2026 – July 2026",
      type: "Internship",
      description:
        "Contributed to research and business planning for a new digital venture, combining competitive analysis, consumer insights and go-to-market thinking.",
      highlights: [
        "Conducted competitive benchmarking across 15+ companies to identify market opportunities and differentiation strategies",
        "Evaluated technology, packaging and certification partners to support vendor selection and business setup",
        "Developed research inputs for product development, go-to-market planning and customer acquisition",
        "Contributed to revenue modelling, brand positioning and financial assumptions",
      ],
      color: "#8B4A3C",
    },
    {
      company: "Mushkin International",
      role: "Digital Marketing Intern",
      duration: "February 2025 – May 2025",
      type: "Internship",
      description:
        "Worked on social media performance, competitor analysis and influencer collaboration to strengthen digital presence and audience engagement.",
      highlights: [
        "Analysed 10+ competitors to identify content and positioning opportunities",
        "Collaborated with 30+ influencers and executed two data-driven campaigns",
        "Contributed to an approximately 25% increase in engagement",
        "Helped improve brand visibility by approximately 35% within one quarter",
      ],
      color: "#C4956A",
    },
  ],

  // ─── Skills ──────────────────────────────────────────────
  skillCategories: [
    {
      category: "Marketing & Strategy",
      skills: [
        "Marketing Strategy",
        "Brand Development",
        "Competitive Benchmarking",
        "Go-to-Market Planning",
        "Business Planning",
        "Market Research",
      ],
    },
    {
      category: "Digital & Content",
      skills: [
        "Digital Marketing",
        "Social Media Strategy",
        "Influencer Collaboration",
        "Campaign Execution",
        "Content Strategy",
        "Canva",
      ],
    },
    {
      category: "Analytics & Research",
      skills: [
        "Business Analytics",
        "Consumer Research",
        "Data Analysis",
        "Advanced Excel",
        "Power BI",
        "Market Analysis",
      ],
    },
    {
      category: "Design & Collaboration",
      skills: [
        "Figma",
        "MS Office",
        "Communication",
        "Leadership",
        "Team Collaboration",
        "Strategic Thinking",
      ],
    },
  ],

  // ─── Certifications ──────────────────────────────────────
  certifications: [
    {
      title: "Management Immersion Program",
      issuer: "IIM Sirmaur",
      year: "Not specified",
      icon: "🎓",
    },
    {
      title: "Business Analytics Certification",
      issuer: "HCL Tech",
      year: "Not specified",
      icon: "📊",
    },
  ],

  // ─── Marketing Projects ──────────────────────────────────
  marketingProjects: [
    {
      title: "Rurali — Live Digital Marketing Project",
      category: "Digital Marketing",
      description:
        "Executed digital marketing campaigns across four platforms as part of a live academic project, focusing on audience engagement and reach.",
      result:
        "10% engagement increase in two weeks · approximately 80% reach from non-followers",
      tags: ["Digital Marketing", "Campaign Execution", "Social Media"],
      gradient: "from-[#8B4A3C] to-[#C4956A]",
    },
    {
      title: "Haldiram’s × Gen Z — Brand Strategy",
      category: "Brand Strategy",
      description:
        "Developed a Gen Z brand engagement strategy for Haldiram’s, using consumer insights, cultural marketing and social-first campaign thinking to strengthen brand relevance.",
      result: "Academic brand strategy project",
      tags: ["Brand Strategy", "Consumer Insights", "Gen Z"],
      gradient: "from-[#5C6B7A] to-[#8FA3B1]",
    },
  ],

  // ─── Research Projects ───────────────────────────────────
  researchProjects: [
    {
      title: "Leading Digital Transformation in Universities",
      journal: "PRME International Conference, 2026",
      year: "2026",
      abstract:
        "Co-authored and presented research on AI-enabled leadership, organisational change and digital transformation in higher education.",
      tags: ["Digital Transformation", "AI", "Leadership"],
      link: "#",
    },
    {
      title: "Sustainability Communication & Brand Trust",
      journal: "Independent research topic shared on LinkedIn",
      year: "Not specified",
      abstract:
        "Explores how sustainability communication, green skepticism and emotional messaging influence consumer perceptions and brand loyalty. The LinkedIn discussion highlights the importance of credible, transparent claims over broad sustainability messaging.",
      tags: ["Sustainability", "Brand Trust", "Consumer Behaviour"],
      link: "https://www.linkedin.com/in/tanzil-shandilya/",
    },
    {
      title: "AI-Driven Revenue Models in Advertising Agencies",
      journal: "IIM Nagpur Case Study & Research Conference, 2026",
      year: "2026",
      abstract:
        "Analyses AI’s impact on advertising agency revenue models, pricing strategies and value creation in digital marketing. Authored and presented as a case study.",
      tags: ["AI", "Advertising", "Revenue Models"],
      link: "#",
    },
  ],

  // ─── Social Work ─────────────────────────────────────────
  socialWork: [
    {
      title: "Head, Delhi Wing",
      organisation: "AVI Foundation",
      duration: "October 2021 – November 2025",
      description:
        "Led conservation initiatives, awareness campaigns and stakeholder collaborations, engaging participants in community-focused activities.",
      impact: "100+ participants engaged",
      icon: "🌱",
    },
    {
      title: "Vice President, Cultural Club",
      organisation: "IILM University",
      duration: "Not specified",
      description:
        "Co-led the planning and execution of more than ten cultural events, coordinating teams and event operations.",
      impact: "10+ events coordinated",
      icon: "🎤",
    },
    {
      title: "Community & Student Leadership",
      organisation: "Rotaract Club of Delhi Elite, Pro-Scholar and Interact Club",
      duration: "Various roles",
      description:
        "Contributed to skill-development initiatives, community outreach, fundraisers and NGO-collaborated social impact events.",
      impact: "Community engagement and volunteer initiatives",
      icon: "🤝",
    },
  ],

  // ─── Contact & Socials ───────────────────────────────────
  contact: {
    headline: "Have an Idea? Let’s Connect.",
    subtext:
      "I’m always open to conversations about marketing, business strategy, research, collaborations and opportunities to learn and create meaningful work.",
    email: "tanzil.shandilya.gnmba27@iilm.edu",
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/tanzil-shandilya/",
        icon: "linkedin",
      },
      {
        label: "Email",
        url: "mailto:tanushandilya123@gmail.com",
        icon: "mail",
      },
    ],
  },
};
