"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const classNames = (...classNames: (string | boolean)[]): string =>
  classNames.filter(Boolean).join(" ");

interface ActiveLinkProps {
  children: React.ReactNode;
  isRoot?: boolean;
  href: string;
  activeClassName: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  href,
  activeClassName,
  isRoot = false,
}) => {
  const pathName: string = usePathname();
  const active: boolean = isRoot
    ? pathName === href
    : pathName.startsWith(href);
  const classes: string = classNames(active && activeClassName);

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default ActiveLink;
