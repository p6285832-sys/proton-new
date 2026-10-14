"use client";
import { CreditCard } from "lucide-react";

export default function PaymentForm() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4"><CreditCard size={22} className="text-emerald-600" /><h3 className="text-xl font-extrabold">Payment Gateway</h3></div>
      <p className="text-muted leading-relaxed mb-4">Stripe module (adaptable to Razorpay). Generic interface.</p>
      <div className="rounded-xl bg-white border border-emerald-100 p-4 text-sm text-muted">Placeholder: Stripe Elements will load here.</div>
    </div>
  );
}
