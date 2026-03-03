"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MarketFilter from "@/components/MarketFilter";
import SentimentOverview from "@/components/SentimentOverview";
import InsightsSection from "@/components/InsightsSection";
import ProblemsSection from "@/components/ProblemsSection";
import SourcesSection from "@/components/SourcesSection";
import feedbacks from "@/data/feedbacks.json";
import problems from "@/data/problems.json";
import sources from "@/data/sources.json";

export type Model = "Enyaq" | "Elroq";
export type Market = "CZ" | "SK" | "DE" | "All";
export type Category = "All" | "Charging" | "Software/Infotainment" | "Range" | "Build Quality" | "Driving Experience";

export default function Home() {
  const [model, setModel] = useState<Model>("Enyaq");
  const [market, setMarket] = useState<Market>("All");
  const [activeSection, setActiveSection] = useState<"insights" | "problems" | "sources">("insights");
  const [isDark, setIsDark] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState<Category>("All");

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  };

  const filteredFeedbacks = useMemo(() => {
    return feedbacks.filter((f) => {
      if (f.model !== model) return false;
      if (market !== "All" && f.market !== market) return false;
      if (categoryFilter !== "All" && f.category !== categoryFilter) return false;
      return true;
    });
  }, [model, market, categoryFilter]);

  const filteredProblems = useMemo(() => {
    return problems.filter((p) => {
      if (!p.affectedModels.includes(model)) return false;
      if (market !== "All" && !p.affectedMarkets.includes(market)) return false;
      if (categoryFilter !== "All" && p.category !== categoryFilter) return false;
      return true;
    });
  }, [model, market, categoryFilter]);

  const modelFeedbacks = useMemo(() => {
    return feedbacks.filter((f) => {
      if (f.model !== model) return false;
      if (market !== "All" && f.market !== market) return false;
      return true;
    });
  }, [model, market]);

  return (
    <div className={isDark ? "dark" : "light"}>
      <div className="min-h-screen flex flex-col bg-skoda-surface dark:bg-skoda-surface transition-colors">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <main className="flex-1">
          <HeroSection model={model} setModel={setModel} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <MarketFilter market={market} setMarket={setMarket} />
            <SentimentOverview feedbacks={modelFeedbacks} model={model} />

            {activeSection === "insights" && (
              <InsightsSection
                feedbacks={filteredFeedbacks}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              />
            )}

            {activeSection === "problems" && (
              <ProblemsSection
                problems={filteredProblems}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              />
            )}

            {activeSection === "sources" && <SourcesSection sources={sources} />}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
