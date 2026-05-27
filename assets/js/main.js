/**
 * KayLive — Main JavaScript
 * Handles: Nav, Mobile Menu, Scroll Reveal, FAQ, Forms, Parallax
 */

(function() {
  'use strict';

  /* ---- Mobile Nav ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll Reveal ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-item .faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const group = item.closest('.faq-group');
      const wasOpen = item.classList.contains('open');
      // Close siblings in same group
      if (group) {
        group.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      }
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---- Privacy Sidebar Active State on Scroll ---- */
  const sidebarLinks = document.querySelectorAll('.privacy-sidebar a[href^="#"]');
  if (sidebarLinks.length) {
    const sections = Array.from(sidebarLinks).map(l => {
      const id = l.getAttribute('href').slice(1);
      return document.getElementById(id);
    }).filter(Boolean);

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.privacy-sidebar a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(s => sectionObserver.observe(s));
  }

  /* ---- Newsletter + Contact Forms Feedback ---- */
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Envoi en cours...';
      setTimeout(() => {
        btn.textContent = '✓ Message envoyé !';
        btn.style.background = '#10b981';
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.background = '';
          btn.disabled = false;
          form.reset();
        }, 3000);
      }, 1400);
    });
  });

  /* ---- Ambient Parallax (subtle) ---- */
  const orbs = document.querySelectorAll('[data-parallax]');
  if (orbs.length) {
    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      orbs.forEach(orb => {
        const speed = parseFloat(orb.dataset.parallax) || 0.04;
        const dx = (e.clientX - cx) * speed;
        const dy = (e.clientY - cy) * speed;
        orb.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    });
  }

  /* ---- Smooth anchor scrolling with nav offset ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
        const y = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  /* ---- Nav scroll shadow ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 4px 40px rgba(0,0,0,0.3)'
        : '0 4px 30px rgba(0,0,0,0.1)';
    }, { passive: true });
  }

  /* ---- Toast helper (exposed globally) ---- */
  window.KayLive = {
    toast: (msg, type = 'success') => {
      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed; bottom:24px; right:24px; z-index:9999;
        background:${type === 'success' ? '#10b981' : '#ef4444'};
        color:#fff; padding:14px 20px; border-radius:12px;
        font-family:'Inter',sans-serif; font-size:14px; font-weight:600;
        box-shadow:0 8px 32px rgba(0,0,0,0.3); opacity:0;
        transition:opacity 0.3s; pointer-events:none;
      `;
      el.textContent = msg;
      document.body.appendChild(el);
      requestAnimationFrame(() => { el.style.opacity = '1'; });
      setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 300);
      }, 3000);
    }
  };

})();
