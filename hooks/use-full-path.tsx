"use client";

import { useEffect, useState } from "react";

export const useFullPath = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    if (typeof window !== "undefined") {
      setHash(window.location.hash);
      window.addEventListener("hashchange", updateHash);
    }

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return hash;
};
