// All site content lives here. Edit this file to update the website.

export const profile = {
  name: "Austin Landis",
  firstName: "Austin",
  title: "AI Developer",
  location: "Lincoln, Nebraska",
  email: "austinlandiscode@gmail.com",
  linkedin: "https://www.linkedin.com/in/austinlandiscode",
  tagline:
    "Software developer moving into AI engineering, bringing production experience from enterprise commerce to building with large language models.",
  summary: [
    "I'm a software developer focused on AI. I recently completed an AI builders course and I'm now building my own AI projects. You can follow that work in the Projects section as it ships.",
    "My foundation is two and a half years of professional development in the Salesforce Commerce Cloud space: multi-cloud implementations, a proprietary cartridge that extends base SFRA, and staff-augmentation work where I picked up existing codebases fast and shipped features to production. I bring that same standard to AI work: building things that hold up for real users, not just demos.",
    "Before and alongside software, I ran a business, led instruction programs, and managed high-volume kitchens. That background shows in how I work: I'm organized, calm under pressure, and focused on the people I'm building for.",
  ],
  strengths: [
    ["Production experience", "Shipped code on real teams and in real client codebases"],
    ["Building with AI", "Hands-on with AI coding tools and LLM-powered development"],
    ["Fast onboarding", "Productive quickly inside unfamiliar codebases"],
    ["Ownership", "Ran my own business and led teams before writing code"],
  ],
};

export const stats = [
  { value: "AI", label: "Builders course complete" },
  { value: "2.5+", label: "Years shipping production code" },
  { value: "Full-stack", label: "Web foundation" },
  { value: "6+", label: "Years leading teams" },
];

// Review these: keep only what you're comfortable being asked about in an interview.
export const skillGroups = [
  {
    title: "AI Development",
    items: ["LLM APIs", "Prompt Engineering", "AI-Assisted Development", "Claude Code"],
  },
  {
    title: "Engineering",
    items: ["JavaScript", "TypeScript", "React / Next.js", "HTML5", "CSS / SCSS", "Git"],
  },
  {
    title: "Commerce Platform",
    items: [
      "Salesforce B2C Commerce Cloud",
      "SFRA",
      "Custom Cartridges",
      "Multi-cloud Implementations",
      "ISML",
    ],
  },
];

export type Role = {
  company: string;
  role: string;
  start: string;
  end: string;
  duration: string;
  location?: string;
  points: string[];
};

export const engineeringRoles: Role[] = [
  {
    company: "Red Van Workshop",
    role: "Associate Salesforce Commerce Cloud Developer",
    start: "Jun 2021",
    end: "May 2023",
    duration: "2 yrs",
    points: [
      "Delivered multi-cloud Salesforce implementations with a primary focus on B2C Commerce.",
      "Helped build a proprietary cartridge that improves on base SFRA.",
      "Joined existing client projects in staff-augmentation roles, building new custom features and fixing bugs.",
    ],
  },
  {
    company: "Saberpoint CRM",
    role: "Frontend Web Developer",
    start: "Feb 2021",
    end: "Jun 2021",
    duration: "5 mos",
    points: ["Built frontend web features for a Salesforce CRM consultancy."],
  },
];

export const otherRoles: Role[] = [
  {
    company: "Canyon Joe's",
    role: "Chef",
    start: "May 2024",
    end: "Aug 2025",
    duration: "1 yr 4 mos",
    location: "Lincoln, NE",
    points: [],
  },
  {
    company: "MoMo's Pizza, Inc.",
    role: "Restaurant Chef",
    start: "Dec 2023",
    end: "May 2024",
    duration: "6 mos",
    location: "Lincoln, NE",
    points: [
      "Managed inventory, created feature dishes, and improved day-to-day processes in a fast-paced, high-volume kitchen.",
    ],
  },
  {
    company: "KDL Trails End Golf Center",
    role: "Director of Instruction",
    start: "Feb 2018",
    end: "Oct 2020",
    duration: "2 yrs 9 mos",
    location: "Oregon City, OR",
    points: [
      "Ran golf camps of about 40 participants and led a team of three instructors.",
      "Ran weekly clinics from May to October for players of all ages and backgrounds, with a focus on inclusion.",
    ],
  },
  {
    company: "Brainstorm Comics & Games",
    role: "Business Owner",
    start: "Jan 2015",
    end: "Dec 2017",
    duration: "3 yrs",
    location: "Milwaukie, OR",
    points: [
      "Organized company booths at conventions with more than 8,000 attendees.",
      "Owned consumer relations, purchasing, online inventory management, financial analysis, and staff management.",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string; // link to the credential or certificate
};

// Placeholder: fill in the provider, date, and credential link for your course.
export const certifications: Certification[] = [
  {
    name: "AI Builders Course",
    issuer: "Course provider",
    date: "2026",
  },
];

export const education = [
  {
    school: "Epicodus",
    detail: "Full-Stack Web Development",
    years: "2021",
  },
  {
    school: "Clackamas Community College",
    detail: "Business Administration and Management",
    years: "2017 – 2018",
  },
];

// Shared shape for AI projects and games.
export type Project = {
  title: string;
  date: string;
  status?: "In progress" | "Planned"; // leave out once it's shipped
  description: string;
  tech: string[];
  image?: string; // path under /public, e.g. "/projects/my-app.png"
  liveUrl?: string;
  repoUrl?: string;
};

// Placeholder entries: replace these with your own AI projects.
export const projects: Project[] = [
  {
    title: "AI Project One",
    date: "2026",
    status: "In progress",
    description: "What it does, who it's for, and how AI fits in: which model, and what problem it solves.",
    tech: ["TypeScript", "Claude API"],
    repoUrl: "#",
  },
  {
    title: "AI Project Two",
    date: "2026",
    status: "In progress",
    description: "An interesting technical piece: an agent, a tool integration, retrieval over your own data, or an evaluation you ran.",
    tech: ["Python", "LLM API"],
  },
  {
    title: "AI Project Three",
    date: "2026",
    status: "Planned",
    description: "Something you're about to start. Planned work shows momentum while the bigger projects are being built.",
    tech: ["Next.js"],
  },
];

// Placeholder entries: replace these with your own games.
export const games: Project[] = [
  {
    title: "Hangman",
    date: "2026",
    description:
      "The classic word-guessing game, played in the console. Guess the hidden animal one letter at a time before your six lives run out.",
    tech: ["Python"],
    repoUrl: "https://github.com/austinlandiscode/personalsite/blob/main/app/games/hangman.py",
  },
  {
    title: "Game Title Two",
    date: "2025",
    description: "What makes this one interesting: a mechanic you built, a challenge you solved, or what you learned.",
    tech: ["TypeScript", "Phaser"],
    repoUrl: "#",
  },
  {
    title: "Game Title Three",
    date: "2024",
    description: "A short pitch. Add a screenshot under public/games/ and set the image field to show it here.",
    tech: ["Godot", "GDScript"],
  },
];
