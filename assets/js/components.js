/**
 * KayLive — Shared Components
 * Call injectComponents() after DOM load to hydrate nav + footer
 * Usage: add data-component="nav|footer" to placeholder divs
 */

(function() {
  'use strict';

  /* ---- Path resolver ---- */
  function root() {
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    return depth > 0 ? '../'.repeat(depth) : './';
  }

  /* ---- Detect active nav link ---- */
  function activeLink(href) {
    const path = window.location.pathname;
    if (href === 'index.html' && (path.endsWith('/') || path.endsWith('index.html'))) return 'active';
    if (href !== 'index.html' && path.includes(href.replace('.html',''))) return 'active';
    return '';
  }

  /* ---- Tailwind CDN Config (injected once) ---- */
  function injectTailwindConfig() {
    if (document.getElementById('tw-config')) return;
    const s = document.createElement('script');
    s.id = 'tw-config';
    s.textContent = `
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-container-lowest":"#0e0e0f","on-surface":"#e5e2e3",
              "primary-container":"#b76dff","outline":"#988d9f","surface-dim":"#131314",
              "surface-container":"#201f20","surface-variant":"#353436",
              "on-primary-container":"#400071","tertiary-container":"#8083ff",
              "surface-container-low":"#1c1b1c","surface":"#131314",
              "on-secondary":"#3f2160","on-primary-fixed":"#2c0051","on-primary":"#490080",
              "secondary":"#dbb8ff","outline-variant":"#4d4354",
              "surface-container-high":"#2a2a2b","background":"#131314",
              "secondary-container":"#573878","on-background":"#e5e2e3",
              "on-surface-variant":"#cfc2d6","primary-fixed":"#f0dbff",
              "inverse-surface":"#e5e2e3","inverse-primary":"#842bd2",
              "surface-container-highest":"#353436","inverse-on-surface":"#313031",
              "primary":"#ddb7ff","tertiary":"#c0c1ff","surface-bright":"#3a393a",
              "secondary-fixed-dim":"#dbb8ff","on-tertiary":"#1000a9","error":"#ffb4ab",
              "error-container":"#93000a","on-error-container":"#ffdad6",
              "surface-tint":"#ddb7ff","surface-lowest":"#0e0e0f"
            },
            borderRadius: {"DEFAULT":"0.25rem","lg":"0.5rem","xl":"0.75rem","full":"9999px"},
            spacing: {
              "margin-mobile":"20px","section-gap-lg":"160px",
              "margin-desktop":"48px","section-gap-sm":"80px",
              "gutter":"24px","container-max":"1280px","base":"8px"
            },
            fontFamily: {
              "display-lg":["Sora"],"headline-lg":["Sora"],"headline-md":["Sora"],
              "body-lg":["Inter"],"label-sm":["Inter"],"body-md":["Inter"],"label-md":["Inter"]
            },
            fontSize: {
              "display-lg-mobile":["40px",{"lineHeight":"48px","letterSpacing":"-0.02em","fontWeight":"700"}],
              "headline-lg":["48px",{"lineHeight":"56px","letterSpacing":"-0.01em","fontWeight":"600"}],
              "headline-md":["32px",{"lineHeight":"40px","fontWeight":"600"}],
              "body-lg":["18px",{"lineHeight":"28px","fontWeight":"400"}],
              "label-sm":["12px",{"lineHeight":"16px","fontWeight":"500"}],
              "display-lg":["72px",{"lineHeight":"80px","letterSpacing":"-0.02em","fontWeight":"700"}],
              "body-md":["16px",{"lineHeight":"24px","fontWeight":"400"}],
              "label-md":["14px",{"lineHeight":"20px","letterSpacing":"0.01em","fontWeight":"600"}]
            }
          }
        }
      };
    `;
    // Insert before tailwind script or at head end
    const tw = document.querySelector('script[src*="tailwind"]');
    if (tw && tw.nextSibling) tw.parentNode.insertBefore(s, tw.nextSibling);
    else document.head.appendChild(s);
  }

  injectTailwindConfig();

})();
