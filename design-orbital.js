(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const small = matchMedia('(max-width: 900px)');
  const bubbles = [...document.querySelectorAll('[data-orbit]')];
  const lowPower = navigator.connection?.saveData || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
  let frame = 0, phase = 0, last = 0, opening = false;
  function drift(now) {
    if (last) phase += Math.min(now - last, 50) / 85000;
    last = now;
    const stage = document.querySelector('.orbit-stage');
    if (!stage) return;
    bubbles.forEach((bubble, i) => {
      // Each center follows its own small, slow ellipse; labels never rotate.
      const angle = phase * Math.PI * 2 + i * 1.9;
      const x = Math.cos(angle) * stage.clientWidth * .012;
      const y = Math.sin(angle) * stage.clientHeight * .018;
      bubble.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
    frame = requestAnimationFrame(drift);
  }
  function syncMotion() {
    cancelAnimationFrame(frame);last = 0;
    bubbles.forEach(b => b.style.removeProperty('transform'));
    if (bubbles.length && !reduced.matches && !small.matches && !lowPower && !document.hidden && !opening) frame = requestAnimationFrame(drift);
  }
  reduced.addEventListener('change', syncMotion);small.addEventListener('change', syncMotion);document.addEventListener('visibilitychange', syncMotion);syncMotion();
  bubbles.forEach(bubble => bubble.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reduced.matches || lowPower || !bubble.animate) return;
    event.preventDefault();if (opening) return;opening = true;cancelAnimationFrame(frame);
    const rect = bubble.getBoundingClientRect();
    const disc = document.createElement('div');disc.className = 'orbit-transition';disc.setAttribute('aria-hidden', 'true');
    const color = getComputedStyle(bubble).backgroundColor;
    Object.assign(disc.style, {background:color,left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',height:rect.height+'px'});
    document.body.append(disc);
    const dx = innerWidth/2 - rect.left - rect.width/2, dy = innerHeight/2 - rect.top - rect.height/2;
    const scale = Math.hypot(innerWidth,innerHeight)/rect.width + .15;
    const animation = disc.animate([
      {transform:'translate(0,0) scale(1)'},
      {transform:`translate(${dx*.6-dy*.12}px,${dy*.6+dx*.12}px) scale(1.15)`,offset:.42},
      {transform:`translate(${dx}px,${dy}px) scale(${scale})`}
    ],{duration:760,easing:'cubic-bezier(.45,0,.2,1)',fill:'forwards'});
    // Native cross-document view transitions preserve the final colored frame.
    animation.finished.then(() => location.assign(bubble.href)).catch(() => location.assign(bubble.href));
  }));
  window.addEventListener('pageshow', () => {opening=false;document.querySelectorAll('.orbit-transition').forEach(el=>el.remove());syncMotion();});
  // Existing standalone projects have their own gallery script, but no menu script.
  if (!document.querySelector('script[src^="app.js"]')) {
    const nav = document.querySelector('.nav');
    document.querySelector('.burger')?.addEventListener('click', () => nav.classList.toggle('open'));
    document.querySelectorAll('.menu-toggle').forEach(button => button.addEventListener('click', () => {
      const group = button.closest('.menu-group'), open = !group.classList.contains('expanded');
      document.querySelectorAll('.menu-group').forEach(g => {g.classList.remove('expanded');g.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');});
      group.classList.toggle('expanded',open);button.setAttribute('aria-expanded',String(open));
    }));
    document.addEventListener('click', event => {if (!event.target.closest('.menu-group')) document.querySelectorAll('.menu-group').forEach(g=>{g.classList.remove('expanded');g.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');});});
  }
})();
