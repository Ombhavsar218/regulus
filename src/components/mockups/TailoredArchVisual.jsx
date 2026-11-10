import { Check, Minus, ArrowDown } from 'lucide-react';

export function TailoredArchVisual() {
  const rigidLimits = [
    'Fixed software forcing your team to change how it works',
    'Disconnected spreadsheets for daily tracking',
  ];

  const customFit = [
    { title: 'Your Workflows First', note: 'Software tailored to your real business process' },
    { title: 'Connected Departments', note: 'Inventory, sales, purchasing and teams aligned' },
    { title: 'Clean Daily Screens', note: 'Simple, practical tools your staff can adopt fast' },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-regulus-border bg-regulus-card p-5 theme-transition">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-regulus-faint">
          Standard Off-the-Shelf Software
        </span>
        <ul className="mt-3 space-y-2">
          {rigidLimits.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-regulus-muted theme-transition"
            >
              <Minus className="mt-0.5 h-4 w-4 shrink-0 text-regulus-faint" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center" aria-hidden="true">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-regulus-border bg-regulus-card text-regulus-accent-text">
          <ArrowDown className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="rounded-xl border border-regulus-border-strong/70 bg-regulus-elevated p-5 shadow-card theme-transition">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-regulus-accent-text">
            The Regulus Approach
          </span>
          <span className="rounded-full bg-regulus-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-regulus-accent-text">
            Tailored Fit
          </span>
        </div>

        <div className="mt-3.5 space-y-2.5">
          {customFit.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-lg border border-regulus-border bg-regulus-subtle p-3 theme-transition"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-regulus-accent-soft text-regulus-accent-text">
                <Check className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-regulus-text">{item.title}</p>
                <p className="mt-0.5 text-xs text-regulus-muted">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
