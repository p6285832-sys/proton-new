"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Explore", href: "/#explore" },
  { label: "Services", href: "/#services" },
  { label: "Document Checklist", href: "/documents" },
  { label: "About", href: "/#about" },
  { label: "Appointments", href: "/book" },
  { label: "Free Assessment", href: "/assessment" },
  { label: "Case Tracker", href: "/#" },
  { label: "Offices", href: "/#contact" },
  { label: "AI Counselor", href: "/#" },
  { label: "Book", href: "/book" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-black/[0.04] shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-14 md:h-16 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-tighter text-[#1d1d1f] font-[family-name:var(--font-display)] hover:opacity-70 transition">PROTON</Link>
        <div className="hidden md:flex items-center gap-1 overflow-x-auto whitespace-nowrap text-[13px] font-semibold text-[#86868b] font-[family-name:var(--font-body)]">
          <Link href="/admin" className="text-[10px] uppercase tracking-widest font-extrabold text-violet-600 hover:text-violet-800 px-2 py-1 shrink-0">Admin</Link>
          <span className="h-4 w-px bg-black/10 shrink-0 mx-1" />
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-[#1d1d1f] px-2 py-1 transition shrink-0">{l.label}</Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#1d1d1f] font-bold" aria-label="Menu">{open ? "×" : "☰"}</button>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.04] px-6 py-4 flex flex-col gap-2 text-sm font-medium text-[#1d1d1f]">
          {links.map((l) => <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="py-1">{l.label}</Link>)}
          <Link href="/admin" onClick={() => setOpen(false)} className="text-violet-600 font-bold mt-2">Admin Portal</Link>
        </div>
      )}
    </nav>
  );
}
