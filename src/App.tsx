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

function AnimatedCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────── main app ─────────────────────────── */
export default function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const t = useT(lang);

  const rivers = [
    { name: t.river_ay_name, desc: t.river_ay_desc, accent: 'from-emerald-400 to-teal-500' },
    { name: t.river_belaya_name, desc: t.river_belaya_desc, accent: 'from-sky-400 to-blue-500' },
    { name: t.river_ufa_name, desc: t.river_ufa_desc, accent: 'from-cyan-400 to-teal-500' },
    { name: t.river_dyoma_name, desc: t.river_dyoma_desc, accent: 'from-lime-400 to-emerald-500' },
    { name: t.river_sim_name, desc: t.river_sim_desc, accent: 'from-teal-400 to-cyan-600' },
    { name: t.river_yuryuzan_name, desc: t.river_yuryuzan_desc, accent: 'from-blue-400 to-indigo-500' },
  ];

  const findings = [
    { title: t.finding1_title, desc: t.finding1_desc },
    { title: t.finding2_title, desc: t.finding2_desc },
    { title: t.finding3_title, desc: t.finding3_desc },
    { title: t.finding4_title, desc: t.finding4_desc },
    { title: t.finding5_title, desc: t.finding5_desc },
    { title: t.finding6_title, desc: t.finding6_desc },
  ];

  const stats = [
    { value: t.stat1_value, label: t.stat1_label },
    { value: t.stat2_value, label: t.stat2_label },
    { value: t.stat3_value, label: t.stat3_label },
    { value: t.stat4_value, label: t.stat4_label },
  ];

  const measures = [
    { title: t.measure1_title, items: t.measure1_items },
    { title: t.measure2_title, items: t.measure2_items },
    { title: t.measure3_title, items: t.measure3_items },
    { title: t.measure4_title, items: t.measure4_items },
    { title: t.measure5_title, items: t.measure5_items },
  ];

  const references = [t.ref1, t.ref2, t.ref3, t.ref4, t.ref5, t.ref6, t.ref7];

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* ─── Hero / Nav ─── */}
      <header
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 text-white"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(16,185,129,0.35), transparent 45%), radial-gradient(circle at 80% 60%, rgba(14,165,233,0.25), transparent 50%)",
          }}
        />
        <nav className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-bold">
              Б
            </div>
            <span className="font-semibold tracking-tight">Bashkortostan Rivers</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="#problem">{t.nav_problem}</NavLink>
            <NavLink href="#rivers">{t.nav_rivers}</NavLink>
            <NavLink href="#findings">{t.nav_findings}</NavLink>
            <NavLink href="#measures">{t.nav_measures}</NavLink>
            <NavLink href="#conclusion">{t.nav_conclusion}</NavLink>
            <NavLink href="#references">{t.nav_references}</NavLink>
          </div>
          <LangToggle lang={lang} setLang={setLang} />
        </nav>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-28 md:pt-24 md:pb-36">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs md:text-sm text-emerald-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.hero_tag}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            {t.hero_title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl">{t.hero_subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="font-semibold text-white">{t.hero_author}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{t.hero_affiliation}</span>
          </div>
          <a
            href="#abstract"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.hero_cta}
            <span aria-hidden>→</span>
          </a>
        </div>

        <svg
          className="relative block w-full text-white"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </header>

      {/* ─── Abstract ─── */}
      <section id="abstract" className="max-w-4xl mx-auto px-6 py-20">
        <AnimatedCard>
          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.abstract_title}</h2>
            <p className="text-gray-700 leading-relaxed">{t.abstract_text}</p>
            <div className="mt-6 pt-6 border-t border-emerald-200/60">
              <span className="font-semibold text-emerald-700">{t.keywords_label}</span>{' '}
              <span className="text-gray-600 italic">{t.keywords}</span>
            </div>
          </div>
        </AnimatedCard>
      </section>

      {/* ─── Introduction ─── */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <AnimatedCard>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.intro_title}</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>{t.intro_p1}</p>
            <p>{t.intro_p2}</p>
            <p>{t.intro_p3}</p>
          </div>
        </AnimatedCard>
      </section>

      {/* ─── Problem ─── */}
      <section id="problem" className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedCard>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.problem_title}</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{t.problem_intro}</p>
            <ul className="space-y-3">
              {t.problem_items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600 italic border-l-4 border-emerald-400 pl-4">
              {t.problem_footer}
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* ─── Rivers ─── */}
      <section id="rivers" className="max-w-7xl mx-auto px-6 py-20">
        <SectionTitle subtitle={t.rivers_subtitle}>{t.rivers_title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rivers.map((river, i) => (
            <AnimatedCard key={river.name} delay={i * 80}>
              <div className="group h-full rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${river.accent}`}
                />
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${river.accent} mb-4 flex items-center justify-center text-white text-xl`}
                >
                  ≈
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{river.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{river.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.stats_title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedCard key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-200 mb-2">
                    {s.value}
                  </div>
                  <div className="text-sm text-white/80 leading-snug">{s.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Findings ─── */}
      <section id="findings" className="max-w-7xl mx-auto px-6 py-20">
        <SectionTitle subtitle={t.findings_subtitle}>{t.findings_title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {findings.map((f, i) => (
            <AnimatedCard key={i} delay={i * 70}>
              <div className="h-full rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
                <div className="text-emerald-600 font-mono text-sm mb-2">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* ─── Measures ─── */}
      <section id="measures" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle={t.measures_subtitle}>{t.measures_title}</SectionTitle>
          <div className="space-y-5">
            {measures.map((m, i) => (
              <AnimatedCard key={i} delay={i * 80}>
                <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{m.title}</h3>
                      <ul className="space-y-2">
                        {m.items.map((item, j) => (
                          <li key={j} className="flex gap-3 text-gray-700">
                            <span className="text-emerald-500 mt-1">▸</span>
                            <span className="leading-relaxed text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Conclusion ─── */}
      <section id="conclusion" className="max-w-4xl mx-auto px-6 py-20">
        <AnimatedCard>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.conclusion_title}</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>{t.conclusion_p1}</p>
            <p>{t.conclusion_p2}</p>
            <p>{t.conclusion_p3}</p>
          </div>
        </AnimatedCard>
      </section>

      {/* ─── References ─── */}
      <section id="references" className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedCard>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t.references_title}
            </h2>
            <ol className="space-y-3">
              {references.map((ref, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-4 rounded-lg bg-white border border-slate-200 text-sm text-gray-700"
                >
                  <span className="flex-shrink-0 font-mono text-emerald-600 font-semibold">
                    [{i + 1}]
                  </span>
                  <span className="leading-relaxed">{ref}</span>
                </li>
              ))}
            </ol>
          </AnimatedCard>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-slate-900 text-white/70 text-center py-8 px-6">
        <p className="text-sm">{t.footer_text}</p>
      </footer>
    </div>
  );
}
