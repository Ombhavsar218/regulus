export function SolutionPreviewCard({ type = 'erp', tone = 'subtle' }) {
  const frameClass =
    tone === 'elevated'
      ? 'border-regulus-border bg-regulus-elevated'
      : 'border-regulus-border bg-regulus-subtle';
  const widgetClass =
    tone === 'elevated'
      ? 'border-regulus-border bg-regulus-card'
      : 'border-regulus-border bg-regulus-elevated';
  const barTrackClass = tone === 'elevated' ? 'bg-regulus-elevated' : 'bg-regulus-card';

  if (type === 'erp') {
    return (
      <div className={`rounded-lg border p-3 theme-transition ${frameClass}`}>
        <div className="flex items-center justify-between border-b border-regulus-border pb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-regulus-accent" />
            <span className="font-mono text-[10px] font-medium text-regulus-text">
              ERP // PRODUCTION
            </span>
          </div>
          <span className="font-mono text-[9px] text-regulus-faint">DEMO VIEW</span>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-2">
          <div className={`rounded border p-2 ${widgetClass}`}>
            <div className="h-1.5 w-8 rounded bg-regulus-border-strong/50" />
            <div className="mt-1.5 h-3 w-12 rounded bg-regulus-accent-soft" />
          </div>
          <div className={`rounded border p-2 ${widgetClass}`}>
            <div className="h-1.5 w-10 rounded bg-regulus-border-strong/50" />
            <div className={`mt-1.5 h-3 w-10 rounded ${barTrackClass}`} />
          </div>
          <div className={`rounded border p-2 ${widgetClass}`}>
            <div className="h-1.5 w-7 rounded bg-regulus-border-strong/50" />
            <div className={`mt-1.5 h-3 w-11 rounded ${barTrackClass}`} />
          </div>
        </div>
        <div className="mt-2 space-y-1.5">
          <div className={`flex items-center justify-between rounded border px-2.5 py-1.5 ${widgetClass}`}>
            <span className="h-1.5 w-20 rounded bg-regulus-border-strong/50" />
            <span className="h-1.5 w-8 rounded bg-regulus-accent" />
          </div>
          <div className={`flex items-center justify-between rounded border px-2.5 py-1.5 ${widgetClass}`}>
            <span className="h-1.5 w-24 rounded bg-regulus-border-strong/50" />
            <span className="h-1.5 w-6 rounded bg-regulus-border-strong/50" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'inventory') {
    return (
      <div className={`rounded-lg border p-3 theme-transition ${frameClass}`}>
        <div className="flex items-center justify-between border-b border-regulus-border pb-2">
          <span className="font-mono text-[10px] font-medium text-regulus-text">
            INVENTORY // STOCK
          </span>
          <span className="font-mono text-[9px] text-regulus-accent-text">TRACKED</span>
        </div>
        <div className="mt-2.5 space-y-1.5">
          {[82, 54, 91].map((width, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 rounded border px-2.5 py-1.5 ${widgetClass}`}
            >
              <span className="font-mono text-[9px] text-regulus-faint">
                BIN-0{idx + 1}
              </span>
              <div className={`h-1.5 flex-1 overflow-hidden rounded-full ${barTrackClass}`}>
                <div
                  className="h-full rounded-full bg-regulus-accent"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'website') {
    return (
      <div className={`rounded-lg border p-3 theme-transition ${frameClass}`}>
        <div className="flex items-center justify-between border-b border-regulus-border pb-2">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-regulus-border-strong/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-regulus-border-strong/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-regulus-border-strong/60" />
          </div>
          <span className="font-mono text-[9px] text-regulus-faint">RESPONSIVE WEB</span>
        </div>
        <div className="mt-2.5 grid grid-cols-12 gap-2">
          <div className={`col-span-7 space-y-1.5 rounded border p-2.5 ${widgetClass}`}>
            <div className="h-2 w-16 rounded bg-regulus-text/75" />
            <div className="h-1.5 w-full rounded bg-regulus-border-strong/50" />
            <div className="h-1.5 w-4/5 rounded bg-regulus-border-strong/50" />
            <div className="mt-2 h-3 w-12 rounded bg-regulus-accent" />
          </div>
          <div className={`col-span-5 flex flex-col justify-between rounded border p-2 ${widgetClass}`}>
            <div className="h-6 rounded bg-regulus-accent-soft" />
            <div className={`h-5 rounded ${barTrackClass}`} />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'custom-app') {
    return (
      <div className={`rounded-lg border p-3 theme-transition ${frameClass}`}>
        <div className="flex items-center justify-between border-b border-regulus-border pb-2">
          <span className="font-mono text-[10px] font-medium text-regulus-text">
            APP // CUSTOM PORTAL
          </span>
          <span className="font-mono text-[9px] text-regulus-accent-text">WORKFLOW</span>
        </div>
        <div className="mt-2.5 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className={`rounded border p-2 ${widgetClass}`}>
              <div className="h-1.5 w-10 rounded bg-regulus-accent" />
              <div className="mt-1.5 h-2 w-14 rounded bg-regulus-border-strong/50" />
            </div>
            <div className={`rounded border p-2 ${widgetClass}`}>
              <div className="h-1.5 w-12 rounded bg-regulus-border-strong/50" />
              <div className="mt-1.5 h-2 w-10 rounded bg-regulus-accent-soft" />
            </div>
          </div>
          <div className={`flex items-center justify-between rounded border px-2.5 py-2 ${widgetClass}`}>
            <div className="h-1.5 w-24 rounded bg-regulus-border-strong/50" />
            <div className="h-3 w-10 rounded bg-regulus-accent" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-lg border p-3 theme-transition ${frameClass}`}>
      <div className="flex items-center justify-between border-b border-regulus-border pb-2">
        <span className="font-mono text-[10px] font-medium text-regulus-text">
          PORTAL // MANAGEMENT
        </span>
        <span className="font-mono text-[9px] text-regulus-faint">CONNECTED</span>
      </div>
      <div className="mt-2.5 grid grid-cols-4 gap-1.5">
        <div className={`col-span-1 space-y-1 rounded border p-1.5 ${widgetClass}`}>
          <div className="h-1.5 w-full rounded bg-regulus-accent" />
          <div className="h-1.5 w-4/5 rounded bg-regulus-border-strong/50" />
          <div className="h-1.5 w-full rounded bg-regulus-border-strong/50" />
          <div className="h-1.5 w-3/4 rounded bg-regulus-border-strong/50" />
        </div>
        <div className={`col-span-3 space-y-1.5 rounded border p-2 ${widgetClass}`}>
          <div className="flex justify-between">
            <div className="h-2 w-16 rounded bg-regulus-border-strong/50" />
            <div className="h-2 w-8 rounded bg-regulus-accent-soft" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className={`h-7 rounded border border-regulus-border ${barTrackClass}`} />
            <div className={`h-7 rounded border border-regulus-border ${barTrackClass}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
