import type { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
  width?: "reading" | "wide" | "full";
  className?: string;
};

const widthClass = {
  reading: "max-w-3xl lg:max-w-[45rem]",
  wide: "max-w-5xl xl:max-w-6xl",
  full: "max-w-none",
};

/** Consistent inner-page content width and vertical rhythm */
export function PageContent({
  children,
  width = "wide",
  className = "",
}: PageContentProps) {
  return (
    <div className={`mx-auto w-full ${widthClass[width]} ${className}`}>{children}</div>
  );
}
