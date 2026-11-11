import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionHeader } from "./Section";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import autoorderImg from "@/assets/project-1.png";
import stockmindImg from "@/assets/project-2.png";
import vexoraImg from "@/assets/project-3.png";
import nutriaiImg from "@/assets/project-4.png";
import nexoraImg from "@/assets/project-5.png";
import viralataImg from "@/assets/project-6.png";

type Project = {
  title: string;
  tag: string;
  image: string;
  link: string;
  code?: string;
  description: string;
  problem: string;
  architecture: string;
  challenges: string;
  results: string;
  tech: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "AutoOrder",
    tag: "B2B · IA",
    image: autoorderImg,
    link: "https://portifolio-autoorder.vercel.app/",
    code: "https://github.com/Matheusfelislino/AUTOORDER",
    featured: true,
    description: "Motor que transforma pedidos desestruturados (WhatsApp, texto livre) em pedidos validados prontos para aprovação.",
    problem: "Distribuidoras B2B recebem pedidos em formatos caóticos e faturistas gastam minutos digitando cada um manualmente no ERP.",
    architecture: "Monólito modular orientado a eventos em Java 21 (Virtual Threads) + Spring Boot, RabbitMQ desacoplando ingestão e processamento, PostgreSQL, Redis e tradução de intenção via LLM. Frontend em React + TypeScript.",
    challenges: "Garantir idempotência na ingestão de webhooks e manter resposta rápida mesmo com chamadas de LLM na cadeia de processamento.",
    results: "Fluxo completo funcional: da mensagem recebida ao pedido aprovado no dashboard, com decisões de arquitetura documentadas.",
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "RabbitMQ", "Redis", "React"],
  },
  {
    title: "StockMind",
    tag: "IA · Varejo · Em desenvolvimento",
    image: stockmindImg,
    link: "https://portifolio-stock-mind.vercel.app/login",
    description: "Copiloto de decisão para redes de farmácia: prevê demanda e recomenda o que comprar antes que falte ou sobre estoque.",
    problem: "ERPs tradicionais só mostram o estoque atual — farmácias perdem vendas por ruptura e capital preso em excesso parado.",
    architecture: "Backend em Java/Spring Boot, motor de previsão em Python (Prophet + Scikit-learn) comunicando via RabbitMQ, PostgreSQL, Redis para cache dos KPIs e frontend em Next.js.",
    challenges: "Orquestrar comunicação assíncrona entre o motor de IA em Python e o backend Java sem acoplar os dois serviços.",
    results: "Pipeline de previsão automatizado funcionando ponta a ponta, do disparo agendado até a recomendação de compra no dashboard.",
    tech: ["Java", "Spring Boot", "Python", "Prophet", "PostgreSQL", "Next.js"],
  },
  {
    title: "Vexora — PDV Template",
    tag: "Template · Varejo",
    image: vexoraImg,
    link: "https://portifolio-vexora.vercel.app/login",
    description: "Template white-label de sistema de gestão para varejo, com PDV, financeiro e controle de caixa prontos para configurar por cliente.",
    problem: "Pequenos varejistas precisam de um PDV com controle financeiro real, sem pagar por um sistema genérico caro e engessado.",
    architecture: "TanStack Start (React 19) + Tailwind + shadcn/ui no frontend, Supabase (PostgreSQL + Auth) como backend, deploy em Cloudflare Workers.",
    challenges: "Modelar um financeiro completo (plano de contas, lançamentos, fechamento de caixa) simples de configurar para qualquer cliente novo.",
    results: "PDV, histórico de vendas, financeiro e controle de operadores funcionando ponta a ponta, pronto para receber a marca de um cliente.",
    tech: ["TanStack Start", "Supabase", "PostgreSQL", "Tailwind CSS", "Cloudflare"],
  },
  {
    title: "NutriAI",
    tag: "Projeto acadêmico · Saúde",
    image: nutriaiImg,
    link: "https://portifolio-nutri-ia.vercel.app/",
    featured: true,
    description: "Plataforma para nutricionistas gerarem planos alimentares personalizados combinando cálculo clínico e IA.",
    problem: "Montar um plano alimentar manualmente é lento e depende só da experiência do profissional, sem padronização.",
    architecture: "Frontend em Next.js, backend em FastAPI (Python) com SQLAlchemy, motor híbrido combinando fórmulas clínicas (Mifflin-St Jeor) com curadoria via LLM, tudo containerizado com Docker.",
    challenges: "Garantir que a IA só sugira substituições dentro das restrições clínicas do paciente, mantendo rastreabilidade da decisão.",
    results: "Fluxo completo do cadastro do paciente até a exportação do plano alimentar em PDF profissional.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "LLM"],
  },
  {
    title: "Nexora Platform",
    tag: "Template · Gestão",
    image: nexoraImg,
    link: "https://portifolio-nexora.vercel.app/",
    description: "Plataforma de gestão para clínicas — agendamentos, pacientes e financeiro em um só lugar.",
    problem: "Clínicas pequenas gerenciam agenda, pacientes e financeiro em planilhas ou sistemas separados que não conversam entre si.",
    architecture: "TanStack Start + Supabase (PostgreSQL + Auth com Row Level Security), com integração via WhatsApp para lembretes de consulta.",
    challenges: "Isolar os dados de cada clínica com segurança (RLS) mantendo a experiência simples para quem não é técnico.",
    results: "Agendamento, pacientes, financeiro completo (contas a pagar/receber, plano de contas) e autenticação multiusuário funcionando integrados.",
    tech: ["TanStack Start", "Supabase", "PostgreSQL", "WhatsApp API"],
  },
  {
    title: "ViraLata — Clínica Veterinária",
    tag: "Freelance · Veterinária",
    image: viralataImg,
    link: "https://vira-lata.vercel.app",
    description: "Landing page institucional para uma clínica veterinária 24h com 26 anos de história em Mogi Guaçu/SP, com SEO técnico completo e animações.",
    problem: "Clínica com 26 anos de história não tinha presença digital profissional que transmitisse credibilidade e facilitasse o contato 24h com os tutores.",
    architecture: "React 19 + TanStack Start (SSR com head management por rota), TanStack Router, Tailwind CSS v4, Framer Motion para animações e Lenis para smooth scroll. Componentes base via shadcn/ui + Radix UI. Deploy na Vercel.",
    challenges: "Implementar SEO técnico completo (Schema.org VeterinaryCare, Open Graph, Twitter Card, canonical) integrado ao SSR do TanStack Start, garantindo que cada seção fosse indexável e acessível.",
    results: "Landing page em produção com todas as seções de conversão (serviços, diferenciais, equipe, galeria, mapa, CTA) e SEO técnico.",
    tech: ["React 19", "TanStack Start", "Tailwind CSS v4", "Framer Motion", "Radix UI"],
  },
];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Projetos"
          title={<>Projetos que{" "}<span className="text-gradient">coloquei em prática</span>.</>}
          description="Uma seleção do que venho desenvolvendo, unindo engenharia, design e inteligência artificial."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-6 auto-rows-[320px] gap-5">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className={p.featured ? "lg:col-span-4" : "lg:col-span-2"}
            >
              <button
                type="button"
                onClick={() => setOpen(p)}
                data-cursor="hover"
                className="group relative w-full h-full text-left rounded-3xl overflow-hidden glass hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20" />
                </div>
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-widest text-foreground/90 bg-background/60 backdrop-blur-md border border-white/10">
                      <span className="h-1 w-1 rounded-full bg-accent" /> {p.tag}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 max-w-md">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-[11px] rounded-full border border-white/10 px-2.5 py-0.5 text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl"
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
                <img src={open.image} alt={open.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-xs uppercase tracking-widest text-accent">{open.tag}</span>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl font-semibold">{open.title}</h3>
                <p className="mt-3 text-muted-foreground">{open.description}</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {[
                    { l: "Problema", v: open.problem },
                    { l: "Arquitetura", v: open.architecture },
                    { l: "Desafios", v: open.challenges },
                    { l: "Resultados", v: open.results },
                  ].map((b) => (
                    <div key={b.l} className="glass rounded-2xl p-5">
                      <div className="text-xs uppercase tracking-widest text-accent">{b.l}</div>
                      <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{b.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {open.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-white/10 px-3 py-1 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={open.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-accent px-5 py-2.5 text-sm font-medium text-primary-foreground glow-violet">
                    <ExternalLink className="h-4 w-4" /> Ver Demo
                  </a>
                  {open.code && (
                    <a href={open.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/5 transition-colors">
                      <Github className="h-4 w-4" /> Ver código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
