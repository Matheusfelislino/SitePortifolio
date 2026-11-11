import { createFileRoute } from "@tanstack/react-router";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Cursor } from "@/components/portfolio/Cursor";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Stats, Tech, Experience, Differentials, Contact, Footer } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matheus Felis | Desenvolvedor Java, Spring Boot e React" },
      {
        name: "description",
        content:
          "Portfólio de Matheus Felis, desenvolvedor Java e Spring Boot com front em React e TypeScript. Experiência com ERP, NFe, integrações bancárias e sistemas em produção.",
      },
      { property: "og:title", content: "Matheus Felis | Desenvolvedor Java, Spring Boot e React" },
      { property: "og:description", content: "Back-end Java e Spring Boot, front em React e TypeScript. Aberto a estágio e júnior." },
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
      <Contact />
      <Footer />
    </main>
  );
}
