import { FEATURE_PROJECT_DATA } from "@/lib/data/featureProjectData";
import ProjectCard from "./ProjectCard";

const FeaturedProjects: React.FC = () => {
  return (
    <section className="container mx-auto p-6 space-y-10">
      {FEATURE_PROJECT_DATA.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default FeaturedProjects;
