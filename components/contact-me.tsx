"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import {ContactDetails} from "./contact-details"

export function ContactMe() {
  return (
    <div>
    <div className="flex items-center my-4 w-full">
            <div className="flex-grow border-t border-indigo-dark "></div>
            <h2 className="text-2xl font-bold mx-4 text-indigo-light-dark">Contact Me</h2>
            <div className="flex-grow border-t border-indigo-dark "></div>
        </div>
    <div className="h-96 mt-12 relative w-full overflow-hidden bg-indigo-light-dark flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-indigo-dark z-20 [mask-image:radial-gradient(grey,transparent)] pointer-events-none" />
      <ContactDetails/>     
      <Boxes />
    </div>
    </div>
  );
}
