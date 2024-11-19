"use client";

import { useState } from "react";
import WorthyCard from "../WorthyCard";
import { Button } from "./button";

interface WorthyProps {
  title: string;
  description: string;
  technologies: string[];
  links: { github: string; live: string };
}

export const ShowMoreProjects = ({ projects }: { projects: WorthyProps[] }) => {
  const [showCount, setShowCount] = useState(6);

  const toggleShowMore = () => {
    setShowCount((prev) => (prev === 6 ? projects.length : 6));
  };

  return (
    <>
      {/* Project Cards Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
        {projects.slice(0, showCount).map((project) => (
          <div key={project.title}>
            <WorthyCard {...project} />
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="flex justify-center mt-4">
        <Button
          onClick={toggleShowMore}
          variant="outline"
          size="lg"
          className="bg-background dark:bg-background border border-blue-500 dark:border-blue-500"
        >
          {showCount === 6 ? "Show More" : "Show Less"}
        </Button>
      </div>
    </>
  );
};
