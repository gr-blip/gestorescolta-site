/* GESTOR ESCOLTA — interações do site */
(function () {
  'use strict';

  // ── Nav: fundo ao rolar ──
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Menu mobile ──
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  const close = document.getElementById('mobileClose');
  const openMenu = () => menu.classList.add('open');
  const closeMenu = () => menu.classList.remove('open');
  toggle && toggle.addEventListener('click', openMenu);
  close && close.addEventListener('click', closeMenu);
  menu && menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // ── Reveal on scroll ──
  const revs = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revs.forEach(r => io.observe(r));
  } else {
    revs.forEach(r => r.classList.add('in'));
  }
  // Salvaguarda: se algo falhar, garante que nada fique invisível
  window.addEventListener('load', () => {
    setTimeout(() => { document.querySelectorAll('.reveal:not(.in)').forEach(r => {
      if (r.getBoundingClientRect().top < window.innerHeight) r.classList.add('in');
    }); }, 1200);
  });

  // ── Contadores animados ──
  const counters = document.querySelectorAll('.num[data-count]');
  const animate = (el) => {
    if (el.dataset.text) { el.textContent = el.dataset.text; return; }
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (!target) { el.textContent = (el.dataset.text || el.textContent); return; }
    let cur = 0;
    const dur = 1400, t0 = performance.now();
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      cur = Math.round(target * ease);
      el.textContent = cur + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { animate(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(c => cio.observe(c));
  }

  // ── Rede de cobertura: linhas desenham + pulso nos nós ──
  const netSvg = document.getElementById('netSvg');
  if (netSvg) {
    const nio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        netSvg.querySelectorAll('.net-lines line').forEach((ln, i) => {
          const len = ln.getTotalLength ? ln.getTotalLength() : 200;
          ln.style.strokeDasharray = len;
          ln.style.strokeDashoffset = len;
          ln.style.transition = 'stroke-dashoffset 1s ease ' + (i * 0.12) + 's';
          requestAnimationFrame(() => { ln.style.strokeDashoffset = '0'; });
        });
        netSvg.querySelectorAll('.node circle').forEach((c, i) => {
          c.style.transformOrigin = 'center';
          c.animate(
            [{ opacity: 0.5, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(1)' }],
            { duration: 500, delay: 400 + i * 130, fill: 'backwards', easing: 'cubic-bezier(.2,.8,.2,1)' }
          );
        });
        nio.unobserve(netSvg);
      });
    }, { threshold: 0.3 });
    nio.observe(netSvg);
  }
})();
