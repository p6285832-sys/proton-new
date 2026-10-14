"use client";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
export default function ProfileAssessmentModal() {
  const [done, setDone] = useState(false);
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-black/[0.04]">
      <h2 className="text-3xl font-extrabold tracking-tight text-[#1d1d1f] font-[family-name:var(--font-display)] mb-2">Profile Assessment</h2>
      <p className="text-[#86868b] text-sm mb-6">CRS score + eligibility pathway.</p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {["Education", "Work Experience", "Age", "Language", "Spouse / Partner", "Adaptability"].map((f) => (
          <input key={f} placeholder={f} className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-[#1d1d1f] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20" />
        ))}
      </div>
      <button onClick={() => setDone(true)} className="w-full py-3.5 rounded-full bg-[#1d1d1f] text-white font-extrabold hover:bg-[#333] transition">Run Assessment <ArrowRight size={16} className="inline ml-1" /></button>
      {done && <div className="mt-4 p-4 bg-emerald-50 rounded-2xl text-emerald-700 text-sm font-semibold"><CheckCircle2 size={16} className="inline mr-1" /> Assessment ready — check your dashboard.</div>}
    </div>
  );
}
