import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EMAIL, offers, roles } from '../data/portfolio';
import { Reveal, CountUp, ease } from './Motion';

function useCopy() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };
  return { label: copied ? 'Copied ✓' : 'Copy email', copy };
}

const NAV = [
  { id: 'apps', label: 'Current projects' },
  { id: 'offer', label: 'What I do' },
  { id: 'work', label: 'Past projects' },
  { id: 'experience', label: 'Experience' },
];
const WATCH = ['apps', 'offer', 'work', 'about', 'experience', 'contact'];

/** Id of the section crossing the line ~35% down the viewport, or null (hero / unlisted sections). */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = WATCH.map(id => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const update = () => {
      const line = window.innerHeight * 0.35;
      let cur: string | null = null;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) cur = el.id;
      }
      setActive(cur);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return active;
}

export function Header() {
  const active = useActiveSection();
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '18px 0', background: 'rgba(14,15,17,.88)', backdropFilter: 'blur(12px)' }}>
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 18, letterSpacing: '-.02em' }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: '#F26B3A', color: '#0E0F11', display: 'grid', placeItems: 'center', fontSize: 14, fontWeight: 800 }}>E</span>
        Ed Miller
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'clamp(2px,1vw,8px)', fontSize: 15 }}>
        {NAV.map(n => (
          <a key={n.id} href={`#${n.id}`} className="navlink" aria-current={active === n.id ? 'true' : undefined}>
            {active === n.id && <motion.span layoutId="navpill" aria-hidden className="navpill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            <span style={{ position: 'relative' }}>{n.label}</span>
          </a>
        ))}
        <a href="#contact" className="btn-accent" style={{ padding: '9px 16px', borderRadius: 8, fontWeight: 700, marginLeft: 8 }}>Hire me</a>
      </nav>
    </header>
  );
}

export function Hero() {
  const { label, copy } = useCopy();
  return (
    <section id="top" style={{ position: 'relative', padding: 'clamp(48px,7vw,96px) 0 clamp(32px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <motion.div aria-hidden animate={{ x: [0, 60, -20, 0], y: [0, 30, -20, 0], scale: [1, 1.15, .95, 1] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', zIndex: -1, right: '-5%', top: '5%', width: 'min(60vw,720px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,107,58,.22), transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9A9893' }}>
        <motion.span animate={{ opacity: [1, .35, 1], scale: [1, 1.35, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 12px #4ADE80' }} />
        Open to full-time &amp; contract
      </div>
      <h1 aria-label="Designer who builds things." style={{ maxWidth: 1100, fontWeight: 800, fontSize: 'clamp(48px,8.6vw,132px)', lineHeight: .9, letterSpacing: '-.045em', textWrap: 'balance' as never }}>
        {['Designer', 'who', 'builds', 'things.'].map((w, i) => (
          <span key={w} aria-hidden style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '.08em', marginRight: '.25em' }}>
            <motion.span style={{ display: 'inline-block', color: w === 'builds' ? '#F26B3A' : undefined }} initial={{ y: '110%', rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease }}>
              {w === 'builds' ? <motion.span style={{ display: 'inline-block' }} animate={{ y: [0, -6, 0] }} transition={{ delay: 1.6, duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>{w}</motion.span> : w}
            </motion.span>
          </span>
        ))}
      </h1>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px 48px' }}>
        <p style={{ maxWidth: 560, fontSize: 'clamp(18px,1.6vw,21px)', lineHeight: 1.45, color: '#B9B7B1', textWrap: 'pretty' as never }}>I’m Ed. I spent years at Microsoft designing and crafting products and experiences used by millions of people. Now I design and build products in collaboration with a fleet of AI agents. Check out a few of my recent projects ↓</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a href="#apps" className="btn btn-light" style={{ padding: '14px 22px', borderRadius: 10, fontSize: 16 }}>Explore the apps</a>
          <button className="btn btn-out" onClick={copy} style={{ padding: '13px 22px', borderRadius: 10, fontSize: 16 }}>{label}</button>
        </div>
      </motion.div>
    </section>
  );
}

export function Offers() {
  return (
    <section id="offer" className="sec">
      <Reveal><h2 className="h2" style={{ marginBottom: 40, maxWidth: 900 }}>What you get when you hire me.</h2></Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 16 }}>
        {offers.map((o, i) => (
          <Reveal key={o.num} delay={i * 0.12} style={{ display: 'flex' }}>
          <div className="card-lift" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 28, borderRadius: 16, background: '#16181B', border: '1px solid rgba(237,235,230,.08)', width: '100%' }}>
            <span className="mono" style={{ fontSize: 13, color: '#F26B3A' }}>{o.num}</span>
            <h3 style={{ fontWeight: 700, fontSize: 26, lineHeight: 1.05, letterSpacing: '-.02em' }}>{o.title}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: '#B9B7B1', flex: 1 }}>{o.body}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, paddingTop: 16, borderTop: '1px solid rgba(237,235,230,.08)' }}>
              <span style={{ fontWeight: 800, fontSize: 30, letterSpacing: '-.03em' }}><CountUp value={o.stat} /></span>
              <span style={{ fontSize: 14, color: '#9A9893' }}>{o.statLabel}</span>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function OffTheClock() {
  const tags = ['Washington native', 'Drummer', 'Woodworker', 'Husband & father'];
  const pill = { padding: '9px 14px', borderRadius: 999, fontSize: 15 };
  return (
    <section id="about" className="sec" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px clamp(32px,5vw,72px)', alignItems: 'flex-start' }}>
      <Reveal style={{ flex: '1 1 300px' }}><h2 className="h2">Off the clock.</h2></Reveal>
      <Reveal delay={0.1} style={{ flex: '999 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <p style={{ maxWidth: 680, fontSize: 'clamp(20px,2vw,26px)', lineHeight: 1.4, fontWeight: 500, letterSpacing: '-.01em', textWrap: 'pretty' as never }}>I’m a Washington native, husband and dad, and I’ve always been a craftsman. When I’m not designing software, I’m behind a drum kit or in the workshop turning ideas into things you can hold.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {tags.map((t, i) => <motion.span key={t} initial={{ opacity: 0, scale: .8, y: 12 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, type: 'spring', stiffness: 300, damping: 18 }} whileHover={{ y: -3, borderColor: '#F26B3A' }} style={{ ...pill, border: '1px solid rgba(237,235,230,.15)', color: '#B9B7B1' }}>{t}</motion.span>)}
          <motion.span initial={{ opacity: 0, scale: .8, y: 12 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: tags.length * 0.08, type: 'spring', stiffness: 300, damping: 18 }} whileHover={{ y: -3, rotate: -2 }} style={{ ...pill, background: 'rgba(242,107,58,.12)', border: '1px solid rgba(242,107,58,.4)', color: '#F26B3A' }}>Craftsman, always</motion.span>
        </div>
      </Reveal>
    </section>
  );
}

export function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="sec" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px clamp(32px,5vw,72px)', alignItems: 'flex-start' }}>
      <Reveal style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h2 className="h2">Experience</h2>
        <p style={{ maxWidth: 380, fontSize: 17, lineHeight: 1.5, color: '#B9B7B1' }}>20 years from test automation to front-end, 3D and AI product design. Tap a role for highlights.</p>
      </Reveal>
      <div style={{ flex: '999 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {roles.map((r, i) => {
          const o = open === i;
          return (
            <motion.div key={r.years} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '0px 0px -40px 0px' }} transition={{ duration: 0.5, delay: i * 0.05, ease }}
              animate={{ backgroundColor: o ? '#16181B' : 'rgba(22,24,27,0)' }} style={{ borderRadius: 12, border: '1px solid rgba(237,235,230,.08)' }}>
              <button onClick={() => setOpen(o ? -1 : i)} aria-expanded={o} style={{ width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 16, alignItems: 'center', padding: '16px 20px' }}>
                <span style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 14, rowGap: 4, minWidth: 0 }}>
                  <span className="mono" style={{ fontSize: 12, color: '#9A9893', width: 112 }}>{r.years}</span>
                  <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em' }}>{r.role}</span>
                  <span style={{ fontSize: 15, color: '#9A9893' }}>{r.company}</span>
                </span>
                <motion.span animate={{ rotate: o ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ width: 28, height: 28, borderRadius: 8, display: 'grid', placeItems: 'center', background: 'rgba(237,235,230,.06)', color: o ? '#F26B3A' : '#B9B7B1', fontSize: 16 }}>{o ? '−' : '+'}</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {o && (
                  <motion.ul key="c" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }}
                    style={{ overflow: 'hidden', padding: '0 20px', display: 'flex', flexDirection: 'column' }}>
                    {r.points.map((pt, k) => <motion.li key={pt} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + k * 0.08 }} style={{ display: 'flex', gap: 12, fontSize: 15, lineHeight: 1.5, color: '#B9B7B1', maxWidth: 720, paddingBottom: k === r.points.length - 1 ? 18 : 8 }}><span style={{ flex: 'none', width: 6, height: 6, marginTop: 8, borderRadius: '50%', background: '#F26B3A' }} /><span>{pt}</span></motion.li>)}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  const { label, copy } = useCopy();
  return (
    <motion.footer id="contact" className="contact" initial={{ opacity: 0, y: 60, scale: .97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '0px 0px -100px 0px' }} transition={{ duration: 0.9, ease }} style={{ scrollMarginTop: 80, padding: 'clamp(56px,8vw,96px) clamp(24px,4vw,56px)', marginBottom: 40, borderRadius: 20, background: '#F26B3A', color: '#0E0F11', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <span className="mono" style={{ fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase' }}>Full-time or contract · Seattle or remote</span>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(44px,7.4vw,112px)', lineHeight: .9, letterSpacing: '-.045em', maxWidth: 1000 }}>Hiring a designer who builds? Let’s talk.</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
        <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} className="contact-btn" href={`mailto:${EMAIL}`} style={{ padding: '16px 24px', borderRadius: 12, fontSize: 17, fontWeight: 700 }}>{EMAIL}</motion.a>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} className="contact-out" onClick={copy} style={{ padding: '15px 22px', borderRadius: 12, border: '1.5px solid #0E0F11', fontSize: 17, fontWeight: 600 }}>{label}</motion.button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingTop: 24, borderTop: '1px solid rgba(14,15,17,.2)', fontSize: 15, fontWeight: 500 }}>
        <span>© 2026 Ed Miller · North Bend, WA</span>
        <span style={{ display: 'flex', gap: 20 }}>
          <a href="https://www.linkedin.com/in/edmill/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/edmill" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://craftedby.ai" target="_blank" rel="noopener noreferrer">Crafted By ↗</a>
        </span>
      </div>
    </motion.footer>
  );
}
