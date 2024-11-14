import { FEATURE_PROJECT_DATA } from "@/lib/data/featureProjectData";
import ProjectCard from "./ProjectCard";

const FeaturedProjects: React.FC = () => {
  return (
    <section id="work" className="bg-background">
      <div className="container mx-auto p-4 space-y-4">
        {FEATURE_PROJECT_DATA.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
