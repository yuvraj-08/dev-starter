"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on homepage
    if (pathname !== "/") return;

    const scrollToHash = () => {
      if (typeof window === "undefined") return;

      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.slice(1); // remove "#"
      const el = document.getElementById(id);
      if (el) {
        // Optional timeout in case the page hasn’t fully rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    };

    scrollToHash();
  }, [pathname]);

  return null;
}
