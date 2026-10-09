import { MockupConceptLabel } from "@/components/work/MockupConceptLabel";

type ProductMockupProps = {
  variant: "fintech" | "healthcare" | "commerce";
  className?: string;
  size?: "default" | "feature";
};

export function ProductMockup({
  variant,
  className = "",
  size = "default",
}: ProductMockupProps) {
  const featureShell =
    "min-h-[300px] lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[620px]";
  const shell = size === "feature" ? featureShell : "min-h-[260px]";

  if (variant === "fintech") {
    return (
      <div
        className={`relative overflow-hidden bg-[#080d14] ${shell} ${className}`}
        role="img"
        aria-label="Northstar Capital concept dashboard interface with sample layout data"
      >
        <MockupConceptLabel />
        <div className="absolute inset-0 cn-bg-grid-dark opacity-40" />
        <div className="relative grid h-full min-h-[inherit] lg:grid-cols-[220px_1fr_280px]">
          <aside className="hidden border-r border-brand-border/80 bg-brand-surface/30 p-5 lg:block xl:p-6">
            <p className="cn-tech-label text-brand-accent-secondary">Northstar</p>
            <nav className="mt-8 space-y-3">
              {["Overview", "Portfolio", "Allocations", "Activity"].map((item, i) => (
                <p
                  key={item}
                  className={`cn-body-sm ${i === 0 ? "text-brand-text" : "text-brand-muted"}`}
                >
                  {item}
                </p>
              ))}
            </nav>
            <div className="mt-10 rounded-md border border-brand-border/70 p-3">
              <p className="cn-caption text-brand-muted">Net exposure</p>
              <p className="mt-2 cn-heading-sm text-brand-text">Moderate</p>
            </div>
          </aside>

          <div className="border-b border-brand-border/80 p-5 lg:border-b-0 lg:p-8 xl:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="cn-tech-label text-brand-muted">Portfolio summary</p>
                <p className="mt-2 cn-display-md text-brand-text lg:cn-heading-xl">
                  Sample view
                </p>
              </div>
              <div className="flex gap-6">
                {[
                  ["Liquidity", "Balanced"],
                  ["Risk", "Low"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="cn-caption text-brand-muted">{k}</p>
                    <p className="mt-1 cn-body-md text-brand-text">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="rounded-md border border-brand-border/70 bg-brand-surface/25 p-4 lg:p-5">
                <p className="cn-tech-label text-brand-muted">Performance trend</p>
                <div className="mt-4 flex h-32 items-end gap-1.5 lg:h-44 xl:h-48">
                  {[38, 52, 47, 66, 58, 74, 69, 82, 76, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-brand-accent/20"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-md border border-brand-border/70 bg-brand-surface/25 p-4 lg:p-5">
                <p className="cn-tech-label text-brand-muted">Allocation</p>
                <div className="relative mx-auto mt-6 size-28 rounded-full border border-brand-border lg:size-32">
                  <div className="absolute inset-2 rounded-full border border-brand-accent/30" />
                  <div className="absolute inset-5 rounded-full bg-brand-accent/10" />
                </div>
                <ul className="mt-5 space-y-2 cn-caption text-brand-muted">
                  <li>Equities segment</li>
                  <li>Fixed income segment</li>
                  <li>Alternatives segment</li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="hidden border-l border-brand-border/80 bg-brand-bg/40 p-5 xl:block xl:p-6">
            <p className="cn-tech-label text-brand-muted">System activity</p>
            <ul className="mt-6 space-y-4">
              {[
                "Report sync completed",
                "Risk model refreshed",
                "Team workspace updated",
                "Portfolio rebalance queued",
              ].map((line) => (
                <li key={line} className="border-l border-brand-accent/40 pl-3 cn-body-sm text-brand-muted">
                  {line}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    );
  }

  if (variant === "healthcare") {
    return (
      <div
        className={`relative overflow-hidden bg-brand-surface ${shell} ${className}`}
        role="img"
        aria-label="MedAxis Flow concept operations interface with sample workflow data"
      >
        <MockupConceptLabel />
        <div className="grid min-h-[inherit] lg:grid-cols-12">
          <div className="border-b border-brand-border/80 p-5 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
            <p className="cn-tech-label text-brand-accent-secondary">MedAxis Flow</p>
            <p className="mt-2 cn-caption text-brand-muted">Operations control</p>
            <div className="mt-8 space-y-3">
              {["Scheduling", "Inventory", "Dispatch", "Compliance"].map((stage, i) => (
                <div
                  key={stage}
                  className="flex items-center gap-3 border-l-2 border-brand-accent/30 pl-3 py-1"
                  style={{ marginLeft: `${i * 4}px` }}
                >
                  <span className="size-2 rounded-full bg-brand-accent-secondary/80" />
                  <span className="cn-body-sm text-brand-text">{stage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 lg:col-span-8 lg:p-8 xl:p-10">
            <div className="grid gap-4 md:grid-cols-3">
              {["Queued", "In transit", "Delivered"].map((col, ci) => (
                <div key={col} className="rounded-md border border-brand-border/70 bg-brand-bg/35 p-3">
                  <p className="cn-tech-label text-brand-muted">{col}</p>
                  <div className="mt-3 space-y-2">
                    {[1, 2].map((n) => (
                      <div
                        key={n}
                        className="rounded border border-brand-border/60 bg-brand-surface/50 px-2 py-3"
                      >
                        <p className="cn-caption text-brand-text">Route {ci + 1}-{n}</p>
                        <p className="mt-1 cn-caption text-brand-muted">Status active</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Cold chain", "Stable"],
                ["Units moving", "Active"],
                ["On-time", "On track"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-brand-border pt-3">
                  <p className="cn-caption text-brand-muted">{k}</p>
                  <p className="mt-1 cn-body-md text-brand-text">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-[#0e141d] ${shell} ${className}`}
      role="img"
      aria-label="Vanta Commerce concept storefront interface with sample catalog layout"
    >
      <MockupConceptLabel />
      <div className="grid min-h-[inherit] lg:grid-cols-12">
        <div className="border-b border-brand-border/80 p-5 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-8">
          <p className="cn-tech-label text-brand-muted">Vanta Commerce</p>
          <div className="mt-6 aspect-[4/5] rounded-md bg-gradient-to-br from-brand-surface-elevated via-brand-surface to-brand-bg p-4">
            <div className="h-[58%] rounded-md border border-brand-border/50 bg-brand-border/25" />
            <p className="mt-4 cn-heading-sm text-brand-text">Featured collection</p>
            <p className="mt-2 cn-body-sm text-brand-muted">
              Editorial discovery for considered purchases.
            </p>
            <p className="mt-6 inline-flex min-h-11 items-center rounded-md border border-brand-accent/40 px-4 cn-body-sm text-brand-accent">
              View product
            </p>
          </div>
        </div>
        <div className="p-5 lg:col-span-7 lg:p-8 xl:p-10">
          <div className="flex flex-wrap gap-2">
            {["New", "Essentials", "Materials", "Objects", "Archive"].map((cat, i) => (
              <span
                key={cat}
                className={`px-3 py-1.5 cn-caption ${i === 0 ? "text-brand-accent" : "text-brand-muted"}`}
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="group grid grid-cols-[88px_1fr] gap-3 border-t border-brand-border/70 pt-4">
                <div className="aspect-square rounded-md bg-brand-border/35" />
                <div>
                  <p className="cn-body-md text-brand-text">Object {n}</p>
                  <p className="mt-1 cn-caption text-brand-muted">Hand-finished series</p>
                  <p className="mt-3 cn-caption text-brand-accent">Add to bag</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
