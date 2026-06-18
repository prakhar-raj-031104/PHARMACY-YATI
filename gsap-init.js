/* ============================================================
   Yati Pharmaceutical — GSAP Premium Interactions
   Scroll reveals · parallax · interactive 3D cards · magnetic CTAs
   Inspired by the motion language of morethanmedication.com.au
   ============================================================ */
(function () {
    "use strict";

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hasGSAP = typeof window.gsap !== "undefined";
    var isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (!hasGSAP) return;

    if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }

    /* ----------------------------------------------------------
       1. Scroll-triggered section reveals (with stagger groups)
       Upgrades the existing .reveal elements with smoother motion.
    ---------------------------------------------------------- */
    function initScrollReveals() {
        if (prefersReduced || !window.ScrollTrigger) return;

        // Neutralise the legacy CSS reveal so GSAP fully owns the motion.
        gsap.set(".reveal", { clearProps: "transition" });

        gsap.utils.toArray(".reveal").forEach(function (el) {
            if (el.dataset.gsapBatch) return; // already handled by a card batch
            var delay = 0;
            for (var i = 1; i <= 6; i++) {
                if (el.classList.contains("stagger-" + i)) { delay = i * 0.08; break; }
            }
            gsap.fromTo(el,
                { autoAlpha: 0, y: 46 },
                {
                    autoAlpha: 1, y: 0, duration: 1, delay: delay,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 88%", once: true }
                }
            );
        });
    }

    /* ----------------------------------------------------------
       2. Staggered "pop-in" batches for card grids & gallery
    ---------------------------------------------------------- */
    function initCardBatches() {
        if (prefersReduced || !window.ScrollTrigger || !ScrollTrigger.batch) return;

        var groups = [
            ".why-grid .why-card",
            ".category-grid .category-card",
            ".certification-grid .cert-card",
            ".news-grid .news-card",
            ".research-cards-grid .research-info-card",
            ".feature-cards-grid .feature-spec-card",
            ".gallery-grid .gallery-item",
            ".about-cards-grid .leaf-card-wrapper",
            ".executives-grid .executive-card"
        ];

        groups.forEach(function (sel) {
            var items = gsap.utils.toArray(sel);
            if (!items.length) return;
            items.forEach(function (it) { it.dataset.gsapBatch = "1"; });
            gsap.set(items, { autoAlpha: 0, y: 40, scale: 0.97 });
            ScrollTrigger.batch(items, {
                start: "top 90%",
                once: true,
                onEnter: function (batch) {
                    gsap.to(batch, {
                        autoAlpha: 1, y: 0, scale: 1,
                        duration: 0.8, ease: "power3.out",
                        stagger: 0.09, overwrite: true
                    });
                }
            });
        });
    }

    /* ----------------------------------------------------------
       3. Subtle parallax on hero copy and feature imagery
    ---------------------------------------------------------- */
    function initParallax() {
        if (prefersReduced || !window.ScrollTrigger) return;

        var heroContent = document.querySelector(".hero-slide.active .hero-slide-content");
        if (heroContent) {
            gsap.to(".hero-slider-section .hero-slide img", {
                yPercent: 12, ease: "none",
                scrollTrigger: { trigger: ".hero-slider-section", start: "top top", end: "bottom top", scrub: true }
            });
        }

        var parallaxImgs = [
            { sel: ".global-map-image", amount: -8 },
            { sel: ".circular-frame-wrapper img", amount: -10 },
            { sel: ".innovation-sphere .sphere-image", amount: -6 }
        ];
        parallaxImgs.forEach(function (p) {
            var node = document.querySelector(p.sel);
            if (!node) return;
            gsap.to(node, {
                yPercent: p.amount, ease: "none",
                scrollTrigger: { trigger: node, start: "top bottom", end: "bottom top", scrub: true }
            });
        });
    }

    /* ----------------------------------------------------------
       4. Interactive 3D tilt cards with moving light glare
    ---------------------------------------------------------- */
    function initTiltCards() {
        if (isTouch || prefersReduced) return;

        var selector = [
            ".why-card", ".category-card", ".cert-card", ".news-card",
            ".research-info-card", ".feature-spec-card", ".executive-card",
            ".leaf-card", ".stat-item", ".job-card"
        ].join(",");

        gsap.utils.toArray(selector).forEach(function (card) {
            card.classList.add("tilt-card");
            gsap.set(card, { transformPerspective: 900, transformStyle: "preserve-3d" });

            // Inject the glare layer once.
            if (!card.querySelector(".tilt-glare")) {
                var glare = document.createElement("span");
                glare.className = "tilt-glare";
                card.appendChild(glare);
            }
            var glareEl = card.querySelector(".tilt-glare");

            var rotX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3.out" });
            var rotY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3.out" });

            function onMove(e) {
                var r = card.getBoundingClientRect();
                var px = (e.clientX - r.left) / r.width;   // 0..1
                var py = (e.clientY - r.top) / r.height;   // 0..1
                rotY((px - 0.5) * 11);
                rotX((0.5 - py) * 11);
                if (glareEl) {
                    glareEl.style.opacity = "1";
                    glareEl.style.background =
                        "radial-gradient(circle at " + (px * 100) + "% " + (py * 100) +
                        "%, rgba(255,255,255,0.28), rgba(255,255,255,0) 55%)";
                }
            }
            function onEnter() {
                gsap.to(card, { z: 30, scale: 1.015, duration: 0.4, ease: "power2.out", overwrite: "auto" });
            }
            function onLeave() {
                rotX(0); rotY(0);
                gsap.to(card, { z: 0, scale: 1, duration: 0.6, ease: "power3.out", overwrite: "auto" });
                if (glareEl) glareEl.style.opacity = "0";
            }

            card.addEventListener("mousemove", onMove);
            card.addEventListener("mouseenter", onEnter);
            card.addEventListener("mouseleave", onLeave);
        });
    }

    /* ----------------------------------------------------------
       5. Magnetic call-to-action buttons
    ---------------------------------------------------------- */
    function initMagneticButtons() {
        if (isTouch || prefersReduced) return;

        gsap.utils.toArray(".cta-btn, .category-card-btn, .back-to-top-btn").forEach(function (btn) {
            var xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
            var yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });

            btn.addEventListener("mousemove", function (e) {
                var r = btn.getBoundingClientRect();
                xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
                yTo((e.clientY - (r.top + r.height / 2)) * 0.45);
            });
            btn.addEventListener("mouseleave", function () { xTo(0); yTo(0); });
        });
    }

    function init() {
        initCardBatches();   // flag grid cards first so reveals skip them
        initScrollReveals();
        initParallax();
        initTiltCards();
        initMagneticButtons();
        if (window.ScrollTrigger) {
            window.addEventListener("load", function () { ScrollTrigger.refresh(); });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
