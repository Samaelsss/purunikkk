// script.js
(function () {
  // -----------------------------
  // 1. Scroll progress (top + bottom)
  // -----------------------------
  function initScrollProgress() {
    var bars = Array.prototype.slice.call(
      document.querySelectorAll(
        ".scroll-progress__bar, .scroll-progress-container .scroll-progress-bar, .scroll-progress-container-bottom .scroll-progress-bar"
      )
    );
    if (!bars.length) return;

    function update() {
      var doc = document.documentElement;
      var scrollTop = window.pageYOffset || doc.scrollTop || 0;
      var windowHeight = window.innerHeight || doc.clientHeight || 0;
      var scrollHeight = Math.max(
        doc.scrollHeight,
        doc.offsetHeight,
        doc.clientHeight
      );
      var maxScroll = Math.max(scrollHeight - windowHeight, 1);
      var progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      var width = progress * 100 + "%";

      bars.forEach(function (bar) {
        bar.style.width = width;
      });
    }

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
  }

  // -----------------------------
  // 2. Bottom nav (smooth scroll + active)
  // expects buttons with:
  // class="bottom-nav__item" or "bottom-nav-item"
  // and data-section="home|shop|reviews|contact"
  // -----------------------------
  function initBottomNav() {
    var nav =
      document.querySelector(".bottom-nav__inner") ||
      document.querySelector(".navbar-bg");
    if (!nav) return;

    var items = Array.prototype.slice.call(
      nav.querySelectorAll(".bottom-nav__item, .bottom-nav-item")
    );
    if (!items.length) {
      items = Array.prototype.slice.call(nav.querySelectorAll("button"));
    }

    var sections = {};

    items.forEach(function (item) {
      var key = item.getAttribute("data-section");
      if (!key) {
        var span = item.querySelector("span");
        if (span) key = span.textContent.trim().toLowerCase();
      }
      if (!key) return;

      var sectionEl =
        document.getElementById(key) ||
        document.querySelector('[data-section-id="' + key + '"]');
      if (sectionEl) {
        sections[key] = sectionEl;
        item.dataset.sectionKey = key;
      }
    });

    function setActive(key) {
      items.forEach(function (item) {
        var itemKey = item.dataset.sectionKey || item.getAttribute("data-section");
        var isActive = itemKey === key;

        if (item.classList.contains("bottom-nav__item")) {
          item.classList.toggle("bottom-nav__item--active", !!isActive);
        } else if (item.classList.contains("bottom-nav-item")) {
          item.classList.toggle("bottom-nav-item--active", !!isActive);
        } else {
          item.classList.toggle("is-active", !!isActive);
        }
      });
    }

    items.forEach(function (item) {
      item.addEventListener("click", function () {
        var key = item.dataset.sectionKey || item.getAttribute("data-section");
        if (!key) return;

        var target = sections[key];
        if (target) {
          var rect = target.getBoundingClientRect();
          var offset = 80; // adjust if your header height changes
          var top =
            rect.top +
            (window.pageYOffset || document.documentElement.scrollTop) -
            offset;

          window.scrollTo({ top: top, behavior: "smooth" });
        }

        setActive(key);
      });
    });

    function onScroll() {
      var scrollPos =
        window.pageYOffset || document.documentElement.scrollTop || 0;
      var currentKey = null;

      Object.keys(sections).forEach(function (key) {
        var el = sections[key];
        var offsetTop = el.offsetTop;
        if (scrollPos >= offsetTop - 150) {
          currentKey = key;
        }
      });

      if (currentKey) setActive(currentKey);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  // -----------------------------
  // 3. Blob (mouse-reactive)
  // expects:
  // <div class="cta-blob">
  //   <div class="blob-bg animate-blob-wobble"></div>
  // </div>
  // inside your CTA section
  // -----------------------------
  function initBlob() {
    var blobWrapper =
      document.querySelector(".cta-blob") ||
      document.querySelector(".blob-wrapper");
    var blobShape =
      (blobWrapper && blobWrapper.querySelector(".blob-bg")) ||
      document.querySelector(".blob-bg");

    var blobEl = blobWrapper || blobShape;
    if (!blobEl) return;

    var maxMove = 30;
    var maxRotate = 6;

    function handleMouseMove(e) {
      var rect = blobEl.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;

      var dx = (e.clientX - centerX) / window.innerWidth;
      var dy = (e.clientY - centerY) / window.innerHeight;

      var x = dx * maxMove;
      var y = dy * maxMove;
      var rotate = dx * maxRotate;

      blobEl.style.transform =
        "translate(" + x + "px, " + y + "px) rotate(" + rotate + "deg)";
    }

    window.addEventListener("mousemove", handleMouseMove);
  }

  // -----------------------------
  // 4. CTA interactions (spotlight + tilt)
  // -----------------------------
  function initCtaInteractive() {
    // spotlight on stat cards
    var cards = Array.prototype.slice.call(document.querySelectorAll('.cta__stat'));
    cards.forEach(function(card){
      card.addEventListener('mousemove', function(e){
        var rect = card.getBoundingClientRect();
        var mx = e.clientX - rect.left;
        var my = e.clientY - rect.top;
        card.style.setProperty('--mx', mx + 'px');
        card.style.setProperty('--my', my + 'px');
      });
      card.addEventListener('mouseleave', function(){
        card.style.removeProperty('--mx');
        card.style.removeProperty('--my');
      });
    });

    // spotlight on review cards
    var reviews = Array.prototype.slice.call(document.querySelectorAll('.review-card'));
    reviews.forEach(function(card){
      card.addEventListener('mousemove', function(e){
        var rect = card.getBoundingClientRect();
        var mx = e.clientX - rect.left;
        var my = e.clientY - rect.top;
        card.style.setProperty('--mx', mx + 'px');
        card.style.setProperty('--my', my + 'px');
      });
      card.addEventListener('mouseleave', function(){
        card.style.removeProperty('--mx');
        card.style.removeProperty('--my');
      });
    });

    // spotlight on product cards
    var products = Array.prototype.slice.call(document.querySelectorAll('.product-card'));
    products.forEach(function(card){
      card.addEventListener('mousemove', function(e){
        var rect = card.getBoundingClientRect();
        var mx = e.clientX - rect.left;
        var my = e.clientY - rect.top;
        card.style.setProperty('--mx', mx + 'px');
        card.style.setProperty('--my', my + 'px');
      });
      card.addEventListener('mouseleave', function(){
        card.style.removeProperty('--mx');
        card.style.removeProperty('--my');
      });
    });

    // spotlight on hero image cards
    var heroCards = Array.prototype.slice.call(document.querySelectorAll('.hero__image-card'));
    heroCards.forEach(function(card){
      card.addEventListener('mousemove', function(e){
        var rect = card.getBoundingClientRect();
        var mx = e.clientX - rect.left;
        var my = e.clientY - rect.top;
        card.style.setProperty('--mx', mx + 'px');
        card.style.setProperty('--my', my + 'px');
      });
      card.addEventListener('mouseleave', function(){
        card.style.removeProperty('--mx');
        card.style.removeProperty('--my');
      });
    });

    // spotlight on history image circle
    var historyCircle = document.querySelector('.history__image-circle');
    if (historyCircle) {
      historyCircle.addEventListener('mousemove', function(e){
        var rect = historyCircle.getBoundingClientRect();
        var mx = e.clientX - rect.left;
        var my = e.clientY - rect.top;
        historyCircle.style.setProperty('--mx', mx + 'px');
        historyCircle.style.setProperty('--my', my + 'px');
      });
      historyCircle.addEventListener('mouseleave', function(){
        historyCircle.style.removeProperty('--mx');
        historyCircle.style.removeProperty('--my');
      });
    }

    // spotlight on history address box
    var historyAddress = document.querySelector('.history__address');
    if (historyAddress) {
      historyAddress.addEventListener('mousemove', function(e){
        var rect = historyAddress.getBoundingClientRect();
        var mx = e.clientX - rect.left;
        var my = e.clientY - rect.top;
        historyAddress.style.setProperty('--mx', mx + 'px');
        historyAddress.style.setProperty('--my', my + 'px');
      });
      historyAddress.addEventListener('mouseleave', function(){
        historyAddress.style.removeProperty('--mx');
        historyAddress.style.removeProperty('--my');
      });
    }

    // spotlight on team cards
    var teamCards = Array.prototype.slice.call(document.querySelectorAll('.team-card'));
    teamCards.forEach(function(card){
      card.addEventListener('mousemove', function(e){
        var rect = card.getBoundingClientRect();
        var mx = e.clientX - rect.left;
        var my = e.clientY - rect.top;
        card.style.setProperty('--mx', mx + 'px');
        card.style.setProperty('--my', my + 'px');
      });
      card.addEventListener('mouseleave', function(){
        card.style.removeProperty('--mx');
        card.style.removeProperty('--my');
      });
    });

    // subtle tilt for the CTA group
    var cta = document.querySelector('.cta');
    if (!cta) return;

    var maxTilt = 6;
    cta.addEventListener('mousemove', function(e){
      var rect = cta.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = (e.clientX - cx) / rect.width;  // -0.5..0.5 normalized
      var dy = (e.clientY - cy) / rect.height; // -0.5..0.5 normalized
      var rx = dy * -maxTilt;
      var ry = dx * maxTilt;
      cta.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
    });
    cta.addEventListener('mouseleave', function(){
      cta.style.transform = 'rotateX(0) rotateY(0)';
    });

    // subtle tilt for the products container
    var productsContainer = document.querySelector('.products');
    if (productsContainer) {
      var maxTiltProducts = 3;
      productsContainer.addEventListener('mousemove', function(e){
        var rect = productsContainer.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / rect.width;
        var dy = (e.clientY - cy) / rect.height;
        var rx = dy * -maxTiltProducts;
        var ry = dx * maxTiltProducts;
        productsContainer.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
      });
      productsContainer.addEventListener('mouseleave', function(){
        productsContainer.style.transform = 'rotateX(0) rotateY(0)';
      });
    }

    // subtle tilt for the hero container
    var heroContainer = document.querySelector('.hero');
    if (heroContainer) {
      var maxTiltHero = 4;
      heroContainer.addEventListener('mousemove', function(e){
        var rect = heroContainer.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / rect.width;
        var dy = (e.clientY - cy) / rect.height;
        var rx = dy * -maxTiltHero;
        var ry = dx * maxTiltHero;
        heroContainer.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
      });
      heroContainer.addEventListener('mouseleave', function(){
        heroContainer.style.transform = 'rotateX(0) rotateY(0)';
      });
    }

    // subtle tilt for the history container
    var historyContainer = document.querySelector('.history');
    if (historyContainer) {
      var maxTiltHistory = 3;
      historyContainer.addEventListener('mousemove', function(e){
        var rect = historyContainer.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / rect.width;
        var dy = (e.clientY - cy) / rect.height;
        var rx = dy * -maxTiltHistory;
        var ry = dx * maxTiltHistory;
        historyContainer.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
      });
      historyContainer.addEventListener('mouseleave', function(){
        historyContainer.style.transform = 'rotateX(0) rotateY(0)';
      });
    }

    // subtle tilt for the team container
    var teamContainer = document.querySelector('.team');
    if (teamContainer) {
      var maxTiltTeam = 3;
      teamContainer.addEventListener('mousemove', function(e){
        var rect = teamContainer.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / rect.width;
        var dy = (e.clientY - cy) / rect.height;
        var rx = dy * -maxTiltTeam;
        var ry = dx * maxTiltTeam;
        teamContainer.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
      });
      teamContainer.addEventListener('mouseleave', function(){
        teamContainer.style.transform = 'rotateX(0) rotateY(0)';
      });
    }
  }

  // -----------------------------
  // Init
  // -----------------------------
  document.addEventListener("DOMContentLoaded", function () {
    function initThemeToggle() {
      const btns = [
        document.getElementById('themeToggleMobile'),
        document.getElementById('themeToggleTablet'),
        document.getElementById('themeToggleDesktop'),
      ].filter(Boolean);

      const saved = localStorage.getItem('pk-theme');
      if (saved === 'light') {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      } else if (saved === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      }

      function setTheme(mode) {
        if (mode === 'light') {
          document.body.classList.add('light');
          document.body.classList.remove('dark');
          localStorage.setItem('pk-theme', 'light');
        } else {
          document.body.classList.remove('light');
          document.body.classList.add('dark');
          localStorage.setItem('pk-theme', 'dark');
        }
      }

      function currentMode() {
        return document.body.classList.contains('light') ? 'light' : 'dark';
      }

      btns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const next = currentMode() === 'light' ? 'dark' : 'light';
          setTheme(next);
        });
      });

      // Default: start in dark if nothing saved
      if (!saved) {
        setTheme('dark');
      }
    }

    initScrollProgress();
    initBottomNav();
    initBlob();
    initCtaInteractive();
    initThemeToggle();

    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  });
})();
