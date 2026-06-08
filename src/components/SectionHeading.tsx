type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <p
        className={`text-[0.7rem] font-semibold uppercase tracking-[0.32em] ${
          light ? "text-accent" : "text-accent-dark"
        }`}
      >
        {eyebrow}
      </p>
      <span
        aria-hidden="true"
        className="mx-auto mt-4 block h-px w-12 bg-accent"
      />
      <h2
        className={`mt-5 font-heading text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl ${
          light ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-5 max-w-xl text-base leading-relaxed ${
            light ? "text-cream/70" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
