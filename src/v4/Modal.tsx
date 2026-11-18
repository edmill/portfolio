import { useEffect, useRef, type ReactNode, type KeyboardEvent } from 'react';

interface Props {
  label: string;
  onClose: () => void;
  overlayStyle: React.CSSProperties;
  children: ReactNode;
  onKey?: (e: KeyboardEvent) => void;
}

const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

/** Overlay dialog: aria-modal, focus trap, Esc to close, focus returns to trigger. */
export default function Modal({ label, onClose, overlayStyle, children, onKey }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    return () => {
      document.body.style.overflow = overflow;
      prev?.focus?.();
    };
  }, []);

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') { e.stopPropagation(); onClose(); return; }
    onKey?.(e);
    if (e.key !== 'Tab' || !ref.current) return;
    const els = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  return (
    <div ref={ref} role="dialog" aria-modal="true" aria-label={label} onClick={onClose} onKeyDown={handleKey} style={overlayStyle}>
      {children}
    </div>
  );
}
