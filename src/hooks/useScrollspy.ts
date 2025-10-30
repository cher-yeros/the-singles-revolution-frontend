"use client";

import { useEffect } from "react";

export const useScrollspy = () => {
  useEffect(() => {
    const navmenulinks = document.querySelectorAll(".navmenu a");

    const navmenuScrollspy = () => {
      navmenulinks.forEach((navmenulink) => {
        const link = navmenulink as HTMLAnchorElement;
        if (!link.hash) return;

        const section = document.querySelector(link.hash);
        if (!section || !(section instanceof HTMLElement)) return;

        const position = window.scrollY + 200;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (position >= sectionTop && position <= sectionTop + sectionHeight) {
          // Remove active class from all nav links
          document
            .querySelectorAll(".navmenu a.active")
            .forEach((activeLink) => {
              activeLink.classList.remove("active");
            });
          // Add active class to current link
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    // Initial call
    navmenuScrollspy();

    // Add scroll listener
    window.addEventListener("scroll", navmenuScrollspy);

    return () => {
      window.removeEventListener("scroll", navmenuScrollspy);
    };
  }, []);
};
