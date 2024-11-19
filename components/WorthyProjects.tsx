import { WORTHY_PROJECT_DATA } from "@/lib/data/worthyProjectData";
import Link from "next/link";
import { ShowMoreProjects } from "./ui/show-more-projects";

export const WorthyProjects = () => {
  return (
    <section className="bg-background pt-16">
      <div className="container mx-auto p-4 space-y-8">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="my-gradient gradient-border text-2xl text-slate-300">
            Beyond the Spotlight
          </h2>
          <div>
            <Link href="#" className="gradient-border nav-border-hover">
              View the Archive
            </Link>
          </div>
        </div>

        {/* Client Component for Dynamic Rendering */}
        <ShowMoreProjects projects={WORTHY_PROJECT_DATA} />
      </div>
    </section>
  );
};
