import { Calendar } from "lucide-react";

export default function BookPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-16 py-24">
      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Book Appointment</h1>
        <p className="text-muted text-lg">Consultation scheduling with advisory centers and verified staff.</p>
      </header>
      <div className="rounded-3xl bg-gradient-to-br from-blue-deep to-blue-600 text-white p-10 shadow-xl">
        <div className="flex items-center gap-3 mb-4"><Calendar size={24} /><h2 className="text-xl font-extrabold">Appointment System</h2></div>
        <p className="text-white/90 leading-relaxed">Placeholder: appointment booking form and staff selection will load here.</p>
      </div>
    </main>
  );
}
