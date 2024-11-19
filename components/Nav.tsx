"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NAVLINKS } from "@/components/ui/navlinks";
import { useState, useEffect } from "react";

const Nav = () => {
  // Initialize hash state properly for both client and server
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash || "#home" : "#home"
  );

  useEffect(() => {
    // Update hash state when the hash changes
    const handleHashChange = () => setHash(window.location.hash || "#home");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleClick = (path: string) => {
    window.location.hash = path; // Update URL hash
    setHash(path); // Update state
  };

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <Tabs value={hash} aria-label="Navigation Tabs">
        <TabsList>
          {NAVLINKS.map(({ name, path }) => (
            <TabsTrigger
              key={name}
              value={path}
              className={`font-bold hover:text-blue-500 gradient-border nav-border-hover ${
                path === hash ? "nav-border-b" : ""
              }`}
              onClick={() => handleClick(path)}
            >
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
};

export default Nav;
