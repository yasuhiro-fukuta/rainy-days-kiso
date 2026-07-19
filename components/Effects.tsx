"use client";

import { useEffect } from "react";

/**
 * Client-side interactivity, ported 1:1 from the static build:
 *  - toggles `.scrolled` on the sticky header past 40px
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
