/* ==========================================================
   Portfolio content — edit titles/descriptions here.
   ========================================================== */
// Contact details — the WhatsApp number shows in the Contact section.
const CONTACT = {
  email: 'mudassirafzal00381@gmail.com',
  whatsapp: '923255775600',          // international format, digits only (92 + number without the leading 0)
  whatsappLabel: '+92 325 5775600',  // how the number is shown on the page
};

// w/h = real pixel size (keeps layout stable). fit:'contain' + bg = show the whole image on a coloured board.
// feat:true = big 2×2 artboard.
const W = 'assets/work/', L = 'assets/logos/';
const LOGOS = [
  { src: W + 'logo-herbal-grace.png', w: 1254, h: 1254, fit: 'contain', bg: '#FFFFFF', feat: true, title: 'Herbal Grace Care', tag: 'Herbal hair care', desc: 'A monogram where the H and G grow out of a single strand of hair ending in a golden oil drop — healthy hair, natural care.' },
  { src: L + 'pk-lahori-chai.svg', w: 800, h: 800, title: 'Lahori Chai Wala', tag: 'Tea stall · concept', desc: 'Truck-art arches, pink and gold dots and a steaming cup — the energy of a Lahori dhaba in one badge, with Urdu lettering.' },
  { src: W + 'logo-dogar-sajji.png', w: 574, h: 435, fit: 'contain', bg: '#2A0E08', title: 'Dogar Sajji', tag: 'BBQ restaurant', desc: 'Fire, spit-roast and bold gold lettering — a mascot-style logo built to look delicious on signboards and delivery apps.' },
  { src: L + 'pk-karachi-biryani.svg', w: 800, h: 800, title: 'Karachi Biryani House', tag: 'Restaurant · concept', desc: 'A copper deg glowing on a saffron sunburst. Maroon and gold say “dum biryani” before you read a word.' },
  { src: W + 'logo-hikmat-palace.jpg', w: 1080, h: 1080, title: 'Hikmat Palace', tag: 'Herbal wellness', desc: 'A gold shield and upward bolt on black leather — strength, protection and the promise “Own Your Power”.' },
  { src: L + 'pk-ajrak-studio.svg', w: 800, h: 800, feat: true, title: 'Ajrak Studio', tag: 'Textile brand · concept', desc: 'Built from real ajrak geometry — crimson, indigo and block-printed dots — for a Sindhi block-print studio.' },
  { src: W + 'logo-ecoroot-care.webp', w: 1254, h: 1254, fit: 'contain', bg: '#FFFFFF', title: 'Ecoroot Care', tag: 'Botanical hair regrowth', desc: 'A hair follicle that becomes a plant, with roots spreading beneath the soil line — regrowth explained in one symbol.' },
  { src: W + 'logo-by-amira.webp', w: 800, h: 800, title: 'By Amira', tag: 'Skincare brand', desc: 'An elegant B and A monogram tied together with a flowing olive-drop flourish for a premium skincare line.' },
  { src: L + 'pk-rang-rickshaw.svg', w: 800, h: 800, feat: true, title: 'Rang Rickshaw', tag: 'Ride & delivery app · concept', desc: 'The humble rickshaw turned into a loud, happy mascot — yellow, green and pink, made for app icons and riders’ jackets.' },
  { src: W + 'logo-ecoversal-hub.png', w: 500, h: 500, fit: 'contain', bg: '#FFFFFF', title: 'Ecoversal Hub', tag: 'Herbal hair therapy', desc: 'A gold-on-green seal with a sprouting leaf — classic, trustworthy and ready to stamp onto kraft packaging.' },
  { src: L + 'pk-hunza-organics.svg', w: 800, h: 800, title: 'Hunza Organics', tag: 'Dry fruit & oils · concept', desc: 'Snow peaks, green terraces and an apricot sun — the valley itself becomes the label.' },
  { src: W + 'logo-alizay-baking.jpg', w: 570, h: 350, fit: 'contain', bg: '#E6E6E6', title: 'Alizay Baking', tag: 'Home bakery', desc: 'A dreamy two-tier cake crowned with flowers and a friendly script — sweet, homemade and personal.' },
  { src: L + 'pk-peshawari-chappal.svg', w: 800, h: 800, title: 'Peshawari Chappal Co.', tag: 'Footwear · concept', desc: 'A hand-stitched chappal drawn with visible stitching — heritage craft presented like a luxury label.' },
  { src: W + 'logo-dreamy-gift-studio.jpg', w: 500, h: 500, title: 'Dreamy Gift Studio', tag: 'Gift shop', desc: 'A sparkly gift box in a soft gradient ring — playful and perfect for Instagram profile pictures.' },
  { src: L + 'pk-multani-mithai.svg', w: 800, h: 800, feat: true, title: 'Multani Mithai Ghar', tag: 'Sweet shop · concept', desc: 'Multan’s famous blue kashi tiles inside a shrine-style arch, framed in gold for a sohan halwa house.' },
  { src: L + 'pk-hina-mehndi.svg', w: 800, h: 800, title: 'Hina Mehndi Art', tag: 'Henna artist · concept', desc: 'A hand-drawn mehndi mandala in henna tones with Urdu lettering — made for bridal bookings and Chand Raat.' },
];

const POSTS = [
  { src: W + 'post-herbal-grace-rebrand.webp', w: 1254, h: 1254, title: 'Big Changes, Same Trust', tag: 'Rebrand announcement', desc: 'Announcing the move from F&U Collection to Herbal Grace Care — old logo to new, with benefits and a clear message.' },
  { src: W + 'post-zaytina-before-after.webp', w: 2000, h: 2000, title: 'Zaytina Before / After', tag: 'Skincare campaign', desc: 'A split before-and-after story with the full product routine running down the centre like a drop of serum.' },
  { src: W + 'post-zaytina-spf.webp', w: 2000, h: 2000, title: 'Protection Specialist', tag: 'Product launch', desc: 'Golden sunlight, an SPF 50+ shield and skin-layer icons explaining UVA/UVB protection at a glance.' },
  { src: W + 'post-zaytina-vitamin-c.webp', w: 1080, h: 1080, title: 'Vitamin C Power', tag: 'Product post', desc: 'Watercolour oranges and olive leaves around the serum, with two benefit cards that are quick to read.' },
  { src: W + 'post-organic-oil.webp', w: 1254, h: 1254, title: 'Organic Oil', tag: 'Hair-care ad', desc: 'Amla, almonds and kalonji around a dropper bottle — benefit icons and trust badges built for Facebook ads.' },
  { src: W + 'post-by-amira-serum.webp', w: 2000, h: 2000, title: 'By Amira — Serum', tag: 'Brand campaign', desc: 'A warm lifestyle visual with olive branches and a clean brand bar — the human side of the brand.' },
  { src: 'assets/posts/post-01.svg', w: 1080, h: 1350, title: 'Blue Notes Festival', tag: 'Event poster', desc: 'Swiss-inspired jazz poster: a vinyl-like disc, piano-key rhythm and oversized type.' },
  { src: 'assets/posts/post-02.svg', w: 1080, h: 1350, title: 'AIR / 01 Drop', tag: 'Product launch', desc: 'Sneaker-drop post built for the feed: outline type, neon gradient and a price you can’t miss.' },
  { src: 'assets/posts/post-04.svg', w: 1080, h: 1350, title: 'Future Forward ’26', tag: 'Conference key visual', desc: 'A glowing planet and orbit system that scales from Instagram to stage screens.' },
  { src: 'assets/posts/post-05.svg', w: 1080, h: 1350, title: 'Summer Sale', tag: 'Retail promo', desc: 'Pure, loud and readable in half a second — a sale post designed for thumbs on the move.' },
  { src: 'assets/posts/post-06.svg', w: 1080, h: 1350, title: 'The Last Lighthouse', tag: 'Film poster', desc: 'Dusk gradient, a lone beam and a classic billing block for an indie drama.' },
  { src: 'assets/posts/post-08.svg', w: 1080, h: 1350, title: 'Neon Tides', tag: 'Album announcement', desc: 'Synthwave sunset and perspective grid for a new-wave electronic release.' },
];

// span: 'w3' = half row, 'w4' = two-thirds row, none = one-third row
const VISUALS = [
  { src: W + 'web-blushfi.webp', w: 1639, h: 959, span: 'w3', title: 'Blushfi.com', tag: 'E-commerce website', desc: 'Promo visual for a live WordPress / WooCommerce beauty store — rose-gold palette, product grid and trust badges.' },
  { src: W + 'app-alizay-baking.webp', w: 1734, h: 907, span: 'w3', title: 'Alizay Baking App', tag: 'Mobile app visual', desc: 'Launch banner for a React Native bakery app — pink UI, cake cards and four clear feature icons.' },
  { src: W + 'pack-herbal-grace-label.webp', w: 1536, h: 1024, fit: 'contain', bg: '#FFFFFF', title: 'Herbal Grace Label', tag: 'Product label', desc: 'Front and back labels for the herbal hair oil — ingredients illustration, benefits and precautions.' },
  { src: W + 'pack-hikmat-tila.webp', w: 1402, h: 1122, title: 'Hikmat Tila', tag: 'Bottle & box', desc: 'Matte-black dropper label and kraft box for Hikmat Palace — gold foil details and herbal cues.' },
  { src: 'assets/visuals/visual-03.svg', w: 1200, h: 900, title: 'Fizz Can Series', tag: 'Packaging concept', desc: 'Three flavours, one system: colour does the talking, vertical type does the branding.' },
  { src: W + 'pack-ecoversal-green.webp', w: 1536, h: 1024, span: 'w4', fit: 'contain', bg: '#FFFFFF', title: 'Ecoversal Hub Box', tag: 'Packaging dieline', desc: 'Print-ready box dieline with a deep-green front panel, ingredient sketches and how-to-use steps.' },
  { src: 'assets/visuals/visual-04.svg', w: 1200, h: 900, title: 'Icon System', tag: 'UI iconography', desc: 'Eight of sixty-four app icons built on one rounded geometry and stroke weight.' },
  { src: 'assets/visuals/visual-09.svg', w: 1200, h: 900, title: 'The Shape of Silence', tag: 'Book cover', desc: 'Ripples expanding from a single sun — a cover about what goes unsaid.' },
  { src: 'assets/visuals/visual-06.svg', w: 1200, h: 900, title: 'Type Specimen', tag: 'Typography', desc: 'A display-serif specimen sheet exploring weight, rhythm and contrast.' },
  { src: 'assets/visuals/visual-10.svg', w: 1200, h: 900, title: 'Fluid Forms', tag: 'Generative art', desc: 'Blurred colour fields and film grain — a study in mood over shape.' },
  { src: W + 'web-chemistry-lab.webp', w: 1734, h: 907, span: 'w3', title: 'Virtual Chemistry Lab', tag: 'Web app visual', desc: 'Neon promo for a browser-based 3D chemistry simulator built with React, Three.js and WebGL.' },
  { src: W + 'pack-ecoversal-kraft.webp', w: 1536, h: 1024, span: 'w3', fit: 'contain', bg: '#FFFFFF', title: 'Ecoversal Kraft Box', tag: 'Packaging dieline', desc: 'An all-kraft version of the Ecoversal box — earthy, eco-friendly and cheaper to print.' },
];

/* ========================================================== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;
const pad = n => String(n).padStart(2, '0');
document.documentElement.classList.add('js');

/* ---------- Render work ---------- */
const ALL = [...LOGOS, ...POSTS, ...VISUALS];

const boardStyle = it => it.bg ? ` style="background:${it.bg}"` : '';

$('#logoGrid').innerHTML = LOGOS.map((l, i) => `
  <figure class="artboard reveal${l.feat ? ' feat' : ''}" data-i="${i}" data-cursor="view" tabindex="0" role="button" aria-label="Open ${l.title}">
    <figcaption class="artboard-label mono"><b>▢ ${l.title}</b><span>${pad(i + 1)}</span></figcaption>
    <div class="artboard-frame${l.fit === 'contain' ? ' contain' : ''}" data-tag="${l.tag}"${boardStyle(l)}>
      <img src="${l.src}" alt="${l.title} logo — ${l.tag}" loading="lazy" width="${l.w}" height="${l.h}">
    </div>
  </figure>`).join('');

$('#postsTrack').innerHTML = POSTS.map((p, i) => `
  <figure class="post" data-i="${LOGOS.length + i}" data-cursor="view" tabindex="0" role="button" aria-label="Open ${p.title}">
    <div class="post-frame"><img src="${p.src}" alt="${p.title} — ${p.tag}" loading="lazy" width="${p.w}" height="${p.h}"></div>
    <figcaption class="post-meta">
      <div><h3>${p.title}</h3><span class="mono">${p.tag}</span></div>
      <span class="post-n">${pad(i + 1)}</span>
    </figcaption>
  </figure>`).join('') + `
  <div class="post-end"><p>Need posts that stop the scroll?</p><a href="#contact" class="mono">Let’s talk →</a></div>`;

$('#bento').innerHTML = VISUALS.map((v, i) => `
  <figure class="tile reveal ${v.span || ''}${v.fit === 'contain' ? ' contain' : ''}" data-i="${LOGOS.length + POSTS.length + i}" data-cursor="view" tabindex="0" role="button" aria-label="Open ${v.title}"${boardStyle(v)}>
    <img src="${v.src}" alt="${v.title} — ${v.tag}" loading="lazy" width="${v.w}" height="${v.h}">
    <figcaption class="tile-cap"><div><span class="mono">${v.tag}</span><h3>${v.title}</h3></div><span class="mono">${pad(i + 1)}</span></figcaption>
  </figure>`).join('');

/* contact details */
$('#emailBtn').dataset.email = CONTACT.email;
$('#emailBtn .email-text').textContent = CONTACT.email;
$('#waBtn').href = `https://wa.me/${CONTACT.whatsapp}`;
$('#waText').textContent = CONTACT.whatsappLabel;

/* ---------- Preloader ---------- */
(() => {
  const num = $('.preloader-num');
  const t0 = performance.now();
  const dur = reduceMotion ? 1 : 1200;
  const tick = now => {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    num.textContent = String(Math.round(eased * 100)).padStart(3, '0');
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(() => document.body.classList.add('loaded'), 150);
  };
  requestAnimationFrame(tick);
  setTimeout(() => { num.textContent = '100'; document.body.classList.add('loaded'); }, dur + 600);
})();

/* ---------- Kinetic hero type ---------- */
const chars = [];
$$('.kinetic').forEach(el => {
  const text = el.textContent.trim();
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = [...text].map(c => `<span class="ch">${c}</span>`).join('');
  $$('.ch', el).forEach(ch => chars.push({ el: ch, w: 420, cx: 0, cy: 0 }));
});

let mouseX = -9999, mouseY = -9999, hasMoved = false;
const measureChars = () => chars.forEach(c => {
  const r = c.el.getBoundingClientRect();
  c.cx = r.left + r.width / 2; c.cy = r.top + r.height / 2 + scrollY;
});

const hero = $('.hero');
let heroVisible = true;
new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }).observe(hero);

function kineticLoop(t) {
  if (heroVisible && !reduceMotion) {
    chars.forEach((c, i) => {
      let k;
      if (hasMoved && finePointer) {
        const d = Math.hypot(mouseX - c.cx, mouseY + scrollY - c.cy);
        k = Math.max(0, 1 - d / 420);
        k = k * k * (3 - 2 * k);
      } else {
        k = (Math.sin(t * 0.0016 - i * 0.55) + 1) / 2;
      }
      const target = 260 + 540 * k;
      c.w += (target - c.w) * 0.14;
      c.el.style.fontVariationSettings = `"wght" ${c.w.toFixed(0)}, "wdth" ${(80 + 20 * (c.w - 260) / 540).toFixed(1)}`;
    });
  }
  requestAnimationFrame(kineticLoop);
}

/* selection-box dimension tag */
const sel = $('.sel'), selTag = $('.sel-tag');
const updateSelTag = () => {
  const r = sel.getBoundingClientRect();
  selTag.textContent = `Text · W ${Math.round(r.width)} × H ${Math.round(r.height)}`;
};

/* ---------- Cursor + rulers ---------- */
const cursor = $('.cursor'), cursorLabel = $('.cursor-label');
const markX = $('.ruler-x .ruler-mark'), markY = $('.ruler-y .ruler-mark');
if (finePointer) document.body.classList.add('has-cursor');

let cx = 0, cy = 0;
addEventListener('pointermove', e => {
  mouseX = e.clientX; mouseY = e.clientY; hasMoved = true;
  cursorLabel.textContent = `X ${Math.round(e.clientX)} · Y ${Math.round(e.clientY + scrollY)}`;
  if (markX) { markX.style.transform = `translateX(${e.clientX - 22}px)`; markY.style.transform = `translateY(${e.clientY - 22}px)`; }
}, { passive: true });

(function cursorLoop() {
  cx += (mouseX - cx) * 0.22; cy += (mouseY - cy) * 0.22;
  cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
  requestAnimationFrame(cursorLoop);
})();

document.addEventListener('pointerover', e => {
  cursor.classList.toggle('is-view', !!e.target.closest('[data-cursor="view"]'));
});

function buildRulers() {
  const rx = $('.ruler-x'), ry = $('.ruler-y');
  if (!rx || getComputedStyle(rx).display === 'none') return;
  $$('.n', rx).forEach(n => n.remove()); $$('.n', ry).forEach(n => n.remove());
  for (let x = 0; x < innerWidth; x += 100) rx.insertAdjacentHTML('beforeend', `<span class="n" style="left:${x}px">${x}</span>`);
  for (let y = 100; y < innerHeight; y += 100) ry.insertAdjacentHTML('beforeend', `<span class="n" style="top:${y}px">${y}</span>`);
}

/* ---------- Horizontal posts ---------- */
const postsSec = $('#posts'), track = $('#postsTrack'), progress = $('.posts-progress span');
let postsDist = 0, postsStatic = false;

function setupPosts() {
  postsStatic = innerWidth < 900 || reduceMotion;
  postsSec.classList.toggle('is-static', postsStatic);
  if (postsStatic) { postsSec.style.height = ''; track.style.transform = ''; return; }
  postsDist = Math.max(0, track.scrollWidth - (innerWidth - parseFloat(getComputedStyle(document.body).paddingLeft)));
  postsSec.style.height = `${postsDist + innerHeight}px`;
  updatePosts();
}
function updatePosts() {
  if (postsStatic) return;
  const top = postsSec.getBoundingClientRect().top;
  const p = Math.min(1, Math.max(0, -top / (postsDist || 1)));
  track.style.transform = `translate3d(${-p * postsDist}px,0,0)`;
  progress.style.width = `${p * 100}%`;
}
addEventListener('scroll', updatePosts, { passive: true });

/* ---------- Reveal + counters + active nav ---------- */
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  io.unobserve(e.target);
}), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });

const countIO = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count, t0 = performance.now();
  const step = now => {
    const p = Math.min(1, (now - t0) / 1400);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  countIO.unobserve(el);
}), { threshold: 0.6 });
$$('[data-count]').forEach(el => countIO.observe(el));

const navLinks = $$('[data-nav]');
const sectionIO = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('is-active', a.dataset.nav === e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
['home', 'logos', 'posts', 'visuals', 'about', 'contact'].forEach(id => sectionIO.observe(document.getElementById(id)));

/* ---------- Process layers ---------- */
$$('.layer').forEach(btn => btn.addEventListener('click', () => {
  $$('.layer').forEach(b => { const on = b === btn && !b.classList.contains('is-open'); b.classList.toggle('is-open', on); b.setAttribute('aria-expanded', on); });
}));

/* ---------- Accent swatches ---------- */
function setAccent(btn) {
  document.documentElement.style.setProperty('--accent', btn.dataset.accent);
  document.documentElement.style.setProperty('--on-accent', btn.dataset.on);
  $$('.swatch').forEach(s => s.classList.toggle('is-active', s === btn));
  try { localStorage.setItem('accent', btn.dataset.accent); } catch (_) {}
}
$$('.swatch').forEach(s => s.addEventListener('click', () => setAccent(s)));
try {
  const saved = localStorage.getItem('accent');
  const btn = saved && $(`.swatch[data-accent="${saved}"]`);
  if (btn) setAccent(btn);
} catch (_) {}

/* ---------- Contact: word swap + copy email ---------- */
const words = ['unforgettable', 'bold', 'timeless', 'iconic', 'yours'];
const swap = $('#swapWord');
let wi = 0;
if (!reduceMotion) setInterval(() => {
  swap.classList.add('out');
  setTimeout(() => { wi = (wi + 1) % words.length; swap.textContent = words[wi]; swap.classList.remove('out'); }, 380);
}, 2400);

const toast = $('#toast');
const showToast = msg => { toast.textContent = msg; toast.classList.add('show'); clearTimeout(showToast.t); showToast.t = setTimeout(() => toast.classList.remove('show'), 2000); };
$('#emailBtn').addEventListener('click', async e => {
  const email = e.currentTarget.dataset.email;
  try { await navigator.clipboard.writeText(email); showToast('Email copied ✓'); }
  catch (_) { location.href = `mailto:${email}`; }
});

/* ---------- Lightbox ---------- */
const lb = $('#lightbox'), lbImg = $('#lbImg');
let current = 0;
function showItem(i) {
  current = (i + ALL.length) % ALL.length;
  const it = ALL[current];
  lbImg.src = it.src; lbImg.alt = `${it.title} — ${it.tag}`;
  lbImg.style.animation = 'none'; lbImg.offsetHeight; lbImg.style.animation = '';
  $('#lbTitle').textContent = it.title;
  $('#lbTag').textContent = it.tag;
  $('#lbDesc').textContent = it.desc;
  $('#lbCount').textContent = `${pad(current + 1)} / ${ALL.length}`;
}
function openLB(i) { showItem(i); if (!lb.open) lb.showModal(); document.body.style.overflow = 'hidden'; }
function closeLB() { lb.close(); }
lb.addEventListener('close', () => { document.body.style.overflow = ''; });

document.addEventListener('click', e => {
  const item = e.target.closest('[data-i]');
  if (item) openLB(+item.dataset.i);
});
document.addEventListener('keydown', e => {
  const item = e.target.closest && e.target.closest('[data-i]');
  if (item && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openLB(+item.dataset.i); }
  if (!lb.open) return;
  if (e.key === 'ArrowRight') showItem(current + 1);
  if (e.key === 'ArrowLeft') showItem(current - 1);
});
$('#lbClose').addEventListener('click', closeLB);
$('#lbNext').addEventListener('click', () => showItem(current + 1));
$('#lbPrev').addEventListener('click', () => showItem(current - 1));
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-stage')) closeLB(); });

/* ---------- Init ---------- */
function onResize() { measureChars(); updateSelTag(); buildRulers(); setupPosts(); }
addEventListener('resize', onResize);
addEventListener('load', onResize);
(document.fonts ? document.fonts.ready : Promise.resolve()).then(onResize);
onResize();
requestAnimationFrame(kineticLoop);
setInterval(measureChars, 1500); // keeps hit-areas accurate as weights shift
