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
    className="bg-background transition-opacity duration-300 ease-in-out"
  >
    <h3 className="text-xl font-semibold text-slate-200">
      <span>{job.title}</span>
      <span className="text-blue-400">
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
    <p className="text-slate-300">{job.duration}</p>
    <ul className="mt-4 list-disc list-inside space-y-2">
      {job.responsibilities.map((task, i) => (
        <li key={i} className="text-slate-400 text-sm">
          {task}
        </li>
      ))}
    </ul>
  </div>
);

export default JobPanel;
