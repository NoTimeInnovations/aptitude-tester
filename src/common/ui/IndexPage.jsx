import React from "react";
import NavItem from "../components/IndexPage/NavItem";
import BenefitCards from "../components/IndexPage/BenefitCards";
import Image from "next/image";
import NavButton from "../components/IndexPage/NavButton";
import ExploreButton from "../components/IndexPage/ExploreButton";

export default function IndexPage() {
  return (
    <>
      <div className="bg-[rgba(185,203,239,255)] w-screen pt-10 text-black">
        <div className=" mx-5 bg-[rgba(210,222,246,255)] rounded py-2 text-black font-bold flex-row flex  justify-between">
          <ul className="flex flex-col rtl:space-x-reverse md:flex-row ml-6">
            <NavItem text="Home" />
            <NavItem text="About" />
            <NavItem text="Contact" />
            <NavItem text="Courses" />
            <NavItem text="Teams" />
          </ul>
          <ul className="flex flex-col rtl:space-x-reverse md:flex-row text-white justify-evenly gap-4 mr-8">
            <NavButton text="Login" />
            <NavButton text="Sign Up" />
          </ul>
        </div>
        <div className="mt-40 flex font-bold text-5xl w-full justify-center">
          <span className="text-[#030091] flex flex-col justify-around mb-2">
            Secure&nbsp;
          </span>
          <span className=" flex flex-col justify-around mb-2">
            Your Placements
          </span>
          <Image
            src="/exclamation.png"
            className="ml-2"
            width={20}
            height={20}
          />
          <Image src="/exclamation.png" width={20} height={20} />
        </div>
        <div className="w-full text-xl font-bold text-center">
          With The Best Online Learning Expertise
        </div>
        <div className="w-full text-center">
          Enhance your aptitude and exam skills
        </div>
        <div className="w-full flex flex-row justify-center gap-2 text-white font-['Poppins'] mt-7">
          <ExploreButton text="Explore Courses" />
          <ExploreButton text="View Pricing" />
        </div>
        <div className="flex flex-row mt-20 justify-center -mb-[22%]">
          <Image
            src="/2-people.png"
            className="w-[80%]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="bg-[#F3F3F3] w-screen pb-[5%] text-black pt-[25%]">
        <div className="text-6xl pl-[10%] font-['Poppins'] font-bold">
          Benefits Of EasyLearn
        </div>
        <br />
        <BenefitCards />
      </div>
      <div className="bg-[rgba(185,203,239,255)] w-screen text-black pt-20">
        <div className="text-6xl pl-[10%] font-['Poppins'] font-bold">
          What We Offer
        </div>
      </div>
    </>
  );
}
