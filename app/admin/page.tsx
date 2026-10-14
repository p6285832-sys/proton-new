import { ShieldCheck, Users, FileText, Bell } from "lucide-react";
import AdminDashboard from "@/components/admin/AdminDashboard";
import StaffTable from "@/components/admin/StaffTable";
import DocumentPanel from "@/components/admin/DocumentPanel";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-paper px-6 md:px-16 py-10 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Admin Portal</h1>
        <p className="text-muted text-lg mt-2">Staff management, document tracking, SMS/OTP, and CMS.</p>
      </header>

      <section className="mb-12">
        <AdminDashboard />
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4"><Users size={20} className="text-blue-deep" /><h2 className="text-xl font-extrabold">Staff</h2></div>
          <StaffTable />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4"><FileText size={20} className="text-blue-deep" /><h2 className="text-xl font-extrabold">Documents</h2></div>
          <DocumentPanel />
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-br from-blue-deep to-blue-600 text-white p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-3"><ShieldCheck size={24} /><h3 className="text-xl font-extrabold">Permissions</h3></div>
        <p className="text-white/90">Full permission model active: documents, clients, website, leads, SMS service, staff management. Bearer token middleware enforced on all /api/admin endpoints.</p>
      </section>
    </div>
  );
}
