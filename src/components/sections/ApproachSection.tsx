import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Architecture First",
    description:
      "Clear boundaries, predictable data flow and maintainable systems.",
  },
  {
    number: "02",
    title: "Performance Matters",
    description:
      "Render isolation, virtualization, caching and measured optimization.",
  },
  {
    number: "03",
    title: "Production Thinking",
    description:
      "Security, testing, CI, deployment and operational reliability are part of development.",
  },
  {
    number: "04",
    title: "Simple Over Clever",
    description:
      "Prefer understandable systems over unnecessary abstraction.",
  },
] as const;

export function ApproachSection() {
  return (
    <section className="mx-auto max-w-7xl border-t border-border px-6 py-20 md:py-28 lg:px-12">
      <div className="mb-14">
        <SectionHeading
          eyebrow="Approach"
          title="How I build software"
        />
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="group"
          >
            <div className="mb-4 font-mono text-[11px] font-medium text-accent">
              {principle.number}
            </div>

            <h3 className="mb-2 font-display text-[17px] font-bold text-text">
              {principle.title}
            </h3>

            <p className="text-[14px] leading-relaxed text-text-secondary">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}