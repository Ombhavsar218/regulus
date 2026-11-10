export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: HeadingTag = 'h2',
  className = '',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  const maxDesc = align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-regulus-accent-text theme-transition">
          <span className="h-1.5 w-1.5 rounded-full bg-regulus-accent" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <HeadingTag className="text-2xl font-semibold tracking-[-0.025em] text-regulus-text sm:text-3xl lg:text-4xl theme-transition">
        {title}
      </HeadingTag>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed text-regulus-muted sm:text-[17px] theme-transition ${maxDesc}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
