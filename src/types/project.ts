export interface ArchitectureStep {
  from: string;
  to: string;
  description: string;
}

export interface CaseStudyItem {
  title: string;
  description: string;
}

export interface TestingItem {
  tool: string;
  description: string;
}

export interface PortfolioProject {
  slug: "pulseops" | "atlas";
  index: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github: string;
  live?: string;
  accent: "blue" | "teal";
  problem: string;
  architecture: {
    steps: ArchitectureStep[];
    summary: string;
  };
  decisions: CaseStudyItem[];
  performance: CaseStudyItem[];
  testing: TestingItem[];
  tradeoffs: string[];
}