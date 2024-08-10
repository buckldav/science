import { cn } from "@/lib/utils";
import React from "react";

// https://ui.shadcn.com/docs/components/typography
export function TypographyH1({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        classes
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        classes
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        classes
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        classes
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyH5({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        classes
      )}
    >
      {children}
    </h5>
  );
}

export function TypographyP({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", classes)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", classes)}>
      {children}
    </blockquote>
  );
}

export function TypographyList({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", classes)}>
      {children}
    </ul>
  );
}

export function TypographyInlineCode({
  children,
  classes = [],
}: React.PropsWithChildren<{ classes?: string[] }>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        classes
      )}
    >
      {children}
    </code>
  );
}
