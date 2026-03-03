"use client";

import type { Category } from "@/app/page";
import CategoryFilter from "./CategoryFilter";
import SourceBadge from "./SourceBadge";

interface Problem {
  id: string;
  title: string;
  description: string;
  category: string;
  severity: string;
  occurrences: number;
  affectedModels: string[];
  affectedMarkets: string[];
  sourceLinks: { url: string; type: string }[];
}

interface Props {
  problems: Problem[];
  categoryFilter: Category;
  setCategoryFilter: (c: Category) => void;
}

const severityConfig: Record<string, { label: string; color: string; bg: string }> = {
  high: { label: "High", color: "text-red-400", bg: "bg-red-500/15 border-red-500/20" },
  medium: { label: "Medium", color: "text-yellow-400", bg: "bg-yellow-500/15 border-yellow-500/20" },
  low: { label: "Low", color: "text-blue-400", bg: "bg-blue-500/15 border-blue-500/20" },
};

const marketFlags: Record<string, string> = { CZ: "🇨🇿", SK: "🇸🇰", DE: "🇩🇪" };

export default function ProblemsSection({ problems, categoryFilter, setCategoryFilter }: Props) {
  const sorted = [...problems].sort((a, b) => b.occurrences - a.occurrences);

  return (
    <section className="animate-fade-in">
      <h3 className="text-heading-lg mb-4 text-skoda-text-primary">Most Reported Problems</h3>
      <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />

      {sorted.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-skoda-text-muted text-body-lg">No problems match the current filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sorted.map((p, i) => {
            const sev = severityConfig[p.severity] || severityConfig.low;
            return (
              <div
                key={p.id}
                className={`card opacity-0 animate-fade-in stagger-${Math.min(i + 1, 5)}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-skoda-surface-raised flex items-center justify-center">
                      <span className="text-heading-md text-skoda-text-primary">#{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-heading-md text-skoda-text-primary">{p.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className={`badge border ${sev.bg} ${sev.color}`}>{sev.label} Severity</span>
                        <span className="badge bg-skoda-surface-raised text-skoda-text-secondary border border-skoda-border">
                          {p.occurrences} reports
                        </span>
                        <span className="text-caption text-skoda-text-muted">{p.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-body-md text-skoda-text-secondary mb-4 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-skoda-border gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-caption text-skoda-text-muted">Models:</span>
                      {p.affectedModels.map((m) => (
                        <span key={m} className="badge bg-skoda-green/10 text-skoda-green border border-skoda-green/20 text-[11px]">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-caption text-skoda-text-muted">Markets:</span>
                      {p.affectedMarkets.map((m) => (
                        <span key={m} className="text-body-sm">{marketFlags[m]}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {p.sourceLinks.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <SourceBadge type={link.type} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
