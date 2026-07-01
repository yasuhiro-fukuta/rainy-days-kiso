"use client";

import { useEffect } from "react";

/**
 * Client-side interactivity, ported 1:1 from the static build:
 *  - toggles `.scrolled` on the sticky header past 40px
 *  - injects the CSS rain drops into #rain (skipped when reduced-motion)
 *  - reveal-on-scroll via IntersectionObserver for `.reveal` sections
 * Runs after mount only, so it never affects the server-rendered HTML / SEO.
 */
export default function Effects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () =>
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const rain = document.getElementById("rain");
    if (!reduce && rain && rain.childElementCount === 0) {
      let html = "";
      for (let i = 0; i < 60; i++) {
        const left = Math.random() * 100;
        const dur = 0.6 + Math.random() * 0.9;
        const delay = -Math.random() * 2;
        const len = 40 + Math.random() * 70;
        const op = 0.25 + Math.random() * 0.5;
        html +=
          '<span class="rain-drop" style="left:' +
          left +
          "%;height:" +
          len +
          "px;animation-duration:" +
          dur +
          "s;animation-delay:" +
          delay +
          "s;opacity:" +
          op +
          '"></span>';
      }
      rain.innerHTML = html;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
