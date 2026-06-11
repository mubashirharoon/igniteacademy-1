import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Atom, FlaskConical, Sigma, Cpu, Calculator, Briefcase, LineChart,
  Brain, Target, FileText, GraduationCap, Globe, Users, Heart, BookOpen,
  MessageCircle, Sparkles, Quote, ChevronRight, Play, CalendarCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { IgniteCore } from "@/components/IgniteCore";
import { Particles } from "@/components/Particles";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { VideoModal, type VideoSource } from "@/components/VideoModal";
import { VideoCard, type VideoCardData } from "@/components/VideoCard";
import { video, videoCard } from "@/lib/video";

import { Toaster } from "@/components/ui/sonner";
import yasirImg from "@/assets/faculty/yasir.png";
import fahadImg from "@/assets/faculty/fahad.png";

import mubashirImg from "@/assets/faculty/mubashir.png";
import haroonImg from "@/assets/faculty/haroon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ignite Academy | O Level, IGCSE, GCE & A Level Tuition" },
      { name: "description", content: "Ignite Academy offers expert tuition for O Level, IGCSE, GCE and A Level students. Experienced teachers, exam-focused preparation, past paper practice, online and physical classes in Defence Phase 6, Karachi." },
      { name: "keywords", content: "Ignite Academy, O Level tuition, IGCSE tuition, GCE tuition, A Level tuition, online tuition Karachi, Physics tuition, Chemistry tuition, Maths tuition, Computer Science tuition, Accounting tuition, Business Studies tuition, Economics tuition, Cambridge exam preparation" },
      { property: "og:title", content: "Ignite Academy | O & A Level Tuition" },
      { property: "og:description", content: "Concept-based teaching, exam mastery and past paper practice for O Level, IGCSE, GCE and A Level — online and in person." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Ignite Academy",
          description: "O Level, IGCSE, GCE and A Level tuition for students in Pakistan and abroad.",
          telephone: "+92 320 1719494",
          areaServed: ["Pakistan", "International"],
          url: "https://igniteacademy-1.lovable.app/",
          employee: [
            {
              "@type": "Person",
              name: "Sir Haroon",
              jobTitle: "Senior Faculty — Physics, Chemistry & Mathematics",
              description: "Senior faculty at Ignite Academy with 30+ years teaching Physics, Chemistry and Mathematics for O Level, IGCSE, GCE and A Level students.",
              worksFor: { "@type": "EducationalOrganization", name: "Ignite Academy" },
            },
            {
              "@type": "Person",
              name: "Sir Mubashir",
              jobTitle: "Founder & Economics Specialist",
              description: "Founder of Ignite Academy. Teaches O & A Level Economics with focus on diagrams, analysis, evaluation and answer structure.",
              worksFor: { "@type": "EducationalOrganization", name: "Ignite Academy" },
            },
            {
              "@type": "Person",
              name: "Sir Fahad",
              jobTitle: "Computer Science Teacher (O & A Level)",
              description: "Teaches O and A Level Computer Science with focus on theory, logic, programming concepts and exam-style practice.",
              worksFor: { "@type": "EducationalOrganization", name: "Ignite Academy" },
            },
            {
              "@type": "Person",
              name: "Sir Yasir",
              jobTitle: "Accounting Teacher (O & A Level)",
              description: "Teaches O and A Level Accounting through step-by-step practice, formats, calculations and past paper questions.",
              worksFor: { "@type": "EducationalOrganization", name: "Ignite Academy" },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Ignite Academy Faculty",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          itemListElement: [
            { "@type": "ListItem", position: 1, item: { "@type": "Person", name: "Sir Haroon", jobTitle: "Senior Faculty — Physics, Chemistry & Mathematics" } },
            { "@type": "ListItem", position: 2, item: { "@type": "Person", name: "Sir Mubashir", jobTitle: "Founder & Economics Specialist" } },
            { "@type": "ListItem", position: 3, item: { "@type": "Person", name: "Sir Fahad", jobTitle: "Computer Science Teacher" } },
            { "@type": "ListItem", position: 4, item: { "@type": "Person", name: "Sir Yasir", jobTitle: "Accounting Teacher" } },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/923201719494";

const subjects = [
  { name: "Physics", icon: Atom, level: "O Level / IGCSE / GCE", hover: "For students struggling with numericals, definitions and applying formulas in exam questions." },
  { name: "Chemistry", icon: FlaskConical, level: "O Level / IGCSE / GCE", hover: "Clear explanation of reactions, calculations and theory with regular practice." },
  { name: "Mathematics", icon: Sigma, level: "O Level / IGCSE / GCE / A Level", hover: "Step-by-step support for topics, past papers and tricky exam questions." },
  { name: "Computer Science", icon: Cpu, level: "O Level / A Level", hover: "Support with theory, logic, programming concepts and exam preparation." },
  { name: "Accounting", icon: Calculator, level: "O Level / A Level", hover: "Practice-led teaching for formats, calculations and structured answers." },
  { name: "Business Studies", icon: Briefcase, level: "O Level / A Level", hover: "Help with case-study questions, application and structured business answers." },
  { name: "Economics", icon: LineChart, level: "O Level / A Level", hover: "Support with diagrams, analysis, evaluation and writing stronger exam answers." },
];

const teachers: Array<{
  name: string; exp: string; subject: string; levels: string; focus: string;
  photo: string; intro: VideoSource;
}> = [
  { name: "Sir Fahad", exp: "4 Years", subject: "Computer Science", levels: "O Level / A Level", focus: "Sir Fahad teaches Computer Science for O and A Level students with a focus on theory, logic, programming concepts and exam-style practice.", photo: fahadImg, intro: { title: "Sir Fahad — Introduction" } },
  { name: "Sir Yasir", exp: "5 Years", subject: "Accounting", levels: "O Level / A Level", focus: "Sir Yasir teaches Accounting through step-by-step practice, formats, calculations and past paper questions.", photo: yasirImg, intro: { title: "Sir Yasir — Introduction" } },
  
];

// ➕ To add a new video: copy any one of the four lines below and paste the
//    YouTube link, youtu.be link, full <iframe> embed code, Vimeo link, or MP4 URL
//    into `embed:`. The helper auto-detects the format — no IDs to extract.
const demoClasses: VideoCardData[] = [
  videoCard({ title: "Polygons Explained Simply",                        subject: "O Level Mathematics", teacher: "Sir Haroon",   embed: "https://www.youtube.com/watch?v=opa_4vXQkbA", playerTitle: "O Level Mathematics | Polygons Explained Simply | Sir Haroon" }),
  videoCard({ title: "Indices and Surds Explained",                      subject: "O Level Mathematics", teacher: "Sir Haroon",   embed: "https://www.youtube.com/watch?v=ukE2yM76JiA", playerTitle: "Indices and Surds Explained | O Level Mathematics | Sir Haroon" }),
  videoCard({ title: "Simple Interest and Compound Interest Explained",  subject: "O Level Mathematics", teacher: "Sir Haroon",   embed: "https://www.youtube.com/watch?v=KdJu2nwh6EM", playerTitle: "Simple Interest and Compound Interest Explained | O Level Mathematics | Sir Haroon" }),
  videoCard({ title: "Demand & Supply — Drawing Diagrams That Score",    subject: "Economics",           teacher: "Sir Mubashir", duration: "12:40", embed: "" }),
  videoCard({ title: "Pseudocode & Logic — Walking Through a Past Paper Question", subject: "Computer Science", teacher: "Sir Fahad", duration: "10:25", embed: "" }),
];
// Keep `video(...)` available for one-off embeds elsewhere on the page.
void video;

const successStories: VideoCardData[] = [
  { title: "From a C to an A* in O Level Physics", subject: "Student Story", teacher: "Ahmed, O Level", duration: "1:48", source: { title: "Ahmed's Physics Story" } },
  { title: "How My Daughter Stopped Fearing Maths", subject: "Parent Review", teacher: "Mrs. Khan", duration: "2:10", source: { title: "Parent Review — Mrs. Khan" } },
  { title: "A Level Economics — Answer Writing Changed Everything", subject: "Student Story", teacher: "Hira, A Level", duration: "2:32", source: { title: "Hira's Economics Story" } },
  { title: "Result Day — A* in Accounting", subject: "Result", teacher: "Bilal, O Level", duration: "0:58", source: { title: "Result Celebration — Bilal" } },
];

const founderVideo: VideoSource = { title: "Why I Started Ignite Academy — Sir Mubashir" };

const whyCards = [
  { icon: GraduationCap, title: "Experienced Teachers", copy: "Subject specialists who have taught O and A Level students for years." },
  { icon: Target, title: "Exam-Focused Preparation", copy: "Lessons tied to the syllabus and the marking scheme." },
  { icon: Brain, title: "Concept-Based Teaching", copy: "We explain the topic first, then practise it properly." },
  { icon: FileText, title: "Regular Past Paper Practice", copy: "Real past paper questions with feedback on each attempt." },
  { icon: Globe, title: "Online & Physical Classes", copy: "Physical classes at DHA Phase 6, Lane 3, Ittehad Commercial, Karachi. Online classes for students across Pakistan." },
  { icon: Heart, title: "Personal Student Support", copy: "Small batches and direct attention for each student." },
];

const testimonials = [
  { quote: "My son used to panic in numericals. The step-by-step practice helped him attempt questions with more confidence.", who: "Parent of O Level Physics Student" },
  { quote: "I knew the content, but my answers were weak. The answer-writing practice helped me understand analysis and evaluation better.", who: "A Level Economics Student" },
  { quote: "The classes were organised and focused. Regular past paper practice made a visible difference.", who: "Parent of IGCSE Maths Student" },
  { quote: "Case study questions became easier once I learned how to connect the answer with the business situation.", who: "O Level Business Student" },
];

function LikeWhatYouSaw() {
  return (
    <div className="mt-10 glass rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-30" />
      <div className="relative">
        <h3 className="text-2xl md:text-3xl font-semibold">Like what you saw?</h3>
        <p className="mt-2 text-sm text-[#B8B8B8]">Talk to us directly — no pressure, no sales pitch.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
             className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
             style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
            <MessageCircle size={16} /> WhatsApp Us
          </a>
          <a href="#contact"
             className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white glass hover:border-[#E85D10]/60">
            <CalendarCheck size={16} /> Book Free Consultation
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
             className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/15 hover:border-[#E85D10]/60 hover:bg-white/5 transition">
            <Users size={16} /> Join Upcoming Batch
          </a>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [activeVideo, setActiveVideo] = useState<VideoSource | null>(null);
  const openVideo = (v: VideoSource) => setActiveVideo(v);
  const closeVideo = () => setActiveVideo(null);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <VideoModal open={!!activeVideo} onClose={closeVideo} source={activeVideo ?? {}} />
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
              Clear concepts. Better answers.
              <br />
              <span className="ignite-text">Stronger exam preparation.</span>
            </h1>
            <p className="mt-6 text-lg text-[#B8B8B8] max-w-xl leading-relaxed">
              Ignite Academy helps O Level, IGCSE, GCE and A Level students prepare through
              focused classes, experienced teachers and regular past paper practice.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="magnetic-btn inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-semibold text-white"
                 style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
                Book a Free Consultation
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                 className="magnetic-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white glass hover:border-[#E85D10]/50">
                <MessageCircle size={16} /> Talk to Us on WhatsApp
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
              <div className="text-[10px] uppercase tracking-wider text-[#B8B8B8]">Location</div>
              <div className="text-base font-semibold">Defence Phase 6</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO — EXPERIENCE A REAL CLASS */}
      <section id="watch" className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Watch</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Experience a Real Ignite Academy Class.</h2>
              <p className="mt-4 text-[#B8B8B8]">Don't just read about our teaching. Watch it.</p>
            </div>
          </Reveal>

          {/* Featured player */}
          <Reveal>
            <button
              type="button"
              onClick={() => openVideo({ title: "Inside an Ignite Academy Class — Featured Walkthrough" })}
              className="group relative block w-full aspect-video rounded-3xl overflow-hidden glass ignite-border-glow text-left"
              aria-label="Play featured class video"
            >
              <div className="absolute inset-0 grid-paper opacity-40" />
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "#E85D10" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  style={{ background: "var(--grad-ignite)", boxShadow: "0 20px 60px -10px rgba(232,93,16,0.7), 0 0 0 10px rgba(232,93,16,0.12)" }}>
                  <Play size={32} className="text-white ml-1.5" fill="currentColor" />
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Featured</p>
                  <p className="text-xl md:text-2xl font-semibold mt-1">Inside an Ignite Academy Class</p>
                </div>
                <span className="px-3 py-1.5 rounded-full text-xs bg-black/60 border border-white/10">HD • 4 min</span>
              </div>
            </button>
          </Reveal>

          {/* Demo class cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {demoClasses.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <VideoCard data={d} onPlay={() => openVideo(d.source)} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <LikeWhatYouSaw />
          </Reveal>
        </div>
      </section>

      {/* SECTION 1 — built for serious students */}
      <section className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Support where students usually lose marks.</h2>
              <p className="mt-4 text-[#B8B8B8]">Concepts, exam technique and past paper practice — handled together.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Concept Clarity", copy: "We explain each topic clearly before moving to practice." },
              { icon: Target, title: "Exam Technique", copy: "Students learn how to structure answers the way examiners expect." },
              { icon: FileText, title: "Past Paper Practice", copy: "Regular past paper work with feedback on weak areas." },
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
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Subjects We Teach.</h2>
              <p className="mt-4 text-[#B8B8B8]">O Level, IGCSE, GCE and A Level — taught by subject specialists.</p>
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
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Meet Our Teachers.</h2>
              <p className="mt-4 text-[#B8B8B8]">Subject specialists teaching O Level, IGCSE, GCE and A Level students.</p>
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
                    Sir Haroon has taught Physics, Chemistry and Mathematics for over 30 years.
                    His classes focus on clear explanation, regular practice and helping students
                    handle difficult exam questions step by step.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 items-center">
                    {["Online", "Physical", "30+ Years", "O/A Level"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs border border-white/10 text-[#B8B8B8]">{t}</span>
                    ))}
                    <button
                      onClick={() => openVideo({ title: "Sir Haroon — Introduction" })}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white border border-[#E85D10]/50 hover:bg-[#E85D10]/10 transition"
                    >
                      <Play size={12} fill="currentColor" /> Watch Introduction
                    </button>
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
                    Sir Mubashir is the founder of Ignite Academy and teaches O & A Level Economics.
                    He helps students improve diagrams, analysis, evaluation and answer structure.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 items-center">
                    {["Answer Writing", "Examiner Technique", "Online", "Physical"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs border border-white/10 text-[#B8B8B8]">{t}</span>
                    ))}
                    <button
                      onClick={() => openVideo(founderVideo)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white border border-[#E85D10]/50 hover:bg-[#E85D10]/10 transition"
                    >
                      <Play size={12} fill="currentColor" /> Watch Introduction
                    </button>
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
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] border border-white/10 text-[#B8B8B8]">Online</span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] border border-white/10 text-[#B8B8B8]">Physical</span>
                    <button
                      onClick={() => openVideo(t.intro)}
                      className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white border border-[#E85D10]/40 hover:bg-[#E85D10]/10 transition"
                    >
                      <Play size={12} fill="currentColor" /> Watch Introduction
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section id="founder" className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <button
              type="button"
              onClick={() => openVideo(founderVideo)}
              className="group relative block w-full aspect-video rounded-3xl overflow-hidden glass ignite-border-glow text-left"
              aria-label="Play founder video"
            >
              <img
                src={mubashirImg}
                alt="Sir Mubashir — Founder of Ignite Academy"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.7))" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  style={{ background: "var(--grad-ignite)", boxShadow: "0 16px 50px -10px rgba(232,93,16,0.75), 0 0 0 8px rgba(232,93,16,0.15)" }}>
                  <Play size={26} className="text-white ml-1" fill="currentColor" />
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Founder Message</p>
                <p className="mt-1 text-lg font-semibold">Sir Mubashir — Founder, Ignite Academy</p>
              </div>
            </button>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Meet The Founder</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Why I Started Ignite Academy.</h2>
              <p className="mt-5 text-[#B8B8B8] leading-relaxed">
                I started Ignite Academy after years of teaching O and A Level Economics and seeing the same gap repeat —
                students who knew the content but couldn't structure exam answers the way Cambridge wants. We built this
                academy around three things: clear concept teaching, real exam technique, and consistent past paper practice.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#B8B8B8]">
                <li className="flex gap-3"><span className="text-[#E85D10]">—</span> 5+ years teaching Cambridge Economics</li>
                <li className="flex gap-3"><span className="text-[#E85D10]">—</span> Trained students who improved from C/D grades to A/A*</li>
                <li className="flex gap-3"><span className="text-[#E85D10]">—</span> Believes small batches and direct feedback beat large lectures</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact"
                   className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white"
                   style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
                  <CalendarCheck size={16} /> Book a Free Academic Consultation
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                   className="magnetic-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white border border-white/15 hover:border-[#E85D10]/60 hover:bg-white/5 transition">
                  <MessageCircle size={16} /> Message Founder
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — WHY IGNITE */}
      <section id="why" className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Why Ignite</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Why Parents Choose Ignite Academy.</h2>
              <p className="mt-4 text-[#B8B8B8]">Physical classes at DHA Phase 6, Lane 3, Ittehad Commercial, Karachi. Online classes for students across Pakistan.</p>
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
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Our Approach</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">How We Help Students Improve.</h2>
            </div>
          </Reveal>
          <div className="relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, #E85D10, transparent)", boxShadow: "0 0 8px #E85D10" }} />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: "01", title: "Identify Weak Areas", copy: "We start by finding where the student is losing marks in past papers and class work." },
                { n: "02", title: "Rebuild Concepts", copy: "Topics are taught again with clear explanation and guided practice." },
                { n: "03", title: "Practise Exam Answers", copy: "Students practise full questions and learn how to present answers the way examiners expect." },
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
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Online Classes for Students Across Pakistan.</h2>
              <p className="mt-5 text-[#B8B8B8] leading-relaxed">
                Live online classes with direct teacher support for students across Pakistan.
                Past paper practice, digital notes and regular feedback are part of every course.
              </p>
              <a href="#contact" className="mt-8 magnetic-btn inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white"
                style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
                Ask About Online Classes
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
                  { icon: Globe, label: "Pakistan-Wide Access" },
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
                <h2 className="text-4xl md:text-5xl font-bold">Physical Classes in DHA Phase 6, Karachi.</h2>
                <p className="mt-5 max-w-2xl mx-auto text-[#B8B8B8]">
                  Students who prefer in-person learning can join focused physical classes at
                  Ignite Academy in DHA Phase 6, Lane 3, Ittehad Commercial, Karachi. Classes are
                  structured around clear explanation, guided practice and exam preparation.
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

      {/* SECTION 8 — STUDENT SUCCESS STORIES (VIDEO) */}
      <section id="stories" className="relative py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E85D10]">Voices</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Student Success Stories.</h2>
              <p className="mt-4 text-[#B8B8B8]">Real students. Real parents. Real result days.</p>
            </div>
          </Reveal>

          {/* Video carousel — horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {successStories.map((s, i) => (
              <div key={s.title} className="min-w-[280px] md:min-w-0 snap-start">
                <Reveal delay={i * 70}>
                  <VideoCard data={s} onPlay={() => openVideo(s.source)} cta="Watch Story" />
                </Reveal>
              </div>
            ))}
          </div>

          {/* Supporting written quotes */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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

          <p className="mt-10 text-center text-xs text-[#666] max-w-xl mx-auto">
            Testimonials reflect individual student experiences. Results depend on effort and consistency — we do not guarantee specific grades.
          </p>

          <Reveal>
            <LikeWhatYouSaw />
          </Reveal>
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
              <p className="mt-3 text-sm text-[#888] max-w-xl mx-auto">
                For physical classes, visit us at DHA Phase 6, Lane 3, Ittehad Commercial, Karachi.
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
                  <MessageCircle size={16} /> Talk to Us on WhatsApp
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
              Ready to <span className="ignite-text">improve your grades?</span>
            </h2>
            <p className="mt-6 text-lg text-[#B8B8B8] max-w-2xl mx-auto">
              Book a free consultation and we'll suggest the right teacher, subject plan and class timings for your level.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="magnetic-btn inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white"
                 style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
                Book a Free Consultation
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                 className="magnetic-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white glass hover:border-[#E85D10]/60">
                <MessageCircle size={16} /> Talk to Us on WhatsApp
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
            <p className="mt-4 text-sm text-[#B8B8B8] leading-relaxed">
              <span className="text-white">Physical Classes:</span> Defence Phase 6, Karachi
            </p>
            <p className="mt-2 text-sm text-[#B8B8B8] leading-relaxed">
              <span className="text-white">Online Classes:</span> Available across Pakistan
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-xs text-[#666] flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Ignite Academy. All rights reserved.</span>
          <span>Defence Phase 6, Karachi</span>
        </div>
      </footer>
    </div>
  );
}
