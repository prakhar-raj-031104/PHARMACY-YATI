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
                { autoAlpha: 0, y: 64 },
                {
                    autoAlpha: 1, y: 0, duration: 1.3, delay: delay,
                    ease: "expo.out",
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
            ".executives-grid .executive-card"
        ];

        groups.forEach(function (sel) {
            var items = gsap.utils.toArray(sel);
            if (!items.length) return;
            items.forEach(function (it, idx) {
                it.dataset.gsapBatch = "1";
                // Alternate entry direction: odd columns sweep in from the right,
                // even from the left, for a fashionable woven reveal.
                gsap.set(it, {
                    autoAlpha: 0,
                    x: (idx % 2 === 0) ? -70 : 70,
                    y: 60, scale: 0.9, rotationY: (idx % 2 === 0) ? -8 : 8,
                    transformPerspective: 900, transformOrigin: "center"
                });
            });
            ScrollTrigger.batch(items, {
                start: "top 92%",
                once: true,
                onEnter: function (batch) {
                    gsap.to(batch, {
                        autoAlpha: 1, x: 0, y: 0, scale: 1, rotationY: 0,
                        duration: 1.05, ease: "power4.out",
                        stagger: { each: 0.11, from: "start" },
                        overwrite: true
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

    /* ----------------------------------------------------------
       6. About cards: roomy scroll-led entrance
    ---------------------------------------------------------- */
    function initAboutCardsMotion() {
        var section = document.querySelector(".about-section");
        var cards = gsap.utils.toArray(".about-cards-grid .leaf-card-wrapper");
        if (!section || !cards.length || prefersReduced || !window.ScrollTrigger) return;

        section.classList.add("about-motion-ready");
        cards.forEach(function (card) { card.dataset.gsapBatch = "1"; });

        gsap.set(cards, {
            autoAlpha: 0,
            x: 150,
            y: 70,
            scale: 0.9,
            rotationY: -16,
            transformPerspective: 1100,
            transformOrigin: "center center"
        });

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 72%",
                end: "bottom 38%",
                scrub: 0.75,
                invalidateOnRefresh: true
            }
        });

        tl.to(cards, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: "power4.out",
            stagger: { each: 0.13, from: "start" },
            overwrite: true
        });

        tl.to(cards, {
            y: function (_, card) {
                var index = cards.indexOf(card);
                return (index - 1) * -22;
            },
            rotationZ: function (_, card) {
                var index = cards.indexOf(card);
                return (index - 1) * 0.7;
            },
            duration: 0.8,
            ease: "none",
            stagger: 0.04
        }, 0.45);
    }

    /* ----------------------------------------------------------
       7. Products: horizontal right-to-left scroll showcase
    ---------------------------------------------------------- */
    function initProductHorizontalScroll() {
        var section = document.querySelector(".products-section");
        var track = document.querySelector(".products-section .category-grid");
        var cards = gsap.utils.toArray(".products-section .category-card");
        if (!section || !track || cards.length < 2 || prefersReduced || !window.ScrollTrigger) return;

        track.dataset.gsapBatch = "1";
        track.classList.add("reveal-visible");
        cards.forEach(function (card) { card.dataset.gsapBatch = "1"; });

        var mm = gsap.matchMedia();
        mm.add("(min-width: 901px)", function () {
            section.classList.add("ph-ready");

            function startOffset() {
                return Math.min(window.innerWidth * 0.18, 230);
            }

            function travelDistance() {
                // Move exactly enough to bring the last card into view
                // (accounting for the initial right-shift) plus a small margin.
                return Math.max(0, track.scrollWidth - window.innerWidth + startOffset() + 48);
            }

            var scrollLength = function () {
                // Keep scroll distance close to the actual travel so the
                // section never feels "stuck"/pinned longer than it moves.
                return "+=" + (travelDistance() + window.innerHeight * 0.15);
            };

            gsap.set(track, { x: startOffset });

            // Simple, clean entry — a light fade-up, no 3D/drift extras.
            gsap.set(cards, { autoAlpha: 0, y: 40 });
            gsap.to(cards, {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.07,
                scrollTrigger: {
                    trigger: section,
                    start: "top 78%",
                    once: true
                }
            });

            // Slow, smooth, continuous right -> left roll tied to scroll (no snapping).
            var horizontalTween = gsap.to(track, {
                x: function () { return -travelDistance(); },
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: scrollLength,
                    pin: true,
                    scrub: 0.8,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });

            return function () {
                section.classList.remove("ph-ready");
                horizontalTween.kill();
                gsap.set(track, { clearProps: "transform" });
                gsap.set(cards, { clearProps: "transform,opacity,visibility" });
            };
        });
    }

    /* ----------------------------------------------------------
       8. Pinned stacked-card scroll showcase (swap on scroll)
    ---------------------------------------------------------- */
    function initStackCards() {
        var section = document.querySelector(".stack-section");
        var pin = document.querySelector(".stack-pin");
        if (!section || !pin) return;
        var cards = gsap.utils.toArray(".stack-card");
        if (cards.length < 2 || prefersReduced || !window.ScrollTrigger) return;

        section.classList.add("stack-ready");

        // Simple & clean: each next card waits below, then rises OVER the stack.
        // Previous cards stay put underneath (never removed).
        cards.forEach(function (card, i) {
            gsap.set(card, {
                zIndex: i,                       // later cards stack on top
                yPercent: i === 0 ? 0 : 100      // start just below the viewport
            });
        });

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: pin,                    // pin element is the trigger -> centers correctly
                start: "top top",
                end: function () { return "+=" + (window.innerHeight * (cards.length - 1) * 0.7); },
                pin: pin,
                scrub: 0.5,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        for (var i = 1; i < cards.length; i++) {
            tl.to(cards[i], { yPercent: 0, ease: "power2.out", duration: 1 }, i - 1);
        }
    }

    /* ----------------------------------------------------------
       8. Testimonials slider (auto-advancing + dots)
    ---------------------------------------------------------- */
    function initTestimonialSlider() {
        var track = document.getElementById("testimonial-track");
        var dotsWrap = document.getElementById("testimonial-dots");
        if (!track || !dotsWrap) return;
        var slides = track.children;
        var total = slides.length;
        if (!total) return;
        var index = 0, timer = null;

        for (var i = 0; i < total; i++) {
            var dot = document.createElement("span");
            dot.dataset.i = i;
            if (i === 0) dot.className = "active";
            dotsWrap.appendChild(dot);
        }
        var dots = dotsWrap.children;

        function go(n) {
            index = (n + total) % total;
            track.style.transform = "translateX(-" + (index * 100) + "%)";
            for (var d = 0; d < dots.length; d++) dots[d].classList.toggle("active", d === index);
        }
        function start() { timer = setInterval(function () { go(index + 1); }, 5500); }
        function stop() { if (timer) clearInterval(timer); }

        dotsWrap.addEventListener("click", function (e) {
            if (e.target.dataset.i !== undefined) { go(+e.target.dataset.i); stop(); start(); }
        });
        var slider = document.getElementById("testimonial-slider");
        if (slider) {
            slider.addEventListener("mouseenter", stop);
            slider.addEventListener("mouseleave", start);
        }
        start();
    }

    /* ----------------------------------------------------------
       9. Smooth inertia scrolling (Lenis) — agency-style feel,
          synced with ScrollTrigger and in-page anchor links.
    ---------------------------------------------------------- */
    function initSmoothScroll() {
        if (prefersReduced || typeof window.Lenis === "undefined") return;

        var lenis = new Lenis({
            duration: 1.15,
            smoothWheel: true,
            easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }
        });
        window.__lenis = lenis;

        if (window.ScrollTrigger) {
            lenis.on("scroll", ScrollTrigger.update);
        }
        gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);

        // Route in-page anchor links through Lenis for a smooth glide.
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener("click", function (e) {
                var id = link.getAttribute("href");
                if (!id || id === "#") return;
                var target = document.querySelector(id);
                if (!target) return;
                e.preventDefault();
                lenis.scrollTo(target, { offset: -72, duration: 1.2 });
            });
        });
    }

    function init() {
        initSmoothScroll();
        initCardBatches();   // flag grid cards first so reveals skip them
        initScrollReveals();
        initParallax();
        initAboutCardsMotion();
        initTiltCards();
        initMagneticButtons();
        initStackCards();
        initTestimonialSlider();
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
