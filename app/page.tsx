import Navbar from "@/components/Navbar";
import AICounselor from "@/components/AICounselor";
import VideoCall from "@/components/VideoCall";
import PaymentForm from "@/components/PaymentForm";
import { ArrowRight, ShieldCheck, TrendingUp, BookOpen, Globe, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep via-blue-accent to-blue-deep text-white px-6 md:px-16 py-28 md:py-36">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">PROTON</h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Immigration & Study-Abroad Consultancy — Canada, UK, US, Australia, Germany.
            Professional assessment, document vault, and verified case tracking.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#assessment" className="inline-flex items-center gap-2 rounded-full bg-white text-blue-deep px-7 py-3.5 font-semibold shadow hover:shadow-lg transition">Free Assessment <ArrowRight size={18} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-7 py-3.5 font-semibold hover:bg-white/10 transition">Book Appointment</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            { label: "Visas Processed", value: "5,000+", icon: ShieldCheck },
            { label: "Success Rate", value: "98%", icon: TrendingUp },
            { label: "Universities", value: "500+", icon: BookOpen },
            { label: "Countries", value: "5", icon: Globe },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-white shadow-xl shadow-blue-900/5 border border-blue-900/5 px-6 py-8 flex flex-col items-start gap-3">
              <s.icon size={22} className="text-blue-accent" />
              <p className="text-3xl font-extrabold text-ink">{s.value}</p>
              <p className="text-sm text-muted font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section id="explore" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Destinations</h2>
        <p className="text-muted text-lg mb-14">Visa timelines and eligibility pathways.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {["Canada", "Australia", "UK", "US", "Germany"].map((c) => (
            <a key={c} href="#" className="group rounded-3xl bg-white border border-blue-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition p-6">
              <div className="h-32 rounded-2xl bg-gradient-to-tr from-blue-50 to-blue-100 flex items-center justify-center text-blue-deep font-extrabold text-3xl mb-5 group-hover:scale-105 transition">{c[0]}</div>
              <h3 className="text-xl font-bold mb-1">{c}</h3>
              <p className="text-sm text-muted">Visa timelines, eligibility, and pathways.</p>
            </a>
          ))}
        </div>
      </section>

      {/* Services / Features */}
      <section id="services" className="px-6 md:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-3xl border border-blue-900/5 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-extrabold mb-3">Profile Assessment</h3>
            <p className="text-muted leading-relaxed">Eligibility scoring, CRS calculator, and personalized recommendations.</p>
          </div>
          <div className="p-8 rounded-3xl border border-blue-900/5 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-extrabold mb-3">Book Appointment</h3>
            <p className="text-muted leading-relaxed">Consultation scheduling with advisory centers and verified staff.</p>
          </div>
          <div className="p-8 rounded-3xl border border-blue-900/5 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-extrabold mb-3">Document Vault</h3>
            <p className="text-muted leading-relaxed">Secure document upload, tracking, and status updates.</p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="about" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl h-96 bg-gradient-to-br from-blue-900/10 to-blue-300/20 flex items-center justify-center text-6xl">👤</div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Vineet Chauhan</h2>
            <p className="text-lg font-semibold mb-2">Founder & CEO — IELTS Band 9.0</p>
            <p className="text-muted leading-relaxed mb-6">Two decades guiding students and professionals through Canada, UK, US, Australia, and EU pathways. Verified cases, real outcomes.</p>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-blue-deep text-white px-6 py-3 font-semibold hover:bg-blue-900 transition">Book Consultation</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 md:px-16 py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">"UK Student Visa — approved on the first attempt."</blockquote>
          <p className="font-semibold text-lg">Rahul Desai — Verified Case</p>
          <div className="mt-4 text-yellow-500 text-xl">★★★★★</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Contact</h2>
            <p className="text-muted text-lg mb-6">Surat HQ — direct WhatsApp and appointment booking.</p>
            <a href="https://wa.me/919327118181" className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-7 py-3.5 font-semibold hover:bg-green-700 transition">WhatsApp <Phone size={18} /></a>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-blue-900/5 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Surat HQ</h3>
            <p className="text-muted leading-relaxed">+91 9327118181</p>
            <p className="text-muted leading-relaxed">Surat, Gujarat</p>
          </div>
        </div>
      </section>

      {/* New Features */}
      <section id="new-features" className="px-6 md:px-16 py-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <AICounselor />
        <VideoCall />
        <PaymentForm />
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-10 border-t border-blue-900/5 text-sm text-muted flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <p>© PROTON Consultancy. Verified results.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink">Privacy</a>
          <a href="#" className="hover:text-ink">Terms</a>
        </div>
      </footer>
    </main>
  );
}
