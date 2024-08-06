import React from "react";
import { AnimatedPin} from "./project-pin";
export function Project(){
    return(
        <div>
        <div className="flex items-center my-4 w-full">
            <h2 className="text-2xl font-bold mr-4 text-indigo-light-dark">Look at my Projects!!</h2>
            <div className="flex-grow border-t border-indigo-dark "></div>
        </div>
        <div className="flex justify-evenly w-full">
            <div className="w-full">
            <AnimatedPin 
                title="/crypto-wallet.app"
                href="https://crypto-wallet-pi.vercel.app/"
                heading="Crypto-Currency Wallet"
                description="A Web3 wallet which can used for transaction of tokens across different Blockchain platforms"
                src="/crypto-wallet.png"
            />
             </div> 
             <div className="w-full">
            <AnimatedPin 
                title="/icp_hackathon.proj"
                href="https://www.linkedin.com/posts/naveen-kumar-murugan-4bb973255_icp-web3-blockchain-activity-7147523329032151040-suZ-?utm_source=share&utm_medium=member_desktop"
                heading="ICP-Hackathon"
                description="CertifyMe was a Certification generation software developed on ICP blockchain."
                src="/icp_hackathon.jpeg"
            />
             </div> 
             <div className="w-full">
            <AnimatedPin 
                title="/algo-lib.git"
                href="https://github.com/Naveen-Kumar-Murugan/Machine-Learning-Algorithm-Library"
                heading="ML - Algo Library"
                description="A Machine Learning library made from scratch. It includes 5 most prominant alogrithms"
                src="/ml-lib.png"
            />
             </div> 
        </div>
        </div>
    )
}