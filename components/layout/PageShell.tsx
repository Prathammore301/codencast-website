import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <>
      <main id="main-content" className={`flex-1 bg-brand-bg ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
