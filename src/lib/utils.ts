import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Determine if the link is active
export const linkClasses = (
  currentPath: string,
  to: string,
  classes = "font-bold hover:underline"
) => {
  if (currentPath === to) {
    return classes + " underline";
  } else {
    return classes;
  }
};
