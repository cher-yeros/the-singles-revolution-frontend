"use client";

import { useEffect } from "react";

export const useGLightbox = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const initGLightbox = async () => {
      const GLightbox = (await import("glightbox")).default;
      const lightbox = GLightbox({
        selector: ".glightbox",
      });

      return lightbox;
    };

    let lightbox: any;
    initGLightbox().then((lb) => {
      lightbox = lb;
    });

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, []);
};
