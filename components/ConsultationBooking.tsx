"use client";
import { useState } from "react";
import { Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";
export default function ConsultationBooking() {
  const [step, setStep] = useState(1);
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-black/[0.04]">
      <h2 className="text-3xl font-extrabold tracking-tight text-[#1d1d1f] font-[family-name:var(--font-display)] mb-2">Book Consultation</h2>
      <p className="text-[#86868b] text-sm mb-8">Select service and booking time.</p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {["Profile Assessment", "Document Vault", "Visa Consultation", "Video Call"].map((s) => (
          <button key={s} onClick={() => setStep(2)} className="p-4 rounded-2xl bg-[#f5f5f7] text-sm font-semibold text-[#1d1d1f] hover:bg-[#0071e3] hover:text-white transition-all text-left">{s}</button>
        ))}
      </div>
      {step === 2 && (
        <div className="space-y-4">
          <label className="block text-sm font-bold text-[#1d1d1f]">Preferred time</label>
          <div className="flex gap-2 flex-wrap">
            {["Mon 10:00", "Tue 14:00", "Wed 11:00", "Fri 09:30"].map((t) => <button key={t} className="px-3 py-2 rounded-full bg-[#f5f5f7] text-xs font-semibold hover:bg-[#0071e3] hover:text-white transition">{t}</button>)}
          </div>
          <button onClick={() => setStep(3)} className="w-full py-3 rounded-full bg-[#1d1d1f] text-white font-bold hover:bg-[#333] transition">Confirm Booking <ArrowRight size={16} className="inline ml-1" /></button>
        </div>
      )}
      {step === 3 && (
        <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-2">
          <CheckCircle2 size={40} className="mx-auto text-emerald-600" />
          <h3 className="text-xl font-extrabold text-[#1d1d1f]">Booked</h3>
          <p className="text-xs text-[#86868b] mt-2">LiveKit session: wss://proton-zmkj9cgf.livekit.cloud (token via SDK)</p>
          <p className="text-[#86868b] text-sm">We'll send a confirmation via WhatsApp.</p>
        </div>
      )}
    </div>
  );
}
