// Experience.tsx
"use client";
import { useState } from "react";
import JobTabs from "./JobTabs";
import { jobs } from "@/lib/data/jobsData";
import JobPanel from "./JobPanel";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto py-12">
        <h2 className="my-gradient gradient-border nav-border-b nav-border-hover text-2xl font-semibold text-slate-300 mb-4 py-2">
          Roles That Shaped Me
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-[300px]">
            <JobTabs
              jobs={jobs}
              activeTab={activeTab}
              onTabClick={setActiveTab}
            />
          </div>

          <div className="lg:w-2/3 p-4 text-slate-300">
            {jobs.map((job, index) => (
              <JobPanel key={index} job={job} isActive={activeTab === index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
