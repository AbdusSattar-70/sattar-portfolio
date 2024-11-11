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
    className="flex flex-col lg:w-1/3 border-r border-gray-300"
  >
    {jobs.map((job, index) => (
      <button
        key={index}
        role="tab"
        id={`tab-${index}`}
        aria-selected={activeTab === index}
        aria-controls={`panel-${index}`}
        onClick={() => onTabClick(index)}
        className={`py-2 px-4 text-left ${
          activeTab === index
            ? "bg-teal-500 text-white font-bold"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        {job.company}
      </button>
    ))}
  </div>
);

export default JobTabs;
