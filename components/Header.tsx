"use client";

interface HeaderProps {
  activeSection: "insights" | "problems" | "sources";
  setActiveSection: (s: "insights" | "problems" | "sources") => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ activeSection, setActiveSection, isDark, toggleTheme }: HeaderProps) {
  const navItems: { key: "insights" | "problems" | "sources"; label: string }[] = [
    { key: "insights", label: "Owner Insights" },
    { key: "problems", label: "Reported Problems" },
    { key: "sources", label: "Sources" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-skoda-surface/80 border-b border-skoda-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-skoda-green flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-skoda-surface">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h1 className="text-heading-md tracking-tight">
                <span className="text-skoda-text-primary">ŠKODA</span>{" "}
                <span className="text-skoda-green">ReportIQ</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`px-4 py-2 rounded-lg text-body-sm font-medium transition-all duration-300 ${
                  activeSection === item.key
                    ? "bg-skoda-green/15 text-skoda-green"
                    : "text-skoda-text-secondary hover:text-skoda-text-primary hover:bg-skoda-surface-raised"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg border border-skoda-border flex items-center justify-center
                         hover:border-skoda-green/50 transition-all duration-300 hover:bg-skoda-green/10"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Mobile nav */}
            <div className="md:hidden flex gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`px-2 py-1 rounded text-caption transition-all ${
                    activeSection === item.key
                      ? "bg-skoda-green/15 text-skoda-green"
                      : "text-skoda-text-muted"
                  }`}
                >
                  {item.key === "insights" ? "📊" : item.key === "problems" ? "⚠️" : "📎"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
