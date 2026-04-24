import { useState, useEffect, useRef } from 'react';
import { translations, Lang } from './translations';

/* ─────────────────────────── helpers ─────────────────────────── */
function useT(lang: Lang) {
  return translations[lang];
}

/* ─────────────────────────── small components ─────────────────── */
function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
      <button
        onClick={() => setLang('ru')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
          lang === 'ru' ? 'bg-emerald-500 text-white shadow-lg' : 'text-white/70 hover:text-white'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
          lang === 'en' ? 'bg-emerald-500 text-white shadow-lg' : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white/80 hover:text-emerald-300 text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{children}</h2>
      {subtitle && <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
    </div>
  );
}

function AnimatedCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────── river card ─────────────────────────── */
const riverColors = [
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-indigo-600',
  'from-green-500 to-emerald-600',
  'from-teal-500 to-cyan-600',
  'from-indigo-500 to-blue-600',
];

const riverIcons = ['🏔️', '🌊', '💧', '🌿', '🏞️', '⛰️'];

function RiverCard({ name, desc, idx }: { name: string; desc: string; idx: number }) {
  return (
    <AnimatedCard delay={idx * 100} className="group">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 h-full">
        <div className={`bg-gradient-to-br ${riverColors[idx % riverColors.length]} p-6 flex items-center gap-3`}>
          <span className="text-3xl">{riverIcons[idx % riverIcons.length]}</span>
          <h3 className="text-white text-xl font-bold">{name}</h3>
        </div>
        <div className="p-5">
          <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
        </div>
      </div>
    </AnimatedCard>
  );
}

/* ─────────────────────────── finding card ─────────────────────────── */
const findingIcons = ['⚗️', '🏕️', '🏭', '🌾', '📡', '🐟'];
const findingColors = [
  'border-l-red-500 bg-red-50',
  'border-l-orange-500 bg-orange-50',
  'border-l-purple-500 bg-purple-50',
  'border-l-yellow-500 bg-yellow-50',
  'border-l-blue-500 bg-blue-50',
  'border-l-emerald-500 bg-emerald-50',
];
const findingIconColors = [
  'bg-red-100 text-red-600',
  'bg-orange-100 text-orange-600',
  'bg-purple-100 text-purple-600',
  'bg-yellow-100 text-yellow-600',
  'bg-blue-100 text-blue-600',
  'bg-emerald-100 text-emerald-600',
];

function FindingCard({ title, desc, idx }: { title: string; desc: string; idx: number }) {
  return (
    <AnimatedCard delay={idx * 100}>
      <div className={`rounded-2xl border-l-4 ${findingColors[idx % findingColors.length]} p-5 h-full hover:shadow-md transition-shadow duration-200`}>
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg ${findingIconColors[idx % findingIconColors.length]}`}>
            {findingIcons[idx % findingIcons.length]}
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}

/* ─────────────────────────── measure card ─────────────────────────── */
const measureIcons = ['📡', '🏕️', '🏭', '🤝', '📚'];
const measureGradients = [
  'from-blue-600 to-cyan-500',
  'from-emerald-600 to-green-500',
  'from-purple-600 to-indigo-500',
  'from-orange-500 to-amber-400',
  'from-teal-600 to-emerald-500',
];

function MeasureCard({ title, items, idx }: { title: string; items: string[]; idx: number }) {
  return (
    <AnimatedCard delay={idx * 120}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
        <div className={`bg-gradient-to-r ${measureGradients[idx % measureGradients.length]} p-5 flex items-center gap-3`}>
          <span className="text-2xl">{measureIcons[idx % measureIcons.length]}</span>
          <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
        <ul className="p-5 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
}

/* ─────────────────────────── main app ─────────────────────────── */
export default function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const [scrolled, setScrolled] = useState(false);
  const t = useT(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const rivers = [
    { name: t.river_ay_name, desc: t.river_ay_desc },
    { name: t.river_belaya_name, desc: t.river_belaya_desc },
    { name: t.river_ufa_name, desc: t.river_ufa_desc },
    { name: t.river_dyoma_name, desc: t.river_dyoma_desc },
    { name: t.river_sim_name, desc: t.river_sim_desc },
    { name: t.river_yuryuzan_name, desc: t.river_yuryuzan_desc },
  ];

  const findings = [
    { title: t.finding1_title, desc: t.finding1_desc },
    { title: t.finding2_title, desc: t.finding2_desc },
    { title: t.finding3_title, desc: t.finding3_desc },
    { title: t.finding4_title, desc: t.finding4_desc },
    { title: t.finding5_title, desc: t.finding5_desc },
    { title: t.finding6_title, desc: t.finding6_desc },
  ];

  const measures = [
    { title: t.measure1_title, items: t.measure1_items },
    { title: t.measure2_title, items: t.measure2_items },
    { title: t.measure3_title, items: t.measure3_items },
    { title: t.measure4_title, items: t.measure4_items },
    { title: t.measure5_title, items: t.measure5_items },
  ];

  const refs = [t.ref1, t.ref2, t.ref3, t.ref4, t.ref5, t.ref6, t.ref7];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌊</span>
            <span className="text-white font-bold text-sm hidden sm:block">
              {lang === 'ru' ? 'Реки Башкортостана' : 'Bashkortostan Rivers'}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <NavLink href="#problem">{t.nav_problem}</NavLink>
            <NavLink href="#rivers">{t.nav_rivers}</NavLink>
            <NavLink href="#findings">{t.nav_findings}</NavLink>
            <NavLink href="#measures">{t.nav_measures}</NavLink>
            <NavLink href="#conclusion">{t.nav_conclusion}</NavLink>
          </div>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-river.jpg')" }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />
        {/* Decorative animated rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-white/5 animate-pulse" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-emerald-500/10 animate-ping" style={{ animationDuration: '3s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">{t.hero_tag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
            {t.hero_title}
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.hero_subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
              <p className="text-white font-semibold">{t.hero_author}</p>
              <p className="text-white/60 text-sm">{t.hero_affiliation}</p>
            </div>
          </div>

          <a
            href="#abstract"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/40 hover:scale-105"
          >
            {t.hero_cta}
            <span className="text-lg">↓</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* ── ABSTRACT ── */}
      <section id="abstract" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedCard>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white text-xl">📄</div>
                <h2 className="text-2xl font-bold text-gray-900">{t.abstract_title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">{t.abstract_text}</p>
              <div className="pt-4 border-t border-emerald-200">
                <span className="font-bold text-emerald-700">{t.keywords_label} </span>
                <span className="text-gray-600 italic text-sm">{t.keywords}</span>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.intro_title}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-6" />
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>{t.intro_p1}</p>
                  <p>{t.intro_p2}</p>
                  <p>{t.intro_p3}</p>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <div className="relative">
                <img
                  src="/images/belaya-river.jpg"
                  alt="Belaya River"
                  className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white rounded-2xl px-4 py-2 text-sm font-semibold shadow-lg">
                  🌊 {lang === 'ru' ? 'Река Белая, Башкортостан' : 'Belaya River, Bashkortostan'}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-center text-2xl font-bold mb-10 opacity-90">{t.stats_title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: t.stat1_value, label: t.stat1_label },
              { value: t.stat2_value, label: t.stat2_label },
              { value: t.stat3_value, label: t.stat3_label },
              { value: t.stat4_value, label: t.stat4_label },
            ].map((s, i) => (
              <AnimatedCard key={i} delay={i * 100}>
                <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-extrabold text-white mb-2">{s.value}</div>
                  <div className="text-emerald-200 text-sm font-medium leading-tight">{s.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={200}>
              <div className="relative">
                <img
                  src="/images/pollution.jpg"
                  alt="River pollution"
                  className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-red-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-red-600 text-white rounded-xl px-4 py-2 text-sm font-semibold">
                  ⚠️ {lang === 'ru' ? 'Антропогенная нагрузка' : 'Anthropogenic Pressure'}
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.problem_title}</h2>
                <div className="w-16 h-1 bg-red-400 rounded-full mb-6" />
                <p className="text-gray-700 mb-5 leading-relaxed">{t.problem_intro}</p>
                <ul className="space-y-2">
                  {t.problem_items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">!</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-gray-600 text-sm italic border-l-4 border-red-300 pl-3">{t.problem_footer}</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ── RIVERS ── */}
      <section id="rivers" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle subtitle={t.rivers_subtitle}>{t.rivers_title}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rivers.map((r, i) => (
              <RiverCard key={i} name={r.name} desc={r.desc} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MONITORING IMAGE ── */}
      <section className="relative h-72 overflow-hidden">
        <img src="/images/monitoring.jpg" alt="monitoring" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center">
          <div className="max-w-6xl mx-auto px-8 w-full">
            <AnimatedCard>
              <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
                {lang === 'ru' ? 'Методология' : 'Methodology'}
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-bold max-w-xl">
                {lang === 'ru'
                  ? 'Комплексный подход к изучению состояния водных объектов'
                  : 'Comprehensive approach to studying the state of water bodies'}
              </h3>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ── FINDINGS ── */}
      <section id="findings" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle subtitle={t.findings_subtitle}>{t.findings_title}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {findings.map((f, i) => (
              <FindingCard key={i} title={f.title} desc={f.desc} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TOURISM IMAGE ── */}
      <section className="relative h-72 overflow-hidden">
        <img src="/images/tourism.jpg" alt="tourism" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900/80 to-transparent flex items-center justify-end">
          <div className="max-w-6xl mx-auto px-8 w-full flex justify-end">
            <AnimatedCard>
              <div className="max-w-lg text-right">
                <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
                  {lang === 'ru' ? 'Экотуризм' : 'Eco-tourism'}
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-bold">
                  {lang === 'ru'
                    ? 'Сбалансированный туризм — ключ к сохранению природы'
                    : 'Balanced tourism is key to preserving nature'}
                </h3>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ── MEASURES ── */}
      <section id="measures" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle subtitle={t.measures_subtitle}>{t.measures_title}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {measures.map((m, i) => (
              <MeasureCard key={i} title={m.title} items={m.items} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCLUSION ── */}
      <section id="conclusion" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.conclusion_title}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-6" />
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>{t.conclusion_p1}</p>
                  <p>{t.conclusion_p2}</p>
                  <p className="font-medium text-emerald-700 border-l-4 border-emerald-400 pl-4">{t.conclusion_p3}</p>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <div className="relative">
                <img
                  src="/images/nature-clean.jpg"
                  alt="Clean nature"
                  className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-emerald-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white rounded-xl px-4 py-2 text-sm font-semibold">
                  🌿 {lang === 'ru' ? 'Путь к восстановлению' : 'Path to Recovery'}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ── REFERENCES ── */}
      <section id="references" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedCard>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-sm">📚</span>
              {t.references_title}
            </h2>
            <ol className="space-y-3">
              {refs.map((ref, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-emerald-400 flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{ref}</span>
                </li>
              ))}
            </ol>
          </AnimatedCard>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🌊</span>
            <span className="text-emerald-400 font-bold text-lg">
              {lang === 'ru' ? 'Реки Башкортостана' : 'Rivers of Bashkortostan'}
            </span>
          </div>
          <p className="text-gray-500 text-sm">{t.footer_text}</p>
          <div className="mt-4 flex justify-center">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </footer>
    </div>
  );
}
