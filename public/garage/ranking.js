'use strict';

// Editorial model rubric. Values are judgments, not measured failure/crash rates.
// Keep the visible methodology and README consistent when changing the rubric.
const garageRanking = {
 notes: { corolla: [85, 80, 75, 80, 45], fit: [85, 85, 90, 65, 45] },
 profiles: {
  balanced: { weights: [25, 20, 20, 15, 20], reading: 'Muy cercanos: el Fit obtiene 75 y el Corolla 73. El Fit destaca en versatilidad; el Corolla, en comodidad. El estado real puede invertir cualquier preferencia.' },
  city: { weights: [25, 25, 30, 5, 15], reading: 'Para ciudad, el Fit obtiene 80 y el Corolla 75: su tamaño y sus asientos abatibles inclinan la balanza. El ruido pendiente aún condiciona la compra de esta unidad.' },
  highway: { weights: [25, 15, 5, 30, 25], reading: 'Para viajes, el Corolla obtiene 72 y el Fit 69: priorizamos comodidad y seguridad. Ambos ceden puntos frente al ideal moderno; ninguno está certificado para viajar por este score.' }
 },
 score(car, profile) {
  return Math.round(this.notes[car].reduce((sum, note, i) => sum + note * this.profiles[profile].weights[i], 0) / 100);
 }
};

function renderRanking(profile) {
 currentRankingProfile=profile;
 const scores = { corolla: garageRanking.score('corolla', profile), fit: garageRanking.score('fit', profile) };
 document.querySelectorAll('[data-profile]').forEach(button => {
  const selected = button.dataset.profile === profile;
  button.classList.toggle('selected', selected);
  button.setAttribute('aria-pressed', String(selected));
 });
 for (const car of ['corolla', 'fit']) {
  document.querySelector(`[data-score="${car}"]`).textContent = scores[car];
  document.querySelector(`[data-hero-score="${car}"]`).textContent = scores[car];
  document.querySelector(`[data-ring="${car}"]`).style.setProperty('--score', scores[car]);
  const other = car === 'corolla' ? 'fit' : 'corolla';
  document.querySelector(`[data-rank="${car}"]`).textContent = scores[car] === scores[other] ? 'EMPATE / 02' : scores[car] > scores[other] ? '01 / 02' : '02 / 02';
 }
 document.querySelectorAll('[data-weight]').forEach(cell => { cell.textContent = garageRanking.profiles[profile].weights[Number(cell.dataset.weight)] + '%'; });
 document.querySelector('#ranking-takeaway').textContent = window.Garage.t(garageRanking.profiles[profile].reading);
}

let currentRankingProfile='balanced';
document.querySelectorAll('[data-profile]').forEach(button => button.addEventListener('click', () => renderRanking(button.dataset.profile)));
document.addEventListener('garage:preferences',()=>renderRanking(currentRankingProfile));
renderRanking('balanced');

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
