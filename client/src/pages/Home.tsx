import { useEffect, useRef, useState } from 'react';
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  FileDown,
  FileUser,
  GraduationCap,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MailCheck,
  Phone,
  PlayCircle,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

/* ============================================================
   CV
   ============================================================ */

// Le fichier PDF doit être placé dans client/public/cv/CV_Hana_Belhadj.pdf
const CV_URL = '/cv/CV_Hana_Belhadj.pdf';

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
    detail: "Stage d'initiation avec développement d'un site vitrine statique en HTML et CSS.",
    tags: ['HTML', 'CSS'],
  },
];

const EDUCATION = [
  {
    date: 'Sept. 2025 — Juin 2027',
    degree: 'Master de recherche en Informatique Décisionnelle et Intelligente (IDIAG)',
    school: 'ESC Tunis (co-diplomation ISAMM)',
    detail: "Data mining, apprentissage automatique, systèmes d'aide à la décision, IA appliquée à la gestion, modélisation et optimisation.",
  },
  {
    date: '2022 — 2025',
    degree: 'Diplôme Bac+3 — Informatique',
    school: 'Institut Supérieur des Études Technologiques de Nabeul',
    detail: 'Développement web & mobile, bases de données, architectures logicielles.',
  },
];

const CERTIFICATIONS = [
  { title: 'Associate Data Analyst', issuer: 'DataCamp', date: 'Août 2026', id: 'DAA0010386641112', color: '#22C55E', url: 'https://www.datacamp.com/certificate/DAA0010386641112' },
  { title: 'Développez Full Stack avec Spring Boot 3 et Angular', issuer: 'Udemy', date: 'Nov. 2024 · 26.5h', id: 'UC-c1384683', color: '#8B5CF6', url: '' },
  { title: 'SkillQuest — Generative AI Literacy', issuer: 'Simplilearn SkillUp', date: 'Août 2026', id: '46698540', color: '#F59E0B', url: '' },
];

const SERVICES = [
  { icon: Globe, title: 'Sites web vitrines & sur-mesure', desc: 'Sites professionnels pour indépendants, commerces ou entreprises — design moderne, rapide et facile à faire évoluer.', color: 'from-violet-600 to-fuchsia-600' },
  { icon: Code2, title: 'Applications web & mobiles responsives', desc: "Applications sur-mesure, e-commerce ou tableaux de bord, pensés pour s'adapter parfaitement à tous les écrans.", color: 'from-cyan-600 to-blue-600' },
  { icon: FileUser, title: 'CV professionnels ATS-Friendly', desc: 'Des CV clairs et structurés, optimisés pour les filtres de recrutement automatiques tout en restant agréables à lire.', color: 'from-emerald-600 to-teal-600' },
  { icon: MailCheck, title: "Cartes d'invitation virtuelles", desc: "Faire-part et invitations digitales élégantes pour mariages, fiançailles ou événements — à partager facilement en ligne.", color: 'from-rose-600 to-orange-500' },
];

const PROJECTS = [
  { cat: 'web', badge: 'Live', title: 'Employee Manager — CRUD', type: 'Django', desc: 'Gestion des employés (CRUD) avec interface simple et moderne, déployée sur Vercel.', tags: ['Django', 'Python', 'Vercel'], github: 'https://github.com/hana270/Application-Django' },
  { cat: 'web', badge: 'Référencé CV', title: 'Gestion des Recettes — SOA', type: 'Spring Boot & Angular', desc: 'Architecture orientée services : Keycloak, JWT, API REST sécurisée.', tags: ['Spring Boot', 'Angular', 'Keycloak'], github: 'https://github.com/hana270/Atelier-S.O.A' },
  { cat: 'web', badge: 'Stage', title: 'Parapharmacie E-Commerce', type: 'Yes-Internet · CodeIgniter 4', desc: 'Catalogue, panier, commandes, réclamations, espace admin.', tags: ['PHP', 'CodeIgniter 4', 'MySQL'], github: 'https://github.com/hana270/E-commerce-CodeIgniter-4' },
  { cat: 'web', badge: 'Stage', title: 'Système Parapharmacie (MVC)', type: 'Base SQL & MVC', desc: 'Seconde plateforme MVC pour la gestion de stock.', tags: ['PHP', 'CodeIgniter', 'UML'], github: 'https://github.com/hana270/Codelgniter' },
  { cat: 'web', badge: 'Front-end', title: 'Gestion des Étudiants', type: 'Angular & JSON Server', desc: 'CRUD dynamique consommant une API JSON.', tags: ['Angular', 'TypeScript', 'RxJS'], github: 'https://github.com/hana270/angularproject' },
  { cat: 'web', badge: 'Full-Stack', title: 'Application Web Laravel', type: 'PHP / Laravel', desc: 'Blade, Vite, Eloquent ORM.', tags: ['Laravel', 'Blade', 'Eloquent'], github: 'https://github.com/hana270/Project' },
  { cat: 'desktop', badge: 'Desktop', title: 'Atelier de Réparation', type: 'Java / Swing', desc: 'Gestion clients, équipements, pièces, ordres de réparation.', tags: ['Java', 'Swing', 'POO'], github: 'https://github.com/hana270/Atelier-Reparation' },
  { cat: 'mobile', badge: 'Mobile', title: 'Application Android Native', type: 'Android Studio / Java', desc: "Composants d'interface et activités standards.", tags: ['Android Studio', 'Java'], github: 'https://github.com/hana270/AndroidStudio/tree/main/app/src' },
];

const SKILLS = ['Java', 'PHP', 'Python', 'TypeScript', 'Spring Boot', 'Angular', 'Django', 'Laravel', 'MySQL', 'JWT / Keycloak', 'SQL', 'Analyse de données'];

const FILTERS = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop' },
];

const NAV_ITEMS = ['parcours', 'certifications', 'services', 'projets', 'competences'];

/* ============================================================
   REVEAL
   ============================================================ */

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   COUNT UP
   ============================================================ */

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null);
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
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setN(Math.round(target * progress));
            if (progress < 1) requestAnimationFrame(tick);
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
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ============================================================
   MAIN
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

  const visibleProjects = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="bg-[#0B0B14] text-slate-800 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display{font-family:'Plus Jakarta Sans',sans-serif;}
        body{font-family:'Inter',sans-serif;}

        @keyframes hb-fade-up { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        .hb-hero-anim { animation: hb-fade-up .8s cubic-bezier(.22,1,.36,1) both; }
        @keyframes hb-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-12px); } }
        .hb-float { animation: hb-float 5s ease-in-out infinite; }
        @keyframes hb-pulse-ring { 0%{ box-shadow:0 0 0 0 rgba(139,92,246,.45); } 70%{ box-shadow:0 0 0 14px rgba(139,92,246,0); } 100%{ box-shadow:0 0 0 0 rgba(139,92,246,0); } }
        .hb-pulse { animation: hb-pulse-ring 2.4s ease-out infinite; }
        @keyframes hb-gradient-move { 0%{ background-position:0% 50%; } 50%{ background-position:100% 50%; } 100%{ background-position:0% 50%; } }
        .hb-gradient-text { background-size:200% 200%; animation: hb-gradient-move 6s ease infinite; }
      `}</style>

      {/* ================= NAVBAR ================= */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg shadow-slate-200/50 backdrop-blur-xl' : 'bg-white/60 backdrop-blur-md'}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10 h-[68px] flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 font-display font-extrabold text-white text-sm shadow-md shadow-violet-300 group-hover:scale-105 transition-transform">HB</span>
            <span className="font-display font-extrabold text-lg text-slate-900">Hana Belhadj</span>
          </button>
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="relative px-4 py-2 text-sm font-semibold text-slate-500 hover:text-violet-600 capitalize transition-colors group">
                {id}
                <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CV_URL}
              download="CV_Hana_Belhadj.pdf"
              className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 hover:border-violet-300 hover:text-violet-600 transition-all"
            >
              <FileDown size={16} /> Mon CV
            </a>
            <button onClick={() => scrollTo('contact')} className="rounded-full bg-slate-900 text-white text-sm font-bold px-5 py-2.5 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-200 transition-all">
              Me contacter
            </button>
          </div>
          <button className="lg:hidden text-slate-900" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-1 shadow-lg">
            {[...NAV_ITEMS, 'contact'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left py-2.5 font-semibold text-slate-600 capitalize border-b border-slate-50 last:border-0">
                {id}
              </button>
            ))}
            <a
              href={CV_URL}
              download="CV_Hana_Belhadj.pdf"
              className="flex items-center gap-2 py-2.5 font-semibold text-violet-600"
            >
              <FileDown size={16} /> Télécharger mon CV
            </a>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section id="hero" className="relative overflow-hidden bg-[#0B0B14] pt-40 pb-28">
        <div className="pointer-events-none absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[110px]" />
        <div className="pointer-events-none absolute top-10 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/25 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-500/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
            <div>
              <div className="hb-hero-anim">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cyan-300">
                  <Sparkles size={14} /> Disponible pour un poste junior &amp; missions freelance
                </span>
              </div>
              <h1 className="hb-hero-anim font-display mt-6 text-white font-extrabold leading-[1.05] text-[clamp(2.4rem,5.5vw,4.2rem)]" style={{ animationDelay: '90ms' }}>
                Développeuse{' '}
                <span className="hb-gradient-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                  Full-Stack
                </span>
              </h1>
              <p className="hb-hero-anim mt-6 max-w-xl text-slate-300 text-lg leading-relaxed" style={{ animationDelay: '180ms' }}>
                Étudiante en Master Informatique Décisionnelle, je conçois des applications web robustes — Spring
                Boot, Angular, Django, Laravel. Disponible aussi en freelance pour des sites web, des CV
                ATS-Friendly et des cartes d'invitation virtuelles.
              </p>
              <div className="hb-hero-anim mt-9 flex flex-wrap gap-4" style={{ animationDelay: '260ms' }}>
                <button onClick={() => scrollTo('projets')} className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-violet-900/40 hover:scale-105 hover:shadow-violet-700/50 transition-all">
                  Voir mes projets
                </button>
                <a
                  href={CV_URL}
                  download="CV_Hana_Belhadj.pdf"
                  className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-bold text-white hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  <FileDown size={18} /> Télécharger mon CV
                </a>
              </div>
              <div className="hb-hero-anim mt-12 flex flex-wrap gap-8" style={{ animationDelay: '340ms' }}>
                {[['8', 'Projets'], ['4', 'Expériences'], ['3', 'Certifications'], ['2', 'Démos live']].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl font-extrabold text-white"><CountUp value={n} />+</div>
                    <div className="text-xs font-semibold text-slate-400">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hb-hero-anim" style={{ animationDelay: '200ms' }}>
              <div className="hb-float relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className="hb-pulse aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500">
                  {/* Remplace src par le chemin de ta photo, ex: /hana-photo.jpg */}
                  <img
                    src="/hana-photo.jpg"
                    alt="Hana Belhadj"
                    className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.insertAdjacentHTML('beforeend', '<div class="h-full w-full flex items-center justify-center font-display text-6xl font-extrabold text-white">HB</div>'); }}
                  />
                </div>
                <h5 className="font-display mt-5 text-lg font-bold text-white">Hana Belhadj</h5>
                <p className="text-sm text-slate-400">Master Informatique Décisionnelle · ESC Tunis</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-300 flex items-center gap-1"><Code2 size={12} />Spring Boot</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-fuchsia-300 flex items-center gap-1"><Globe size={12} />Angular</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARCOURS ================= */}
      <section id="parcours" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="mb-14 max-w-xl flex items-start justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">Parcours</p>
              <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">Expériences professionnelles</h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {EXPERIENCE.map((item, i) => (
              <Reveal key={item.company} delay={i * 70}>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100 hover:-translate-y-1 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <BriefcaseBusiness size={18} className="text-violet-600" />
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{item.role}</h3>
                  <p className="font-semibold text-violet-600 mb-3">{item.company}</p>
                  <p className="text-slate-600 leading-relaxed">{item.detail}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => <span key={t} className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 mb-10 max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">Formation</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-slate-900">Études</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.school} delay={i * 80}>
                <div className="rounded-2xl border border-slate-100 p-6 h-full hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100 hover:-translate-y-1 transition-all">
                  <GraduationCap size={22} className="text-cyan-600 mb-3" />
                  <p className="text-xs font-bold uppercase text-slate-400">{e.date}</p>
                  <h4 className="font-display font-bold text-slate-900 mt-1">{e.degree}</h4>
                  <p className="text-sm font-semibold text-cyan-600 mt-1">{e.school}</p>
                  <p className="text-sm text-slate-600 mt-2">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-14 flex justify-center">
            <a
              href={CV_URL}
              download="CV_Hana_Belhadj.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white font-bold px-8 py-3.5 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-200 transition-all"
            >
              <FileDown size={18} /> Consulter le CV complet (PDF)
            </a>
          </Reveal>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section id="certifications" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="mb-12 text-center max-w-xl mx-auto">
            <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">Certifications</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">Formations validées</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="rounded-2xl bg-white border border-slate-100 p-6 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${c.color}1A` }}>
                    <Award size={22} style={{ color: c.color }} />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 leading-snug">{c.title}</h4>
                  <p className="text-sm font-semibold mt-1" style={{ color: c.color }}>{c.issuer}</p>
                  <p className="text-xs text-slate-400 mt-2">{c.date} · ID {c.id}</p>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-violet-600">
                      <BadgeCheck size={16} />Vérifier le certificat
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
            <p className="text-xs font-extrabold uppercase tracking-widest text-fuchsia-600">Freelance</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">Ce que je peux faire pour vous</h2>
            <p className="mt-3 text-slate-500">En dehors de mes projets personnels, voici les services que je propose.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group rounded-3xl border border-slate-100 p-7 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <s.icon size={22} />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100} className="mt-10 text-center">
            <button onClick={() => scrollTo('contact')} className="rounded-full bg-slate-900 text-white font-bold px-8 py-3.5 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-200 transition-all">
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
              <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">Portfolio technique</p>
              <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">Projets &amp; dépôts</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button key={f.id} onClick={() => setFilter(f.id)} className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${filter === f.id ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-200 hover:border-violet-300'}`}>
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-violet-950 p-8 lg:p-12 mb-8">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-slate-900"><PlayCircle size={14} className="text-emerald-500" />Démo en ligne</span>
                  <h3 className="font-display mt-4 text-3xl font-extrabold text-white">Color Memory Challenge</h3>
                  <p className="mt-3 max-w-lg text-slate-300">Jeu de mémoire responsive : reproduire une séquence de couleurs, difficulté progressive, score sauvegardé.</p>
                </div>
                <div className="flex flex-col gap-3 lg:w-52">
                  <a href="https://color-memory-challenge.vercel.app" target="_blank" rel="noreferrer" className="rounded-full bg-white text-slate-900 font-bold text-center py-3 hover:scale-105 transition-transform">Essayer la démo</a>
                  <a href="https://github.com/hana270/color-memory-challenge" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 text-white font-bold text-center py-3 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"><Github size={16} />Voir le code</a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleProjects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <div className="rounded-2xl bg-white border border-slate-100 p-6 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all">
                  <span className="inline-block rounded-full bg-violet-50 text-violet-600 px-3 py-1 text-xs font-bold mb-3">{p.badge}</span>
                  <h5 className="font-display font-bold text-slate-900">{p.title}</h5>
                  <p className="text-xs text-slate-400 mt-0.5">{p.type}</p>
                  <p className="text-sm text-slate-600 mt-3">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">{t}</span>)}
                  </div>
                  <a href={p.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-violet-600">
                    <Github size={15} />Voir le code
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPETENCES ================= */}
      <section id="competences" className="relative overflow-hidden bg-[#0B0B14] py-24">
        <div className="pointer-events-none absolute top-0 left-1/4 h-[360px] w-[360px] rounded-full bg-violet-600/25 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="text-center mb-12">
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">Stack technique</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-white">Compétences &amp; outils</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-wrap justify-center gap-3">
              {SKILLS.map((s) => (
                <span key={s} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-violet-400 hover:text-violet-300 hover:-translate-y-0.5 transition-all">{s}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">Contact</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-slate-900">Discutons de votre prochain projet.</h2>
            <p className="mt-4 text-slate-600 max-w-md">Ouverte aux stages, alternances et missions freelance. Réponse rapide garantie.</p>
            <div className="mt-8 space-y-3">
              <a href="mailto:hanabelhadj27@gmail.com" className="flex items-center gap-3 font-semibold text-slate-900 hover:text-violet-600"><Mail size={18} className="text-violet-600" />hanabelhadj27@gmail.com</a>
              <a href="tel:+21652663607" className="flex items-center gap-3 font-semibold text-slate-900 hover:text-violet-600"><Phone size={18} className="text-violet-600" />+216 52 663 607</a>
              <span className="flex items-center gap-3 font-semibold text-slate-900"><MapPin size={18} className="text-violet-600" />Hammamet, Tunisie</span>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/hana270" target="_blank" rel="noreferrer" className="rounded-full border-2 border-slate-100 p-3 hover:border-violet-300 hover:-translate-y-0.5 transition-all"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/hana-belhadj" target="_blank" rel="noreferrer" className="rounded-full border-2 border-slate-100 p-3 hover:border-violet-300 hover:-translate-y-0.5 transition-all"><Linkedin size={18} /></a>
              <a
                href={CV_URL}
                download="CV_Hana_Belhadj.pdf"
                className="rounded-full border-2 border-slate-100 p-3 hover:border-violet-300 hover:-translate-y-0.5 transition-all"
                title="Télécharger mon CV"
              >
                <FileDown size={18} />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:hanabelhadj27@gmail.com?subject=${encodeURIComponent(e.target.subject.value)}&body=${encodeURIComponent(e.target.message.value)}`;
              }}
              className="rounded-3xl bg-slate-50 p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Nom" required className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors" />
                <input type="email" placeholder="Email" required className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors" />
              </div>
              <select name="subject" required defaultValue="" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors text-slate-600">
                <option value="" disabled>Sujet de la demande</option>
                <option value="Site web vitrine / sur-mesure">Site web vitrine / sur-mesure</option>
                <option value="Application web ou mobile">Application web ou mobile</option>
                <option value="CV ATS-Friendly">CV ATS-Friendly</option>
                <option value="Carte d'invitation virtuelle">Carte d'invitation virtuelle</option>
                <option value="Opportunité stage / emploi">Opportunité stage / emploi</option>
                <option value="Autre">Autre</option>
              </select>
              <textarea name="message" rows={4} placeholder="Message" required className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors" />
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3.5 flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] transition-all">
                Envoyer le message <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#0B0B14] text-slate-400 py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span>© 2026 Hana Belhadj</span>
          <div className="flex gap-6">
            <a href="https://github.com/hana270" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/hana-belhadj" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors">Haut de page</button>
          </div>
        </div>
      </footer>
    </main>
  );
}