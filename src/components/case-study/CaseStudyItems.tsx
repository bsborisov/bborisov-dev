import { cn } from "@/lib/utils";
import type { CaseStudyItem } from "@/types/project";

interface CaseStudyItemsProps {
  eyebrow: string;
  title: string;
  items: CaseStudyItem[];
  accent:
  | "blue"
  | "teal";
}

export function CaseStudyItems({
  eyebrow,
  title,
  items,
  accent,
}: CaseStudyItemsProps) {
  const accentClass =
    accent === "blue"
      ? "bg-accent"
      : "bg-teal";

  return (
    <section>
      <div className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
        {eyebrow}
      </div>

      <h2 className="mt-3 mb-7 font-display text-[28px] font-bold tracking-tight text-text">
        {title}
      </h2>

      <div className="space-y-7">
        {items.map(
          (item) => (
            <article
              key={
                item.title
              }
              className="grid grid-cols-[3px_1fr] gap-5"
            >
              <div
                className={cn(
                  "rounded-full",
                  accentClass
                )}
              />

              <div>
                <h3 className="mb-2 font-display text-[16px] font-bold text-text">
                  {
                    item.title
                  }
                </h3>

                <p className="text-[14px] leading-relaxed text-text-secondary">
                  {
                    item.description
                  }
                </p>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}