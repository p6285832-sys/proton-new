import { FolderOpen } from "lucide-react";

export default function DocumentsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-16 py-24">
      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Document Checklist</h1>
        <p className="text-muted text-lg">Secure upload, tracking, and status updates.</p>
      </header>
      <div className="rounded-3xl bg-gradient-to-br from-blue-deep to-blue-600 text-white p-10 shadow-xl">
        <div className="flex items-center gap-3 mb-4"><FolderOpen size={24} /><h2 className="text-xl font-extrabold">Document Vault</h2></div>
        <p className="text-white/90 leading-relaxed">Placeholder: document vault modal and checklist rules (572 lines from shared-repo) will integrate here.</p>
      </div>
    </main>
  );
}
