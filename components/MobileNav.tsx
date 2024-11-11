import { Button } from "@/components/ui/button";
import { LucideLayoutGrid } from "lucide-react";
import Logo from "@/public/logo.webp";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { NAVLINKS } from "@/components/ui/navlinks";
import { ModeToggle } from "./ui/mode-toggle";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <LucideLayoutGrid />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-52 text-blue-400">
        <SheetHeader>
          {/* Logo */}
          <SheetTitle>
            <SheetClose asChild>
              <Link href="/" className="text-blue-400">
                <Image src={Logo} alt="Logo" className="w-6 h-6" />
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        {/* nav */}
        <div className="flex flex-col gap-8 pt-8 w-24">
          {NAVLINKS.map(({ name, path, icon }) => {
            return (
              <SheetClose key={name} asChild>
                <Link href={path} className="font-bold hover:text-slate-400">
                  <div className="flex gap-2">
                    <span>{icon}</span>
                    {name}
                  </div>
                </Link>
              </SheetClose>
            );
          })}
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
