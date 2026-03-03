export default function Footer() {
  return (
    <footer className="border-t border-skoda-border bg-skoda-surface-raised/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-skoda-text-muted text-body-sm">
            <span className="w-5 h-5 rounded bg-skoda-green/20 flex items-center justify-center text-caption text-skoda-green">◆</span>
            <span>ŠKODA ReportIQ — Customer Feedback Intelligence</span>
          </div>
          <div className="flex items-center gap-6 text-body-sm text-skoda-text-muted">
            <span>Data: Sample / Demo</span>
            <span>•</span>
            <span>Markets: CZ · SK · DE</span>
            <span>•</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
