"use client";

import type { Model } from "@/app/page";

interface Feedback {
  model: string;
  sentiment: string;
  rating: number;
  category: string;
}

interface Props {
  feedbacks: Feedback[];
  model: Model;
}

export default function SentimentOverview({ feedbacks, model }: Props) {
  const avgRating = feedbacks.length
    ? (feedbacks.reduce((acc, f) => acc + f.rating, 0) / feedbacks.length).toFixed(1)
    : "—";

  const positive = feedbacks.filter((f) => f.sentiment === "positive").length;
  const neutral = feedbacks.filter((f) => f.sentiment === "neutral").length;
  const negative = feedbacks.filter((f) => f.sentiment === "negative").length;
  const total = feedbacks.length;

  const categories = ["Charging", "Software/Infotainment", "Range", "Build Quality", "Driving Experience"];
  const categoryRatings = categories.map((cat) => {
    const catFeedbacks = feedbacks.filter((f) => f.category === cat);
    const avg = catFeedbacks.length
      ? (catFeedbacks.reduce((a, f) => a + f.rating, 0) / catFeedbacks.length).toFixed(1)
      : null;
    return { category: cat, avg, count: catFeedbacks.length };
  });

  return (
    <div className="mb-10 animate-fade-in">
      <h3 className="text-heading-lg mb-4 text-skoda-text-primary">
        Sentiment Overview — <span className="text-skoda-green">{model}</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Overall rating */}
        <div className="card flex flex-col items-center justify-center py-6">
          <span className="text-display-md glow-text">{avgRating}</span>
          <span className="text-caption text-skoda-text-muted mt-1">Average Rating</span>
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <span
                key={s}
                className={`text-lg ${
                  s <= Math.round(Number(avgRating)) ? "text-skoda-green" : "text-skoda-border"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Sentiment breakdown */}
        <div className="card py-6">
          <div className="text-caption text-skoda-text-muted mb-3">Sentiment Split</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-body-sm">😊 Positive</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-skoda-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-skoda-green rounded-full transition-all duration-700"
                    style={{ width: total ? `${(positive / total) * 100}%` : "0%" }}
                  />
                </div>
                <span className="text-caption text-skoda-green w-6 text-right">{positive}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm">😐 Neutral</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-skoda-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500/70 rounded-full transition-all duration-700"
                    style={{ width: total ? `${(neutral / total) * 100}%` : "0%" }}
                  />
                </div>
                <span className="text-caption text-yellow-500 w-6 text-right">{neutral}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm">😟 Negative</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-skoda-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-400/70 rounded-full transition-all duration-700"
                    style={{ width: total ? `${(negative / total) * 100}%` : "0%" }}
                  />
                </div>
                <span className="text-caption text-red-400 w-6 text-right">{negative}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="card col-span-1 md:col-span-2 py-6">
          <div className="text-caption text-skoda-text-muted mb-3">By Category</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categoryRatings.map((cr) => (
              <div key={cr.category} className="flex flex-col">
                <span className="text-caption text-skoda-text-muted truncate">{cr.category}</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className={`text-heading-md ${cr.avg ? "text-skoda-green" : "text-skoda-text-muted"}`}>
                    {cr.avg ?? "—"}
                  </span>
                  <span className="text-caption text-skoda-text-muted">({cr.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
