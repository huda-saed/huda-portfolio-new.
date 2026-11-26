(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (v = "") => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fill = (sel, html) => { $(sel).innerHTML = html; };
  const ext = 'target="_blank" rel="noopener noreferrer"';
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const C = SITE.contact || {};
  const repoName = url => (url || "").replace(/\/+$/, "").split("/").pop();

  /* ---------- Reusable components ---------- */
  const Tags = l => (l || []).map(t => `<li>${esc(t)}</li>`).join("");

  const Edu = e => {
    const school = e.school || e.University || "";      // supports both key spellings
    return `<li class="reveal${e.current ? " now" : ""}">
      ${e.current ? `<span class="badge">Current</span>` : ""}
      <h3>${esc(e.level || school)}</h3>
      ${e.level && school ? `<p class="school">${esc(school)}</p>` : ""}
      ${e.degree ? `<p>${esc(e.degree)}</p>` : ""}
      ${e.period ? `<p class="muted">${esc(e.period)}</p>` : ""}
      ${e.details ? `<p class="detail">${esc(e.details)}</p>` : ""}</li>`;
  };

  const Skill = s => `<article class="card skill reveal spot"><i class="ico">${esc(s.name.slice(0, 2))}</i>
    <h3>${esc(s.name)}</h3><p>${esc(s.text)}</p></article>`;

  const Project = (p, i) => `<article class="card project reveal spot${i === 0 ? " feat" : ""}">
    <div class="cover">${p.image
      ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy">`
      : `<div class="win" style="--h:${(i * 47 + 262) % 360}"><div class="bar"><i></i><i></i><i></i><span>huda-saed / ${esc(repoName(p.github))}</span></div>
         <div class="code"><p><em>project</em> = "${esc(p.title)}"</p><p><em>stack</em> = [${(p.tags || []).map(t => `"${esc(t)}"`).join(", ")}]</p><p><em>source</em> = "github.com/huda-saed"</p></div></div>`}</div>
    <div class="card-body">
      <h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>
      <ul class="tags">${Tags(p.tags)}</ul>
      <div class="row">
        <a class="btn btn-sm" href="${esc(p.github)}" ${ext}>View on GitHub</a>
        ${p.demo ? `<a class="btn btn-sm btn-ghost" href="${esc(p.demo)}" ${ext}>Live demo</a>` : ""}
      </div></div></article>`;

  const Cert = c => `<article class="card cert reveal spot">
    ${c.image ? `<button class="thumb" data-lb="${esc(c.image)}" data-alt="Certificate: ${esc(c.title)}" aria-label="Preview certificate: ${esc(c.title)}"><img src="${esc(c.image)}" alt="Certificate: ${esc(c.title)}"></button>` : ""}
    <div class="card-body"><h3>${esc(c.title)}</h3><p>${esc(c.issuer)}</p><p class="muted">${esc(c.date)}</p>
      <div class="row">
        ${c.image ? `<button class="btn btn-sm" data-lb="${esc(c.image)}" data-alt="Certificate: ${esc(c.title)}">View certificate</button>` : ""}
        ${c.link ? `<a class="btn btn-sm btn-ghost" href="${esc(c.link)}" ${ext}>Verify online</a>` : ""}
      </div></div></article>`;

  /* ---------- Render content ---------- */
  $$("[data-bind]").forEach(n => { n.textContent = SITE[n.dataset.bind] ?? n.textContent; });
  document.title = `${SITE.name} | ${SITE.title} Portfolio`;
  if (SITE.photo) $("#photo").innerHTML = `<img src="${esc(SITE.photo)}" alt="Portrait of ${esc(SITE.name)}">`;
  $("#gh-hero").href = $("#gh-all").href = C.github || "#";

  fill("#stats", [["Projects", SITE.projects.length], ["Skills", SITE.skills.length], ["Certificates", (SITE.certificates || []).length]]
    .map(([k, v]) => `<div><dt>${k}</dt><dd data-count="${v}">0</dd></div>`).join(""));
  fill("#chips", SITE.skills.filter(s => s.group === "Technologies").slice(0, 3).map(s => `<li>${esc(s.name)}</li>`).join(""));
  const words = SITE.interests.map(t => `<span>${esc(t)}</span>`).join("");
  fill("#marquee", words + words);

  fill("#about-text", SITE.about.map(t => `<p>${esc(t)}</p>`).join(""));
  fill("#interests", SITE.interests.map(t => `<li>${esc(t)}</li>`).join(""));
  fill("#education-list", SITE.education.map(Edu).join(""));

  const groups = [...new Set(SITE.skills.map(s => s.group || "Skills"))];
  fill("#skills-list", `<h2 class="reveal">Skills</h2>` + groups.map(g => `<h3 class="grp reveal">${esc(g)}</h3>
    <div class="grid skills">${SITE.skills.filter(s => (s.group || "Skills") === g).map(Skill).join("")}</div>`).join(""));

  fill("#projects-list", SITE.projects.map(Project).join(""));
  fill("#certs-list", (SITE.certificates || []).length ? SITE.certificates.map(Cert).join("")
    : `<p class="empty reveal">Certificates will appear here as I complete them.</p>`);

  const row = (k, href, label, extra = "") => `<li><span>${k}</span><div><a href="${esc(href)}" ${href.startsWith("mailto") ? "" : ext}>${esc(label)}</a>${extra}</div></li>`;
  fill("#contact-links",
    (C.email ? row("Email", "mailto:" + C.email, C.email, `<button class="copy" data-copy="${esc(C.email)}">Copy</button>`) : "") +
    (C.github ? row("GitHub", C.github, C.github.replace(/^https?:\/\//, "")) : "") +
    (C.linkedin ? row("LinkedIn", C.linkedin, C.linkedin.replace(/^https?:\/\/(www\.)?/, "")) : ""));
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Navigation ---------- */
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu"), bar = $("#progress");
  const setMenu = o => { menu.classList.toggle("open", o); burger.classList.toggle("open", o);
    burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Close menu" : "Open menu"); };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 24);
    const h = document.documentElement; bar.style.transform = `scaleX(${scrollY / Math.max(1, h.scrollHeight - innerHeight)})`;
  };
  onScroll(); addEventListener("scroll", onScroll, { passive: true });
  const links = $$('a[href^="#"]', menu);
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  /* ---------- Reveal + count-up ---------- */
  const count = el => {
    const to = +el.dataset.count; if (reduce || !to) { el.textContent = to; return; }
    const t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / 900); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  if (reduce || !("IntersectionObserver" in window)) { $$(".reveal").forEach(e => e.classList.add("in")); $$("[data-count]").forEach(count); }
  else {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    $$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 80}ms`; io.observe(el); });
    setTimeout(() => $$("[data-count]").forEach(count), 500);
  }

  /* ---------- Card spotlight ---------- */
  $$(".spot").forEach(c => c.addEventListener("pointermove", e => {
    const r = c.getBoundingClientRect(); c.style.setProperty("--x", e.clientX - r.left + "px"); c.style.setProperty("--y", e.clientY - r.top + "px");
  }));

  /* ---------- Certificate preview ---------- */
  const lb = $("#lb"), lbImg = $("#lb-img"); let opener = null;
  const closeLb = () => { lb.hidden = true; document.body.classList.remove("lock"); opener && opener.focus(); };
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-lb]");
    if (t) { opener = t; lbImg.src = t.dataset.lb; lbImg.alt = t.dataset.alt || ""; $("#lb-open").href = t.dataset.lb;
      lb.hidden = false; document.body.classList.add("lock"); $("#lb-x").focus(); }
    else if (e.target === lb || e.target.closest("#lb-x")) closeLb();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { setMenu(false); if (!lb.hidden) closeLb(); } });

  /* ---------- Copy email ---------- */
  document.addEventListener("click", async e => {
    const b = e.target.closest("[data-copy]"); if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = "Copied"; }
    catch { b.textContent = "Press Ctrl+C"; }
    setTimeout(() => (b.textContent = "Copy"), 1800);
  });

  /* ---------- Contact form ---------- */
  const form = $("#form"), status = $("#status");
  const say = (m, t) => { status.textContent = m; status.className = "status " + t; };
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (d._gotcha) return;
    if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message.trim())
      return say("Please enter your name, a valid email address, and a message.", "err");
    if (C.formEndpoint) {
      const btn = $("button", form); btn.disabled = true; say("Sending...", "");
      try {
        const r = await fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name: d.name, email: d.email, message: d.message }) });
        if (!r.ok) throw new Error();
        form.reset(); say("Message sent. Thank you, I'll reply soon.", "ok");
      } catch { say("The message could not be sent. Please email me directly at " + C.email + ".", "err"); }
      btn.disabled = false;
    } else {
      const body = `${d.message}\n\nFrom: ${d.name} (${d.email})`;
      location.href = `mailto:${C.email}?subject=${encodeURIComponent("Portfolio message from " + d.name)}&body=${encodeURIComponent(body)}`;
      say("Opening your email app with the message ready to send.", "ok");
    }
  });
})();
