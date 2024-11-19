import Link from "next/link";
import { PiArrowSquareOutThin, PiGithubLogoThin } from "react-icons/pi";

interface WorthyProps {
  title: string;
  description: string;
  technologies: string[];
  links: { github: string; live: string };
}

const WorthyCard: React.FC<WorthyProps> = ({
  title,
  description,
  technologies,
  links,
}) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-blue-300 hover:shadow-lg transition-shadow group">
      <div className="flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-folder text-blue-500 w-7 h-7"
        >
          <title>Folder</title>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <div className="flex gap-2">
          <Link href={links.github} target="_blank" rel="noopener noreferrer">
            <PiGithubLogoThin className="text-2xl text-slate-100 hover:text-blue-500" />
          </Link>
          <Link href={links.live} target="_blank" rel="noopener noreferrer">
            <PiArrowSquareOutThin className="text-2xl text-slate-100 hover:text-blue-500" />
          </Link>
        </div>
      </div>
      <h5 className="my-2 text-2xl font-thin tracking-tight text-gray-900 dark:text-slate-300 group-hover:text-blue-500 transition-colors">
        {title}
      </h5>
      <p className="my-4 text-sm text-slate-400">{description}</p>
      <ul className="flex flex-wrap space-x-2 text-slate-300 font-light">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorthyCard;
