// All site content lives here. Edit this file to update the website.

export const profile = {
  name: "Austin Landis",
  firstName: "Austin",
  title: "Software Developer",
  location: "Lincoln, Nebraska",
  email: "austinlandiscode@gmail.com",
  linkedin: "https://www.linkedin.com/in/austinlandiscode",
  tagline:
    "Building commerce experiences on Salesforce Commerce Cloud: B2C storefronts, SFRA cartridges, and features that work in production.",
  summary: [
    "I'm a software developer with two and a half years of professional experience in the Salesforce Commerce Cloud space. I've had the chance to work on some excellent development teams, delivering multi-cloud implementations with a primary focus on B2C Commerce.",
    "My work has included building a proprietary cartridge that extends base SFRA, and joining established projects in staff-augmentation roles, where I picked up existing codebases fast, shipped new custom features, and helped work through bug backlogs.",
    "Before and alongside software, I ran a business, led instruction programs, and managed high-volume kitchens. That background shows in how I work: I'm organized, calm under pressure, and focused on the people I'm building for.",
  ],
};

export const stats = [
  { value: "2.5+", label: "Years in SFCC" },
  { value: "B2C", label: "Commerce focus" },
  { value: "SFRA", label: "Cartridge development" },
  { value: "6+", label: "Years leading teams" },
];

export const skillGroups = [
  {
    title: "Commerce Platform",
    items: [
      "Salesforce B2C Commerce Cloud",
      "SFRA",
      "Custom Cartridges",
      "Multi-cloud Implementations",
      "Business Manager",
    ],
  },
  {
    title: "Engineering",
    items: ["JavaScript", "ISML", "HTML5", "CSS / SCSS", "Full-Stack Web Development", "Git"],
  },
  {
    title: "Professional",
    items: ["Leadership", "Time Management", "Account Management", "Client Relations", "Staff Augmentation"],
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
