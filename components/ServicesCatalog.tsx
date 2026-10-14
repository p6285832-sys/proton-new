"use client";
import { GraduationCap, Plane, Briefcase, BookOpen, ArrowRight, Clock, DollarSign, ShieldCheck, Sparkles } from "lucide-react";

export default function ServicesCatalog() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 space-y-16">
      <div className="text-center md:text-left space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] text-[#86868b] text-xs font-semibold"><GraduationCap size={14} className="text-[#0071e3]" /> Global Immigration & Academic Pathways</div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#1d1d1f] font-[family-name:var(--font-display)] leading-none">Services</h1>
        <p className="text-[#86868b] text-lg max-w-2xl">Verified pathways — from eligibility scoring to document vault and case tracking.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Student Visas", sub: "800+ Universities", icon: GraduationCap, desc: "Canada, UK, US, Australia, Germany — study permits, co-op work, post-grad pathways.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
          { title: "Work Permits", sub: "EU & Global Mobility", icon: Briefcase, desc: "Skilled worker visas, intra-company transfers, EU Blue Card, global mobility.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
          { title: "Permanent Residency", sub: "Canada & Australia", icon: ShieldCheck, desc: "Express Entry, provincial nominee, PEO, and permanent residency pathways.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
          { title: "Test Prep", sub: "IELTS, PTE, TOEFL", icon: BookOpen, desc: "Band-score coaching, mock tests, and strategy for all major English assessments.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" },
        ].map((s) => (
          <a key={s.title} href="#" className="group rounded-3xl bg-white border border-black/[0.04] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden">
            <div className="h-48 overflow-hidden"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="p-7 space-y-3">
              <div className="flex items-center gap-2"><s.icon size={20} className="text-[#0071e3]" /><span className="text-xs font-bold text-[#86868b] uppercase tracking-wider">{s.sub}</span></div>
              <h3 className="text-xl font-extrabold text-[#1d1d1f]">{s.title}</h3>
              <p className="text-sm text-[#86868b] leading-relaxed">{s.desc}</p>
              <span className="text-sm font-semibold text-[#0071e3]">Learn more <ArrowRight size={14} className="inline ml-1" /></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
