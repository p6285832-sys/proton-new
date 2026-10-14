export default function DocumentPanel() {
  return (
    <div className="rounded-2xl border border-blue-900/10 bg-white shadow-sm p-6">
      <h3 className="font-extrabold text-lg mb-4">Document Rules — Open</h3>
      <ul className="space-y-2 text-sm">
        {["Passport (clear scan)", "Academic transcripts", "Financial proof (6 months)", "IELTS / TOEFL report", "Medical exam (if required)"].map((r) => (
          <li key={r} className="flex items-center gap-2 text-muted"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />{r}</li>
        ))}
      </ul>
      <div className="mt-4 text-xs text-muted">2 Open Rules • Last updated today</div>
    </div>
  );
}
