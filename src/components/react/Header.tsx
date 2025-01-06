import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { linkClasses } from "@/lib/utils";
import { SITE_TITLE } from "@/consts";
import { ModeToggle } from "./ModeToggle";

export function MobileSheet({ links }: { links: Array<any> }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="sm:hidden ">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:hidden">
        <div className="grid gap-4 p-4">
          <a href="/" className="flex items-center gap-2  uppercase font-bold">
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
  );
}

export function MenuIcon(props) {
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
