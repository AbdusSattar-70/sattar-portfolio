import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NAVLINKS } from "@/components/ui/navlinks";

const Nav = () => {
  return (
    <nav role="navigation" aria-label="Main Navigation">
      <Tabs defaultValue="#home" aria-label="Navigation Tabs">
        <TabsList>
          {NAVLINKS.map(({ name, path }) => {
            return (
              <TabsTrigger
                value={path}
                key={name}
                className="font-bold hover:text-blue-500"
              >
                <a
                  href={path}
                  aria-label={`Navigate to ${name}`}
                  className="font-bold hover:text-blue-500"
                >
                  {name}
                </a>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </nav>
  );
};

export default Nav;
