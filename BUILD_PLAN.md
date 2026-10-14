# PROTON NEW — REBUILD PLAN (from scratch)
Repo: /a/Vishal/proton-new (new folder, separate from shared-repo / PROTON_Consultancy)
Reference: /a/Vishal/shared-repo/end_goal_inventory.md (verified 0366cba, git HEAD)
Stack: Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui + Lucide icons
Target: Professional immigration/study-abroad consultancy + upgraded features

--- CORE END GOAL (from end_goal_inventory.md) ---
- Credible homepage (hero, stats, destinations, testimonials, founder, contact, WhatsApp)
- 10-tab navigation (Explore, Services, Document Checklist, About, Appointments, Free Assessment, Case Tracker, Offices, AI Counselor, WhatsApp, Book, User, Chat)
- Admin portal (/admin) — staff management, permissions, KPIs, SMS/OTP, docs, clients, leads, website CMS
- Profile Assessment + Book Appointment + Document Checklist + Advisory Centers
- Destinations cards (Canada, UK, US, Australia, Germany) with visa timelines
- Auth (email/phone/Google + OTP + Bearer token middleware) — full permission model
- Firestore persistence (7 collections: User, Assessment, Consultation, ChatMessage, BranchInquiry, AppointmentSlot, SharedDocument)
- Apple-style branding (blue accent, clean typography, NO dark mode)
- Mobile-optimized (AndroidFrame-style layout) + WhatsApp direct

--- UPGRADE / NEW FEATURES (user selected: add major) ---
- AI Counselor: real-time chat assistance (provider TBD — OpenAI / Claude / Gemini?)
- Video consultations: WebRTC / Twilio / Jitsi integration ( booked appointments )
- Payment gateway: Stripe / Razorpay / PayPal (for consultations / assessments / document services)
- Real-time updates: WebSocket / Server-Sent Events (instead of isolated session-only)
- Shareable URLs: proper routing (not state-only window.history.pushState)
- Enhanced Admin: full redesign integration (AdminDashboard/KPI, StaffTable, DocumentPanel already exist in shared-repo — port fully)

--- TECH STACK CHOICES (confirmed / pending) ---
- Framework: Next.js 16 (App Router) ✅
- React: 19 ✅
- Language: TypeScript ✅
- Styling: Tailwind CSS v4 ✅
- UI components: shadcn/ui + Lucide icons ✅
- Backend: Next.js API Routes + optional standalone server (Express?) — TBD
- Database: Firestore (existing project subtle-hold-pghtt) or new? — TBD
- Auth: Firebase Auth (existing config) or Clerk / Auth.js? — TBD
- AI: provider/model — TBD
- Video: WebRTC / Twilio / Jitsi — TBD
- Payments: Stripe / Razorpay / PayPal — TBD
- Deploy: AI Studio / Vercel / self-hosted — TBD

--- FOLDER STRUCTURE (planned) ---
proton-new/
  app/              # App Router — layout, pages, API routes
  components/       # shared UI (nav, cards, modals, admin sub-components)
  lib/              # utils, firebase, auth, api clients
  public/           # images, assets
  docs/             # audit, comparison, design notes (like PROTON_Consultancy)
  data/             # mock data, checklist rules, staff config
  PLAN.md           # this file
  package.json
  next.config.ts
  tsconfig.json
  tailwind.config.ts (v4 style if applicable, else CSS-based config)
  firebase-blueprint.json / firestore.rules / admin_staff.json (ported from shared-repo)

--- STILL AMBIGUOUS (answer quickly) ---
1. Which new features exactly? (AI chat provider? Video tech? Payment provider?)
2. Database / auth: keep Firestore (subtle-hold-pghtt) + Firebase Auth, or switch to PostgreSQL / Clerk?
3. Is this the replacement for live site (protonconsultancy.ai.studio) or a separate experiment?
4. Should I create the core skeleton (pages, nav, layout) now while you decide, or wait for answers?

--- DECISIONS (defaults — change anytime) ---
- AI Counselor: OpenAI (generic interface; swap via env key)
- Video: Jitsi Meet + native WebRTC (no billing until needed)
- Payments: Stripe (generic module; adaptable to Razorpay)
- DB / Auth: Keep Firestore (subtle-hold-pghtt) + Firebase Auth (no migration)
- Deploy: AI Studio / Vercel (TBD)

--- NEXT ACTION ---
Scaffold skeleton (package.json, app/layout, basic pages) immediately; fill details after your 3 answers.
