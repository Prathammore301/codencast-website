"use client";

import { useState } from "react";
import { mainNavLinks } from "@/lib/navigation/config";
import { NavLink } from "@/components/navigation/NavLink";
import { ServicesMegaMenu } from "@/components/navigation/ServicesMegaMenu";

export function DesktopNav() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav aria-label="Primary" className="flex items-center justify-center gap-7 xl:gap-9">
      {mainNavLinks.map((item) =>
        item.hasMegaMenu ? (
          <ServicesMegaMenu
            key={item.label}
            isOpen={servicesOpen}
            onOpenChange={setServicesOpen}
          />
        ) : (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ),
      )}
    </nav>
  );
}
