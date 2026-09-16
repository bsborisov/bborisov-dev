import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/case-study/ProjectCaseStudy";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import {
  getProject,
  projects,
} from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map(
    (project) => ({
      slug:
        project.slug,
    }),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const project =
    getProject(slug);

  if (!project) {
    return {
      title:
        "Project Not Found",
    };
  }

  return {
    title:
      project.title,

    description:
      project.description,

    openGraph: {
      title: `${project.title} — Bozhidar Borisov`,

      description:
        project.description,

      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } =
    await params;

  const project =
    getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <ProjectCaseStudy
          project={
            project
          }
        />
      </main>

      <Footer />
    </>
  );
}