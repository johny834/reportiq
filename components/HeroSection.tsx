"use client";

import type { Model } from "@/app/page";

interface Props {
  model: Model;
  setModel: (m: Model) => void;
}

export default function HeroSection({ model, setModel }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-skoda-green/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-skoda-green/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="text-center mb-8">
          <p className="text-caption text-skoda-green uppercase tracking-widest mb-3">Customer Feedback Intelligence</p>
          <h2 className="text-display-md md:text-display-lg mb-4">
            <span className="text-skoda-text-primary">Real insights from </span>
            <span className="text-gradient">real owners</span>
          </h2>
          <p className="text-body-lg text-skoda-text-secondary max-w-2xl mx-auto">
            Aggregated feedback from forums, reviews, and communities across Czech Republic, Slovakia, and Germany.
          </p>
        </div>

        {/* Model selector */}
        <div className="flex justify-center gap-4">
          {(["Enyaq", "Elroq"] as Model[]).map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={`group relative px-8 py-5 rounded-skoda-xl border-2 transition-all duration-500 min-w-[200px] ${
                model === m
                  ? "border-skoda-green bg-skoda-green/10 shadow-[0_0_40px_rgba(120,250,174,0.15)]"
                  : "border-skoda-border bg-skoda-surface-card hover:border-skoda-green/30 hover:bg-skoda-surface-raised"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`text-4xl transition-transform duration-300 ${model === m ? "scale-110" : "group-hover:scale-105"}`}>
                  {m === "Enyaq" ? "🚙" : "🚗"}
                </div>
                <span className={`text-heading-md ${model === m ? "text-skoda-green" : "text-skoda-text-primary"}`}>
                  {m}
                </span>
                <span className="text-caption text-skoda-text-muted">
                  {m === "Enyaq" ? "Electric SUV" : "Compact Electric SUV"}
                </span>
              </div>
              {model === m && (
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-12 h-0.5 bg-skoda-green rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
