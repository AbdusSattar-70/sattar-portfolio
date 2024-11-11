// Experience.tsx
"use client";
import { useState } from "react";
import JobTabs from "./JobTabs";
import { jobs } from "@/lib/data/jobsData";
import JobPanel from "./JobPanel";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold mb-6">Where I’ve Worked</h2>
      <div className="flex flex-col lg:flex-row">
        <JobTabs jobs={jobs} activeTab={activeTab} onTabClick={setActiveTab} />

        <div className="lg:w-2/3 p-4">
          {jobs.map((job, index) => (
            <JobPanel key={index} job={job} isActive={activeTab === index} />
          ))}
        </div>
      </div>
    </section>
  );
}
