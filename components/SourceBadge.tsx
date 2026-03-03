interface Props {
  type: string;
}

const config: Record<string, { color: string; icon: string }> = {
  "Official Review": { color: "bg-blue-500/15 text-blue-400 border border-blue-500/20", icon: "✓" },
  "Forum": { color: "bg-purple-500/15 text-purple-400 border border-purple-500/20", icon: "💬" },
  "Reddit": { color: "bg-orange-500/15 text-orange-400 border border-orange-500/20", icon: "🔗" },
  "News": { color: "bg-skoda-green/15 text-skoda-green border border-skoda-green/20", icon: "📰" },
};

export default function SourceBadge({ type }: Props) {
  const c = config[type] || config["Forum"];
  return (
    <span className={`badge ${c.color}`}>
      <span className="text-[10px]">{c.icon}</span>
      {type}
    </span>
  );
}
