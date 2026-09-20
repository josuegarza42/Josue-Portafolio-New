// Shared profile and homepage selection. Full history is in career.ts.
import { WORK_HISTORY } from "./career";
export const PROFILE = {
  name: "Josue Garza",
  fullName: "Josue Israel Esquivel Garza",
  role: "Associate Services Consultant",
  company: "Zendesk",
  companyUrl: "https://www.zendesk.com/",
  location: "Mexico City, Mexico",
  email: "josuegarza.dev@gmail.com",
  description: "Customer Experience professional and Associate Services Consultant at Zendesk, specializing in AI, automation, solution design, and end-to-end project delivery.",
  education: "Intelligent Systems Engineering",
  university: "Universidad Autónoma de San Luis Potosí",
};

export const EXPERIENCE = WORK_HISTORY.filter((entry) => entry.featured).map((entry) => ({
  id: entry.id,
  company: entry.organization,
  role: entry.title,
  period: entry.period,
  summary: entry.summary,
}));

export const SKILL_GROUPS = [
  { title: "CX & solution delivery", skills: ["Client onboarding", "CRM implementation", "Support operations", "KPI optimization", "Relationship management", "Escalation handling", "Guidance & coaching"] },
  { title: "Technical stack", skills: ["HTML, CSS & Sass", "JavaScript", "React & Astro", "Flutter & Dart", "SQL & T-SQL", "Figma", "Jira & Confluence", "Netlify, Vercel & GitHub Pages"] },
  { title: "Project delivery", skills: ["Scrum, Kanban & Waterfall", "Project scoping", "Stakeholder communication", "Technical documentation", "User acceptance testing", "Use case mapping"] },
];
