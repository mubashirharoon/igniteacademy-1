import { createFileRoute } from "@tanstack/react-router";
import {
  Atom, FlaskConical, Sigma, Cpu, Calculator, Briefcase, LineChart,
  Brain, Target, FileText, GraduationCap, Globe, Users, Heart, BookOpen,
  MessageCircle, Sparkles, Quote, ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { IgniteCore } from "@/components/IgniteCore";
import { Particles } from "@/components/Particles";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFab } from "@/components/WhatsAppFab";

import { Toaster } from "@/components/ui/sonner";
import yasirImg from "@/assets/faculty/yasir.png";
import fahadImg from "@/assets/faculty/fahad.png";
import raheelImg from "@/assets/faculty/raheel.png";
import mubashirImg from "@/assets/faculty/mubashir.png";
import haroonImg from "@/assets/faculty/haroon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ignite Academy | O Level, IGCSE, GCE & A Level Tuition" },
      { name: "description", content: "Ignite Academy offers expert tuition for O Level, IGCSE, GCE and A Level students. Experienced teachers, exam-focused preparation, past paper practice, online and physical classes for Pakistan, UAE and international students." },
      { name: "keywords", content: "Ignite Academy, O Level tuition, IGCSE tuition, GCE tuition, A Level tuition, online tuition UAE, Physics tuition, Chemistry tuition, Maths tuition, Computer Science tuition, Accounting tuition, Business Studies tuition, Economics tuition, Cambridge exam preparation" },
      { property: "og:title", content: "Ignite Academy | O & A Level Tuition" },
      { property: "og:description", content: "Concept-based teaching, exam mastery and past paper practice for O Level, IGCSE, GCE and A Level — online and in person." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Ignite Academy",
        description: "O Level, IGCSE, GCE and A Level tuition for students in Pakistan, UAE and worldwide.",
        telephone: "+92 320 1719494",
        areaServed: ["Pakistan", "United Arab Emirates", "International"],
      }),
    }],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/923201719494";

const subjects = [
  { name: "Physics", icon: Atom, level: "O Level / IGCSE / GCE", hover: "Understand concepts, not just formulas." },
  { name: "Chemistry", icon: FlaskConical, level: "O Level / IGCSE / GCE", hover: "Master reactions through logic, not memory." },
  { name: "Mathematics", icon: Sigma, level: "O Level / IGCSE / GCE / A Level", hover: "Build the intuition that beats tricky questions." },
  { name: "Computer Science", icon: Cpu, level: "O Level / A Level", hover: "Learn theory, logic and programming with clarity." },
  { name: "Accounting", icon: Calculator, level: "O Level / A Level", hover: "Solve problems using a clean exam method." },
  { name: "Business Studies", icon: Briefcase, level: "O Level / A Level", hover: "Apply frameworks examiners love to see." },
  { name: "Economics", icon: LineChart, level: "O Level / A Level", hover: "Write analytical answers the way examiners reward." },
];

const teachers = [
  { name: "Sir Fahad", exp: "4 Years", subject: "Computer Science", levels: "O Level / A Level", focus: "Clear logic, programming fundamentals, theory understanding and exam-focused preparation.", photo: fahadImg },
  { name: "Sir Yasir", exp: "5 Years", subject: "Accounting", levels: "O Level / A Level", focus: "Step-by-step accounting methods, problem-solving accuracy and past paper confidence.", photo: yasirImg },
  { name: "Sir Raheel", exp: "1 Year", subject: "Business Studies", levels: "O Level / A Level", focus: "Business concepts, case study application, structured answers and exam technique.", photo: raheelImg },
];

const whyCards = [
  { icon: GraduationCap, title: "Experienced Faculty", copy: "Subject specialists with proven student results." },
  { icon: Target, title: "Exam-Focused Preparation", copy: "Every session ties back to the marking scheme." },
  { icon: Brain, title: "Concept-Based Teaching", copy: "Understanding first. Memorisation later." },
  { icon: FileText, title: "Past Paper Practice", copy: "Real questions, real feedback, real progress." },
  { icon: Globe, title: "Online & Physical Classes", copy: "Flexibility for Pakistan, UAE and abroad." },
  { icon: Heart, title: "Personalised Student Support", copy: "Small attention, big difference." },
];

const testimonials = [
  { quote: "I finally understood how to write Economics answers properly.", who: "A Level Student" },
  { quote: "My son became much more confident before his exams.", who: "Parent, UAE" },
  { quote: "The teaching is structured, clear and exam-focused.", who: "O Level Student" },
  { quote: "The past paper feedback completely changed my approach.", who: "IGCSE Student" },
];

function Home() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Toaster theme="dark" position="top-right" />
      <Navbar />
      <WhatsAppFab />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 grid-paper opacity-60" />
        <div className="absolute inset-0" style={{ background: "var(--grad-hero)" }} />
        <Particles count={20} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-[#B8B8B8] mb-6">
              <Sparkles size={14} className="text-[#E85D10]" />
              O & A Level Tuition
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              Ignite Your Grades.
              <br />
              <span className="ignite-text">Master Your Concepts.</span>
            </h1>
            <p className="mt-6 text-lg text-[#B8B8B8] max-w-xl leading-relaxed">
              O Level, IGCSE, GCE and A Level tuition designed to build concept clarity,
              exam confidence and stronger results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="magnetic-btn inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-semibold text-white"
                 style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
                Book a Free Consultation
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                 className="magnetic-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white glass hover:border-[#E85D10]/50">
                <MessageCircle size={16} /> Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <IgniteCore className="max-w-md mx-auto" />
            {/* floating stat cards */}
            <div className="absolute -left-2 top-8 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "0s" }}>
              <div className="text-[10px] uppercase tracking-wider text-[#B8B8B8]">Teaching</div>
              <div className="text-base font-semibold">30+ Years Experience</div>
            </div>
            <div className="absolute -right-2 top-24 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-[10px] uppercase tracking-wider text-[#B8B8B8]">Faculty</div>
              <div className="text-base font-semibold">Expert O/A Level</div>
            </div>
            <div className="absolute -left-4 bottom-16 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "3s" }}>
              <div className="text-[10px] uppercase tracking-wider text-[#B8B8B8]">Classes</div>
              <div className="text-base font-semibold">Online & Physical</div>
            </div>
            <div className="absolute -right-4 bottom-4 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-[10px] uppercase tracking-wider text-[#B8B8B8]">Reach</div>
              <div className="text-base font-semibold">Pakistan & UAE</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — built for serious students */}
      <section className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Built for serious students.</h2>
              <p className="mt-4 text-[#B8B8B8]">Three disciplines. One result-driven approach.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Concept Clarity", copy: "Understand the logic behind every topic before memorising anything." },
              { icon: Target, title: "Exam Technique", copy: "Learn how to structure answers the way examiners reward." },
              { icon: FileText, title: "Past Paper Mastery", copy: "Practice with purpose, feedback and a clear improvement plan." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="glass rounded-3xl p-8 h-full hover-lift relative overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"
                    style={{ background: "#E85D10" }} />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ background: "rgba(232,93,16,0.12)", border: "1px solid rgba(232,93,16,0.3)" }}>
                      <c.icon className="text-[#E85D10]" size={22} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{c.title}</h3>
                    <p className="text-[#B8B8B8] leading-relaxed">{c.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — SUBJECTS */}
      <section id="subjects" className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Subjects</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Subjects that shape results.</h2>
              <p className="mt-4 text-[#B8B8B8]">Hover any subject to see what we promise.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {subjects.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="glass rounded-2xl p-6 h-full hover-lift relative overflow-hidden group cursor-pointer">
                  <s.icon className="text-[#E85D10] mb-5" size={28} />
                  <h3 className="text-xl font-semibold">{s.name}</h3>
                  <p className="text-xs text-[#B8B8B8] mt-1 uppercase tracking-wider">{s.level}</p>
                  <p className="mt-4 text-sm text-[#B8B8B8] opacity-90 group-hover:text-white transition-colors">
                    {s.hover}
                  </p>
                  <div className="mt-5 inline-flex items-center text-xs text-[#E85D10] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TEACHERS */}
      <section id="teachers" className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Faculty</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Meet the faculty behind the results.</h2>
              <p className="mt-4 text-[#B8B8B8]">Experienced teachers. Focused subjects. Exam-driven preparation.</p>
            </div>
          </Reveal>

          {/* Sir Haroon — Senior spotlight */}
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden ignite-border-glow">
              <div className="absolute inset-0 grid-paper opacity-40" />
              <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-3xl opacity-30"
                style={{ background: "#E85D10" }} />
              <div className="relative grid md:grid-cols-[auto_1fr] gap-10 items-center">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 rounded-full border border-[#E85D10]/40 animate-spin-slow" />
                  <div className="absolute inset-4 rounded-full border border-[#E85D10]/30 animate-spin-slower" style={{ animationDirection: "reverse" }} />
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ff8a3d]"
                      style={{ boxShadow: "0 0 16px #E85D10" }} />
                  </div>
                  <div className="absolute inset-6 rounded-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #1a1a1a, #050505)", boxShadow: "inset 0 0 40px rgba(232,93,16,0.3), 0 0 60px rgba(232,93,16,0.4)" }}>
                    <img src={haroonImg} alt="Sir Haroon — Senior Faculty, Ignite Academy"
                      className="w-full h-full object-cover mx-[5px] my-[11px]" loading="lazy" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass flex items-baseline gap-1.5"
                    style={{ border: "1px solid rgba(232,93,16,0.4)" }}>
                    <span className="text-lg font-bold ignite-text leading-none">30+</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8B8B8]">Years</span>
                  </div>
                </div>
                <div>
                  <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#E85D10] mb-3">Senior Faculty</span>
                  <h3 className="text-4xl md:text-5xl font-bold">Sir Haroon</h3>
                  <p className="mt-2 text-[#B8B8B8]">Physics • Chemistry • Mathematics</p>
                  <p className="mt-1 text-sm text-[#888]">O Level / IGCSE / GCE / A Level Mathematics</p>
                  <p className="mt-6 text-base text-[#B8B8B8] leading-relaxed max-w-xl">
                    Concept clarity, structured learning, exam preparation and long-term academic
                    confidence — built across three decades of teaching.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Online", "Physical", "30+ Years", "O/A Level"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs border border-white/10 text-[#B8B8B8]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sir Mubashir — Founder spotlight */}
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden hover-lift">
              <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full blur-3xl opacity-25"
                style={{ background: "#E85D10" }} />
              <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-center">
                <div className="w-40 h-40 mx-auto rounded-2xl relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #1a1a1a, #050505)", border: "1px solid rgba(232,93,16,0.3)" }}>
                  <img src={mubashirImg} alt="Sir Mubashir — Founder, Ignite Academy"
                    className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: "rgba(232,93,16,0.12)", border: "1px solid rgba(232,93,16,0.4)", color: "#ff8a3d" }}>
                    <Sparkles size={12} /> Founder of Ignite Academy
                  </span>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold">Sir Mubashir</h3>
                  <p className="mt-2 text-[#B8B8B8]">Economics Specialist • 5+ Years</p>
                  <p className="mt-1 text-sm text-[#888]">O & A Level Economics</p>
                  <p className="mt-5 text-[#B8B8B8] leading-relaxed max-w-2xl">
                    Examiner-style answer writing, analysis, evaluation, weak-student improvement
                    and rebuilding concept clarity from the ground up.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Answer Writing", "Examiner Technique", "Online", "Physical"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs border border-white/10 text-[#B8B8B8]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Other teachers */}
          <div className="grid md:grid-cols-3 gap-6">
            {teachers.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="glass rounded-2xl p-6 h-full hover-lift relative overflow-hidden group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden relative shrink-0"
                      style={{ background: "linear-gradient(135deg, #1a1a1a, #050505)", border: "1px solid rgba(232,93,16,0.25)" }}>
                      <img src={t.photo} alt={`${t.name} — ${t.subject} teacher at Ignite Academy`}
                        className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{t.name}</h3>
                      <p className="text-xs text-[#B8B8B8]">{t.exp} • {t.subject}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#888] uppercase tracking-wider">{t.levels}</p>
                  <p className="mt-3 text-sm text-[#B8B8B8] leading-relaxed">{t.focus}</p>
                  <div className="mt-5 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] border border-white/10 text-[#B8B8B8]">Online</span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] border border-white/10 text-[#B8B8B8]">Physical</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY IGNITE */}
      <section id="why" className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Why Ignite</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Why students choose Ignite.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <div className="glass rounded-2xl p-7 h-full hover-lift">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(232,93,16,0.12)", border: "1px solid rgba(232,93,16,0.3)" }}>
                    <c.icon className="text-[#E85D10]" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#B8B8B8]">{c.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE IGNITE METHOD */}
      <section className="relative py-28 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">The Ignite Method</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">A clearer path to better grades.</h2>
            </div>
          </Reveal>
          <div className="relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, #E85D10, transparent)", boxShadow: "0 0 8px #E85D10" }} />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: "01", title: "Diagnose Weaknesses", copy: "We identify exactly where the student is losing marks." },
                { n: "02", title: "Build Concepts", copy: "We rebuild understanding with clear explanation and guided practice." },
                { n: "03", title: "Master Exam Answers", copy: "We train students to write, solve and present answers according to exam expectations." },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 150}>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full relative flex items-center justify-center mb-6 glass">
                      <div className="absolute inset-0 rounded-full animate-pulse-glow"
                        style={{ background: "radial-gradient(circle, rgba(232,93,16,0.4), transparent 70%)" }} />
                      <span className="relative text-2xl font-bold ignite-text">{s.n}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-[#B8B8B8] text-sm max-w-xs mx-auto">{s.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ONLINE TUITION */}
      <section id="online" className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Online Tuition</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Online tuition for UAE and international students.</h2>
              <p className="mt-5 text-[#B8B8B8] leading-relaxed">
                Personalised online classes with flexible timings, live explanation, structured
                preparation and direct support for students in the UAE, Pakistan and abroad.
              </p>
              <a href="#contact" className="mt-8 magnetic-btn inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white"
                style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
                Start Online Classes
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 grid-paper opacity-40" />
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: "#E85D10" }} />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "1-on-1 Sessions" },
                  { icon: Globe, label: "UAE-Friendly Timings" },
                  { icon: BookOpen, label: "Live Whiteboard" },
                  { icon: FileText, label: "Past Paper Feedback" },
                  { icon: MessageCircle, label: "WhatsApp Support" },
                  { icon: LineChart, label: "Online Progress Tracking" },
                ].map((f) => (
                  <div key={f.label} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-3">
                    <f.icon className="text-[#E85D10] shrink-0" size={18} />
                    <span className="text-sm">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — PHYSICAL CLASSES */}
      <section className="relative py-28 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 grid-paper opacity-50" />
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-3xl opacity-30" style={{ background: "#E85D10" }} />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold">Focused physical classes for serious students.</h2>
                <p className="mt-5 max-w-2xl mx-auto text-[#B8B8B8]">
                  Students who prefer in-person learning can join structured physical classes with
                  focused teaching, guided practice and exam preparation.
                </p>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                   className="mt-8 magnetic-btn inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white border border-white/15 hover:border-[#E85D10]/60 hover:bg-white/5 transition">
                  <MessageCircle size={16} /> Ask About Physical Classes
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Voices</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Students and parents say it best.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass rounded-2xl p-6 h-full hover-lift">
                  <Quote className="text-[#E85D10] mb-4" size={22} />
                  <p className="text-[15px] text-white leading-relaxed">"{t.quote}"</p>
                  <p className="mt-5 text-xs uppercase tracking-wider text-[#888]">{t.who}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — CONSULT FORM (Jotform Embed) */}
      <section id="contact" className="relative py-28 px-6 lg:px-10" style={{ background: "#111111" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Consultation</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Book a Free Consultation</h2>
              <p className="mt-4 text-[#B8B8B8] max-w-xl mx-auto">
                Tell us the student's level, subjects and goals. We'll guide you toward the right tuition plan.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div
              className="rounded-3xl p-3 sm:p-5 md:p-8 relative overflow-hidden"
              style={{
                background: "#181818",
                border: "1px solid rgba(232,93,16,0.25)",
                boxShadow: "0 30px 80px -30px rgba(232,93,16,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "#E85D10" }} />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: "#E85D10" }} />
              <div className="relative rounded-2xl overflow-hidden" style={{ background: "transparent" }}>
                <iframe
                  src="https://form.jotform.com/261376878601062"
                  title="Ignite Academy Consultation Form"
                  width="100%"
                  height={900}
                  loading="lazy"
                  scrolling="auto"
                  allow="geolocation; microphone; camera; payment"
                  style={{ border: "none", borderRadius: "16px", background: "transparent", display: "block", width: "100%", minHeight: "900px" }}
                />
              </div>
              <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-sm text-[#B8B8B8]">Prefer a quick chat?</span>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white"
                  style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}
                >
                  <MessageCircle size={16} /> Message on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* SECTION 10 — FINAL CTA */}
      <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,93,16,0.25), transparent 70%)" }} />
        <Particles count={14} />
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Ready to <span className="ignite-text">ignite your result?</span>
            </h2>
            <p className="mt-6 text-lg text-[#B8B8B8] max-w-2xl mx-auto">
              Book a free consultation and find the right teacher, subject plan and exam strategy for your level.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="magnetic-btn inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white"
                 style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
                Book a Free Consultation
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                 className="magnetic-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white glass hover:border-[#E85D10]/60">
                <MessageCircle size={16} /> Message on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 px-6 lg:px-10 py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 font-display font-semibold text-lg">
              <span className="relative inline-block w-6 h-6">
                <span className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, #ff8a3d, #E85D10 60%, transparent 80%)", boxShadow: "0 0 14px #E85D10" }} />
              </span>
              <span>Ignite <span className="ignite-text">Academy</span></span>
            </div>
            <p className="mt-4 text-sm text-[#B8B8B8]">O Level • IGCSE • GCE • A Level Tuition</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#888] mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-[#B8B8B8]">
              {[
                ["Home", "#home"], ["Subjects", "#subjects"], ["Teachers", "#teachers"],
                ["Online Tuition", "#online"], ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#888] mb-4">Contact</h4>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm text-white hover:text-[#ff8a3d]">
              <MessageCircle size={16} className="text-[#E85D10]" /> WhatsApp: +92 320 1719494
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-xs text-[#666] flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Ignite Academy. All rights reserved.</span>
          <span>Pakistan • UAE • International</span>
        </div>
      </footer>
    </div>
  );
}
