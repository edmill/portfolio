import { useEffect, useRef, useState } from 'react';
import { apps, asset } from '../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import { Reveal, ease } from './Motion';

const DUR = 5000;
const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const monoSm = { fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase' as const };

export default function ProjectBrowser() {
  const [sel, setSel] = useState(0);
  const [t, setT] = useState(0);
  const [paused, setPaused] = useState(false);
  const [gal, setGal] = useState<number | null>(null);
  const reduced = useRef(typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const n = apps.length;
  const cur = apps[sel];
  const auto = !paused && gal === null && !reduced.current;

  useEffect(() => {
    if (!auto) return;
    const iv = setInterval(() => {
      setT(prev => {
        if (prev + 100 >= DUR) { setSel(s => (s + 1) % n); return 0; }
        return prev + 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [auto, n]);

  const go = (i: number) => { setSel((i + n) % n); setT(0); };
  const g = cur.gallery ?? [];
  const gi = gal ?? 0;

  return (
    <section id="apps" className="sec">
      <Reveal y={50}>
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        style={{ borderRadius: 16, background: '#16181B', border: '1px solid rgba(237,235,230,.08)', overflow: 'hidden', boxShadow: '0 40px 120px -40px rgba(242,107,58,.25)' }}>
        <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: '1px solid rgba(237,235,230,.08)', fontSize: 12, color: '#9A9893' }}>
          <span style={{ display: 'flex', gap: 6 }}>{[0, 1, 2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: '#3A3C40' }} />)}</span>
          <span style={{ flex: 1, textAlign: 'center', letterSpacing: '.04em' }}>ed-miller / apps / <span style={{ color: '#EDEBE6' }}>{slug(cur.title)}</span></span>
          <span style={{ color: auto ? '#F26B3A' : '#9A9893' }}>{auto ? '● AUTOPLAY' : '❚❚ PAUSED'}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '999 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', aspectRatio: '2576/1289', background: '#0B0C0E' }}>
              <AnimatePresence initial={false}>
                <motion.div key={cur.image} role="img" aria-label={cur.title} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease }}
                  style={{ position: 'absolute', inset: 0, backgroundImage: `url(${asset(cur.image)})`, backgroundSize: 'cover', backgroundPosition: cur.pos || 'left top' }} />
              </AnimatePresence>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 3, background: 'rgba(237,235,230,.08)' }}>
                <div style={{ height: '100%', width: (auto ? (t / DUR) * 100 : 0) + '%', background: '#F26B3A', transition: 'width .1s linear' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 'clamp(16px,2vw,24px) clamp(20px,2.4vw,28px) clamp(20px,2.4vw,28px)' }}>
              <motion.div key={sel} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 720, minHeight: 150 }}>
                <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 10, ...monoSm, color: '#9A9893' }}>
                  <span style={{ color: '#F26B3A' }}>№ {String(sel + 1).padStart(2, '0')}</span><span>{cur.kind}</span>
                  {cur.isNew && <span style={{ padding: '3px 8px', borderRadius: 6, background: 'rgba(242,107,58,.15)', color: '#F26B3A' }}>Latest</span>}
                </div>
                <h2 style={{ fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1, letterSpacing: '-.03em' }}>{cur.title}</h2>
                <p style={{ fontSize: 17, lineHeight: 1.45, color: '#B9B7B1', textWrap: 'pretty' as never }}>{cur.blurb}</p>
              </motion.div>
              <div style={{ order: -1, display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 16, borderBottom: '1px solid rgba(237,235,230,.08)' }}>
                <button className="sq" onClick={() => go(sel - 1)} aria-label="Previous app">←</button>
                <button className="sq" onClick={() => go(sel + 1)} aria-label="Next app">→</button>
                <span style={{ flex: 1 }} />
                {g.length > 0 && <button className="btn btn-light btn-light-w" onClick={() => { setGal(0); setPaused(true); }} style={{ height: 44, padding: '0 18px', borderRadius: 10, fontSize: 15 }}>View {g.length} screens</button>}
                {!cur.inDev && cur.href && <a className="btn btn-accent" href={cur.href} target="_blank" rel="noopener noreferrer" style={{ height: 44, padding: '0 18px', borderRadius: 10, fontSize: 15 }}>{cur.cta} ↗</a>}
                {cur.inDev && <span className="mono" style={{ height: 44, padding: '0 16px', borderRadius: 10, border: '1px dashed rgba(242,107,58,.5)', color: '#F26B3A', display: 'flex', alignItems: 'center', gap: 8, ...monoSm }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#F26B3A' }} />In development</span>}
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 280px', minWidth: 0, boxShadow: 'inset 1px 1px 0 rgba(237,235,230,.08)', display: 'flex', flexDirection: 'column', maxHeight: 'clamp(320px,44vw,640px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '16px 18px', borderBottom: '1px solid rgba(237,235,230,.08)' }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>Current projects</span>
              <span className="mono" style={{ fontSize: 12, color: '#9A9893' }}>{n} of 30+</span>
            </div>
            <div style={{ overflowY: 'auto', flex: 1, padding: 6 }}>
              {apps.map((a, i) => (
                <button key={a.title} className={'row' + (i === sel ? ' sel' : '')} onClick={() => go(i)} aria-current={i === sel}
                  style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: i === sel ? '#EDEBE6' : '#B9B7B1' }}>
                  <span className="mono" style={{ fontSize: 12, width: 22, color: i === sel ? '#F26B3A' : '#6E6C67' }}>{String(i + 1).padStart(2, '0')}</span>
                  {i === sel && <motion.span layoutId="rowbar" aria-hidden style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 3, borderRadius: 3, background: '#F26B3A' }} />}
                  <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 15, fontWeight: 500 }}>{a.title}</span>
                  <span className="mono" style={{ fontSize: 11, color: '#6E6C67', textTransform: 'uppercase' }}>{a.kind}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Reveal>

      {gal !== null && g.length > 0 && (
        <Modal label={`${cur.title} screens`} onClose={() => { setGal(null); setPaused(false); }}
          onKey={e => {
            if (e.key === 'ArrowRight') setGal((gi + 1) % g.length);
            if (e.key === 'ArrowLeft') setGal((gi - 1 + g.length) % g.length);
          }}
          overlayStyle={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(6,7,8,.86)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(12px,3vw,40px)' }}>
          <motion.div initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.35, ease }} onClick={e => e.stopPropagation()} style={{ width: 'min(100%,1240px)', maxHeight: '100%', display: 'flex', flexDirection: 'column', borderRadius: 16, background: '#16181B', border: '1px solid rgba(237,235,230,.1)', overflow: 'hidden', boxShadow: '0 40px 120px -20px rgba(0,0,0,.7)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '14px 18px', borderBottom: '1px solid rgba(237,235,230,.08)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, minWidth: 0 }}>
                <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-.02em' }}>{cur.title}</span>
                <span className="mono" style={{ fontSize: 12, color: '#9A9893' }}>{gi + 1} / {g.length}</span>
              </div>
              <button className="x" onClick={() => { setGal(null); setPaused(false); }} aria-label="Close" style={{ width: 36, height: 36, borderRadius: 8, display: 'grid', placeItems: 'center', fontSize: 18, color: '#B9B7B1' }}>✕</button>
            </div>
            <div style={{ position: 'relative', aspectRatio: '2/1', maxHeight: '66vh', background: '#0B0C0E' }}>
              <motion.div key={gi} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease }} role="img" aria-label={g[gi].caption} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${asset(g[gi].image)})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
              {(['←', '→'] as const).map((ch, k) => (
                <button key={ch} className="round" aria-label={k ? 'Next screen' : 'Previous screen'} onClick={() => setGal((gi + (k ? 1 : -1) + g.length) % g.length)}
                  style={{ position: 'absolute', [k ? 'right' : 'left']: 14, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', background: 'rgba(14,15,17,.75)', display: 'grid', placeItems: 'center', fontSize: 18 }}>{ch}</button>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px 24px', padding: '16px 18px' }}>
              <p style={{ fontSize: 16, color: '#B9B7B1' }}>{g[gi].caption}</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {g.map((s, i) => (
                  <button key={s.image} className="thumb" aria-label={`Screen ${i + 1}`} onClick={() => setGal(i)}
                    style={{ width: 72, aspectRatio: '2/1', borderRadius: 6, overflow: 'hidden', border: `2px solid ${i === gi ? '#F26B3A' : 'rgba(237,235,230,.12)'}`, opacity: i === gi ? 1 : .55, background: '#0B0C0E', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${asset(s.image)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </Modal>
      )}
    </section>
  );
}
