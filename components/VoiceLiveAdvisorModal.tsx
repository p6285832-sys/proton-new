"use client";
import { Video } from "lucide-react";
export default function VoiceLiveAdvisorModal() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-violet-50 to-blue-50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-violet-100 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-violet-600 to-blue-500 flex items-center justify-center shadow-xl shadow-violet-900/20">
        <Video size={36} className="text-white" />
      </div>
      <h2 className="text-3xl font-extrabold text-[#1d1d1f] font-[family-name:var(--font-display)] mb-2">AI Voice Counselor</h2>
      <p className="text-[#86868b] mb-8">Real-time Indian-language assistance via Sarvam AI + LiveKit video.</p>
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Advisor" className="w-full h-56 object-cover rounded-2xl shadow-lg mb-6" />
      <button className="w-full py-3.5 rounded-full bg-[#1d1d1f] text-white font-extrabold hover:bg-[#333] transition shadow-xl">Start Voice Session</button>
    </div>
  );
}
