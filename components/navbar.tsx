"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-md mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a href="#aboutme" className="pl-6 hover:underline hover:text-indigo-lighter">About</a>
        <a href="#work" className="hover:underline hover:text-indigo-lighter">Work</a>
        <a href="#projects" className="hover:underline hover:text-indigo-lighter">Projects</a>
        <a href="#contact" className="pr-6 hover:underline hover:text-indigo-lighter">Contact</a>
      </Menu>
    </div>
  );
}
