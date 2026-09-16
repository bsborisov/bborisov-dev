export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  prominent: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "Cormac Associates",
    role: "IT Manager & Senior Developer",
    period: "May 2022 — Present",
    highlights: [
      "Lead and support a 10-person team across frontend, middleware and backend delivery",
      "Develop React and Node.js applications alongside PHP and WordPress systems",
      "Own production infrastructure, websites and operational support",
      "Coordinate project priorities, quality assurance and delivery",
    ],
    prominent: true,
  },

  {
    company: "New Phone 2014",
    role: "Senior Developer",
    period: "Mar 2015 — Apr 2022",
    highlights: [
      "Owned full-stack development across 10 company websites",
      "Built and maintained 7 e-commerce platforms",
      "Developed REST APIs, middleware and business-system integrations",
      "Managed cloud hosting capacity, performance and production reliability",
    ],
    prominent: true,
  },

  {
    company: "DevLabs",
    role: "Senior Developer",
    period: "Mar 2011 — Mar 2015",
    highlights: [
      "Led a team of 5–6 developers across frontend, middleware and backend work",
      "Owned backend delivery and external integrations",
    ],
    prominent: false,
  },

  {
    company: "BG Leads",
    role: "PHP Developer",
    period: "Mar 2009 — Mar 2011",
    highlights: [
      "Developed backend solutions and REST API logic for US outsourcing projects",
      "Coordinated work within a team that grew from 3 to more than 20 colleagues",
    ],
    prominent: false,
  },
];