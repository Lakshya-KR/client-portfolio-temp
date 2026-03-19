// Dennis Musyoka Portfolio Script

const projects = [
  {
    title: "Portfolio Website",
    type: "Web",
    description: "A clean, responsive portfolio template built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#top",
    codeUrl: "https://github.com/Smexden"
  },
  {
    title: "Network Troubleshooting Notes",
    type: "Networking",
    description: "A simple knowledge base format for documenting common network issues and fixes.",
    tags: ["Troubleshooting", "Docs"],
    liveUrl: "",
    codeUrl: "https://github.com/Smexden"
  },
  {
    title: "Mini System Tracker",
    type: "System",
    description: "A starter concept for tracking tasks, statuses, and simple workflow states.",
    tags: ["Systems", "Planning"],
    liveUrl: "",
    codeUrl: "https://github.com/Smexden"
  }
];

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function setupMobileNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.contains("open");
    setOpen(!open);
  });

  // Close menu when a nav link is clicked (mobile)
  $all("a[href^='#']", nav).forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    const isClickInside = nav.contains(e.target) || toggle.contains(e.target);
    if (!isClickInside) setOpen(false);
  });

  // Keep nav open on desktop and closed on mobile when resizing
  const mq = window.matchMedia("(max-width: 720px)");
  const sync = () => {
    if (!mq.matches) setOpen(false);
  };
  mq.addEventListener?.("change", sync);
  sync();
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const safe = (s) => String(s).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[ch]));

  const liveIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
  const codeIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';

  grid.innerHTML = projects.map((p) => {
    const tags = (p.tags || []).map(t => `<span class="chip">${safe(t)}</span>`).join("");
    const liveBtn = p.liveUrl
      ? `<a href="${safe(p.liveUrl)}" ${p.liveUrl.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${liveIcon} Live</a>`
      : "";
    const codeBtn = p.codeUrl
      ? `<a class="secondary" href="${safe(p.codeUrl)}" target="_blank" rel="noopener noreferrer">${codeIcon} Code</a>`
      : "";

    return `
      <article class="card project-card">
        <div class="project-top">
          <div>
            <h3 class="project-title">${safe(p.title)}</h3>
            <div class="project-meta">${safe(p.type || "Project")}</div>
          </div>
        </div>
        <p class="project-desc">${safe(p.description || "")}</p>
        <div class="chips" aria-label="Project tags">${tags}</div>
        <div class="project-links">${liveBtn}${codeBtn}</div>
      </article>
    `;
  }).join("");
}

function setupActiveNav() {
  const links = $all(".site-nav a[href^='#']");
  if (!links.length) return;

  const sections = links
    .map((a) => $(a.getAttribute("href")))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((a) => {
      const href = a.getAttribute("href");
      a.classList.toggle("active", href === `#${id}`);
    });
  };

  // Use scroll position to determine the active section.
  // Picks the last section whose top has scrolled past the header offset.
  let ticking = false;
  const HEADER_OFFSET = 90; // sticky header height + small buffer

  const onScroll = () => {
    const y = window.scrollY + HEADER_OFFSET;
    let current = null;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= y) {
        current = sections[i].id;
        break;
      }
    }

    // If scrolled near the bottom, activate the last section
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
      current = sections[sections.length - 1]?.id;
    }

    if (current) setActive(current);
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  setupMobileNav();
  renderProjects();
  setupActiveNav();
});
