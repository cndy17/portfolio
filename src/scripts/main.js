document.addEventListener("DOMContentLoaded", () => {
  const BASE = "/portfolio/";

  /* ── custom cursor ── */
  const cur = document.getElementById("cur");
  const clb = document.getElementById("clb");

  if (cur && clb) {
    document.addEventListener("mousemove", (e) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
      clb.style.left = e.clientX + "px";
      clb.style.top = e.clientY + "px";
    });

    function addHover(sel, label) {
      document.querySelectorAll(sel).forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const l = label || el.dataset.label;
          if (l) {
            clb.textContent = l;
            clb.classList.add("show");
          }
          cur.classList.add("big");
        });
        el.addEventListener("mouseleave", () => {
          clb.classList.remove("show");
          cur.classList.remove("big");
        });
      });
    }

    addHover(".wrow");
    addHover(".mrow");
    addHover(".fc");
    addHover(".next-proj");
    addHover(".npill,.dbtn,.alink,.skill,.dl-btn", null);
  }

  /* ── ticker ── */
  const track = document.getElementById("ticker-track");
  if (track) {
    const items = [
      "analyst",
      "maker",
      "new york city",
      "data viz",
      "crafts & making",
      "boston college msba",
      "currently building",
      "cndy17 on github",
      "finance systems",
      "python \u00b7 sql",
    ];
    const full = [...items, ...items]
      .map(
        (t) =>
          `<span class="tick-item"><span class="tick-dot"></span>${t}</span>`,
      )
      .join("");
    track.innerHTML = full + full;

    // pause ticker on hover
    const ticker = track.closest(".ticker") || track.parentElement;
    if (ticker) {
      ticker.addEventListener("mouseenter", () => {
        track.style.animationPlayState = "paused";
      });
      ticker.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
      });
    }
  }

  /* ── info drawer ── */
  const drawer = document.getElementById("drawer");
  const infoBtn = document.getElementById("info-btn");

  if (drawer && infoBtn) {
    infoBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      drawer.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".drawer") && !e.target.closest("#info-btn")) {
        drawer.classList.remove("open");
      }
    });
  }

  /* ── makes expand ── */
  window.toggleMake = function toggleMake(slug) {
    const el = document.getElementById(slug);
    if (el) {
      el.classList.toggle("open");
    }
  };

  /* ── nav active state ── */
  const path =
    window.location.pathname.replace(BASE, "/").replace(/\/+$/, "") || "/";
  const pills = document.querySelectorAll(".npill");

  const routeMap = {
    "/": 0,
    "/work": 1,
    "/about": 2,
    "/makes": 3,
  };

  // Try to match current path to a pill index
  for (const [route, idx] of Object.entries(routeMap)) {
    if (path === route && pills[idx]) {
      pills[idx].classList.add("on");
      break;
    }
  }
});
