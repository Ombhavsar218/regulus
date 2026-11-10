export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default:
      'bg-regulus-card border-regulus-border-strong/25 text-regulus-muted',
    accent:
      'bg-regulus-accent-soft border-regulus-border-strong/30 text-regulus-accent-text',
    concept:
      'bg-regulus-card border-regulus-border-strong/40 text-regulus-text font-mono',
    outline:
      'bg-transparent border-regulus-border-strong/60 text-regulus-muted',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide theme-transition ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
}
