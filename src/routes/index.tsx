import { createFileRoute } from "@tanstack/react-router";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Cursor } from "@/components/portfolio/Cursor";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Stats, Tech, Experience, Differentials, Testimonials, Contact, Footer } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matheus Felis — Desenvolvedor Full-Stack & IA" },
      {
        name: "description",
        content:
          "Portfólio de Matheus Felis — desenvolvedor full-stack e arquiteto de software com foco em interfaces premium, sistemas escaláveis e integrações com inteligência artificial.",
      },
      { property: "og:title", content: "Matheus Felis — Desenvolvedor Full-Stack & IA" },
      { property: "og:description", content: "Interfaces premium, arquiteturas modernas e produtos com IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useSmoothScroll();
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Tech />
      <Experience />
      <Differentials />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
