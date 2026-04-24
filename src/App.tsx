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
      ([entry]) => { 
