"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NAVLINKS } from "@/components/ui/navlinks";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [hash, setHash] = useState(() => window.location.hash || "#home");

  const handleClick = (path: string) => {
    window.location.hash = path;
    setHash(path);
  };

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <Tabs defaultValue={hash} aria-label="Navigation Tabs">
        <TabsList>
          {NAVLINKS.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              onClick={() => handleClick(path)}
              aria-label={`Navigate to ${name}`}
              className={`font-bold hover:text-blue-500 gradient-border nav-border-hover ${
                path === hash ? "nav-border-b" : ""
              }`}
            >
              <TabsTrigger value={path}>{name}</TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
};

export default Nav;
