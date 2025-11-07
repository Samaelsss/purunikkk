document
  .querySelectorAll(".model_produk > div, .model_produk_fun > div")
  .forEach((box) => {
    box.addEventListener("click", () => {
      box.parentElement
        .querySelectorAll("div")
        .forEach((b) => b.classList.remove("active"));
      box.classList.add("active");
    });
  });
document.addEventListener("DOMContentLoaded", () => {
  const specTab = document.getElementById("tab-spec");
  const descTab = document.getElementById("tab-desc");
  const specContent = document.getElementById("spec-content");
  const descContent = document.getElementById("desc-content");
  const infoBtn = document.querySelector(".info-btn");

  // Default states
  specContent.style.display = "block";
  descContent.style.display = "none";
  infoBtn.textContent = "Tutup informasi produk";

  // === TAB SWITCH FUNCTION ===
  specTab.addEventListener("click", () => {
    specTab.classList.add("active");
    descTab.classList.remove("active");
    specContent.style.display = "block";
    descContent.style.display = "none";
  });

  descTab.addEventListener("click", () => {
    descTab.classList.add("active");
    specTab.classList.remove("active");
    specContent.style.display = "none";
    descContent.style.display = "block";
  });

  // === TOGGLE INFO VISIBILITY ===
  infoBtn.addEventListener("click", () => {
    const tabContent = document.querySelector(".tab-content");

    if (tabContent.style.display === "none") {
      // Show again
      tabContent.style.display = "block";
      infoBtn.textContent = "Tutup informasi produk";
    } else {
      // Hide only content, not section
      tabContent.style.display = "none";
      infoBtn.textContent = "Lihat informasi produk";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".rekomendasi-container");
  const track = document.querySelector(".rekomendasi-track");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  // Clone items for infinite effect once
  if (!track.dataset.cloned) {
    const items = Array.from(track.children);
    items.forEach(el => track.appendChild(el.cloneNode(true)));
    track.dataset.cloned = "true";
  }

  let direction = 1; // 1 = right, -1 = left
  let autoScroll;

  function startScroll() {
    stopScroll();
    autoScroll = setInterval(() => {
      track.scrollLeft += direction;
      if (track.scrollLeft >= track.scrollWidth / 2) track.scrollLeft = 0;
      if (track.scrollLeft <= 0) track.scrollLeft = track.scrollWidth / 2;
    }, 20);
  }

  function stopScroll() {
    clearInterval(autoScroll);
  }

  // Start automatically
  startScroll();

  // Hover pause/resume
  track.addEventListener("mouseenter", stopScroll);
  track.addEventListener("mouseleave", startScroll);

  // Manual button control (changes scroll direction)
  leftBtn?.addEventListener("click", () => {
    direction = -1;
    startScroll();
  });

  rightBtn?.addEventListener("click", () => {
    direction = 1;
    startScroll();
  });

  // Smooth scroll by click
  leftBtn?.addEventListener("click", () => track.scrollBy({ left: -250, behavior: "smooth" }));
  rightBtn?.addEventListener("click", () => track.scrollBy({ left: 250, behavior: "smooth" }));

  // Drag scroll
  let isDown = false;
  let startX;
  let scrollLeft;
  track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.classList.add("dragging");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    stopScroll();
  });
  track.addEventListener("mouseleave", () => {
    isDown = false;
    track.classList.remove("dragging");
  });
  track.addEventListener("mouseup", () => {
    isDown = false;
    track.classList.remove("dragging");
    startScroll();
  });
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.2;
    track.scrollLeft = scrollLeft - walk;
  });

  // Touch control (mobile)
  track.addEventListener("touchstart", stopScroll);
  track.addEventListener("touchend", startScroll);
});
