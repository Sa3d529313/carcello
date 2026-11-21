/* =========================================================
   CARCELLO · كارسلّو — content + interactions
   Edit MENU below to change dishes / prices.
   Prices come from Carcello's own posts. A price can be a number (35)
   or a string for sizes ("10 / 13" = L / XL) or add-ons ("+10").
   ========================================================= */
const MENU = [
  // ---- Signatures (the 6 cards) ----
  { id:"nashville-meal", cat:"meals", sig:true, tag:"NEW · HOT", ar:"وجبة كرسبي ناشفيل", en:"Nashville Crispy Meal", desc:"كرسبي ناشفيل، بطاطا صغير، خبز توست، كولا، صوص، مخلل وملفوف", price:35, img:"assets/nashville-meal.jpg" },
  { id:"bucket",   cat:"meals", sig:true, tag:"FOR THE CREW", ar:"عرض البكت", en:"The 57 Bucket", desc:"14 قطعة كرسبي + بطاطا كبير + 3 كولا + 6 علب صوص", price:57, img:"assets/bucket-deal.jpg" },
  { id:"nashville-burger", cat:"sandwiches", sig:true, tag:"FAN FAVORITE", ar:"برجر ناشفيل", en:"Nashville Burger", desc:"ناشفيل حار يذوب بالصوص — طعم أكبر من توقعاتك", price:28, img:"assets/nashville-burger.jpg" },
  { id:"mix-meal", cat:"meals", sig:true, tag:"SIGNATURE", ar:"مكس فخاد", en:"Mix Meal", desc:"طراوة الدبوس مع قرمشة الكريسبي", price:35, img:"assets/mix-meal.jpg" },
  { id:"rizo",     cat:"meals", sig:true, tag:"HOT & FRESH", ar:"ريزو كريسبي", en:"Rizo Crispy", desc:"حكايته حكاية — رز مع كريسبي وصوص", price:25, img:"assets/rizo-crispy.jpg" },
  { id:"sandwich", cat:"sandwiches", sig:true, tag:"CRUNCH LOVERS", ar:"ساندويش كريسبي", en:"Crispy Sandwich", desc:"لما الكريسبي يذوب بالصوص، مزاج غير", price:23, img:"assets/crispy-sandwich.jpg" },

  // ---- Meals ----
  { id:"nashville-thigh", cat:"meals", ar:"وجبة فخاد ناشفيل", en:"Nashville Thigh Meal", desc:"فخاد ناشفيل قطعتين، بطاطا صغير، خبز توست، كولا، صوص، مخلل وملفوف", price:32 },

  // ---- Add-ons ----
  { id:"add-rice",  cat:"addons", ar:"صحن أرز",     en:"Rice Plate",     desc:"إضافة", price:"+10" },
  { id:"add-slaw",  cat:"addons", ar:"كولسلو كبير", en:"Large Coleslaw", desc:"إضافة", price:"+12" },
  { id:"add-bread", cat:"addons", ar:"خبز",         en:"Bread",          desc:"إضافة", price:"+1" },

  // ---- Drinks (L / XL) ----
  { id:"d-straw",  cat:"drinks", ar:"فراولة",         en:"Strawberry",        desc:"طبيعي · L / XL",    price:"10 / 13" },
  { id:"d-mango",  cat:"drinks", ar:"مانجا",          en:"Mango",             desc:"طبيعي · L / XL",    price:"10 / 13" },
  { id:"d-loquat", cat:"drinks", ar:"مسفلورا",        en:"Loquat",            desc:"طبيعي · L / XL",    price:"10 / 13" },
  { id:"d-lemon",  cat:"drinks", ar:"ليمون ونعنع",    en:"Lemon Mint",        desc:"طبيعي · L / XL",    price:"10 / 13" },
  { id:"d-ccock",  cat:"drinks", ar:"كارسلّو كوكتيل", en:"Carcello Cocktail", desc:"طبيعي · XL",        price:18 },
  { id:"d-cock",   cat:"drinks", ar:"كوكتيل",         en:"Cocktail",          desc:"طبيعي · L",         price:12 },
  { id:"d-moj",    cat:"drinks", ar:"موهيتو",         en:"Mojito",            desc:"موهيتو · XL",       price:13 },
  { id:"d-mojb",   cat:"drinks", ar:"موهيتو بلو",     en:"Blue Mojito",       desc:"موهيتو · XL",       price:13 },
  { id:"d-mojs",   cat:"drinks", ar:"موهيتو سبرايت",  en:"Sprite Mojito",     desc:"موهيتو · XL",       price:12 },
  { id:"d-mojd",   cat:"drinks", ar:"موهيتو صودا",    en:"Soda Mojito",       desc:"موهيتو · XL",       price:12 },
  { id:"d-oreo",   cat:"drinks", ar:"أوريو",          en:"Oreo Shake",        desc:"ميلك شيك · L / XL", price:"13 / 18" },
  { id:"d-lotus",  cat:"drinks", ar:"لوتس",           en:"Lotus Shake",       desc:"ميلك شيك · L / XL", price:"13 / 18" },
  { id:"d-nut",    cat:"drinks", ar:"نوتيلا",         en:"Nutella Shake",     desc:"ميلك شيك · L / XL", price:"13 / 18" },
  { id:"d-van",    cat:"drinks", ar:"فانيلا",         en:"Vanilla Shake",     desc:"ميلك شيك · L / XL", price:"13 / 18" },
  { id:"d-icoff",  cat:"drinks", ar:"آيس كوفي",       en:"Iced Coffee",       desc:"مثلجة · L / XL",    price:"10 / 13" },
  { id:"d-itea",   cat:"drinks", ar:"آيس تي خوخ",     en:"Peach Iced Tea",    desc:"مثلجة · L / XL",    price:"10 / 13" },
];
const CATS = [
  { id:"all", en:"ALL", ar:"الكل" },
  { id:"meals", en:"MEALS", ar:"وجبات" },
  { id:"sandwiches", en:"BURGERS", ar:"سندويشات" },
  { id:"drinks", en:"DRINKS", ar:"مشروبات" },
  { id:"addons", en:"ADD-ONS", ar:"إضافات" },
];
const GALLERY = Array.from({length:12}, (_,i) => `assets/gallery/g${i+1}.jpg`);
const RIBBON = [
  ["en","The Crunch You'll Love"],["arx","جعان؟ خلّينا نقرمشها"],["en","Fried Fresh Daily"],
  ["wm","كارسلّو"],["arx","القرمشة بتبلش من أول دبوس"],
];

const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover:hover) and (pointer:fine)").matches;
const hasGsap = !!(window.gsap && window.ScrollTrigger);

/* ---------- always open at the top ---------- */
if("scrollRestoration" in history) history.scrollRestoration = "manual";
const startHash = location.hash;
if(location.hash) history.replaceState(null, "", location.pathname + location.search);
scrollTo(0, 0);

/* ---------- smooth scroll (Lenis) driven by GSAP's clock ---------- */
let lenis = null;
if(hasGsap){ gsap.registerPlugin(ScrollTrigger); ScrollTrigger.clearScrollMemory("manual"); }
if(window.Lenis){
  lenis = window.lenis = new Lenis({ lerp: reduce ? 1 : 0.085, smoothWheel: !reduce });   // 0.085 = long soft glide
  if(hasGsap){
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));                              // one clock for everything
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf);
  }
}
function scrollToTarget(target){
  lenis?.resize();
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if(lenis) lenis.scrollTo(typeof target === "number" ? target : el, { duration: 1.6, offset: typeof target === "number" ? 0 : -30 });
  else if(typeof target === "number") scrollTo({ top: target, behavior: "smooth" });
  else el?.scrollIntoView({ behavior: "smooth" });
}
// every in-page link glides through Lenis
const samePage = url => url.origin === location.origin && url.pathname.replace(/index\.html$/, "") === location.pathname.replace(/index\.html$/, "");
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]"); if(!a || a.target === "_blank") return;
  const url = new URL(a.href, location.href);
  if(!url.hash || !samePage(url)) return;                       // other pages load normally
  e.preventDefault();
  if(url.hash === "#top" || url.hash === "#") return scrollToTarget(0);
  if(document.querySelector(url.hash)) scrollToTarget(url.hash);
});
// after load: glide to the #section we arrived with (and flash a menu row)
function arrive(){
  if(!startHash) return;
  setTimeout(() => {
    const el = document.querySelector(startHash); if(!el) return;
    lenis?.resize();                                               // re-measure: content (menu rows) was added after Lenis started
    if(el.classList.contains("mrow")){
      if(lenis) lenis.scrollTo(el, { duration: 1.6, offset: -innerHeight/2 + el.offsetHeight/2 }); else el.scrollIntoView({ block: "center" });
      el.classList.add("is-flash"); setTimeout(() => el.classList.remove("is-flash"), 2200);
    } else scrollToTarget(el);
  }, 250);
}

/* ---------- loading screen: smooth bar → logo glides into the header → curtain lifts ---------- */
const headerLogo = $(".nav__logo img");
(() => {
  const loader = document.getElementById("loader"), logo = $(".loader-logo");
  if(!loader || !logo) return;
  const spot = loader.querySelector(".loader__spot"), bar = loader.querySelector(".loader__bar i");
  let seen = false;
  try { seen = sessionStorage.getItem("carcello-loader") === "1"; sessionStorage.setItem("carcello-loader", "1"); } catch(e) {}
  const navType = performance.getEntriesByType?.("navigation")[0]?.type;
  if(navType === "reload") seen = false;                              // a refresh feels like entering the site again
  if(seen){ loader.remove(); logo.remove(); document.body.classList.remove("is-loading"); addEventListener("load", arrive); if(document.readyState === "complete") arrive(); return; }
  lenis?.stop();
  headerLogo.style.opacity = 0;
  // the logo floats ABOVE the curtain, pinned to the spot, so it can glide on while the curtain lifts
  const place = () => { const r = spot.getBoundingClientRect(); Object.assign(logo.style, { left: r.left + "px", top: r.top + "px", width: r.width + "px" }); };
  place(); addEventListener("resize", place);
  const MIN_MS = 1400, MAX_MS = 2500, t0 = performance.now();   // failsafe: always plays by 2.5s
  const done = () => { headerLogo.style.opacity = ""; logo.remove(); loader.remove(); hasGsap && ScrollTrigger.refresh(); arrive(); };

  if(!hasGsap || reduce){
    const go = () => { document.body.classList.remove("is-loading"); lenis?.start(); done(); };
    if(document.readyState === "complete") go(); else addEventListener("load", go);
    setTimeout(go, MAX_MS); return;
  }
  const shadow = loader.querySelector(".loader__shadow");
  const idle = gsap.timeline({ repeat: -1, delay: .2 })
    .to(logo,   { y: -8, rotation: -3, duration: .55, ease: "sine.inOut" }, 0)                 // small lift
    .to(shadow, { scaleX: .82, opacity: .65, duration: .55, ease: "sine.inOut" }, 0)
    .to(logo,   { y: 0, rotation: 0, duration: .4, ease: "sine.in" }, .55)                     // set down
    .to(shadow, { scaleX: 1, opacity: 1, duration: .4, ease: "sine.in" }, .55)
    .to(logo,   { keyframes: { rotation: [-7, 7, -5, 5, -2, 0], x: [-3, 3, -2, 2, -1, 0] },  // shake the bucket
                  duration: .5, ease: "none" }, .95)
    .to({}, { duration: .3 });                                                                  // settle
  gsap.set(bar, { scaleX: 0, transformOrigin: "0 50%" });
  const fill = gsap.to(bar, { scaleX: .9, duration: MAX_MS / 1000, ease: "power2.out" });   // eases toward 90% while loading

  let started = false;
  const start = () => {
    if(started) return; started = true;
    setTimeout(() => {
      fill.kill();                                                     // finish the bar smoothly from wherever it is
      gsap.to(bar, { scaleX: 1, duration: .55, ease: "power2.inOut", onComplete: handoff });
    }, Math.max(0, MIN_MS - (performance.now() - t0)));
  };
  function handoff(){
    removeEventListener("resize", place);
    idle.pause();                                                     // stop the idle and settle smoothly before the glide
    const s = spot.getBoundingClientRect(), b = headerLogo.getBoundingClientRect();
    const tx = (b.left + b.width / 2) - (s.left + s.width / 2), ty = (b.top + b.height / 2) - (s.top + s.height / 2);
    document.body.classList.remove("is-loading");                    // page intro starts as the curtain lifts
    lenis?.start();
    gsap.timeline({ onComplete: done })
      .to(".loader__inner", { opacity: 0, y: -24, filter: "blur(6px)", duration: .55, ease: "power2.out" }, 0)
      .to(logo, { x: 0, y: 0, rotation: 0, duration: .35, ease: "power2.out" }, 0)
      .to(logo, { x: tx, y: ty, scale: b.width / s.width, rotation: 0, duration: 1.35, ease: "power3.inOut" }, .3)
      .to(loader, { yPercent: -100, duration: 1.3, ease: "power3.inOut" }, .45)
      .from(document.querySelector(".hero, .page-head"), { y: 70, duration: 1.4, ease: "power3.out", clearProps: "transform" }, .75);
  }
  if(document.readyState === "complete") start(); else addEventListener("load", start);
  setTimeout(start, MAX_MS);
})();
document.fonts?.ready.then(() => hasGsap && ScrollTrigger.refresh());

/* ---------- signature cards ---------- */
const cardsEl = $("#cards");
if(cardsEl) cardsEl.innerHTML = MENU.filter(m => m.sig).map(m => `
  <article class="card reveal" tabindex="0" data-jump="${m.id}" aria-label="${esc(m.en)} — ${m.price} shekels">
    <div class="card__media">
      ${m.img ? `<img src="${m.img}" alt="${esc(m.ar)}" loading="lazy">`
              : `<div class="card__placeholder"><img src="assets/logo.png" alt=""></div>`}
      <span class="card__price">${m.price}<small>₪</small></span>
    </div>
    <div class="card__body">
      <span class="card__tag">${m.tag}</span>
      <h3 class="card__ar" dir="rtl">${esc(m.ar)}</h3>
      <p class="card__en">${esc(m.en)}</p>
      <p class="card__desc" dir="rtl">${esc(m.desc)}</p>
    </div>
  </article>`).join("");

/* ---------- full menu + tabs ---------- */
const tabs = $("#tabs"), list = $("#menuList");
if(tabs && list){
tabs.innerHTML = CATS.map((c,i) => `<button class="tab" role="tab" aria-selected="${i===0}" data-cat="${c.id}">${c.en}<span class="ar">${c.ar}</span></button>`).join("");
function renderMenu(cat){
  list.innerHTML = MENU.filter(m => cat==="all" || m.cat===cat).map((m,i) => `
    <div class="mrow" id="m-${m.id}" style="animation-delay:${i*40}ms">
      <div class="mrow__en">${esc(m.en)}${m.desc?`<small>${esc(m.desc)}</small>`:""}</div>
      <span class="mrow__dots"></span>
      <div class="mrow__right"><span class="mrow__ar" dir="rtl">${esc(m.ar)}</span><span class="mrow__price">${m.price}<small>₪</small></span></div>
    </div>`).join("");
  hasGsap && ScrollTrigger.refresh();
}
renderMenu("all");
tabs.addEventListener("click", e => {
  const b = e.target.closest(".tab"); if(!b) return;
  tabs.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t===b));
  renderMenu(b.dataset.cat);
});
}

/* card → glide to its row in the full menu */
function jump(id){ location.href = "menu.html#m-" + id; }
cardsEl && cardsEl.addEventListener("click", e => { const c = e.target.closest(".card"); if(c) jump(c.dataset.jump); });
cardsEl && cardsEl.addEventListener("keydown", e => { const c = e.target.closest(".card"); if(c && (e.key==="Enter"||e.key===" ")){ e.preventDefault(); jump(c.dataset.jump);} });

/* ---------- buttons: rolling label + tilting arrow ---------- */
document.querySelectorAll(".btn").forEach(btn => {
  const arrow = btn.querySelector("b"), dot = btn.querySelector(".dot");
  const parts = [...btn.childNodes].filter(n => n !== arrow && n !== dot);
  const html = parts.map(n => n.nodeType === 3 ? esc(n.textContent) : n.outerHTML).join("").trim();
  if(!html) return;
  parts.forEach(n => n.remove());
  const label = document.createElement("span");
  label.className = "btn__label";
  label.innerHTML = `<span>${html}</span><span aria-hidden="true">${html}</span>`;
  btn.insertBefore(label, arrow || null);
  if(arrow) arrow.className = arrow.textContent.trim() === "→" ? "btn__arrow" : "btn__arrow btn__arrow--diag";
});

/* ---------- ribbons: seamless marquee that speeds up with scroll ---------- */
const tracks = [...document.querySelectorAll(".ribbon__track")];
const chunk = RIBBON.map(([k,t]) => (k==="wm" ? `<span class="wm" role="img" aria-label="${esc(t)}"></span>` : `<span class="${k}" ${k==="arx"?'dir="rtl"':""}>${esc(t)}</span>`) + `<span class="star">✦</span>`).join("");
tracks.forEach(t => t.innerHTML = chunk.repeat(6));
let pos = [0,0], boost = 0;
const period = tracks.map(t => t.scrollWidth / 6);          // spacing is margin, so each copy is exactly 1/6
addEventListener("resize", () => tracks.forEach((t,i) => period[i] = t.scrollWidth / 6));
function tickRibbons(){
  tracks.forEach((t,i) => {
    const w = period[i];
    pos[i] += +t.dataset.dir * (0.6 + boost * 0.25);
    if(pos[i] <= -w) pos[i] += w; if(pos[i] > 0) pos[i] -= w;
    t.style.transform = `translate3d(${pos[i]}px,0,0)`;
  });
  boost *= 0.92;
}
if(!reduce){ hasGsap ? gsap.ticker.add(tickRibbons) : (function loop(){ tickRibbons(); requestAnimationFrame(loop); })(); }

/* ---------- header hides on scroll down, returns on scroll up ---------- */
const nav = $(".nav"), burger = $(".nav__burger");
let lastY = scrollY;
function onScroll(){
  const y = scrollY, dy = y - lastY;
  boost = Math.min(Math.abs(dy) * 0.6, 30);
  nav.classList.toggle("is-scrolled", y > 10);
  if(!nav.classList.contains("is-open")){
    if(y > 160 && dy > 2) nav.classList.add("is-hidden");
    else if(dy < -2 || y <= 160) nav.classList.remove("is-hidden");
  }
  lastY = y;
}
lenis ? lenis.on("scroll", onScroll) : addEventListener("scroll", onScroll, { passive: true });
burger.addEventListener("click", () => {
  const o = nav.classList.toggle("is-open"); burger.setAttribute("aria-expanded", o);
  o ? lenis?.stop() : lenis?.start();                        // freeze scrolling while the menu is open
});
nav.querySelectorAll(".nav__links a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", false); lenis?.start();
}));

/* ---------- scroll reveal (once) + count-up ---------- */
const io = new IntersectionObserver(entries => entries.filter(en => en.isIntersecting).forEach((en, k) => {
  const el = en.target;
  // swipe rows: when one card shows, reveal the whole row (cards off to the side never "intersect" enough)
  if(el.classList.contains("card")) [...el.parentElement.children].forEach((c,i) => {
    if(c === el || c.classList.contains("is-in")) return;
    c.style.transitionDelay = `${i*80}ms`; c.classList.add("is-in"); io.unobserve(c);
  });
  const delay = Math.min(k, 8) * 80;                                     // stagger 0.08s within what appears together
  el.style.transitionDelay = delay + "ms";
  el.classList.add("is-in");
  setTimeout(() => { el.style.transitionDelay = ""; el.classList.add("revealed"); }, delay + 1200);   // then switch to quick hover timing
  el.querySelectorAll("[data-count]").forEach(countUp);
  io.unobserve(el);
}), { threshold: .12, rootMargin: "0px 0px -12% 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
function countUp(el){
  const end = +el.dataset.count, t0 = performance.now(), d = 1400;
  const step = t => { const p = Math.min((t-t0)/d,1); el.textContent = Math.round(end*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(step); };
  reduce ? el.textContent = end : requestAnimationFrame(step);
}

/* ---------- hero parallax (desktop, two-way) ---------- */
if(hasGsap && !reduce && $(".hero__card--bg")){
  gsap.matchMedia().add("(min-width:1001px)", () => {
    const st = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
    gsap.to(".hero__card--bg .hero__title, .hero__card--bg .hero__sticker", { yPercent: -30, opacity: 0, ease: "none", scrollTrigger: st });
    gsap.to(".hero__card--bg .hero__bg", { scale: 1.08, transformOrigin: "50% 100%", ease: "none", scrollTrigger: { ...st } });
  });
}

/* ---------- custom cursor (desktop only) ---------- */
if(hasGsap && finePointer && !reduce){
  const dot = document.createElement("div"), ring = document.createElement("div");
  dot.className = "cursor-dot"; ring.className = "cursor-ring";
  document.body.append(ring, dot);
  const dx = gsap.quickTo(dot, "x", { duration: .08, ease: "power3.out" }), dy = gsap.quickTo(dot, "y", { duration: .08, ease: "power3.out" });
  const rx = gsap.quickTo(ring, "x", { duration: .45, ease: "power3.out" }), ry = gsap.quickTo(ring, "y", { duration: .45, ease: "power3.out" });
  let shown = false;
  addEventListener("pointermove", e => {
    if(e.pointerType !== "mouse") return;
    if(!shown){ gsap.set([dot, ring], { x: e.clientX, y: e.clientY }); document.documentElement.classList.add("has-cursor"); shown = true; }
    dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    const hot = e.target.closest?.("a, button, .card, .shot, [role=tab]");
    document.documentElement.classList.toggle("cursor-hover", !!hot);
  });
  document.addEventListener("mouseleave", () => { document.documentElement.classList.remove("has-cursor"); shown = false; });
}

/* ---------- gallery rail: drag (mouse) or swipe to scroll ---------- */
const rail = $("#rail");
if(rail){
rail.innerHTML = GALLERY.map((src,i) => `<figure class="shot"><img src="${src}" alt="Carcello post ${i+1}" loading="lazy" draggable="false"></figure>`).join("");
let down = false, sx = 0, sl = 0;
rail.addEventListener("pointerdown", e => { if(e.pointerType !== "mouse") return; down = true; sx = e.clientX; sl = rail.scrollLeft; rail.classList.add("is-drag"); });
addEventListener("pointermove", e => { if(down) rail.scrollLeft = sl - (e.clientX - sx); });
addEventListener("pointerup", () => { down = false; rail.classList.remove("is-drag"); });
}

$("#yr").textContent = new Date().getFullYear();


/* ---------- gallery page: masonry + lightbox ---------- */
const masonry = $("#masonry");
if(masonry){
  fetch("assets/gallery/all/list.txt").then(r => r.text()).then(txt => {
    const items = txt.trim().split(/\r?\n/).map(l => { const [f, w, h] = l.split(","); return { src: "assets/gallery/all/" + f, w: +w, h: +h }; });
    masonry.innerHTML = items.map((it, i) =>
      `<button class="tile reveal" data-i="${i}" aria-label="Open photo ${i+1}"><img src="${it.src}" width="${it.w}" height="${it.h}" loading="${i < 16 ? "eager" : "lazy"}" decoding="async" alt="Carcello post ${i+1}"></button>`).join("");
    masonry.querySelectorAll(".reveal").forEach(el => io.observe(el));
    hasGsap && ScrollTrigger.refresh();
    const box = $("#lightbox"), img = box.querySelector("img"), count = box.querySelector(".lightbox__count");
    let cur = 0;
    const show = i => { cur = (i + items.length) % items.length; img.src = items[cur].src; count.textContent = (cur + 1) + " / " + items.length; };
    const open = i => { show(i); box.hidden = false; requestAnimationFrame(() => box.classList.add("is-open")); lenis?.stop(); };
    const close = () => { box.classList.remove("is-open"); lenis?.start(); setTimeout(() => box.hidden = true, 400); };
    masonry.addEventListener("click", e => { const t = e.target.closest(".tile"); if(t) open(+t.dataset.i); });
    box.querySelector(".lightbox__close").onclick = close;
    box.querySelector(".lightbox__prev").onclick = () => show(cur - 1);
    box.querySelector(".lightbox__next").onclick = () => show(cur + 1);
    box.addEventListener("click", e => { if(e.target === box) close(); });
    addEventListener("keydown", e => { if(box.hidden) return; if(e.key === "Escape") close(); if(e.key === "ArrowRight") show(cur + 1); if(e.key === "ArrowLeft") show(cur - 1); });
  });
}
