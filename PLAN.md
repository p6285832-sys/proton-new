# PROTON NEW — BUILD PLAN (updated)
Workspace: A:\Vishal\proton-new | Git: 3d919fd | Live: https://proton-bkxgd7t76-p6285832-5127s-projects.vercel.app
Reference: /a/Vishal/shared-repo (React SPA, AndroidFrame + MaterialNavBar, 10 tabs, lazy views, modals)

--- VERIFIED (done) ---
- Next.js 16 App Router + React 19 + TS + Tailwind v4 + shadcn/ui setup
- Git repo initialized; .gitignore excludes node_modules/.next/Api keys.txt
- LiveKit SDK (lib/livekit.ts) verified with real API_SECRET; VideoCall.tsx rebuilt
- Voice.ai (lib/voiceai.ts) with real vk_e26... key
- Sarvam AI — MCP sarvam-voice-agents loaded (26 tools); workspace 01a138f4-40ef-701a-bff3-861861ed3a2b / org 01a138f4-40e7-77e9-b85e-4d621b5a7221
- Vercel deploy: Ready Production; token injected (masked); auth via Api keys.txt
- GitHub repo: p6285832-sys/proton-new pushed; build passes (static)
- Firebase config (subtle-hold-pghtt) + AuthContext + admin_staff.json + blueprint (7 collections)

--- MISSING (to match reference / complete site) ---
1. DESIGN SYSTEM — fonts + colors (reference uses Anton + Playfair Display + Plus Jakarta Sans + Outfit; bg #f5f5f7; selection #0071e3)
2. LAYOUT — AndroidFrame-style mobile wrapper + sticky MaterialNavBar (reference 10-tab nav)
3. HOME DASHBOARD — lazy view content (stats, destinations, services, founder, testimonials) already in page.tsx but needs reference styling
4. SERVICES CATALOG — /services content (Profile Assessment, Book Appointment, Document Vault)
5. APPLICATION TRACKER — /application-tracker (case tracking view)
6. BRANCH LOCATOR — /branches (Surat HQ + offices)
7. MODALS — ConsultationBooking, ProfileAssessmentModal, VoiceLiveAdvisorModal, UserProfileModal, DocumentVaultModal, DestinationDetailModal, OnboardingModal
8. NAV LINKS — fix # placeholders (Case Tracker, AI Counselor, Book links to real routes /admin, /assessment, /book, /documents)
9. DOCUMENT CHECKLIST — /documents full checklist rules + interactive checklist
10. FREE ASSESSMENT — /assessment form (CRS calculator / eligibility scoring)
11. PAYMENT GATEWAY — /payment or embedded Stripe Elements (not placeholder)
12. WHATSAPP — direct wa.me link (already in page.tsx; check mobile frame)

--- SEQUENCE (next 3 sessions) ---
Session 1 — Design + Nav: add Google Fonts to app/layout; set globals.css colors; wrap pages in AndroidFrame-style container; rebuild Navbar with MaterialNavBar pattern; fix all nav links
Session 2 — Views + Modals: port HomeDashboard/ServicesCatalog content into /; create /assessment and /documents with real forms/checklists; build ConsultationBooking + ProfileAssessment + DocumentVault modals
Session 3 — Integrate + Verify: wire LiveKit video call into consultation booking; wire Voice.ai TTS into AI Counselor; confirm Sarvam MCP tools usable; final Vercel redeploy; verify all 10 tabs + admin /admin route

--- VERIFICATION TARGETS ---
- curl https://proton-bkxgd7t76-p6285832-5127s-projects.vercel.app → HTTP 200 / 302 (live)
- Build: npm run build passes (no errors)
- GitHub: master branch up-to-date (git push after session 3)
- MCP: vercel + github + sarvam-voice-agents connected; 264+ tools; no errors on startup
- Secrets: .env.local masked; Api keys.txt ignored; no keys in chat
