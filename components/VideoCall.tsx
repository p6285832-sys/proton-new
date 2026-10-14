"use client";
import { Video } from "lucide-react";

export default function VideoCall() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-100 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4"><Video size={22} className="text-rose-600" /><h3 className="text-xl font-extrabold">Video Consultation</h3></div>
      <p className="text-muted leading-relaxed mb-4">Jitsi Meet + native WebRTC. No billing until configured.</p>
      <div className="rounded-xl bg-white border border-rose-100 p-4 text-sm text-muted">Placeholder: Jitsi session link will integrate here.</div>
    </div>
  );
}
