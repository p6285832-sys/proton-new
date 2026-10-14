import Link from "next/link";

const links = [
  { label: "Explore", href: "#explore" },
  { label: "Services", href: "#services" },
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
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-900/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center gap-6 overflow-x-auto whitespace-nowrap text-sm font-semibold text-ink/80">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-blue-deep shrink-0">PROTON</Link>
        <Link href="/admin" className="text-xs uppercase tracking-wider font-bold text-violet-600 hover:text-violet-800 shrink-0">Admin</Link>
        <span className="h-5 w-px bg-blue-900/10 shrink-0" />
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="hover:text-blue-deep transition shrink-0">{l.label}</Link>
        ))}
      </div>
    </nav>
  );
}
