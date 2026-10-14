"use client";
import { ArrowRight, ShieldCheck, TrendingUp, BookOpen, Globe, Phone, GraduationCap, Plane, Briefcase, Calendar } from "lucide-react";

export default function HomeDashboard() {
  return (
    <div className="flex flex-col gap-20 pb-16 max-w-[1720px] mx-auto">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#0071e3] text-white px-8 md:px-16 pt-24 md:pt-36 pb-28 md:pb-36 shadow-2xl shadow-blue-900/20">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold shadow-xs mb-6">
            <span>Official Overseas Visa & Immigration Authority</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] font-[family-name:var(--font-display)]">
            Your Global Journey.<br />Starts Here.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-[family-name:var(--font-body)]">
            Immigration, study abroad, and career mobility for Canada, UK, US, Australia, Germany — verified cases, real outcomes.
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            <a href="#assessment" className="inline-flex items-center gap-2 rounded-full bg-white text-[#0071e3] px-7 py-3.5 font-extrabold shadow hover:shadow-xl transition-all hover:-translate-y-0.5">Free Assessment <ArrowRight size={18} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-7 py-3.5 font-extrabold hover:bg-white/10 transition-all">Book Appointment</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-0 -mt-14 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Visas Processed", value: "5,000+", icon: ShieldCheck },
            { label: "Success Rate", value: "98%", icon: TrendingUp },
            { label: "Universities", value: "500+", icon: BookOpen },
            { label: "Countries", value: "5", icon: Globe },
          ].map((s) => (
            <div key={s.label} className="rounded-3xl bg-white shadow-xl shadow-blue-900/5 border border-black/[0.04] px-6 py-8 md:px-8 md:py-10 flex flex-col items-start gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <s.icon size={24} className="text-[#0071e3]" />
              <p className="text-3xl md:text-4xl font-extrabold text-[#1d1d1f]">{s.value}</p>
              <p className="text-sm text-[#86868b] font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section id="explore" className="px-6 md:px-0">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1d1d1f] font-[family-name:var(--font-display)]">Destinations</h2>
          <a href="#" className="text-sm font-semibold text-[#0071e3] hover:text-[#1d1d1f] transition-colors">Explore all <ArrowRight size={14} className="inline-block ml-1" /></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {["Canada", "Australia", "UK", "US", "Germany"].map((c) => (
            <a key={c} href="#" className="group rounded-[2.5rem] bg-white border border-black/[0.04] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-8 flex flex-col gap-5">
              <div className="h-36 rounded-2xl bg-gradient-to-tr from-[#f5f5f7] to-[#e8e8ec] flex items-center justify-center text-[#0071e3] font-extrabold text-4xl group-hover:scale-[1.03] transition-transform duration-300">{c[0]}</div>
              <h3 className="text-xl font-extrabold text-[#1d1d1f]">{c}</h3>
              <p className="text-sm text-[#86868b] leading-relaxed">Visa timelines, eligibility pathways, and verified advisory centers.</p>
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-0">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-[family-name:var(--font-display)]">Services</h2>
        <p className="text-[#86868b] text-lg mb-12 md:mb-16 max-w-2xl">Verified pathways — from eligibility scoring to document vault and case tracking.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Profile Assessment", desc: "Eligibility scoring, CRS calculator, and personalized recommendations for Canada, UK, US, Australia, Germany.", icon: ShieldCheck },
            { title: "Book Appointment", desc: "Consultation scheduling with verified staff at advisory centers — video, voice, or in-person.", icon: Calendar },
            { title: "Document Vault", desc: "Secure upload, tracking, and status updates for visas, transcripts, and identity documents.", icon: BookOpen },
          ].map((s) => (
            <a key={s.title} href="#" className="group rounded-[2.5rem] bg-white border border-black/[0.04] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 p-8 md:p-10 transition-all duration-300 flex flex-col gap-5">
              <s.icon size={28} className="text-[#0071e3]" />
              <h3 className="text-xl md:text-2xl font-extrabold text-[#1d1d1f]">{s.title}</h3>
              <p className="text-sm md:text-base text-[#86868b] leading-relaxed">{s.desc}</p>
              <span className="text-sm font-semibold text-[#0071e3] mt-auto">Learn more →</span>
            </a>
          ))}
        </div>
      </section>

      {/* About / Founder */}
      <section id="about" className="px-6 md:px-0">
        <div className="bg-gradient-to-br from-[#f5f5f7] to-[#f0f0f2] rounded-[2.5rem] p-10 md:p-16 md:grid md:grid-cols-12 gap-12 md:gap-16 items-center shadow-inner shadow-black/[0.02]">
          <div className="md:col-span-5 h-72 md:h-[420px] rounded-[2rem] bg-gradient-to-br from-[#1d1d1f]/5 to-[#0071e3]/10 flex items-center justify-center overflow-hidden shadow-xl shadow-blue-900/5">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-[#0071e3]/20 to-[#0071e3]/10 flex items-center justify-center shadow-inner shadow-blue-900/10">
              <span className="text-6xl md:text-8xl font-extrabold text-[#0071e3]/30 select-none">VC</span>
            </div>
          </div>
          <div className="md:col-span-7 space-y-5">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1d1d1f] font-[family-name:var(--font-display)]">Vineet Chauhan</h2>
            <p className="text-base md:text-xl font-semibold text-[#0071e3]">Founder & CEO — IELTS Band 9.0</p>
            <p className="text-[#86868b] leading-relaxed text-sm md:text-base">Two decades guiding students and professionals through Canada, UK, US, Australia, and EU pathways. Verified cases, real outcomes.</p>
            <a href="#" className="inline-block rounded-full bg-[#1d1d1f] text-white px-6 py-3.5 font-extrabold hover:bg-[#333] transition shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5">Book Consultation</a>
          </div>
        </div>
      </section>
    </div>
  );
}
