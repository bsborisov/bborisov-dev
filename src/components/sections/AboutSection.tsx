import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

const details = [
  {
    label: "Domain",
    value: "bborisov.dev",
  },
  {
    label: "Location",
    value: "Varna, Bulgaria",
  },
  {
    label: "Experience",
    value: "15+ years",
  },
  {
    label: "Focus",
    value: "React · Next.js · Node.js",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="About"
            />

            <p className="mt-6 max-w-155 text-[17px] leading-relaxed text-text-secondary">
              Based in Varna, Bulgaria, I have worked across frontend,
              backend, infrastructure and technical leadership for more
              than 15 years.
            </p>

            <p className="mt-4 max-w-155 text-[17px] leading-relaxed text-text-secondary">
              My recent focus is building modern applications with React,
              Next.js, TypeScript and Node.js while applying the production
              experience gained from years of operating real business
              systems.
            </p>

            <div className="mt-8 inline-flex flex-col gap-3 rounded-lg border border-border bg-background px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                Education
              </div>

              <div>
                <div className="font-display text-[15px] font-semibold text-text">
                  Master of Engineering
                </div>

                <div className="text-[13px] text-text-secondary">
                  Technical University of Varna
                </div>

                <div className="text-[13px] text-text-muted">
                  Automation Engineering
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-xl border border-border bg-background p-6">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-text">
              <span className="font-display text-[20px] font-bold text-white">
                BB
              </span>
            </div>

            <div className="mb-0.5 font-display text-[18px] font-bold text-text">
              Bozhidar Borisov
            </div>

            <div className="mb-5 text-[13px] text-text-secondary">
              Senior Full Stack Developer
            </div>

            <dl className="mb-5 space-y-2">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-2"
                >
                  <dt className="w-20 shrink-0 font-mono text-[10px] text-text-muted">
                    {item.label}
                  </dt>

                  <dd className="font-mono text-[10px] text-text">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={siteConfig.cv}
              className="inline-flex w-full items-center justify-center rounded bg-text px-4 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Download CV
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}