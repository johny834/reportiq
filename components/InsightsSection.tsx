"use client";

import type { Category } from "@/app/page";
import CategoryFilter from "./CategoryFilter";
import SourceBadge from "./SourceBadge";

interface Feedback {
  id: string;
  model: string;
  market: string;
  category: string;
  sentiment: string;
  rating: number;
  summary: string;
  summaryEn: string;
  sourceUrl: string;
  sourceType: string;
  date: string;
}

interface Props {
  feedbacks: Feedback[];
  categoryFilter: Category;
  setCategoryFilter: (c: Category) => void;
}

const sentimentConfig: Record<string, { emoji: string; color: string }> = {
  positive: { emoji: "😊", color: "text-skoda-green" },
  neutral: { emoji: "😐", color: "text-yellow-500" },
  negative: { emoji: "😟", color: "text-red-400" },
};

const marketFlags: Record<string, string> = { CZ: "🇨🇿", SK: "🇸🇰", DE: "🇩🇪" };

export default function InsightsSection({ feedbacks, categoryFilter, setCategoryFilter }: Props) {
  return (
    <section className="animate-fade-in">
      <h3 className="text-heading-lg mb-4 text-skoda-text-primary">Top Owner Insights</h3>
      <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />

      {feedbacks.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-skoda-text-muted text-body-lg">No insights match the current filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {feedbacks.map((f, i) => {
            const sc = sentimentConfig[f.sentiment] || sentimentConfig.neutral;
            return (
              <div
                key={f.id}
                className={`card opacity-0 animate-fade-in stagger-${Math.min(i + 1, 5)}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{sc.emoji}</span>
                    <span className="text-caption text-skoda-text-muted">{f.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-caption">{marketFlags[f.market] || f.market}</span>
                    <SourceBadge type={f.sourceType} />
                  </div>
                </div>

                <p className="text-body-md text-skoda-text-primary mb-2 leading-relaxed">
                  {f.summaryEn}
                </p>

                <p className="text-body-sm text-skoda-text-muted italic mb-3 leading-relaxed">
                  &ldquo;{f.summary}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-skoda-border">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className={`text-sm ${s <= f.rating ? sc.color : "text-skoda-border"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-caption text-skoda-text-muted">{f.date}</span>
                    <a
                      href={f.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption text-skoda-green hover:text-skoda-secondary transition-colors flex items-center gap-1"
                    >
                      Source ↗
                    </a>
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
