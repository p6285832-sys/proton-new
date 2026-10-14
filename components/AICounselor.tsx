"use client";
import { Sparkles } from "lucide-react";

export default function AICounselor() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-100 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4"><Sparkles size={22} className="text-violet-600" /><h3 className="text-xl font-extrabold">AI Counselor</h3></div>
      <p className="text-muted leading-relaxed mb-4">Real-time assistance powered by OpenAI. Generic interface — swap provider via env key.</p>
      <div className="rounded-xl bg-white border border-violet-100 p-4 text-sm text-muted">Placeholder: chat interface will load here once API key is configured.</div>
    </div>
  );
}
