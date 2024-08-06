"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPin(props: {
    src: string | undefined; title: string | undefined; href: string | undefined; heading: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; 
}) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title={props.title}
        href={props.href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-indigo-b">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100 text-indigo-text">
            {props.heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal ">
            <span className="font-semibold text-indigo-a">
              {props.description}
            </span>
          </div>
          <img src={props.src} className="rounded-xl my-2 w-64"/>
          <div className="flex flex-1 w-60 rounded-lg mt-4 bg-gradient-to-br from-indigo-light-dark to-indigo-lighter" />
        </div>
      </PinContainer>
    </div>
  );
}
