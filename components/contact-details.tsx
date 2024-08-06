"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function ContactDetails() {
  const words = [
    {
      text: "Get",
      className:"text-indigo-a",
    },
    {
      text: "in",
      className:"text-indigo-a",
    },
    {
      text: "Touch",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "with",
        className: "text-blue-500 dark:text-blue-500",
    },
    {
    text: "Me.",
    className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] z-40">
      <p className="text-2xl dark:text-neutral-200sm:text-base font-semibold text-indigo-a ">
        Want to collaborate? looking to hire me? or want to just say hi?
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="mailto:mnaveenkumar.dev04@gmail.com">
        <button className="w-40 h-10 rounded-xl bg-transparent hover:bg-indigo-a border-2 dark:border-white border-transparent hover:text-indigo-dark text-xl font-bold text-indigo-a border-indigo-a">
          Mail to me!
        </button>
        </a>
      </div>
    </div>
  );
}
