(() => {
  function updateReturnLinks() {
    const spanish = document.documentElement.lang.startsWith('es');
    for (const link of document.querySelectorAll('[data-portfolio-return], [data-portfolio-back]')) {
      link.href = spanish ? '/es/' : '/';
      if (link.hasAttribute('data-portfolio-return')) link.querySelector('span').textContent = spanish ? 'Volver al portafolio' : 'Back to portfolio';
    }
  }
  document.addEventListener('garage:preferences', updateReturnLinks);
  updateReturnLinks();
})();
