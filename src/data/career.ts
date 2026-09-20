// Curated from LinkedIn and FlowCV on 2026-09-20.
// See docs/CONTENT_SOURCES.md for source precedence and editorial decisions.
export interface ProfileLink { label: string; href: string }
export interface CareerEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  summary: string;
  location?: string;
  details?: string[];
  tags?: string[];
  links?: ProfileLink[];
  featured?: boolean;
}

export const WORK_HISTORY: CareerEntry[] = [
  {
    id: "zendesk", title: "Associate Services Consultant", organization: "Zendesk", period: "Sep 2025 — Present", location: "Mexico City · Hybrid", featured: true,
    summary: "Designing AI, automation, and support solutions that turn complex customer requirements into practical workflows.",
    details: ["Configure Advanced AI & Automation, Intelligent Triage, and conversational bots to automate complex use cases and reduce manual ticket volume.", "Lead implementations across Support, Guide, Chat, Explore, and Ultimate, connecting business requirements with scalable architecture.", "Coordinate client stakeholders with Engineering, Product, and Sales, and deliver knowledge transfer workshops for administrators and support teams."],
    tags: ["AI & automation", "Solution design", "Zendesk"], links: [{ label: "Role overview", href: "/blog/post9" }],
  },
  {
    id: "qualtrics", title: "Senior Specialist, Enterprise Support", organization: "Qualtrics", period: "May 2024 — Jul 2025", location: "Mexico City · Hybrid", featured: true,
    summary: "Enterprise support and solution delivery across XM Discover, from complex escalations to stronger client relationships.",
    details: ["Diagnosed high-priority issues involving unstructured data ingestion, analysis, and visualization, collaborating with Engineering, Product, CSMs, and TAMs.", "Helped shape the Mexican team's first Success Check and contributed reusable engagement templates, knowledge articles, and colleague mentoring.", "Managed onboarding and delivery for 30+ enterprise clients. Automation and coaching initiatives reduced time to resolution by up to 90% and time to first response by over 90%."],
    tags: ["XM Discover", "Enterprise support", "Client delivery"], links: [{ label: "Role overview", href: "/blog/post8" }],
  },
  {
    id: "softdone", title: "Technical Project Manager", organization: "Softdone", period: "Nov 2022 — Aug 2023", location: "San Luis Potosí · Remote", featured: true,
    summary: "Led software projects from requirements and scope to responsive interfaces and release.",
    details: ["Managed delivery with Agile, Scrum, Kanban, and Waterfall, using Jira, Trello, and Asana to coordinate the work.", "Translated stakeholder requirements into IEEE SRS specifications, project budgets, and contracts.", "Built interfaces with React, Astro, and Tailwind CSS, and supported automated delivery pipelines."],
    tags: ["Project management", "Frontend", "Agile"], links: [{ label: "Role overview", href: "/blog/post1" }, { label: "Servismedicamp project", href: "#project-servismedicamp" }],
  },
  {
    id: "sfu", title: "Research Intern", organization: "Simon Fraser University", period: "Jun 2023 — Aug 2023", location: "Burnaby, Canada · On-site",
    summary: "A 12-week Mitacs Globalink research internship developing Elaina, an AI-enhanced learning platform.",
    details: ["Coordinated an international team with Scrum and Jira.", "Built adaptable React and Tailwind CSS interfaces and refined the learning experience for children using user feedback."],
    links: [{ label: "Explore Elaina", href: "#project-elaina" }],
  },
  {
    id: "studevs", title: "Co-Founder", organization: "Studevs", period: "Apr 2023 — Jul 2023", location: "San Luis Potosí · Hybrid",
    summary: "Co-founded a student technology community focused on learning, innovation, and growth.",
    details: ["Helped create a space for IT students to learn, build projects, and participate in technology challenges.", "Handed community leadership to active students after graduating; retained the connection as a co-founder."],
    links: [{ label: "Community & handover", href: "#community" }],
  },
  {
    id: "devsthink", title: "Co-Founder", organization: "Devsthink", period: "Feb 2022 — Apr 2023", location: "San Luis Potosí · Remote",
    summary: "Co-founded a project development company spanning websites, UI/UX, mobile development, and databases.",
    details: ["Combined project coordination with frontend development and design.", "Projects included Pocket U, Healthy Hive, and Edufree, connecting practical product development with hackathon challenges."],
    links: [{ label: "Role overview", href: "/blog/post3" }, { label: "Pocket U project", href: "#project-pocket-u" }],
  },
  {
    id: "redom8", title: "Frontend Developer", organization: "redOM8", period: "Dec 2022 — Mar 2023", location: "San Luis Potosí · Remote · Contract",
    summary: "Designed and built mobile application components with Figma, Flutter, and Dart.",
    details: ["Contributed to interface design from the start of the project and integrated dynamic mobile components.", "Developed the connection to an Odoo-hosted backend to support data exchange between the app and server."],
    links: [{ label: "Role overview", href: "/blog/post4" }],
  },
  {
    id: "startuplab", title: "Frontend Developer", organization: "StartupLab MX", period: "Sep 2022 — Dec 2022", location: "San Luis Potosí · Hybrid · Internship",
    summary: "Developed and maintained web and database systems for clients, with additional content and event support.",
    details: ["Worked with PHP, HTML, CSS, JavaScript, Bootstrap, MongoDB, and low-code tools.", "Wrote website copy and supported a live event for participants and the online audience."],
    links: [{ label: "Role overview", href: "/blog/post7" }],
  },
  {
    id: "daikin", title: "Software Developer", organization: "Daikin Applied Americas", period: "Nov 2021 — Jul 2022", location: "San Luis Potosí · Hybrid · Internship",
    summary: "Supported database administration, T-SQL data operations, and technical project documentation.",
    details: ["Used Microsoft SQL Server Management Studio for database management and Transact-SQL for data queries and updates.", "Contributed to software requirements documentation using the IEEE SRS format."],
    links: [{ label: "Role overview", href: "/blog/post5" }],
  },
  {
    id: "telmex", title: "Customer Technical Support", organization: "Telmex", period: "Nov 2018 — Jan 2020", location: "San Luis Potosí · On-site",
    summary: "Helped customers diagnose and resolve internet connectivity issues through remote technical support.",
    details: ["Diagnosed connection failures and supported remote connection repair and maintenance.", "Guided customers through modem configuration and resolved service questions."],
    links: [{ label: "Role overview", href: "/blog/post6" }],
  },
];

export const PORTFOLIO_PROJECTS: CareerEntry[] = [
  {
    id: "firedots", title: "Firedots", organization: "Studevs · NASA Space Apps 2023", period: "Oct 2023", featured: true,
    summary: "Fire alerts and prevention education, connecting incident reporting with accessible safety information.",
    details: ["Led UI/UX and project management, shaping easy navigation, user engagement, and team delivery.", "Designed an AI-powered emergency response solution, aligning stakeholder requirements and data integrity with the app's safety goals."],
    tags: ["Global Nominee", "UI/UX", "Project management"],
    links: [{ label: "Project overview", href: "/blog/firedots" }, { label: "NASA project", href: "https://www.spaceappschallenge.org/2023/find-a-team/fire-hunters/" }, { label: "Code", href: "https://github.com/josuegarza42/Firedots" }],
  },
  {
    id: "elaina", title: "Elaina", organization: "Simon Fraser University · Mitacs Globalink", period: "Jun 2023 — Aug 2023", featured: true,
    summary: "An AI-enhanced learning platform with chatbot experiences and interfaces designed for children.",
    details: ["Contributed to project scoping and interface development with React and Tailwind CSS.", "Coordinated research delivery with Scrum and Jira and refined the experience using user feedback."],
    tags: ["AI & learning", "React", "Research"],
    links: [{ label: "Project overview", href: "/blog/post2" }, { label: "Website", href: "https://www.elaina.study/" }, { label: "Demo", href: "https://www.youtube.com/watch?v=Qa4k87snWk0" }],
  },
  {
    id: "servismedicamp", title: "Servismedicamp", organization: "Softdone", period: "Nov 2022 — Aug 2023", featured: true,
    summary: "A mobile service connecting migrant families with specialized healthcare in their home communities.",
    details: ["Managed contract negotiations, IEEE SRS requirements, budgets, and phased delivery using AgilePM and Scrum.", "Migrated project tracking from Trello to Jira and integrated Jira with GitHub for development coordination.", "Coordinated project phases and issue resolution through deployment to Google Play."],
    tags: ["Healthcare", "Agile delivery", "Mobile"],
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.servismedicamp_mobile.servismedicamp" }],
  },
  {
    id: "alowes", title: "Alowes Marketing Solutions", organization: "Softdone", period: "Jun 2023 — Jul 2023",
    summary: "Frontend work for a marketing business focused on connecting technology, ideas, and people.",
    tags: ["Frontend", "Web"], links: [{ label: "Website", href: "https://alowesmarketingsolutions.com/" }],
  },
  {
    id: "ewap", title: "EWAP", organization: "Universidad Autónoma de San Luis Potosí", period: "Mar 2022 — May 2023",
    summary: "A platform for psychologists to manage their websites and improve visibility and client retention.",
    tags: ["Frontend", "Project management"], links: [{ label: "Demo", href: "https://www.youtube.com/watch?v=aSFHHA0VUsg" }],
  },
  {
    id: "room-reserve", title: "Room Reserve", organization: "Studevs · Tulum Crypto Fest 2023", period: "May 2023",
    summary: "A travel booking concept with a virtual wallet and rewards for reservations made through referral links.",
    details: ["Led the Figma design process, developed with Flutter, and produced the product commercial.", "Managed project tracking with Trello and Waterfall. The team won first place at Tulum Crypto Fest Hackathon 2023."],
    tags: ["1st place", "Flutter", "Product design"],
    links: [{ label: "Demo", href: "https://www.youtube.com/watch?v=c7zXiis4Nso" }, { label: "Code", href: "https://github.com/josuegarza42/TulumHackathon" }],
  },
  {
    id: "healthy-hive", title: "Healthy Hive", organization: "Devsthink · Talent Hackathon 2023", period: "Apr 2023",
    summary: "A health and wellness community concept with personalized nutrition, exercise challenges, and progress sharing.",
    details: ["Contributed frontend development and project management. The project reached the semifinals in the Salud Digna challenge."],
    tags: ["Semifinalist", "Wellness", "Frontend"], links: [{ label: "Code", href: "https://github.com/KiraBelak/HelthyHive" }],
  },
  {
    id: "pocket-u", title: "Pocket U", organization: "Devsthink · NASA Space Apps 2022", period: "Oct 2022",
    summary: "Personalized fanzines that make verified science information approachable and easy to share.",
    details: ["Led project conceptualization and task coordination with Trello and Waterfall.", "Contributed frontend development with PHP, HTML, CSS, and JavaScript. The team won locally and received a global nomination."],
    tags: ["Global Nominee", "Science communication"],
    links: [{ label: "NASA project", href: "https://2022.spaceappschallenge.org/challenges/2022-challenges/steam/teams/devsthink/project" }, { label: "Code", href: "https://github.com/Devsthink/NASA-Challenge" }],
  },
  {
    id: "valofast", title: "Valofast", organization: "Devsthink · BBVA Hackathon 2022", period: "Oct 2022",
    summary: "A property valuation concept designed to make real estate assessments faster and easier to access.",
    tags: ["Project management", "Real estate"], links: [{ label: "Notebook", href: "https://colab.research.google.com/drive/1pkjJBajYDtv2qI3DfS_32gYJBgI3f5LT" }],
  },
  {
    id: "edufree", title: "Edufree", organization: "Devsthink · Talent Hackathon 2022", period: "Jul 2022",
    summary: "A web platform connecting students with free professional education and learning resources.",
    details: ["Built with an open-source web stack including Laravel, Tailwind CSS, Bootstrap, and MySQL.", "Reached the semifinals of the HCL My Learning Coach challenge."],
    tags: ["Semifinalist", "Education", "Web"], links: [{ label: "Code", href: "https://github.com/josuegarza42/Edufree" }],
  },
  {
    id: "motivacionsecu", title: "MotivacionSecu", organization: "Devsthink", period: "Feb 2022 — Mar 2022",
    summary: "A school website encouraging students to continue their education, with surveys and an administration panel for their teacher.",
    details: ["Connected student surveys with a database and an interface for the teacher to review responses and results."], tags: ["Frontend", "Databases", "Education"],
  },
  {
    id: "depsthink", title: "Depsthink", organization: "Mental health app concept", period: "Oct 2021 — Feb 2022",
    summary: "A beta concept for mental health education, psychologist discovery, and appointment booking.",
    details: ["Explored an accessible interface to help users find mental health information and connect with professionals.", "AI-assisted screening was a proposed feature; the project was a prototype, not a diagnostic service."],
    tags: ["Prototype", "UI/UX"], links: [{ label: "Figma prototype", href: "https://www.figma.com/proto/4TjzUXLngtazpVWF759RrV/Entregable-3-MOCKUP-App-Depsthink-%252B-Josue-Israel-Esquivel-Garza?node-id=555%3A5186&starting-point-node-id=555%3A5186&scaling=scale-down" }],
  },
];

export const AWARDS = [
  { id: "nasa-2023", title: "NASA Space Apps Challenge 2023", distinction: "3rd place locally · Global Nominee", period: "Oct 2023", organization: "NASA Space Apps · Querétaro", description: "Firedots · Fire prevention and emergency information.", link: { label: "Explore Firedots", href: "#project-firedots" } },
  { id: "tulum-2023", title: "Tulum Crypto Fest Hackathon", distinction: "1st place", period: "May 2023", organization: "Tulum Crypto Festival", description: "Room Reserve · Travel bookings and referral rewards.", link: { label: "Explore Room Reserve", href: "#project-room-reserve" } },
  { id: "talent-2023", title: "Talent Hackathon · Salud Digna", distinction: "Semifinalist", period: "Apr 2023", organization: "Talent Land", description: "Healthy Hive · A health and wellness community.", link: { label: "Explore Healthy Hive", href: "#project-healthy-hive" } },
  { id: "nasa-2022", title: "NASA Space Apps Challenge 2022", distinction: "1st place locally · Global Nominee", period: "Oct 2022", organization: "NASA Space Apps", description: "Pocket U · Science communication through personalized fanzines.", link: { label: "Explore Pocket U", href: "#project-pocket-u" } },
  { id: "talent-2022", title: "Talent Hackathon · HCL My Learning Coach", distinction: "Semifinalist", period: "Jul 2022", organization: "Talent Land", description: "Edufree · Free educational resources for students.", link: { label: "Explore Edufree", href: "#project-edufree" } },
  { id: "dif-2019", title: "Videojuegos prevención y autocuidado", distinction: "3rd place", period: "Mar 2019", organization: "DIF Estatal San Luis Potosí", description: "Feikbuk · A Godot game using branching decisions to teach young people about social media safety.", link: { label: "View Feikbuk code", href: "https://github.com/josuegarza42/feikbuk" } },
];

export const CREDENTIAL_GROUPS = [
  { id: "cx", title: "Zendesk, AI & customer experience", description: "AI agents, Copilot, and the Zendesk product suite." },
  { id: "delivery", title: "Project delivery & Agile", description: "Project management foundations and Scrum." },
  { id: "engineering", title: "Engineering & design", description: "Development, databases, networking, and UX." },
  { id: "learning", title: "Research, language & hackathons", description: "Program completion, English, and challenge credentials." },
] as const;

export interface Credential {
  title: string;
  issuer: string;
  issued: string;
  group: typeof CREDENTIAL_GROUPS[number]["id"];
  href: string;
}

export const CREDENTIALS: Credential[] = [
  { title: "AI agents Advanced | Customer Onboarding Journey | Certification", issuer: "Zendesk AI agents (Ultimate)", issued: "Dec 2025", group: "cx", href: "https://zendesk.lessonly.com/certificate/50678550" },
  { title: "Zendesk AI Agents - AI agents Advanced Product Training Certification", issuer: "Zendesk AI agents (Ultimate)", issued: "Dec 2025", group: "cx", href: "https://zendesk.lessonly.com/certificate/50155069" },
  { title: "Zendesk AI | Copilot Product Training | Certification | GTM", issuer: "Zendesk", issued: "Dec 2025", group: "cx", href: "https://zendesk.lessonly.com/certificate/50527222" },
  { title: "Omnichannel Agent", issuer: "Zendesk", issued: "Oct 2025", group: "cx", href: "https://www.credly.com/badges/d2bbf76f-c6c1-4ad6-b8f1-9dca222292eb/linked_in_profile" },
  { title: "Explore / analytics", issuer: "Zendesk", issued: "Oct 2025", group: "cx", href: "https://www.credly.com/badges/fa90f4a9-c94c-4fe1-9966-6636ef3686d6/linked_in_profile" },
  { title: "Messaging", issuer: "Zendesk", issued: "Oct 2025", group: "cx", href: "https://www.credly.com/badges/9ff3eec0-af3a-43f7-ae80-ab6a334db300/linked_in_profile" },
  { title: "Guide / self-service", issuer: "Zendesk", issued: "Oct 2025", group: "cx", href: "https://www.credly.com/badges/559a5864-c985-47d5-9fcf-4c5b37c1eb4b/linked_in_profile" },
  { title: "Talk / voice", issuer: "Zendesk", issued: "Oct 2025", group: "cx", href: "https://www.credly.com/badges/e86e50d2-5711-4f4b-ab3c-1382ba16f377/linked_in_profile" },
  { title: "Foundational Support", issuer: "Zendesk", issued: "Oct 2025", group: "cx", href: "https://www.credly.com/badges/2b79d008-d22f-4f2f-a012-20ea2fa0ac3d/linked_in_profile" },
  { title: "Project management fundamentals", issuer: "Google", issued: "Oct 2023", group: "delivery", href: "https://www.coursera.org/account/accomplishments/certificate/75ABJMCKZTX6" },
  { title: "Scrum Fundamentals Certified (SFC)", issuer: "VMEdu", issued: "May 2022", group: "delivery", href: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-JosueIsraelGarza-914236.pdf" },
  { title: "User experience design basics", issuer: "Coursera", issued: "Aug 2022", group: "engineering", href: "https://www.coursera.org/account/accomplishments/certificate/824C48KT67G8" },
  { title: "Software Engineering Fundamentals", issuer: "Platzi", issued: "Jul 2022", group: "engineering", href: "https://platzi.com/p/josuegarza42/curso/1098-ingenieria/diploma/detalle/" },
  { title: "Algorithms and Logical Thinking", issuer: "Platzi", issued: "Feb 2022", group: "engineering", href: "https://platzi.com/p/josuegarza42/curso/2218-pensamiento-logico-2020/diploma/detalle/" },
  { title: "Git and GitHub Professional", issuer: "Platzi", issued: "Feb 2022", group: "engineering", href: "https://platzi.com/p/josuegarza42/curso/1557-git-github/diploma/detalle/" },
  { title: "Database Fundamentals", issuer: "Platzi", issued: "Jan 2022", group: "engineering", href: "https://platzi.com/p/josuegarza42/curso/1566-bd/diploma/detalle/" },
  { title: "CCNA: Introduction to Networks (ITN)", issuer: "Cisco", issued: "Jan 2022", group: "engineering", href: "https://www.credly.com/badges/985cc9d4-b93b-4d70-96ac-9a9e61c54b2b/public_url" },
  { title: "EF SET English Certificate (B2 Upper Intermediate)", issuer: "EF SET", issued: "Nov 2023", group: "learning", href: "https://www.efset.org/cert/tGEYdC" },
  { title: "NASA International Space Apps Challenge 2023 - Global Nominee", issuer: "NASA", issued: "Oct 2023", group: "learning", href: "https://drive.google.com/file/d/1rp7fzEQm72Oz600vYqcbnfazNkZoMyT3/view?usp=sharing" },
  { title: "Certificate of Program Completion", issuer: "Mitacs", issued: "Aug 2023", group: "learning", href: "https://drive.google.com/file/d/1MrtfwVa0-VN7zg7k-a6HTo7oVzBmHcc3/view?usp=sharing" },
  { title: "BBVA Hackathon 2022", issuer: "BBVA", issued: "Oct 2022", group: "learning", href: "https://drive.google.com/file/d/1OOxeVtxzkqObrERLrIgNEq51b7PnmuR-/view?usp=share_link" },
  { title: "NASA International Space Apps Challenge 2022 - Global Nominee", issuer: "NASA", issued: "Oct 2022", group: "learning", href: "https://drive.google.com/file/d/10NWilaWsRVevXdCYos0LAVo6Aa9F9Gn_/view?usp=share_link" },
  { title: "Talent Hackathon 2022", issuer: "Talent-Network", issued: "Jul 2022", group: "learning", href: "https://drive.google.com/file/d/1v_-NfWA9swL-_WOoAZniBF2UKFpHDRiL/view?usp=share_link" },
];

export const EDUCATION = {
  degree: "Bachelor of Engineering · Intelligent Systems",
  institution: "Universidad Autónoma de San Luis Potosí",
  period: "Aug 2018 — Dec 2023",
  summary: "A foundation in project management, web and mobile development, UI/UX, databases, cybersecurity, and networks.",
};

export const COMMUNITY = [
  { id: "studevs-community", title: "Studevs", role: "Co-Founder", period: "Founded Apr 2023", summary: "A community helping IT students learn, build, and grow together.", detail: "After graduating, I handed leadership to active students so the community could continue with its next generation of builders.", href: "https://www.linkedin.com/company/studevs/" },
];

export const VOLUNTEERING = [{ title: "COVID-19 vaccine registry assistant", organization: "H. Ayuntamiento de San Luis Potosí", cause: "Health" }];
export const LANGUAGES = [{ name: "Spanish", level: "Native or bilingual proficiency" }, { name: "English", level: "Full professional proficiency" }];
