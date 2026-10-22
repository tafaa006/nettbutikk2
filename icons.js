// icons.js — alle ikonene mine i en fil, enklere for å bytte farge. laget av claude
const ICONS = {
  "computers-laptops": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <mask id="laptop-m">
    <rect width="64" height="64" fill="#fff"/>
    <rect x="27" y="47.5" width="10" height="2.5" rx="1.25" fill="#000"/>
    <circle cx="32" cy="14.5" r="1.2" fill="#000"/>
  </mask>
  <g fill="currentColor" mask="url(#laptop-m)">
    <rect x="12" y="10" width="40" height="32" rx="3.5"/>
    <path d="M5 46h54v2a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"/>
  </g>
</svg>`,

  "phones-tablets": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <mask id="phonetab-m">
    <rect width="64" height="64" fill="#fff"/>
    <path d="M39 49h6" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M11.5 49h4" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="42" cy="14.5" r="1.3" fill="#000"/>
    <path d="M11 28.5h5" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  </mask>
  <g fill="currentColor" mask="url(#phonetab-m)">
    <rect x="26" y="10" width="32" height="44" rx="4.5"/>
    <rect x="6" y="24" width="15" height="30" rx="3.5"/>
  </g>
</svg>`,

  "pc-components": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
    <path d="M25 9v10M32 9v10M39 9v10"/>
    <path d="M25 45v10M32 45v10M39 45v10"/>
    <path d="M9 25h10M9 32h10M9 39h10"/>
    <path d="M45 25h10M45 32h10M45 39h10"/>
  </g>
  <mask id="chip-m">
    <rect width="64" height="64" fill="#fff"/>
    <rect x="25.5" y="25.5" width="13" height="13" rx="2" fill="#000"/>
    <circle cx="22" cy="22" r="1.3" fill="#000"/>
  </mask>
  <rect x="17" y="17" width="30" height="30" rx="4" fill="currentColor" mask="url(#chip-m)"/>
</svg>`,

  "monitors-displays": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <mask id="monitor-m">
    <rect width="64" height="64" fill="#fff"/>
    <path d="M14 32L24 20" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M22 32l5-6" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="32" cy="40" r="1.5" fill="#000"/>
  </mask>
  <g fill="currentColor" mask="url(#monitor-m)">
    <rect x="6" y="9" width="52" height="36" rx="3.5"/>
    <rect x="28.5" y="46" width="7" height="8"/>
    <rect x="18" y="53" width="28" height="4.5" rx="2.25"/>
  </g>
</svg>`,

  "gaming-accessories": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <mask id="gamepad-m">
    <rect width="64" height="64" fill="#fff"/>
    <path d="M20 29v8M16 33h8" stroke="#000" stroke-width="3" stroke-linecap="round"/>
    <circle cx="42" cy="30" r="2.2" fill="#000"/>
    <circle cx="48" cy="36" r="2.2" fill="#000"/>
  </mask>
  <path mask="url(#gamepad-m)" fill="currentColor" d="M18 21h28a11 11 0 0 1 11 9.5l3 12.5a6.5 6.5 0 0 1-11 4.5l-5-7H20l-5 7a6.5 6.5 0 0 1-11-4.5l3-12.5A11 11 0 0 1 18 21z"/>
</svg>`,

  "audio-headphones": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <path d="M10 40v-8a22 22 0 0 1 44 0v8" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
  <mask id="headphones-m">
    <rect width="64" height="64" fill="#fff"/>
    <path d="M13 43.5v7" stroke="#000" stroke-width="2" stroke-linecap="round"/>
    <path d="M51 43.5v7" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  </mask>
  <g fill="currentColor" mask="url(#headphones-m)">
    <rect x="7" y="38" width="12" height="18" rx="4.5"/>
    <rect x="45" y="38" width="12" height="18" rx="4.5"/>
  </g>
</svg>`,

  "keyboards-mice": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <mask id="kbmouse-m">
    <rect width="64" height="64" fill="#fff"/>
    <path d="M11 33h.01M17 33h.01M23 33h.01M29 33h.01M35 33h.01M11 39h.01M17 39h.01M23 39h.01M29 39h.01M35 39h.01" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M14 45h16" stroke="#000" stroke-width="3" stroke-linecap="round"/>
    <path d="M54 23v9" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  </mask>
  <g fill="currentColor" mask="url(#kbmouse-m)">
    <rect x="3" y="26" width="42" height="25" rx="3.5"/>
    <rect x="48" y="23" width="12" height="28" rx="6"/>
  </g>
</svg>`,

  "tvs-home-entertainment": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <mask id="tv-m">
    <rect width="64" height="64" fill="#fff"/>
    <path d="M28 22.5l11 6.5-11 6.5z" fill="#000" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
  </mask>
  <g fill="currentColor" mask="url(#tv-m)">
    <rect x="5" y="10" width="54" height="36" rx="4"/>
    <rect x="28.5" y="47" width="7" height="5"/>
    <rect x="19" y="51" width="26" height="4.5" rx="2.25"/>
  </g>
</svg>`,

  "smart-home-iot": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <mask id="smarthome-m">
    <rect width="64" height="64" fill="#fff"/>
    <path d="M23 37a12 12 0 0 1 18 0" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
    <path d="M27 41.5a6.5 6.5 0 0 1 10 0" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
    <circle cx="32" cy="47" r="2" fill="#000"/>
  </mask>
  <path mask="url(#smarthome-m)" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round" d="M32 8L6 30h8v24h36V30h8z"/>
</svg>`,

  "cables-accessories": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <path d="M32 34v10a10 10 0 0 0 10 10h14" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
  <mask id="plug-m">
    <rect width="64" height="64" fill="#fff"/>
    <path d="M28 26h8" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  </mask>
  <g fill="currentColor" mask="url(#plug-m)">
    <rect x="23.5" y="5" width="5" height="14" rx="1.5"/>
    <rect x="35.5" y="5" width="5" height="14" rx="1.5"/>
    <rect x="19" y="17" width="26" height="18" rx="4"/>
  </g>
</svg>`
};

document.querySelectorAll("[data-icon]").forEach((el) => {
  const svg = ICONS[el.dataset.icon];
  if (svg) el.innerHTML = svg;
  else console.warn("Unknown icon:", el.dataset.icon);
});