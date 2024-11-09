import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { NAVLINKS } from "@/components/ui/navlinks";

const Nav = () => {
  return (
    <nav>
      <Tabs defaultValue="/">
        <TabsList>
          {NAVLINKS.map(({ name, path }) => {
            return (
              <Link
                href={path}
                key={name}
                className="font-bold hover:text-blue-500"
              >
                <TabsTrigger value={path}>{name}</TabsTrigger>
              </Link>
            );
          })}
        </TabsList>
      </Tabs>
    </nav>
  );
};
export default Nav;
