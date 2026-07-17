import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#tech", label: "Tecnologias" },
  { href: "#experience", label: "Experiência" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1180px,calc(100%-2rem))]"
    >
      <div
        className={`glass rounded-full px-3 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(124,58,237,0.5)]" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 pl-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <span className="absolute inset-0 rounded-lg bg-primary/40 blur-md" />
            <span className="relative font-display text-sm font-bold text-primary-foreground">M</span>
          </span>
          <span className="hidden sm:block font-display text-sm font-semibold tracking-tight">
            matheus<span className="text-accent"> felis</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="relative group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary/80 px-4 py-1.5 text-sm font-medium text-primary-foreground overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative">Vamos conversar</span>
        </a>
      </div>
    </motion.header>
  );
}
