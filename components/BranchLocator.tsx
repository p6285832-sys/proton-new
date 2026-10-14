"use client";
export default function BranchLocator() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1d1d1f] font-[family-name:var(--font-display)] mb-6">Offices</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-3xl bg-white shadow-sm border border-black/[0.04]">
          <h3 className="text-xl font-extrabold">Surat HQ</h3>
          <p className="text-sm text-[#86868b]">+91 9327118181 · Surat, Gujarat</p>
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" alt="Surat office" className="w-full h-48 object-cover rounded-2xl mt-4" />
        </div>
        <div className="p-6 rounded-3xl bg-white shadow-sm border border-black/[0.04]">
          <h3 className="text-xl font-extrabold">Dubai Advisory</h3>
          <p className="text-sm text-[#86868b]">+971 4 123 4567 · UAE</p>
        </div>
        <div className="p-6 rounded-3xl bg-white shadow-sm border border-black/[0.04]">
          <h3 className="text-xl font-extrabold">London Desk</h3>
          <p className="text-sm text-[#86868b]">+44 20 7946 0958 · UK</p>
        </div>
      </div>
    </div>
  );
}
