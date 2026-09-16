import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Experience"
            title="Experience"
          />
        </div>

        <div className="max-w-190">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className="relative pb-12 pl-8 last:pb-0"
            >
              {index < experience.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-1.75 top-3 w-px bg-border"
                />
              )}

              <div
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-1.75 size-3.5 rounded-full border-2",
                  job.prominent
                    ? "border-accent bg-white"
                    : "border-slate-300 bg-slate-100",
                )}
              />

              <div className={job.prominent ? "" : "opacity-70"}>
                <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-[18px] font-bold text-text">
                    {job.company}
                  </h3>

                  <span className="text-[14px] text-text-secondary">
                    {job.role}
                  </span>
                </div>

                <div className="mb-3 font-mono text-[11px] text-text-muted">
                  {job.period}
                </div>

                <ul className="space-y-1.5">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-[14px] leading-relaxed text-text-secondary"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-slate-400"
                      >
                        —
                      </span>

                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}