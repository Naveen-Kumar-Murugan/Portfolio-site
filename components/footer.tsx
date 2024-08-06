import React from "react"

export function Footer(){
    return(
    <footer className="bg-indigo-a pt-24 mt-9; dark:bg-gray-900 w-full">
            <div className="flex-grow border-t-4 border-indigo-dark"></div>
            <div className="flex items-center justify-around pt-10">
                <a href="https://www.linkedin.com/in/naveen-kumar-murugan-4bb973255/" className="text-base font-bold font-mono text-indigo-dark">
                    made by Naveen Kumar
                </a>
            </div>
            <div className="mt-20 font-mono text-sm">
                @naveenkumar 2024
            </div>
    </footer>
    )
}