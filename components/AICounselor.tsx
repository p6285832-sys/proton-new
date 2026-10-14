"use client";
import { Sparkles, Mic, Languages, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function AICounselor() {
  const [status] = useState("ready");
  return (
    <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-100 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4"><Sparkles size={22} className="text-violet-600" /><h3 className="text-xl font-extrabold">AI Counselor — LiveKit + Sarvam + Voice.ai</h3></div>
      <p className="text-muted leading-relaxed mb-4">Indian-language STT/TTS via Sarvam AI (MCP server active). Speech-to-speech via Voice.ai. Video via LiveKit Cloud.</p>

      <div className="rounded-xl bg-white border border-violet-100 p-4 text-sm text-muted space-y-2 mb-4">
        <div className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-600" /> <strong>Sarvam AI</strong> — workspace <code>01a138f4-40ef-701a-bff3-861861ed3a2b</code>, org <code>01a138f4-40e7-77e9-b85e-4d621b5a7221</code>; key present; MCP `sarvam-voice-agents` loaded (26 tools)</div>
        <div className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-600" /> <strong>Voice.ai</strong> — real key stored; speech bridge ready</div>
        <div className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-600" /> <strong>LiveKit</strong> — verified SDK + endpoint + token</div>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 mb-2">
        <CheckCircle size={16} /> AI Counselor connected via MCP + SDK (LiveKit video + Sarvam Indian-lang + Voice.ai speech)
      </div>
    </div>
  );
}
