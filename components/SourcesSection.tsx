"use client";

import SourceBadge from "./SourceBadge";

interface Source {
  name: string;
  url: string;
  type: string;
  market: string;
  description: string;
}

interface Props {
  sources: Source[];
}

const marketFlags: Record<string, string> = { CZ: "🇨🇿", SK: "🇸🇰", DE: "🇩🇪", Global: "🌍" };

export default function SourcesSection({ sources }: Props) {
  const grouped = sources.reduce((acc, s) => {
    const key = s.market;
    if (!acc[key]) acc[key] = [];
    acc[key].push(s);
    return acc;
  }, {} as Record<string, Source[]>);

  const order = ["CZ", "SK", "DE", "Global"];

  return (
    <section className="animate-fade-in">
      <h3 className="text-heading-lg mb-2 text-skoda-text-primary">Data Sources</h3>
      <p className="text-body-md text-skoda-text-secondary mb-6">
        All feedback data is aggregated from the following community sources, forums, and review platforms.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {order.map((market) => {
          const items = grouped[market];
          if (!items) return null;
          return (
            <div key={market}>
              <h4 className="text-heading-md text-skoda-text-primary mb-3 flex items-center gap-2">
                <span>{marketFlags[market]}</span>
                <span>{market === "Global" ? "Global / International" : market}</span>
              </h4>
              <div className="space-y-3">
                {items.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card block group"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className="text-body-md text-skoda-text-primary group-hover:text-skoda-green transition-colors font-medium">
                        {s.name} ↗
                      </span>
                      <SourceBadge type={s.type} />
                    </div>
                    <p className="text-body-sm text-skoda-text-muted">{s.description}</p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
