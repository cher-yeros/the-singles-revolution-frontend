"use client";

import { useEffect } from "react";

export const useSwiper = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const initSwiper = async () => {
      const { Swiper } = await import("swiper");

      const swiperElements = document.querySelectorAll(".init-swiper");

      swiperElements.forEach((swiperElement) => {
        const configElement = swiperElement.querySelector(".swiper-config");
        if (!configElement) return;

        try {
          const config = JSON.parse(configElement.innerHTML.trim());

          if (swiperElement.classList.contains("swiper-tab")) {
            // Handle custom pagination for tab swipers
            initSwiperWithCustomPagination(swiperElement, config, Swiper);
          } else {
            new Swiper(swiperElement as HTMLElement, config);
          }
        } catch (error) {
          console.error("Error parsing Swiper config:", error);
        }
      });
    };

    const initSwiperWithCustomPagination = (
      element: Element,
      config: any,
      Swiper: any
    ) => {
      // Custom pagination logic for tab swipers
      new Swiper(element as HTMLElement, {
        ...config,
        on: {
          slideChange: function () {
            // Handle tab switching logic here
            const activeIndex = this.activeIndex;
            const tabs = document.querySelectorAll(".tab-button");
            tabs.forEach((tab, index) => {
              if (index === activeIndex) {
                tab.classList.add("active");
              } else {
                tab.classList.remove("active");
              }
            });
          },
        },
      });
    };

    initSwiper();
  }, []);
};
