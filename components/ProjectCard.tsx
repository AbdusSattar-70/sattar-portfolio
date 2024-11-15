import React from "react";
import Image, { StaticImageData } from "next/image";
import { PiGithubLogoThin, PiArrowSquareOutThin } from "react-icons/pi";
interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: StaticImageData;
  links: { github: string; live: string };
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  imageSrc,
  links,
}) => {
  return (
    <div className="relative group p-6 my-10 bg-background rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Project Image */}
        <div className="relative group order-2 lg:order-1">
          <div className="relative group">
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border-2 border-blue-600"
              aria-hidden="true"
            ></div>
            <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out">
              <Image
                src={imageSrc}
                alt={`${title} screenshot`}
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg transform transition-all duration-300 ease-in-out group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-50 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </div>

          {/* Text overlay for mobile view */}
          <div className="absolute inset-0 text-sm flex flex-col p-6 bg-background opacity-80 text-slate-50 lg:hidden">
            <h3 className="text-blue-400 mb-1">Featured Project</h3>
            <h2 className="text-xl font-semibold text-[#ccd6f6] mb-4">
              {title}
            </h2>
            <p className="my-4">{description} </p>
            <ul className="flex flex-wrap space-x-2 text-slate-300">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="flex gap-4 pt-6">
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <PiGithubLogoThin className=" text-4xl text-slate-500 hover:text-blue-500" />
              </a>
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                <PiArrowSquareOutThin className=" text-4xl text-slate-500 hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Text Content for larger screens */}
        <div className="hidden lg:flex lg:flex-col gap-4 text-left lg:text-right order-1 lg:order-2">
          <h3 className="text-blue-400 text-sm mb-1">Featured Project</h3>
          <h2 className="text-2xl font-bold text-[#ccd6f6] mb-4">{title}</h2>

          {/* Technology list */}
          <ul className="flex flex-wrap justify-end space-x-4 text-sm text-gray-500 mt-2 lg:mt-4">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="relative">
            <p className="absolute lg:-left-[120px] text-left bg-[#0a192f] bg-opacity-80 p-4 rounded text-gray-400">
              {description}{" "}
            </p>
          </div>
          <div className="absolute bottom-10 right-5 flex gap-4 pt-6">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <PiGithubLogoThin className=" text-4xl text-slate-500 hover:text-blue-500" />
            </a>
            <a href={links.live} target="_blank" rel="noopener noreferrer">
              <PiArrowSquareOutThin className=" text-4xl text-slate-500 hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
