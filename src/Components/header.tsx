import Link from "next/link";
import React from "react";
import { MountainIcon } from "./Icons";
import { Separator } from "./ui/separator";
import { siteConfig } from "./config/site";

const Header = () => {
  return (
    <div className="flex-col">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        {siteConfig.navBar.map((site, index) => (
          <Link
            href={site.href}
            className={
              site.label === "Trial Saas"
                ? "mr-6 hidden gap-2  lg:flex"
                : "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            }
            prefetch={false}
            key={index}
          >
            {site.icon}
            <span className="font-bold">{site.label}</span>
          </Link>
        ))}

        <div className="ml-auto flex gap-2">
          <Link
            href="/auth/sign-in"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="/auth/sign-up"
            className="inline-flex h-9 items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up
          </Link>
        </div>
      </header>
      <Separator orientation="horizontal" />
    </div>
  );
};

export default Header;
