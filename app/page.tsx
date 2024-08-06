import Image from "next/image";
import {NavbarDemo} from "../components/navbar"
import {FlipWordsDemo} from "../components/hero"
import AboutMe from "../components/aboutme"
import {WorkEx} from "../components/workex"
import { Project } from "@/components/projects";
import { ContactMe } from "@/components/contact-me";
import { Sidescroll } from "@/components/sidescroll";
import { TracingBeam } from "@/components/ui/tracing-beams";
import { Footer } from "@/components/footer";
import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <main className="flex justify-between bg-indigo-a">
    <div className="flex w-full bg-indigo-a">
      <TracingBeam className="h-full bg-indigo-a pr-12 mr-8">  
    <div>
    <NavbarDemo/>
      <div className="w-full pt-24 pb-52 bg-indigo-a ">
        <FlipWordsDemo/>
      </div>
      <div className="w-full pt-12 h-fit bg-indigo-a">
        <AboutMe/>
      </div>
      <div id="work" className="w-full px-20 h-fit bg-indigo-a flex">
        <WorkEx/>
      </div>
      <div id="projects" className="w-full px-20 pb-24 pt-12 h-fit bg-indigo-a">
        <Project/>
      </div>
      <div id="contact" className="w-full px-20 pt-32 h-fit bg-indigo-a">
        <ContactMe/>
      </div>
      <div className="bg-indigo-a pt-6 pb-4">
      <Footer/>
      </div>
      </div>
      </TracingBeam>
    </div>
    <div className="w-10 mr-4">
    <Socials/>
    </div>
    </main>
  );
}
