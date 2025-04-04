"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Ensure the body's class is consistently set after hydration
    document.body.classList.add("antialiased");

    return () => {
      document.body.classList.remove("antialiased"); // Cleanup on unmount
    };
  }, []);

  return <>{children}</>;
}
