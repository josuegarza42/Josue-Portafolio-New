'use strict';

// Reveal only the artwork; content remains visible even if scripts are unavailable.
const garageReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const garageAnimations = new Set();
if ('IntersectionObserver' in window) {
 const reveal = new IntersectionObserver(entries => {
  for (const entry of entries) {
   if (!entry.isIntersecting) continue;
   reveal.unobserve(entry.target);
   if (garageReducedMotion.matches || !entry.target.animate) continue;
   const stage = entry.target.querySelector('.car-stage');
   const animation = stage.animate([
    { opacity: 0, transform: 'translate3d(-32px, 14px, 0) scale(.94) rotate(-1deg)' },
    { opacity: 1, offset: .65, transform: 'translate3d(2px, -2px, 0) scale(1.008) rotate(.12deg)' },
    { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1) rotate(0)' }
   ], { duration: 1200, delay: entry.target.closest('.fit-card') ? 130 : 0, easing: 'cubic-bezier(.18,.7,.24,1)', fill: 'backwards' });
   garageAnimations.add(animation);
   animation.finished.then(() => garageAnimations.delete(animation)).catch(() => garageAnimations.delete(animation));
  }
 }, { threshold: .25 });
 document.querySelectorAll('.vehicle-art').forEach(art => reveal.observe(art));
 garageReducedMotion.addEventListener('change', () => {
  if (garageReducedMotion.matches) garageAnimations.forEach(animation => animation.cancel());
 });
}
