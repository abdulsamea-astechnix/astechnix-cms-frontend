"use client";

import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollToTopContent() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export function ScrollToTop() {
  return (
    <Suspense fallback={null}>
      <ScrollToTopContent />
    </Suspense>
  );
}
