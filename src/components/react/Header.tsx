import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SITE_TITLE } from "@/consts";
import type React from "react";
import { ModeToggle } from "./ModeToggle";

const links = [
  // {
  //   href: "/",
  //   text: "Home",
  // },
  {
    href: "/astronomy",
    text: "Astronomy",
  },
  {
    href: "/earth-systems",
    text: "Earth Systems",
  },
  {
    href: "/physics",
    text: "Physics",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export default function Header({ children }: React.PropsWithChildren<{}>) {
  // Get the current path
  const currentPath = window.location.pathname;

  // Determine if the link is active
  const linkClasses = (to: string, classes = "font-bold  hover:underline") => {
    if (currentPath === to) {
      return classes + " underline";
    } else {
      return classes;
    }
  };

  return (
    <>
      <header className="sticky bg-white dark:bg-black top-0 z-50 w-full shadow">
        <div className="container flex h-12 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="flex items-center gap-2  uppercase font-bold"
            >
              {SITE_TITLE}
            </a>
          </div>
          <nav className="hidden sm:flex items-center gap-4">
            {links.map((link) => {
              return (
                <a href={link.href} className={linkClasses(link.href)}>
                  {link.text}
                </a>
              );
            })}
            <ModeToggle />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:hidden ">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:hidden">
              <div className="grid gap-4 p-4">
                <a
                  href="/"
                  className="flex items-center gap-2  uppercase font-bold"
                >
                  {SITE_TITLE}
                </a>
                <ModeToggle />
                <nav className="grid gap-2">
                  {links.map((link) => {
                    return (
                      <a
                        href={link.href}
                        className={linkClasses(
                          link.href,
                          "flex items-center gap-2 font-bold  hover:underline"
                        )}
                      >
                        {link.text}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className={`bg-black bg-[url(/img/bg.jpg)] bg-cover bg-center`}>
        {children}
      </div>
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
