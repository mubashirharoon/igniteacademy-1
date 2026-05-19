import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ignite-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#subjects", label: "Subjects" },
  { href: "#teachers", label: "Teachers" },
  { href: "#why", label: "Why Ignite" },
  { href: "#online", label: "Online Tuition" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 font-display font-semibold text-lg">
          <img src={logo} alt="Ignite Academy logo" className="w-9 h-9 rounded-full"
            style={{ boxShadow: "0 0 18px rgba(232,93,16,0.45)" }} />
          <span className="hidden sm:inline">Ignite <span className="ignite-text">Academy</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-[#B8B8B8]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden lg:inline-flex magnetic-btn items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white"
           style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}>
          Book Consultation
        </a>
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-nav border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-[#B8B8B8]">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-white">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white"
             style={{ background: "var(--grad-ignite)" }}>Book Consultation</a>
        </div>
      )}
    </header>
  );
}
