interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
        {eyebrow}
      </span>

      <h2 className="mt-3 font-display text-[32px] font-extrabold leading-[1.15] tracking-tight text-text md:text-[40px]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-140 text-[15px] leading-relaxed text-text-muted">
          {description}
        </p>
      )}
    </div>
  );
}