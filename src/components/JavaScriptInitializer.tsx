"use client";

import { useEffect } from "react";
import { useGLightbox } from "@/hooks/useGLightbox";
import { useSwiper } from "@/hooks/useSwiper";

export default function JavaScriptInitializer() {
  // Initialize GLightbox
  useGLightbox();

  // Initialize Swiper
  useSwiper();

  useEffect(() => {
    // Handle dropdown toggles
    const handleDropdownToggle = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const parent = target.parentNode as HTMLElement;
      const nextSibling = parent.nextElementSibling as HTMLElement;

      parent.classList.toggle("active");
      if (nextSibling) {
        nextSibling.classList.toggle("dropdown-active");
      }
      e.stopImmediatePropagation();
    };

    // Add event listeners to dropdown toggles
    const dropdownToggles = document.querySelectorAll(
      ".navmenu .toggle-dropdown"
    );
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", handleDropdownToggle);
    });

    return () => {
      dropdownToggles.forEach((toggle) => {
        toggle.removeEventListener("click", handleDropdownToggle);
      });
    };
  }, []);

  return null;
}
