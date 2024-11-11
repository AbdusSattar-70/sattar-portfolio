import Stats from "./Stats";
import { Button } from "./ui/button";

const HomeTop = () => {
  return (
    <section id="home" className="h-full bg-background">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 py-2">
        <div className="py-4">
          <h1 className="text-blue-500 py-2">Hi, my name is</h1>
          <h2 className="text-4xl text-slate-300 sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            Abdus Sattar
          </h2>

          <p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-slate-400">
            I build things for the web.
          </p>
          <p className="text-md sm:text-lg md:text-xl mt-2 text-slate-500">
            I am a full-stack software developer with a strong focus on creating
            scalable web applications.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-1 text-slate-500">
            I can help you develop a product, feature, or website. Browse{" "}
            <a href="#project" className="text-blue-600 underline">
              some of my work
            </a>{" "}
            and see my experience! If you like what you see and have a project
            that needs coding, feel free to reach out —
            <span className="ml-1">Looking to start a project?</span>
          </p>
          <div className="py-2">
            <Button
              variant="outline"
              size="lg"
              className="bg-background dark:bg-background border border-blue-500 dark:border-blue-500"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default HomeTop;
