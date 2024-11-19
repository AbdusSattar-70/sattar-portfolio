import { FEATURE_PROJECT_DATA } from "@/lib/data/featureProjectData";
import ProjectCard from "./ProjectCard";

const FeaturedProjects: React.FC = () => {
  return (
    <section id="work" className="bg-background">
      <div className="container mx-auto p-4 space-y-4">
        <h2 className="my-gradient gradient-border nav-border-b nav-border-hover text-2xl font-semibold text-slate-300 mb-4 py-2">
          What I’ve Been Crafting
        </h2>
        {FEATURE_PROJECT_DATA.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
