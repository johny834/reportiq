"use client";

import type { Category } from "@/app/page";

interface Props {
  categoryFilter: Category;
  setCategoryFilter: (c: Category) => void;
}

const categories: { key: Category; label: string; icon: string }[] = [
  { key: "All", label: "All", icon: "🔍" },
  { key: "Charging", label: "Charging", icon: "⚡" },
  { key: "Software/Infotainment", label: "Software", icon: "💻" },
  { key: "Range", label: "Range", icon: "🔋" },
  { key: "Build Quality", label: "Build Quality", icon: "🔧" },
  { key: "Driving Experience", label: "Driving", icon: "🏎️" },
];

export default function CategoryFilter({ categoryFilter, setCategoryFilter }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => setCategoryFilter(c.key)}
          className={`pill-button text-caption flex items-center gap-1.5 ${
            categoryFilter === c.key ? "active" : ""
          }`}
        >
          <span>{c.icon}</span>
          <span>{c.label}</span>
        </button>
      ))}
    </div>
  );
}
