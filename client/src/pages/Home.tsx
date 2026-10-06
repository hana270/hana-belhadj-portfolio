import React, { useEffect, useRef, useState } from 'react';
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  FileUser,
  GraduationCap,
  Github,
  Globe,
  Linkedin,
  Mail,
  MailCheck,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

// IMPORT DES NOUVEAUX COMPOSANTS
import { DotBorderButton } from "@/components/ui/dot-border-button";
import { HandwritingText } from "@/components/ui/handwriting-text";

/* ============================================================
   CV CONSTANTS & URLS
   ============================================================ */

const CV_VIEW_URL =
  'https://drive.google.com/file/d/1fp03il8LgyC_nv-7ffmVnVVy4Hci_h5M/view?usp=sharing';

/* ============================================================
   DATA
   ============================================================ */

const EXPERIENCE = [
  {
    date: 'Fév. — Juin 2025 · 5 mois',
    role: 'Développeuse Full-Stack — Stagiaire',
    company: 'Hammamet Valley Hub',
    detail:
      "Plateforme e-commerce dédiée à la vente de récupérateurs d'eau de pluie, pour répondre à un enjeu majeur : la pénurie d'eau. Visualisation 3D et réalité augmentée des produits, suivi de stock avec rapports, réseau d'installateurs affectés automatiquement avec calendrier d'interventions, messagerie admin/client/installateur, notifications temps réel. Architecture microservices (Spring Boot, Angular, API Gateway, Eureka) avec tolérance aux pannes et répartition de charge (Load Balancing), méthodologie agile Scrum.",
    tags: ['Spring Boot', 'Angular', 'Microservices', 'Eureka', 'API Gateway'],
  },
  {
    date: 'Juin — Sept. 2024 · 4 mois',
    role: 'Agent de guichet — Saisonnière',
    company: 'La Poste Tunisienne',
    detail:
      'Gestion des opérations financières (retraits, dépôts, virements) et communication client, avec les systèmes Uniposte et monétiques pour la gestion des comptes, cartes et mandats.',
    tags: ["Travail d'équipe", 'Résolution de problèmes'],
  },
  {
    date: 'Janv. — Fév. 2024 · 2 mois',
    role: 'Stagiaire Développeuse Web',
    company: 'Yes-Internet',
    detail:
      "Conception et développement d'un site e-commerce complet avec CodeIgniter 4, PHP, HTML, CSS et JavaScript, MySQL — pour une expérience utilisateur intuitive et des fonctionnalités robustes.",
    tags: ['PHP', 'CodeIgniter 4', 'MySQL'],
  },
  {
    date: 'Janv. 2023 · 1 mois',
    role: 'Stagiaire',
    company: 'UIB — Groupe Société Générale',
    detail:
      "Stage d'initiation avec développement d'un site vitrine statique en HTML et CSS.",
    tags: ['HTML', 'CSS'],
  },
];

const EDUCATION = [
  {
    date: 'Sept. 2025 — Juin 2027',
    degree:
      'Master de recherche en Informatique Décisionnelle et Intelligente (IDIAG)',
    school: 'ESC Tunis (co-diplomation ISAMM)',
    detail:
      "Data mining, apprentissage automatique, systèmes d'aide à la décision, IA appliquée à la gestion, modélisation et optimisation.",
  },
  {
    date: '2022 — 2025',
    degree: 'Diplôme Bac+3 — Informatique',
    school: 'Institut Supérieur des Études Technologiques de Nabeul',
    detail:
      'Développement web & mobile, bases de données, architectures logicielles.',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Associate Data Analyst',
    issuer: 'DataCamp',
    date: 'Août 2026',
    id: 'DAA0010386641112',
    color: '#22C55E',
    url: 'https://www.datacamp.com/certificate/DAA0010386641112',
  },
  {
    title: 'Développez Full Stack avec Spring Boot 3 et Angular',
    issuer: 'Udemy',
    date: 'Nov. 2024 · 26.5h',
    id: 'UC-c1384683',
    color: '#8B5CF6',
    url: '',
  },
  {
    title: 'SkillQuest — Generative AI Literacy',
    issuer: 'Simplilearn SkillUp',
    date: 'Août 2026',
    id: '46698540',
    color: '#F59E0B',
    url: '',
  },
];

const SERVICES = [
  {
    icon: Globe,
    title: 'Sites web vitrines & sur-mesure',
    desc: 'Sites professionnels pour indépendants, commerces ou entreprises — design moderne, rapide et facile à faire évoluer.',
    color: 'from-violet-600 to-fuchsia-600',
  },
  {
    icon: Code2,
    title: 'Applications web & mobiles responsives',
    desc: "Applications sur-mesure, e-commerce ou tableaux de bord, pensés pour s'adapter parfaitement à tous les écrans.",
    color: 'from-cyan-600 to-blue-600',
  },
  {
    icon: FileUser,
    title: 'CV professionnels ATS-Friendly',
    desc: 'Des CV clairs et structurés, optimisés pour les filtres de recrutement automatiques tout en restant agréables à lire.',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    icon: MailCheck,
    title: "Cartes d'invitation virtuelles",
    desc: "Faire-part et invitations digitales élégantes pour mariages, fiançailles ou événements — à partager facilement en ligne.",
    color: 'from-rose-600 to-orange-500',
  },
];

const PROJECTS = [
  {
    cat: 'web',
    badge: 'Live',
    title: 'Employee Manager — CRUD',
    type: 'Django',
    desc: 'Gestion des employés (CRUD) avec interface simple et moderne, déployée sur Vercel.',
    tags: ['Django', 'Python', 'Vercel'],
    github: 'https://github.com/hana270/Application-Django',
  },
  {
    cat: 'web',
    badge: 'Référencé CV',
    title: 'Gestion des Recettes — SOA',
    type: 'Spring Boot & Angular',
    desc: 'Architecture orientée services : Keycloak, JWT, API REST sécurisée.',
    tags: ['Spring Boot', 'Angular', 'Keycloak'],
    github: 'https://github.com/hana270/Atelier-S.O.A',
  },
  {
    cat: 'web',
    badge: 'Stage',
    title: 'Parapharmacie E-Commerce',
    type: 'Yes-Internet · CodeIgniter 4',
    desc: 'Catalogue, panier, commandes, réclamations, espace admin.',
    tags: ['PHP', 'CodeIgniter 4', 'MySQL'],
    github: 'https://github.com/hana270/E-commerce-CodeIgniter-4',
  },
  {
    cat: 'web',
    badge: 'Stage',
    title: 'Système Parapharmacie (MVC)',
    type: 'Base SQL & MVC',
    desc: 'Seconde plateforme MVC pour la gestion de stock.',
    tags: ['PHP', 'CodeIgniter', 'UML'],
    github: 'https://github.com/hana270/Codelgniter',
  },
  {
    cat: 'web',
    badge: 'Front-end',
    title: 'Gestion des Étudiants',
    type: 'Angular & JSON Server',
    desc: 'CRUD dynamique consommant une API JSON.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
    github: 'https://github.com/hana270/angularproject',
  },
  {
    cat: 'web',
    badge: 'Full-Stack',
    title: 'Application Web Laravel',
    type: 'PHP / Laravel',
    desc: 'Blade, Vite, Eloquent ORM.',
    tags: ['Laravel', 'Blade', 'Eloquent'],
    github: 'https://github.com/hana270/Project',
  },
  {
    cat: 'desktop',
    badge: 'Desktop',
    title: 'Atelier de Réparation',
    type: 'Java / Swing',
    desc: 'Gestion clients, équipements, pièces, ordres de réparation.',
    tags: ['Java', 'Swing', 'POO'],
    github: 'https://github.com/hana270/Atelier-Reparation',
  },
  {
    cat: 'mobile',
    badge: 'Mobile',
    title: 'Application Android Native',
    type: 'Android Studio / Java',
    desc: "Composants d'interface et activités standards.",
    tags: ['Android Studio', 'Java'],
    github: 'https://github.com/hana270/AndroidStudio/tree/main/app/src',
  },
];

const SKILLS = [
  'Java',
  'PHP',
  'Python',
  'TypeScript',
  'Spring Boot',
  'Angular',
  'Django',
  'Laravel',
  'MySQL',
  'JWT / Keycloak',
  'SQL',
  'Analyse de données',
];

const FILTERS = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop' },
];

const NAV_ITEMS = [
  'parcours',
  'certifications',
  'services',
  'projets',
  'competences',
];

/* ============================================================
   REVEAL COMPONENT
   ============================================================ */

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealClasses = visible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${revealClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   COUNT UP COMPONENT
   ============================================================ */

function CountUp({
  value,
  suffix = '',
}: {
  value: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const target = parseInt(value, 10);
          const duration = 900;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setN(Math.round(target * progress));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ============================================================
   MAIN HOME PAGE
   ============================================================ */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visibleProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.cat === filter);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="bg-[#0B0B14] text-slate-800 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        .font-display {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes hb-fade-up {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hb-hero-anim {
          animation: hb-fade-up .8s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes hb-float {
          0%,100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .hb-float {
          animation: hb-float 5s ease-in-out infinite;
        }

        @keyframes hb-pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(139,92,246,.45);
          }
          70% {
            box-shadow: 0 0 0 14px rgba(139,92,246,0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(139,92,246,0);
          }
        }

        .hb-pulse {
          animation: hb-pulse-ring 2.4s ease-out infinite;
        }

        @keyframes hb-gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hb-gradient-text {
          background-size: 200% 200%;
          animation: hb-gradient-move 6s ease infinite;
        }

        /* ================= STYLES LOCAUX FORCÉS POUR BOUTONS CV & VOIR LE CODE ================= */
        .btn-cv-hero {
          background-color: #ffffff !important;
          color: #0f172a !important;
          opacity: 1 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.5rem !important;
          padding: 0.85rem 1.75rem !important;
          border-radius: 9999px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.25) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .btn-cv-hero:hover {
          transform: translateY(-3px) scale(1.02) !important;
          background-color: #f8fafc !important;
          box-shadow: 0 15px 30px -5px rgba(255, 255, 255, 0.4) !important;
        }

        .btn-cv-dark {
          background-color: #0f172a !important;
          color: #ffffff !important;
          opacity: 1 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.6rem !important;
          padding: 0.85rem 2rem !important;
          border-radius: 9999px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          border: 2px solid #7c3aed !important;
          box-shadow: 0 10px 20px -5px rgba(124, 58, 237, 0.3) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .btn-cv-dark:hover {
          background-color: #7c3aed !important;
          color: #ffffff !important;
          transform: translateY(-3px) scale(1.02) !important;
          box-shadow: 0 15px 30px -5px rgba(124, 58, 237, 0.6) !important;
        }

        .btn-code-banner {
          background: rgba(255, 255, 255, 0.15) !important;
          color: #ffffff !important;
          opacity: 1 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.5rem !important;
          padding: 0.75rem 1.5rem !important;
          border-radius: 9999px !important;
          font-weight: 700 !important;
          border: 1.5px solid rgba(255, 255, 255, 0.4) !important;
          backdrop-filter: blur(8px) !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .btn-code-banner:hover {
          background-color: #ffffff !important;
          color: #0f172a !important;
          border-color: #ffffff !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.35) !important;
        }

        .btn-code-card {
          color: #0f172a !important;
          opacity: 1 !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 0.5rem !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          transition: all 0.2s ease-in-out !important;
        }
        .btn-code-card:hover {
          color: #7c3aed !important;
          transform: translateX(3px) !important;
        }
      `}</style>

      {
 /* ============================================================
   NAVBAR (AMÉLIORÉE, VISIBLE & RESPONSIVE)
   ============================================================ */
<nav
  className={`fixed top-0 z-50 w-full transition-all duration-300 ${
    scrolled
      ? 'bg-[#0B0B14]/90 shadow-2xl shadow-violet-950/30 backdrop-blur-xl border-b border-white/10 h-[72px]'
      : 'bg-[#0B0B14]/60 backdrop-blur-md border-b border-white/5 h-[80px]'
  }`}
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-full flex items-center justify-between">
    
    {/* LOGO BRAND */}
    <button
      onClick={() => scrollTo('hero')}
      className="flex items-center gap-3 group focus:outline-none"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 font-display font-extrabold text-white text-base shadow-lg shadow-violet-500/30 group-hover:scale-105 group-hover:shadow-violet-500/50 transition-all duration-300">
        HB
      </span>
      <div className="flex flex-col text-left">
        <span className="font-display font-extrabold text-lg text-white tracking-tight group-hover:text-violet-400 transition-colors">
          Hana Belhadj
        </span>
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider -mt-1">
          Portfolio
        </span>
      </div>
    </button>

    {/* NAV LINKS (DESKTOP) */}
    <div className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner">
      {NAV_ITEMS.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="relative px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors duration-200 group"
        >
          {id}
          <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100 shadow-sm shadow-violet-500" />
        </button>
      ))}
    </div>

    {/* ACTIONS (DESKTOP) */}
    <div className="hidden lg:flex items-center gap-3">
      {/* BOUTON CONSULTATION CV — DESIGN ULTRA VISIBLE ET PROFESSIONNEL */}
      <a
        href={CV_VIEW_URL}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-slate-900 hover:bg-violet-50 hover:text-violet-700 shadow-md shadow-white/10 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border border-white"
        style={{ color: '#0f172a', opacity: 1 }}
      >
        <FileUser size={16} className="text-violet-600" />
        <span className="text-slate-900 font-bold" style={{ color: '#0f172a' }}>
          Consulter le CV
        </span>
      </a>

      {/* BOUTON ME CONTACTER */}
      <button
        onClick={() => scrollTo('contact')}
        className="rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 p-[1.5px] font-bold text-xs text-white shadow-lg shadow-violet-900/40 hover:shadow-violet-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="block bg-[#0B0B14] hover:bg-transparent rounded-full px-5 py-2.5 transition-colors duration-300 text-white font-bold">
          Me contacter
        </span>
      </button>
    </div>

    {/* MOBILE MENU TOGGLE */}
    <button
      className="lg:hidden text-slate-200 hover:text-white p-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors active:scale-95"
      onClick={() => setMenuOpen((v) => !v)}
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </div>

  {/* MENU MOBILE INTERACTIF ET FULL RESPONSIVE */}
  {menuOpen && (
    <div className="lg:hidden absolute top-full left-0 w-full px-5 py-5 bg-[#0B0B14]/95 border-b border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
      <div className="flex flex-col gap-1">
        {[...NAV_ITEMS, 'contact'].map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-left py-3 px-4 font-semibold text-slate-200 hover:text-white capitalize rounded-xl hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors flex items-center justify-between"
          >
            <span>{id}</span>
            <span className="text-xs text-violet-400 opacity-60">→</span>
          </button>
        ))}
      </div>

      <div className="pt-2 flex flex-col gap-2">
        <a
          href={CV_VIEW_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white font-extrabold text-sm text-slate-900 hover:bg-violet-50 transition-all active:scale-98 shadow-md"
          style={{ color: '#0f172a' }}
        >
          <FileUser size={18} className="text-violet-600" />
          <span style={{ color: '#0f172a' }}>Consulter le CV</span>
        </a>
      </div>
    </div>
  )}
</nav>

}

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#0B0B14] pt-40 pb-28"
      >
        <div className="pointer-events-none absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[110px]" />
        <div className="pointer-events-none absolute top-10 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/25 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-500/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
            <div>
              <div className="hb-hero-anim">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cyan-300">
                  <Sparkles size={14} />
                  Disponible pour un poste junior &amp; missions freelance
                </span>
              </div>

              <h1
                className="hb-hero-anim font-display mt-6 text-white font-extrabold leading-[1.05] text-[clamp(2.4rem,5.5vw,4.2rem)]"
                style={{ animationDelay: '90ms' }}
              >
                Développeuse{' '}
                <span className="hb-gradient-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                  <HandwritingText
                    words={["Full-Stack", "Web", "Mobile", "Freelance", "Décisionnelle"]}
                    className="text-violet-400"
                    height="1.15em"
                    interval={3000}
                    duration={1.2}
                  />
                </span>
              </h1>

              <p
                className="hb-hero-anim mt-6 max-w-xl text-slate-300 text-lg leading-relaxed"
                style={{ animationDelay: '180ms' }}
              >
                Étudiante en Master Informatique Décisionnelle, je conçois des
                applications web robustes — Spring Boot, Angular, Django,
                Laravel. Disponible aussi en freelance pour des sites web, des
                CV ATS-Friendly et des cartes d'invitation virtuelles.
              </p>

              {/* HERO BUTTONS (CV AVEC CSS LOCAL FORCÉ) */}
              <div
                className="hb-hero-anim mt-9 flex flex-wrap items-center gap-4"
                style={{ animationDelay: '260ms' }}
              >
                <button
                  onClick={() => scrollTo('projets')}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-violet-900/40 hover:scale-105 hover:shadow-violet-700/50 transition-all"
                >
                  Voir mes projets
                </button>

                <a
                  href={CV_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cv-hero"
                >
                  <FileUser size={18} style={{ color: '#7c3aed' }} />
                  <span>Consulter le CV</span>
                </a>
              </div>

              {/* BOUTON ANIMÉ AVEC DOT BORDER */}
              <div
                className="hb-hero-anim mt-8"
                style={{ animationDelay: '320ms' }}
              >
                <div className="w-64 h-14">
                  <DotBorderButton mode="dark" className="h-full w-full" />
                </div>
              </div>

              <div
                className="hb-hero-anim mt-8 flex flex-wrap gap-8"
                style={{ animationDelay: '340ms' }}
              >
                {[
                  ['8', 'Projets'],
                  ['4', 'Expériences'],
                  ['3', 'Certifications'],
                  ['2', 'Démos live'],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl font-extrabold text-white">
                      <CountUp value={n} />+
                    </div>
                    <div className="text-xs font-semibold text-slate-400">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO PHOTO */}
            <div
              className="hb-hero-anim"
              style={{ animationDelay: '200ms' }}
            >
              <div className="hb-float relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className="hb-pulse aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500">
                  <img
                    src="/hana-photo.jpg"
                    alt="Hana Belhadj"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.insertAdjacentHTML(
                        'beforeend',
                        '<div class="h-full w-full flex items-center justify-center font-display text-6xl font-extrabold text-white">HB</div>'
                      );
                    }}
                  />
                </div>

                <h5 className="font-display mt-5 text-lg font-bold text-white">
                  Hana Belhadj
                </h5>
                <p className="text-sm text-slate-400">
                  Master Informatique Décisionnelle · ESC Tunis
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-300 flex items-center gap-1">
                    <Code2 size={12} />
                    Spring Boot
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-fuchsia-300 flex items-center gap-1">
                    <Globe size={12} />
                    Angular
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARCOURS ================= */}
      <section id="parcours" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="mb-14 max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">
              Parcours
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">
              Expériences professionnelles
            </h2>
          </Reveal>

          <div className="space-y-8">
            {EXPERIENCE.map((item, i) => (
              <Reveal key={item.company} delay={i * 70}>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100 hover:-translate-y-1 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <BriefcaseBusiness
                      size={18}
                      className="text-violet-600"
                    />
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {item.role}
                  </h3>
                  <p className="font-semibold text-violet-600 mb-3">
                    {item.company}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 mb-10 max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">
              Formation
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-slate-900">
              Études
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.school} delay={i * 80}>
                <div className="rounded-2xl border border-slate-100 p-6 h-full hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100 hover:-translate-y-1 transition-all">
                  <GraduationCap
                    size={22}
                    className="text-cyan-600 mb-3"
                  />
                  <p className="text-xs font-bold uppercase text-slate-400">
                    {e.date}
                  </p>
                  <h4 className="font-display font-bold text-slate-900 mt-1">
                    {e.degree}
                  </h4>
                  <p className="text-sm font-semibold text-cyan-600 mt-1">
                    {e.school}
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    {e.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* BOUTON SECTION PARCOURS (CV AVEC CSS LOCAL FORCÉ) */}
          <Reveal
            delay={120}
            className="mt-14 flex flex-col items-center"
          >
            <a
              href={CV_VIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-cv-dark"
            >
              <FileUser size={18} style={{ color: '#a855f7' }} />
              <span>Consulter le CV</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section id="certifications" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="mb-12 text-center max-w-xl mx-auto">
            <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">
              Certifications
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">
              Formations validées
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="rounded-2xl bg-white border border-slate-100 p-6 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${c.color}1A` }}
                  >
                    <Award
                      size={22}
                      style={{ color: c.color }}
                    />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 leading-snug">
                    {c.title}
                  </h4>
                  <p
                    className="text-sm font-semibold mt-1"
                    style={{ color: c.color }}
                  >
                    {c.issuer}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    {c.date} · ID {c.id}
                  </p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-violet-600"
                    >
                      <BadgeCheck size={16} />
                      Vérifier le certificat
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="mb-12 text-center max-w-xl mx-auto">
            <p className="text-xs font-extrabold uppercase tracking-widest text-fuchsia-600">
              Freelance
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">
              Ce que je peux faire pour vous
            </h2>
            <p className="mt-3 text-slate-500">
              En dehors de mes projets personnels, voici les services que je
              propose.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group rounded-3xl border border-slate-100 p-7 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <s.icon size={22} />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {s.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-10 text-center">
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-full bg-slate-900 text-white font-bold px-8 py-3.5 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-200 transition-all"
            >
              Discuter de votre projet
            </button>
          </Reveal>
        </div>
      </section>

      {/* ================= PROJETS ================= */}
      <section id="projets" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">
                Portfolio technique
              </p>
              <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">
                Projets &amp; dépôts
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    filter === f.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-500 border border-slate-200 hover:border-violet-300'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* COLOR MEMORY FEATURED BANNER */}
          <Reveal>
            <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-violet-950 p-8 lg:p-12">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-slate-900">
                    <PlayCircle
                      size={14}
                      className="text-emerald-500"
                    />
                    Démo en ligne
                  </span>
                  <h3 className="font-display mt-4 text-3xl font-extrabold text-white">
                    Color Memory Challenge
                  </h3>
                  <p className="mt-3 max-w-lg text-slate-300">
                    Jeu de mémoire responsive : reproduire une séquence de
                    couleurs, difficulté progressive, score sauvegardé.
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:w-52">
                  <a
                    href="https://color-memory-challenge.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-center font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-lg"
                  >
                    Essayer la démo
                  </a>

                  {/* BOUTON VOIR LE CODE BANNIÈRE (CSS LOCAL FORCÉ) */}
                  <a
                    href="https://github.com/hana270/color-memory-challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-code-banner"
                  >
                    <Github size={18} />
                    <span>Voir le code</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* LISTE DES PROJETS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleProjects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <div className="rounded-2xl bg-white border border-slate-100 p-6 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-violet-50 text-violet-600 px-3 py-1 text-xs font-bold mb-3">
                      {p.badge}
                    </span>
                    <h5 className="font-display font-bold text-slate-900">
                      {p.title}
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">{p.type}</p>
                    <p className="text-sm text-slate-600 mt-3">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BOUTON VOIR LE CODE DE CARTE */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-code-card mt-5"
                  >
                    <Github size={16} />
                    <span>Voir le code</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPETENCES ================= */}
      <section
        id="competences"
        className="relative overflow-hidden bg-[#0B0B14] py-24"
      >
        <div className="pointer-events-none absolute top-0 left-1/4 h-[360px] w-[360px] rounded-full bg-violet-600/25 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="text-center mb-12">
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
              Expertise
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-white">
              Compétences &amp; technologies
            </h2>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {SKILLS.map((skill, i) => (
              <Reveal key={skill} delay={i * 30}>
                <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-display font-bold text-white backdrop-blur-md hover:border-violet-500 hover:bg-violet-600/20 hover:scale-105 transition-all">
                  {skill}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">
                  Contact
                </p>
                <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">
                  Parlons de votre projet
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  À la recherche d'une opportunité en tant que développeuse
                  junior ou d'un accompagnement freelance sur vos projets web
                  et numériques ? N'hésitez pas à m'écrire.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:hanabelhadj27@gmail.com"
                    className="flex items-center gap-4 text-slate-700 hover:text-violet-600 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400">
                        Email
                      </div>
                      <div className="font-semibold">
                        hanabelhadj27@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+21652663607"
                    className="flex items-center gap-4 text-slate-700 hover:text-violet-600 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400">
                        Téléphone
                      </div>
                      <div className="font-semibold">+216 52 663 607</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="h-12 w-12 rounded-xl bg-fuchsia-50 flex items-center justify-center text-fuchsia-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400">
                        Localisation
                      </div>
                      <div className="font-semibold">
                        Hammamet Nord, Nabeul, Tunis (Disponible en télétravail)
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Message envoyé avec succès !');
                }}
                className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 shadow-xl shadow-slate-100/50 flex flex-col gap-5"
              >
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jean Dupont"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-violet-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                    Votre email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: jean@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-violet-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                    Votre message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Bonjour Hana, je souhaite échanger avec vous concernant une opportunité de collaboration ou la réalisation d'un projet web..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-violet-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-slate-900 py-4 font-bold text-white hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-200 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Envoyer le message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0B0B14] border-t border-white/10 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 font-display font-extrabold text-white text-xs">
              HB
            </span>
            <span className="font-display font-bold text-white">
              Hana Belhadj
            </span>
          </div>

          <p className="text-xs">
            © {new Date().getFullYear()} — Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/hana270"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-violet-600 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-violet-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}