/**
 * REGULUS Brand Mark & Horizontal Logo
 * Geometric precision mark that adapts cleanly to light and dark surfaces.
 */
export function RegulusMark({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="8"
        className="fill-regulus-card stroke-regulus-border-strong/70 theme-transition"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 8.5H20.2C23.68 8.5 26.5 11.1 26.5 14.3C26.5 17.5 23.68 20.1 20.2 20.1H14.8V27.5H10.5V8.5ZM14.8 12.2V16.4H19.9C21.25 16.4 22.25 15.48 22.25 14.3C22.25 13.12 21.25 12.2 19.9 12.2H14.8Z"
        className="fill-regulus-text theme-transition"
      />
      <path
        d="M18.4 20.1L26.5 27.5H20.9L14.8 21.8V20.1H18.4Z"
        className="fill-regulus-accent-text theme-transition"
      />
      <rect
        x="22.8"
        y="8.5"
        width="3.7"
        height="3.7"
        rx="0.9"
        className="fill-regulus-border-strong theme-transition"
      />
    </svg>
  );
}

export function RegulusLogo({
  showSubtitle = false,
  size = 'md',
  className = '',
}) {
  const markSize = size === 'sm' ? 28 : size === 'lg' ? 38 : 32;
  const wordmarkSize =
    size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg';

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <RegulusMark size={markSize} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-[0.14em] text-regulus-text theme-transition ${wordmarkSize}`}
        >
          REGULUS
        </span>
        {showSubtitle && (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-regulus-faint theme-transition">
            Business Technology
          </span>
        )}
      </span>
    </span>
  );
}
