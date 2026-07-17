import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import * as THREE from "three";

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 3800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.6 + Math.sin(i * 0.5) * 0.05;
      arr[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      arr[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.08;
    ref.current.rotation.x += delta * 0.03;
    const t = state.clock.elapsedTime;
    const mx = state.pointer.x;
    const my = state.pointer.y;
    ref.current.rotation.y += mx * 0.002;
    ref.current.rotation.x += my * 0.002;
    ref.current.scale.setScalar(1 + Math.sin(t * 0.6) * 0.03);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function InnerCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.15;
    ref.current.rotation.x = s.clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#7c3aed"
          emissiveIntensity={0.9}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#7c3aed" />
      <pointLight position={[-3, -2, -3]} intensity={1.6} color="#22d3ee" />
      <InnerCore />
      <ParticleSphere />
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// --- CONFIGURAÇÃO DAS ÓRBITAS INDIVIDUAIS ---
const technologies = [
  { name: "React · TS", color: "text-accent", radius: 210, duration: 40, direction: 1, startAngle: 0 },
  { name: "Python", color: "text-primary", radius: 280, duration: 55, direction: -1, startAngle: 45 },
  { name: "Spring Boot", color: "text-accent", radius: 240, duration: 45, direction: 1, startAngle: 90 },
  { name: "JavaScript", color: "text-primary", radius: 310, duration: 60, direction: -1, startAngle: 120 },
  { name: "FastAPI", color: "text-accent", radius: 260, duration: 38, direction: 1, startAngle: 180 },
  { name: "RestAPI", color: "text-primary", radius: 220, duration: 48, direction: -1, startAngle: 210 },
  { name: "MySQL", color: "text-accent", radius: 290, duration: 50, direction: 1, startAngle: 250 },
  { name: "PostgreSQL", color: "text-primary", radius: 230, duration: 42, direction: -1, startAngle: 280 },
  { name: "MongoDB", color: "text-accent", radius: 270, duration: 52, direction: 1, startAngle: 310 },
  { name: "Docker", color: "text-primary", radius: 330, duration: 65, direction: -1, startAngle: 340 },
  { name: "AI · LLMs", color: "text-accent", radius: 250, duration: 41, direction: 1, startAngle: 20 },
  { name: "Cloud", color: "text-primary", radius: 300, duration: 58, direction: -1, startAngle: 75 },
  { name: "Java", color: "text-accent", radius: 190, duration: 35, direction: 1, startAngle: 150 },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] pt-32 pb-16 bg-hero overflow-hidden">
      {/* animated grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {/* orbs */}
      <div className="absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <div>
       <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Aberto a projetos e oportunidades · 2026
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95]"
        >
          <span className="block text-foreground/95">Matheus</span>
          <span className="block text-gradient">Felis</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 text-muted-foreground font-normal tracking-tight">
            Desenvolvedor Full-Stack em formação, com foco em IA
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Estudante de Sistemas de Informação construindo produtos que unem{" "}
          <span className="text-foreground">design cuidado</span>,{" "}
          <span className="text-foreground">código bem estruturado</span> e{" "}
          <span className="text-foreground">inteligência artificial</span> aprendendo rápido e
          entregando com qualidade real.
        </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            {/* ADICIONADO: overflow-hidden no final da className abaixo */}
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary via-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground glow-violet transition-transform hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/5 transition-colors"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              Entrar em Contato
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              { k: "15+", v: "Projetos" },
              { k: "2+", v: "Anos" },
              { k: "10+", v: "Stacks" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl px-4 py-3">
                <div className="font-display text-2xl font-semibold text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square w-full max-w-[600px] mx-auto"
        >
          {/* Mantivemos apenas o brilho difuso ao fundo para contraste */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-primary/30 via-transparent to-accent/20 blur-3xl" />
          
          <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>

          {/* floating chips (Atmosfera animada e orgânica) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            {technologies.map((tech) => {
              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  initial={{ rotate: tech.startAngle }}
                  animate={{ rotate: tech.startAngle + (360 * tech.direction) }}
                  transition={{ duration: tech.duration, repeat: Infinity, ease: "linear" }}
                >
                  <div style={{ transform: `translateY(-${tech.radius}px)` }}>
                    <motion.div
                      className="glass rounded-xl px-3 py-2 text-xs pointer-events-auto whitespace-nowrap shadow-lg backdrop-blur-md border border-white/10"
                      initial={{ rotate: -tech.startAngle }}
                      animate={{ rotate: -(tech.startAngle + (360 * tech.direction)) }}
                      transition={{ duration: tech.duration, repeat: Infinity, ease: "linear" }}
                    >
                      <span className={tech.color}>◆</span> {tech.name}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground">
        <span>scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}