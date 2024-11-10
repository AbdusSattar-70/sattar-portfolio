"use client";
import CountUp from "react-countup";
const stats = [
  {
    num: 12,
    text: "Years of experience",
  },
  {
    num: 62,
    text: "Projects completed",
  },
  {
    num: 1920,
    text: "Code commits",
  },
  {
    num: 14,
    text: "Technologies mastered",
  },
];
const Stats = () => {
  return (
    <section className="border border-blue-600 text-slate-500 dark:text-slate-300 py-6 xl:py-2">
      <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto">
        {stats.map((stat) => {
          return (
            <div key={stat.text} className="flex-1 flex gap-4  ">
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl md:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug`}
              >
                {stat.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
