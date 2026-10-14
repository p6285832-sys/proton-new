export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { label: "Consultations", value: "1", color: "bg-blue-600" },
        { label: "Assessments", value: "1", color: "bg-emerald-600" },
        { label: "Inquiries", value: "1", color: "bg-amber-500" },
        { label: "Tracked Cases", value: "2", color: "bg-violet-600" },
      ].map((k) => (
        <div key={k.label} className={`${k.color} text-white rounded-2xl p-6 shadow-lg`}>
          <p className="text-3xl font-extrabold">{k.value}</p>
          <p className="text-sm opacity-90">{k.label}</p>
        </div>
      ))}
    </div>
  );
}
