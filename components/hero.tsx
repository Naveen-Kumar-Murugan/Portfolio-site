'use client';

import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Blockchain-Developer", "Web-Developer","Problem-Solver", "Budding-Engineer"];

    const onButtonClick = () => {
        const pdfUrl = "Naveen-Kumar-resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Naveen-Kumar-resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className="h-[30rem] w-full block justify-center items-center px-48 pt-16 content-center">
        <div className="text-xl pl-1 pb-5 font-mono text-indigo-dark font-normal">
            Hi, My name is
        </div>
        <h1 className="text-7xl pb-5 font-bold text-indigo-light-dark">Naveen Kumar M.</h1>
        <div className="text-6xl text-neutral-600 dark:text-neutral-400 flex">
            <div className="pr-3 pl-1 font-medium text-indigo-dark">
                I am a
            </div> 
        <FlipWords words={words} />
      </div>
      <div className="w-4/6 pl-2 pt-6 text-base font-mono text-indigo-dark">
      As a blockchain developer, I create innovative DApps and Hyperledger projects, focusing on <strong> DeFi, Blockchain, Web3, and smart contracts development</strong> to build secure, transparent, and efficient solutions for digital transactions.
      </div>
      <div>
        <button className="px-5 mt-5 ml-3 py-3 border-2 border-indigo-dark text-indigo-dark font-mono hover:bg-indigo-dark hover:text-indigo-a rounded-md" onClick={onButtonClick}>
            Resume
        </button>
      </div>
    </div>
  );
}
