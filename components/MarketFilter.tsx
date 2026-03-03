"use client";

import type { Market } from "@/app/page";

interface Props {
  market: Market;
  setMarket: (m: Market) => void;
}

const markets: { key: Market; label: string }[] = [
  { key: "All", label: "All Markets" },
  { key: "CZ", label: "🇨🇿 CZ" },
  { key: "SK", label: "🇸🇰 SK" },
  { key: "DE", label: "🇩🇪 DE" },
];

export default function MarketFilter({ market, setMarket }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {markets.map((m) => (
        <button
          key={m.key}
          onClick={() => setMarket(m.key)}
          className={`pill-button ${market === m.key ? "active" : ""}`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
