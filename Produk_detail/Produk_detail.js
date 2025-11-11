/* ============================
   1️⃣ MODEL SELECT ACTIVE STATE
   ============================ */
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

/* ============================
   2️⃣ TABS + INFO BUTTON TOGGLE
   ============================ */
document.addEventListener("DOMContentLoaded", () => {
  const specTab = document.getElementById("tab-spec");
  const descTab = document.getElementById("tab-desc");
  const specContent = document.getElementById("spec-content");
  const descContent = document.getElementById("desc-content");
  const infoBtn = document.querySelector(".info-btn");

  // Default
  specContent.style.display = "block";
  descContent.style.display = "none";
  infoBtn.textContent = "Tutup informasi produk";

  // Switch tabs
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

  // Show / hide content
  infoBtn.addEventListener("click", () => {
    const tabContent = document.querySelector(".tab-content");
    if (tabContent.style.display === "none") {
      tabContent.style.display = "block";
      infoBtn.textContent = "Tutup informasi produk";
    } else {
      tabContent.style.display = "none";
      infoBtn.textContent = "Lihat informasi produk";
    }
  });
});

/* ============================
   3️⃣ REKOMENDASI AUTO SCROLL
   ============================ */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".rekomendasi-track");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  if (!track) return;

  // Clone for continuous loop
  if (!track.dataset.cloned) {
    const cards = [...track.children];
    cards.forEach(card => track.appendChild(card.cloneNode(true)));
    track.dataset.cloned = "true";
  }

  let scrollSpeed = 1.1;
  let scrollInterval;

  function startScroll() {
    stopScroll();
    scrollInterval = setInterval(() => {
      track.scrollLeft += scrollSpeed;
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }
    }, 15);
  }

  function stopScroll() {
    clearInterval(scrollInterval);
  }

  startScroll();

  // Pause when hovered
  track.addEventListener("mouseenter", stopScroll);
  track.addEventListener("mouseleave", startScroll);

  // Button controls
  leftBtn?.addEventListener("click", () => {
    stopScroll();
    track.scrollBy({ left: -250, behavior: "smooth" });
    setTimeout(startScroll, 2000);
  });

  rightBtn?.addEventListener("click", () => {
    stopScroll();
    track.scrollBy({ left: 250, behavior: "smooth" });
    setTimeout(startScroll, 2000);
  });

  // Drag-to-scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    stopScroll();
  });

  track.addEventListener("mouseleave", () => (isDown = false));
  track.addEventListener("mouseup", () => {
    isDown = false;
    startScroll();
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
});

/* ============================
   4️⃣ IMAGE THUMBNAILS + ZOOM
   ============================ */
document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail-list img");
  const mainImg = document.getElementById("main-img");
  const mainWrapper = document.querySelector(".main-image-wrapper");

  // Thumbnail click
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbnails.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      mainImg.src = thumb.src;
    });
  });

  // Zoom toggle and pan
  let isZoomed = false;
  let isDragging = false;
  let startX, startY, moveX = 0, moveY = 0;

  mainWrapper.addEventListener("click", () => {
    isZoomed = !isZoomed;
    if (isZoomed) {
      mainImg.style.transform = "scale(2)";
      mainImg.style.cursor = "grab";
    } else {
      mainImg.style.transform = "scale(1)";
      mainImg.style.cursor = "default";
      moveX = moveY = 0;
      mainImg.style.transformOrigin = "center center";
      mainImg.style.left = "0";
      mainImg.style.top = "0";
    }
  });

  mainWrapper.addEventListener("mousedown", (e) => {
    if (!isZoomed) return;
    isDragging = true;
    mainImg.style.cursor = "grabbing";
    startX = e.pageX - moveX;
    startY = e.pageY - moveY;
  });

  mainWrapper.addEventListener("mouseup", () => {
    isDragging = false;
    if (isZoomed) mainImg.style.cursor = "grab";
  });

  mainWrapper.addEventListener("mouseleave", () => {
    isDragging = false;
    if (isZoomed) mainImg.style.cursor = "grab";
  });

  mainWrapper.addEventListener("mousemove", (e) => {
    if (!isDragging || !isZoomed) return;
    e.preventDefault();
    moveX = e.pageX - startX;
    moveY = e.pageY - startY;
    mainImg.style.transform = `scale(2) translate(${moveX / 2}px, ${moveY / 2}px)`;
  });
});

