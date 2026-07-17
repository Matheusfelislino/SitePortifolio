import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeader } from "./Section";
import avatar from "@/assets/avatar.jpg";
import { motion, useInView } from "framer-motion";
import {
  Code2, Cpu, Database, Cloud, Sparkles, GitBranch, Wrench,
  Rocket, Shield, Zap, Layers, Palette, Github, Linkedin, Mail, Send,
  MessageCircle, ArrowUpRight, CheckCircle2,
} from "lucide-react";

/* ============ ABOUT ============ */
export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sobre"
          title={
          <>
            Software moderno para{" "}
            <span className="text-gradient">negócios inteligentes</span>.
          </>
}
          description="Sou desenvolvedor Full Stack focado em arquitetura de software, inteligência artificial e automação de processos. Desenvolvo produtos que resolvem problemas reais utilizando LLMs, agentes de IA, arquiteturas escaláveis e interfaces modernas. Meu objetivo é transformar ideias complexas em sistemas robustos que geram resultado para empresas."
        />

        <div className="grid lg:grid-cols-[380px_1fr] gap-10 items-start">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary via-primary/40 to-accent opacity-60 blur-lg group-hover:opacity-100 transition-opacity" />
              <div className="relative overflow-hidden rounded-3xl glass-strong">
                <img
                  src={avatar}
                  alt="Matheus Felis"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Baseado no Brasil · Trabalhando remotamente
                  </div>
                  <div className="mt-1 font-display text-lg">Matheus Felis</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
                <div className="text-xs uppercase tracking-widest text-accent mb-2">Resumo</div>
                <p className="text-foreground/90 leading-relaxed">
                  Desenvolvedor Full Stack especializado em aplicações web modernas, integrações com Inteligência Artificial, arquiteturas escaláveis e automação de processos. Trabalho desde a modelagem da solução até o deploy em produção, priorizando desempenho, experiência do usuário e qualidade de código.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Rocket, title: "Arquitetura", text: "Construção de sistemas escaláveis utilizando princípios de Clean Architecture, DDD e microsserviços quando necessário." },
                { icon: Sparkles, title: "Inteligência Artificial", text: "Integração com OpenAI, Gemini, RAG, MCP Servers, agentes autônomos e automações inteligentes." },
                { icon: Palette, title: "Backend", text: "APIs REST, autenticação, bancos relacionais, mensageria, filas, cache e processamento assíncrono." },
                { icon: Shield, title: "Frontend", text: "Interfaces modernas utilizando React, Next.js, TypeScript, TailwindCSS, Framer Motion e animações 3D." },
              ].map((c, i) => (
                <Reveal key={c.title} delay={0.15 + i * 0.05}>
                  <div className="group glass rounded-2xl p-5 h-full hover:-translate-y-1 hover:glow-violet transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border border-white/10 mb-3">
                      <c.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="font-display text-base mb-1">{c.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ STATS ============ */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    let id = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  const items = [
    { v: 15, s: "+", label: "Projetos entregues" },
    { v: 400, s: "+", label: "Commits no GitHub" },
    { v: 10, s: "", label: "Tecnologias dominadas" },
    { v: 2, s: "+", label: "Anos programando" },
    { v: 10, s: "+", label: "Clientes atendidos" },
    { v: 700, s: "h", label: "Horas em código" },
  ];
  return (
    <section className="relative py-24 border-y border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.05}>
              <div className="text-center group">
                <div className="font-display text-4xl md:text-5xl font-semibold text-gradient tracking-tight">
                  <Counter to={it.v} suffix={it.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
                  {it.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TECH ============ */
const techGroups = [
  {
    icon: Code2,
    cat: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"],
  },
  {
    icon: Cpu,
    cat: "Backend",
    items: ["Java", "Spring Boot", "NestJS", "Node.js", "Python", "FastAPI"],
  },
  {
    icon: Database,
    cat: "Banco de Dados",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    icon: Cloud,
    cat: "Cloud & DevOps",
    items: ["Docker", "AWS", "GitHub Actions", "CI/CD"],
  },
  {
    icon: Sparkles,
    cat: "Inteligência Artificial",
    items: ["OpenAI", "Gemini", "LangChain", "RAG", "MCP", "Agentes"],
  },
];

export function Tech() {
  return (
    <section id="tech" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Tecnologias"
          title={<>Um arsenal <span className="text-gradient">moderno</span> e afiado.</>}
          description="Stacks que escolho com critério pela performance, ergonomia e maturidade. Não por hype."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techGroups.map((g, gi) => (
            <Reveal key={g.cat} delay={gi * 0.06}>
              <div
                data-cursor="hover"
                className="group relative glass rounded-2xl p-6 h-full overflow-hidden hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
                <div className="relative flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border border-white/10 group-hover:glow-violet transition-shadow">
                    <g.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Stack</div>
                    <div className="font-display text-lg">{g.cat}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-xl bg-white/[0.02] border border-white/5 px-3 py-1.5 text-sm text-foreground/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/[0.06] hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TIMELINE ============ */
const timeline = [
  {
    year: "2019",
    title: "Primeira linha de código",
    text: "Descobri programação em Python e não parei mais virou obsessão por resolver problemas com lógica.",
  },
  {
    year: "2022",
    title: "Fundamentos sólidos",
    text: "Aprofundei lógica de programação e estrutura de dados a base técnica que uso até hoje.",
  },
  {
    year: "2024",
    title: "Sistemas de Informação PUC Campinas",
    text: "Entrei na faculdade para formalizar o que já vinha construindo sozinho e acelerar o crescimento técnico.",
  },
  {
    year: "2024",
    title: "Primeiros produtos em equipe",
    text: "Liderei projetos universitários reais, unindo código, design e prazo com um time.",
  },
  {
    year: "2025",
    title: "Mergulho em IA generativa",
    text: "Comecei a construir agentes autônomos, RAG e produtos com LLMs da teoria direto pra produção.",
  },
  {
    year: "2025",
    title: "Arquiteto de soluções",
    text: "Passei a projetar sistemas em produção com milhares de usuários simultâneos, com foco em performance e escala.",
  },
  {
    year: "2026",
    title: "Próximo capítulo",
    text: "Construir uma startup de produto com IA aplicada no centro transformar o que aprendi em impacto real.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Jornada"
          title={<>Cada linha de código é uma <span className="text-gradient">história</span>.</>}
          description="A evolução de um desenvolvedor não é linear: é a soma de curiosidade, disciplina e repetição."
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.04}>
                <div className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-primary/40 animate-ping" />
                    <span className="relative h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                  </div>
                  <div className="pl-12 md:pl-0 flex-1">
                    <div className="glass rounded-2xl p-5 hover:glow-violet hover:-translate-y-0.5 transition-all">
                      <div className="text-xs uppercase tracking-widest text-accent">{t.year}</div>
                      <div className="mt-1 font-display text-xl">{t.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ DIFFERENTIALS ============ */
const differentials = [
  { icon: Layers, t: "Arquitetura com propósito", d: "Penso em estrutura desde o primeiro commit modular, escalável, orientada a domínio." },
  { icon: Sparkles, t: "Integrações com IA", d: "RAG, agentes e automações aplicados a problemas reais, não só POCs." },
  { icon: CheckCircle2, t: "Clean Code", d: "Código legível, testável e fácil de evoluir penso em quem vai mexer depois de mim." },
  { icon: Rocket, t: "Aprendizado rápido", d: "Vou fundo em cada tecnologia que uso, dos fundamentos à prática em produção." },
  { icon: Palette, t: "UI/UX com cuidado", d: "Interfaces pensadas para impressionar, não só para funcionar." },
  { icon: Zap, t: "Performance como prioridade", d: "Busco o máximo de performance em cada projeto, sem atalhos." },
  { icon: CheckCircle2, t: "Boas práticas", d: "Tipagem forte, testes, CI/CD e revisão de código fazem parte do meu fluxo." },
  { icon: Shield, t: "Atenção à segurança", d: "Autenticação, criptografia e boas práticas aplicadas desde o design do sistema." },
];

export function Differentials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Diferenciais"
          title={<>Por que trabalhar <span className="text-gradient">comigo</span>.</>}
          description="Ainda estou construindo minha trajetória mas já combino curiosidade técnica, senso de produto e disciplina de execução em cada projeto."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentials.map((d, i) => (
            <Reveal key={d.t} delay={i * 0.04}>
              <div
                data-cursor="hover"
                className="group relative glass rounded-2xl p-6 h-full overflow-hidden hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <d.icon className="h-6 w-6 text-accent" />
                <div className="mt-4 font-display text-lg">{d.t}</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
const quotes = [
  {
    q: "Entregou um sistema em 6 semanas que dois times não conseguiram em 6 meses. Craft de outro nível.",
    n: "Ana Ribeiro",
    r: "Head of Product · Fintech",
  },
  {
    q: "É raro encontrar alguém que domina engenharia, design e produto na mesma medida. O Matheus consegue.",
    n: "Rafael Mendes",
    r: "CTO · SaaS B2B",
  },
  {
    q: "As integrações de IA que ele construiu multiplicaram nossa produtividade. Muito além do esperado.",
    n: "Juliana Costa",
    r: "Founder · Startup de IA",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Depoimentos"
          title={<>Palavras de quem <span className="text-gradient">confia</span> no meu trabalho.</>}
        />
        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <Reveal key={q.n} delay={i * 0.08}>
              <figure className="group relative glass rounded-2xl p-7 h-full hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-8 -left-4 font-display text-[140px] leading-none text-primary/10 select-none">"</div>
                <blockquote className="relative text-foreground/90 leading-relaxed">
                  {q.q}
                </blockquote>
                <figcaption className="relative mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <div className="text-sm font-medium">{q.n}</div>
                    <div className="text-xs text-muted-foreground">{q.r}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT + FOOTER ============ */
export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-hero opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="glass-strong rounded-3xl p-8 sm:p-14 overflow-hidden relative">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-accent" /> Contato
              </div>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.05]">
                Vamos construir algo <span className="text-gradient">inesquecível</span>.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
                Estou aberto a projetos freelance, colaborações de longo prazo e conversas sobre
                produtos com IA. Responderei em até 24 horas.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { icon: Mail, label: "mfelislino@gmail.com", href: "mailto:mfelislino@gmail.com" },
                  { icon: Github, label: "github.com/matheusfelislino", href: "https://github.com/matheusfelislino" },
                  { icon: Linkedin, label: "linkedin.com/in/matheusfelislino", href: "https://www.linkedin.com/in/matheus-felis-lino" },
                  { icon: MessageCircle, label: "WhatsApp direto", href: "https://wa.me/5519994439440" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl glass px-4 py-3 hover:bg-white/5 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 border border-white/10">
                      <c.icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground/90 flex-1">{c.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada — obrigado!"); }}
              className="glass rounded-2xl p-6 sm:p-7 space-y-4"
            >
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
                <input
                  required
                  className="mt-1.5 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Como devo te chamar?"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1.5 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="voce@empresa.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  className="mt-1.5 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Conte um pouco sobre o projeto…"
                />
              </div>
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary via-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground glow-violet overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Send className="h-4 w-4" />
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display text-2xl text-gradient"></div>
            <p className="mt-1 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Matheus Felis · Feito com React, Three.js e obsessão por detalhes.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {[Github, Linkedin, Mail].map((I, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full glass hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <I className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
