export default function StaffTable() {
  return (
    <div className="rounded-2xl border border-blue-900/10 bg-white shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-blue-50 text-left text-xs font-bold uppercase tracking-wide text-blue-900/60">
          <tr>
            <th className="px-4 py-3">Name</th><th className="px-4 py-3">Role</th><th className="px-4 py-3">Branch</th><th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: "Vineet Chauhan", role: "Super Admin / Owner", branch: "Surat", status: "Active" },
            { name: "Dr. Meera Iyer", role: "Senior Advisor", branch: "Mumbai", status: "Active" },
          ].map((s) => (
            <tr key={s.name} className="border-t border-blue-900/5 hover:bg-blue-50/30">
              <td className="px-4 py-3 font-medium">{s.name}</td>
              <td className="px-4 py-3 text-muted">{s.role}</td>
              <td className="px-4 py-3 text-muted">{s.branch}</td>
              <td className="px-4 py-3"><span className="inline-flex rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-0.5 text-xs font-bold">{s.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
