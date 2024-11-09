import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.webp";
import Nav from "./Nav";
import { ModeToggle } from "./ui/mode-toggle";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-slate-950  dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">Sattar</h1>
        </Link>

        {/* desktop nav and mode toggler*/}
        <div className="hidden md:flex items-center gap-4">
          <Nav />
          <ModeToggle />
        </div>
        {/* Mobile nav */}
        <div className="md:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
