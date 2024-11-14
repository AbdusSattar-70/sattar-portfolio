import { Job } from "@/lib/data/jobsData";
import { FC } from "react";

interface JobTabsProps {
  jobs: Job[];
  activeTab: number;
  onTabClick: (index: number) => void;
}

const JobTabs: FC<JobTabsProps> = ({ jobs, activeTab, onTabClick }) => (
  <div
    role="tablist"
    aria-label="Job tabs"
    className="flex lg:flex-col max-w-7xl h-fit border-b lg:border-l lg:border-b-transparent border-slate-800 overflow-x-auto whitespace-nowrap scroll-smooth"
  >
    {jobs.map((job, index) => (
      <button
        key={index}
        role="tab"
        id={`tab-${index}`}
        aria-selected={activeTab === index}
        aria-controls={`panel-${index}`}
        onClick={() => onTabClick(index)}
        className={`py-2 px-4 text-left text-sm transition-colors duration-300 ${
          activeTab === index
            ? "bg-slate-800 text-blue-400 border-b lg:border-l lg:border-b-transparent border-blue-400"
            : "text-white hover:bg-slate-800 hover:text-blue-500"
        }`}
      >
        {job.company}
      </button>
    ))}
  </div>
);

export default JobTabs;
