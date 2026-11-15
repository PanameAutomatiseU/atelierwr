(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const bands = [...document.querySelectorAll('[data-orbit]')];
  let opening = false;

  bands.forEach(band => band.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (opening) { event.preventDefault(); return; }
    if (reduced.matches || !band.animate) return;
    event.preventDefault();
    opening = true;
    const overlay = document.createElement('div');
    overlay.className = 'design-band-transition';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.setProperty('--transition-color', '#ff4d00');
    document.body.append(overlay);
    const animation = overlay.animate(
      [{opacity:0},{opacity:1,offset:.38},{opacity:1}],
      {duration:240,easing:'cubic-bezier(.3,0,.2,1)',fill:'forwards'}
    );
    animation.finished.then(() => location.assign(band.href)).catch(() => location.assign(band.href));
  }));

  window.addEventListener('pageshow', () => {
    opening = false;
    document.querySelectorAll('.design-band-transition').forEach(el => el.remove());
  });

  if (!document.querySelector('script[src^="app.js"]')) {
    const nav = document.querySelector('.nav');
    document.querySelector('.burger')?.addEventListener('click', () => nav.classList.toggle('open'));
    document.querySelectorAll('.menu-toggle').forEach(button => button.addEventListener('click', () => {
      const group = button.closest('.menu-group');
      const open = !group.classList.contains('expanded');
      document.querySelectorAll('.menu-group').forEach(g => {
        g.classList.remove('expanded');
        g.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');
      });
      group.classList.toggle('expanded',open);
      button.setAttribute('aria-expanded',String(open));
    }));
    document.addEventListener('click', event => {
      if (!event.target.closest('.menu-group')) document.querySelectorAll('.menu-group').forEach(g => {
        g.classList.remove('expanded');
        g.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');
      });
    });
  }
})();