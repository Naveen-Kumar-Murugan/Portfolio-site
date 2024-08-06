"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ProfilePhoto() {
  return (
    <CardContainer className="inter-var w-72">
      <CardBody className="bg-indigo-b relative shadow-2xl group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full">
          <Image
            src="/portfolio_photo.jpg"
            height="1000"
            width="1000"
            className="h-72 w-72 object-cover rounded-full group-hover/card:shadow-xl border-4"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center">
          <a
            className="px-2 py-1 rounded-xl bg-transparent dark:bg-white dark:text-black text-white text-xs font-bold"
            href="https://www.linkedin.com/in/naveen-kumar-murugan-4bb973255/"
          >
            @Naveen Kumar
            </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
