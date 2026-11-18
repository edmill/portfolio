import { useRef, useState } from 'react';
import { asset, cases, projects } from '../data/portfolio';
import { Reveal } from './Motion';
import Modal from './Modal';

const mono12 = { fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase' as const };
const h3 = { fontWeight: 800, fontSize: 28, letterSpacing: '-.02em' };
const tile = { borderRadius: 12, background: '#16181B', border: '1px solid rgba(237,235,230,.08)' };

function CasePanel({ index, onClose, onIndex }: { index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const c = cases[index];
  const next = (index + 1) % cases.length;
  const aside = useRef<HTMLElement>(null);
  return (
    <Modal label={`${c.title} case study`} onClose={onClose} overlayStyle={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(6,7,8,.7)', backdropFilter: 'blur(6px)' }}>
      <aside ref={aside} className="panel" onClick={e => e.stopPropagation()} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(100%,980px)', background: '#0E0F11', borderLeft: '1px solid rgba(237,235,230,.1)', overflowY: 'auto', boxShadow: '-40px 0 120px rgba(0,0,0,.6)' }}>
        <div style={{ position: 'sticky', top: 0, zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '14px clamp(20px,4vw,48px)', background: 'rgba(14,15,17,.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(237,235,230,.08)' }}>
          <span className="mono" style={{ ...mono12, color: '#9A9893' }}>Case study · {index + 1} of {cases.length}</span>
          <button className="x" onClick={onClose} aria-label="Close case study" style={{ width: 40, height: 40, borderRadius: 10, display: 'grid', placeItems: 'center', fontSize: 18, color: '#B9B7B1', border: '1px solid rgba(237,235,230,.12)' }}>✕</button>
        </div>
        <div style={{ padding: 'clamp(28px,4vw,48px) clamp(20px,4vw,48px) 64px', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <header style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className="mono" style={{ ...mono12, color: '#F26B3A' }}>{c.kicker}</span>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(36px,5vw,64px)', lineHeight: .95, letterSpacing: '-.04em', textWrap: 'balance' as never }}>{c.title}</h2>
            <p style={{ maxWidth: 640, fontSize: 19, lineHeight: 1.5, color: '#B9B7B1', textWrap: 'pretty' as never }}>{c.summary}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12, marginTop: 8 }}>
              {c.metrics.map(m => <div key={m.label} style={{ ...tile, display: 'flex', flexDirection: 'column', gap: 6, padding: 18 }}><span style={{ fontWeight: 800, fontSize: 32, letterSpacing: '-.03em', color: '#F26B3A' }}>{m.value}</span><span style={{ fontSize: 14, lineHeight: 1.35, color: '#B9B7B1' }}>{m.label}</span></div>)}
            </div>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24, padding: '24px 0', borderTop: '1px solid rgba(237,235,230,.08)', borderBottom: '1px solid rgba(237,235,230,.08)' }}>
            {c.facts.map(f => <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9A9893' }}>{f.label}</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>{f.value}</span></div>)}
          </div>
          <section style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={h3}>The problem</h3>
            <p style={{ maxWidth: 680, fontSize: 17, lineHeight: 1.6, color: '#B9B7B1' }}>{c.problem}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12 }}>
              {c.challenges.map(x => <div key={x.t} style={{ ...tile, padding: 18, display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontWeight: 700, fontSize: 16 }}>{x.t}</span><span style={{ fontSize: 14, lineHeight: 1.5, color: '#B9B7B1' }}>{x.d}</span></div>)}
            </div>
          </section>
          <section style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={h3}>What I did</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
              {c.did.map(d => <li key={d.t} style={{ display: 'flex', gap: 14 }}><span style={{ flex: 'none', width: 6, height: 6, marginTop: 10, borderRadius: '50%', background: '#F26B3A' }} /><span style={{ fontSize: 16, lineHeight: 1.55, color: '#B9B7B1' }}><strong style={{ color: '#EDEBE6', fontWeight: 700 }}>{d.t}</strong> {d.d}</span></li>)}
            </ul>
          </section>
          <section style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={h3}>Key screens</h3>
            {c.screens.map(s => <figure key={s.src} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><img src={asset(s.src)} alt={s.caption} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12, border: '1px solid rgba(237,235,230,.1)', background: '#16181B' }} /><figcaption style={{ fontSize: 14, color: '#9A9893' }}>{s.caption}</figcaption></figure>)}
          </section>
          <section style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={h3}>The outcome</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 720 }}>
              {c.outcome.map(o => <li key={o} style={{ display: 'flex', gap: 14, fontSize: 16, lineHeight: 1.55, color: '#B9B7B1' }}><span style={{ flex: 'none', color: '#F26B3A', fontWeight: 700 }}>↗</span><span>{o}</span></li>)}
            </ul>
            {c.quote && <blockquote style={{ margin: '12px 0 0', padding: '24px 28px', borderRadius: 14, background: '#16181B', border: '1px solid rgba(237,235,230,.08)', display: 'flex', flexDirection: 'column', gap: 12 }}><span style={{ fontSize: 20, lineHeight: 1.45, fontWeight: 500, letterSpacing: '-.01em' }}>“{c.quote}”</span><cite style={{ fontStyle: 'normal', fontSize: 14, color: '#9A9893' }}>{c.quoteBy}</cite></blockquote>}
          </section>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexWrap: 'wrap', gap: 12, paddingTop: 28, borderTop: '1px solid rgba(237,235,230,.08)' }}>
            <button className="btn btn-accent" onClick={() => { onIndex(next); aside.current?.scrollTo({ top: 0 }); }} style={{ height: 48, padding: '0 20px', borderRadius: 12, fontSize: 15 }}>Next: {cases[next].short} →</button>
          </div>
        </div>
      </aside>
    </Modal>
  );
}

export default function PastProjects() {
  const [cs, setCs] = useState<number | null>(null);
  return (
    <section id="work" className="sec">
      <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
        <h2 className="h2">Past projects</h2>
        <span className="mono" style={{ fontSize: 12, letterSpacing: '.06em', color: '#9A9893' }}>2006 — 2025 · PRINCIPAL PRODUCT DESIGNER</span>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 16 }}>
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.12} style={{ display: 'flex' }}>
          <article style={{ display: 'flex', flexDirection: 'column', borderRadius: 16, background: '#16181B', border: '1px solid rgba(237,235,230,.08)', overflow: 'hidden', width: '100%' }}>
            <div style={{ aspectRatio: '16/9', background: '#0B0C0E', overflow: 'hidden' }}>
              <div role="img" aria-label={p.title} className="proj-img" style={{ width: '100%', height: '100%', backgroundImage: `url(${asset(p.image)})`, backgroundSize: 'cover', backgroundPosition: 'left top' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, padding: 24 }}>
              <span className="mono" style={{ fontSize: 12, letterSpacing: '.06em', color: '#9A9893', textTransform: 'uppercase' }}>{p.meta}</span>
              <h3 style={{ fontWeight: 700, fontSize: 24, lineHeight: 1.1, letterSpacing: '-.02em' }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: '#B9B7B1' }}>{p.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                {p.metrics.map(m => <span key={m.label} style={{ padding: '6px 10px', borderRadius: 8, background: 'rgba(237,235,230,.06)', fontSize: 14 }}><strong style={{ fontWeight: 700, color: '#F26B3A' }}>{m.value}</strong> {m.label}</span>)}
              </div>
              {i < cases.length && <button className="btn btn-light" onClick={() => setCs(i)} style={{ alignSelf: 'flex-start', marginTop: 'auto', height: 44, padding: '0 18px', borderRadius: 10, fontSize: 15 }}>Read the case study →</button>}
            </div>
          </article>
          </Reveal>
        ))}
      </div>
      {cs !== null && <CasePanel index={cs} onClose={() => setCs(null)} onIndex={setCs} />}
    </section>
  );
}
