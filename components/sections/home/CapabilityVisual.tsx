type CapabilityVisualProps = {
  variant:
    | "software"
    | "web"
    | "mobile"
    | "commerce"
    | "design"
    | "growth"
    | "automation";
};

export function CapabilityVisual({ variant }: CapabilityVisualProps) {
  const shell =
    "relative min-h-[140px] overflow-hidden border border-brand-border/60 bg-brand-surface/25 sm:min-h-[160px] lg:min-h-[180px]";

  if (variant === "software") {
    return (
      <div className={shell} aria-hidden>
        <div className="absolute inset-0 cn-bg-grid-dark opacity-40" />
        <div className="relative flex h-full items-center justify-center gap-6 p-4">
          {["API", "DB", "APP"].map((n) => (
            <div
              key={n}
              className="flex size-12 items-center justify-center rounded-md border border-brand-accent/25 bg-brand-bg/80 cn-caption text-brand-accent"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "web") {
    return (
      <div className={shell} aria-hidden>
        <div className="p-4">
          <div className="h-2 w-16 rounded-sm bg-brand-border" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="col-span-2 h-16 rounded-sm border border-brand-border/70 bg-brand-bg/50" />
            <div className="h-16 rounded-sm border border-brand-border/70 bg-brand-bg/30" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className={`${shell} flex items-center justify-center p-4`} aria-hidden>
        <div className="h-[120px] w-[68px] rounded-xl border-2 border-brand-border-light bg-brand-bg/60 p-2">
          <div className="h-2 w-8 rounded-full bg-brand-border mx-auto" />
          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded bg-brand-border/80" />
            <div className="h-2 w-[80%] rounded bg-brand-accent/20" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "commerce") {
    return (
      <div className={shell} aria-hidden>
        <div className="grid grid-cols-3 gap-2 p-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="aspect-square rounded-sm bg-brand-border/35" />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "design") {
    return (
      <div className={shell} aria-hidden>
        <div className="flex h-full items-end gap-2 p-4">
          <div className="h-12 flex-1 border border-dashed border-brand-muted-secondary/50 rounded-sm" />
          <div className="h-20 flex-1 border border-brand-accent/30 bg-brand-accent/5 rounded-sm" />
          <div className="h-16 flex-1 border border-brand-border bg-brand-surface/50 rounded-sm" />
        </div>
      </div>
    );
  }

  if (variant === "growth") {
    return (
      <div className={shell} aria-hidden>
        <div className="p-4 space-y-2">
          <div className="h-2 w-full rounded bg-brand-border/60" />
          <div className="ml-4 h-2 w-[85%] rounded bg-brand-border/40" />
          <div className="ml-8 h-2 w-[70%] rounded bg-brand-accent/15" />
          <div className="ml-4 h-2 w-[80%] rounded bg-brand-border/40" />
        </div>
      </div>
    );
  }

  return (
    <div className={shell} aria-hidden>
      <div className="flex h-full items-center justify-center p-4">
        <div className="flex items-center gap-2">
          {["In", "Process", "Out"].map((t, i) => (
            <div key={t} className="flex items-center gap-2">
              <span className="rounded border border-brand-border px-2 py-1 cn-caption text-brand-muted">
                {t}
              </span>
              {i < 2 ? <span className="text-brand-accent/50">→</span> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
