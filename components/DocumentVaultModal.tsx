"use client";
import { UploadCloud, FileCheck2, ShieldCheck } from "lucide-react";
export default function DocumentVaultModal() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-black/[0.04]">
      <h2 className="text-2xl font-extrabold text-[#1d1d1f] mb-1">Document Vault</h2>
      <p className="text-sm text-[#86868b] mb-6">Secure upload, tracking, status updates.</p>
      <div className="rounded-2xl bg-gradient-to-br from-[#f5f5f7] to-[#0071e3]/5 p-8 flex flex-col items-center gap-4 mb-6 border border-black/[0.04]">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" alt="Document tracking" className="w-full h-48 object-cover rounded-xl shadow-md" />
        <div className="text-center"><ShieldCheck size={32} className="text-[#0071e3] mx-auto mb-2" /><h3 className="text-xl font-extrabold text-[#1d1d1f]">Encrypted & Verified</h3><p className="text-xs text-[#86868b]">End-to-end encrypted storage with audit trail.</p></div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {["Passport", "Transcript", "Financial"].map((d) => (
          <button key={d} className="p-3 rounded-xl bg-[#f5f5f7] text-sm font-semibold text-[#1d1d1f] hover:bg-[#0071e3]/10 transition">{d}</button>
        ))}
      </div>
      <button className="w-full py-3 rounded-full bg-[#0071e3] text-white font-extrabold hover:bg-[#1d4ed8] transition shadow-lg shadow-blue-900/10"><UploadCloud size={18} className="inline mr-2" /> Upload Documents</button>
    </div>
  );
}
