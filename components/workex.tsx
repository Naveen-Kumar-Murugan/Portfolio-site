"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function WorkEx() {
  const tabs = [
    {
      title: "Infisign Inc",
      value: "Infisign Inc",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-indigo-light-dark to-indigo-dark">
          <div className="flex w-full justify-between">
          <p className=" text-xl md:text-4xl my-6 pr-10">Infisign Inc.</p>
          <img className="mt-5 w-16 h-16 rounded-full border-4 border-indigo-a" src="/infisign_inc_logo.jpeg"/>
          </div>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Cyber Labs",
      value: "Cyber Labs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 font-bold text-white bg-gradient-to-br from-indigo-light-dark to-indigo-dark">
          <div className="flex w-full justify-between">
          <p className=" text-xl md:text-4xl my-6 pr-10">Cyber Labs</p>
          <img className="mt-5 w-16 h-16 rounded-full border-4 border-indigo-a" src="/cyberlabs.jpeg"/>
          </div>
          <DummyContent2/>
        </div>
      ),
    }
  ];

  return (
    <div className="w-full">
    <div className="flex items-center my-4 ">
            <h2 className="text-2xl font-bold mr-4">Places I have Worked</h2>
            <div className="flex-grow border-t border-indigo-light-dark"></div>
        </div> 
    <div className="md:h-[40rem] [perspective:1000px] relative flex max-w-5xl  w-full  items-start justify-start mt-20 ">
      <Tabs tabs={tabs} />
    </div>
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <div>
        <div>
            <h1 className="text-xl pb-1">Blockchain Intern at <span className="text-indigo-lighter">Infisign Inc.</span></h1>
        </div>
        <p className="text-sm font-normal font-mono pl-1">June 2024 - July 2024</p>
        <p className="text-base font-normal font-mono pl-1 mt-3">
        <ul>
            <li className="flex pb-1"><svg className="w-6 h-6 text-indigo-lighter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"/></svg>
                Blockchain Intern at Infisign Inc. - Entrance Technologies, Chennai - India.
            </li>
            <li className="flex pb-1"><svg className="w-6 h-6 text-indigo-lighter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"/></svg>
                Worked on Technologies like Identity and Access Management (IAM) and Privileged Access Management (PAM).
            </li>
            <li className="flex pb-1"><svg className="w-6 h-6 text-indigo-lighter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"/></svg>
                Analyzed Decentralized Identity (DID) protocols vs. OpenID for Verifiable Credentials (VC).    
            </li>
            <li className="flex pb-1"><svg className="w-6 h-6 text-indigo-lighter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"/></svg>
                Explored Passwordless SSI-Credential based Authentication. 
            </li>
        </ul>
      </p>
      </div>
  );
};

const DummyContent2 = () => {
    return (
    <div>
        <div>
            <h1 className="text-xl pb-1">Member at <span className="text-indigo-lighter">CyberLabs</span></h1>
        </div>
        <p className="text-sm font-normal font-mono pl-1">Oct 2023 - present</p>
        <p className="text-base font-normal font-mono pl-1 mt-3">
        <ul>
            <li className="flex pb-1"><svg className="w-6 h-6 text-indigo-lighter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"/></svg>
                Member of the blockchain dision of the Official Coding and Development club of IIT (ISM) Dhanbad.
            </li>
            <li className="flex pb-1"><svg className="w-6 h-6 text-indigo-lighter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"/></svg>
                Smart Contract creation, DApps Development, Tokenisation, Distributeed Ledger Technology, Cryptography and Web Development.
            </li>
            <li className="flex pb-1"><svg className="w-6 h-6 text-indigo-lighter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"/></svg>
                Member of the blockchain dision of the Official Coding and Development club of IIT (ISM) Dhanbad.
            </li>
        </ul>
      </p>
      </div>
    );
  };
