import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function MagneticCursor() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    const dot = cursorDot.current;
    const r = cursorRing.current;
    if (!dot || !r) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      r.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnterMagnetic = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      r.style.transform = `translate(${cx}px, ${cy}px) scale(2.5)`;
      r.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
      dot.style.opacity = '0';
    };

    const onLeaveMagnetic = () => {
      r.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
      r.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(1)`;
      dot.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove);
    rafId.current = requestAnimationFrame(animate);

    // Attach to all buttons and links
    const magnetics = document.querySelectorAll('a, button, [data-magnetic]');
    magnetics.forEach(el => {
      el.addEventListener('mouseenter', onEnterMagnetic);
      el.addEventListener('mouseleave', onLeaveMagnetic);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      magnetics.forEach(el => {
        el.removeEventListener('mouseenter', onEnterMagnetic);
        el.removeEventListener('mouseleave', onLeaveMagnetic);
      });
    };
  }, [isCoarsePointer, prefersReducedMotion]);

  if (prefersReducedMotion || isCoarsePointer) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorDot}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorRing}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
