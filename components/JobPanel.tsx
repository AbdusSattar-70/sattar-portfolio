import { Job } from "@/lib/data/jobsData";
import { FC } from "react";

interface JobPanelProps {
  job: Job;
  isActive: boolean;
}

const JobPanel: FC<JobPanelProps> = ({ job, isActive }) => (
  <div
    role="tabpanel"
    id={`panel-${job.company}`}
    aria-labelledby={`tab-${job.company}`}
    hidden={!isActive}
    className="transition-opacity duration-300 ease-in-out"
  >
    <h3 className="text-xl font-semibold">
      <span>{job.title}</span>
      <span className="text-teal-500">
        {" "}
        @{" "}
        <a
          href={job.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {job.company}
        </a>
      </span>
    </h3>
    <p className="text-gray-500">{job.duration}</p>
    <ul className="mt-4 list-disc list-inside space-y-2">
      {job.responsibilities.map((task, i) => (
        <li key={i} className="text-gray-700">
          {task}
        </li>
      ))}
    </ul>
  </div>
);

export default JobPanel;
