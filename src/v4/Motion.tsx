import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';
import { motion, animate, useInView, useScroll, useSpring } from 'framer-motion';

export const ease: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

/** Fade/slide up when scrolled into view. */
export function Reveal({ children, delay = 0, y = 28, style, className }: { children: ReactNode; delay?: number; y?: number; style?: CSSProperties; className?: string }) {
  return (
    <motion.div className={className} style={style} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

/** Counts a stat like "9M+", "73%", "+25%", "3×" up from zero when visible. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const m = value.match(/^([^\d]*)(\d+)(.*)$/);
  useEffect(() => {
    if (!inView || !m || !ref.current) return;
    const el = ref.current;
    const end = parseInt(m[2], 10);
    const c = animate(0, end, { duration: 1.4, ease, onUpdate: v => { el.textContent = m[1] + Math.round(v) + m[3]; } });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return <span ref={ref}>{value}</span>;
}

/** Thin accent progress bar tracking page scroll. */
export function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return <motion.div aria-hidden style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 30, background: '#F26B3A', transformOrigin: '0 50%', scaleX }} />;
}
