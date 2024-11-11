import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: StaticImageData;
  links: { label: string; href: string }[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  imageSrc,
  links,
}) => {
  return (
    <div className="relative group p-6 my-10 bg-[rgb(10,25,47)] border border-gray-700 rounded-lg shadow-lg hover:bg-[#112240] transition-colors duration-300 ease-in-out">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Project Image */}
        <div className="relative group order-2 lg:order-1">
          <div
            className="absolute -bottom-4 -right-4 w-full h-full max-w-md max-h-md rounded-lg border-2 border-blue-600"
            aria-hidden="true"
          ></div>
          <div className="relative w-full h-96 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out">
            <Image
              src={imageSrc}
              alt={`${title} screenshot`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform transition-all duration-300 ease-in-out group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-500 opacity-50 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
          </div>

          {/* Text overlay for mobile view */}
          <div className="absolute inset-0 flex flex-col justify-center p-4 bg-[rgba(10,25,47,0.8)] text-center text-gray-300 lg:hidden">
            <h3 className="text-blue-400 text-sm mb-1">Featured Project</h3>
            <h2 className="text-2xl font-bold text-[#ccd6f6] mb-4">{title}</h2>
            <p className="mb-4">
              {description}{" "}
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-blue-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </p>
            <ul className="flex justify-center space-x-4 text-sm text-gray-500">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
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
            <p className="absolute lg:-left-[120px] bg-[#0a192f] bg-opacity-80 p-4 rounded text-gray-400">
              {description}{" "}
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-blue-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
