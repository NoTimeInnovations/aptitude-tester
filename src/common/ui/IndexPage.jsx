import React from "react";
import NavItem from "../components/IndexPage/NavItem";
import BenefitCards from "../components/IndexPage/BenefitCard";
import Image from "next/image";
import NavButton from "../components/IndexPage/NavButton";
import ExploreButton from "../components/IndexPage/ExploreButton";
import ServicesCards from "../components/IndexPage/ServicesCards";
import PricingCards from "../components/IndexPage/PricingCards";
import { Feature } from "../components/IndexPage/PricingCards";

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
            src="/media/img/IndexPage/exclamation.png"
            className="ml-2"
            width={20}
            height={20}
          />
          <Image
            src="/media/img/IndexPage/exclamation.png"
            width={20}
            height={20}
          />
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
            src="/media/img/IndexPage/2-people.png"
            className="w-[80%]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="bg-[#F3F3F3] w-screen pb-20 text-black pt-[25%]">
        <div className="text-6xl pl-[10%] font-['Poppins'] font-bold">
          Benefits Of EasyLearn
        </div>
        <br />
        <BenefitCards />
      </div>
      <div className="bg-[rgba(185,203,239,255)] text-lg w-screen text-black py-20">
        <div className="text-6xl pl-[10%] font-['Poppins'] font-bold">
          What We Offer
        </div>
        <br />
        <ServicesCards />
      </div>
      <div className="bg-[#F3F3F3] w-screen text-black py-20">
        <div className="text-6xl pl-[10%] font-['Poppins'] font-bold">
          Our Prices
        </div>
        <div className="text-lg pl-[11%] font-['Poppins'] max-w-[70%] ">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.
          <br />
          <br />
        </div>

        <div className="bg-[#D9D9D9] ml-[10%] w-[80%] grid grid-cols-2 gap-[10%] p-[5%] rounded-xl">
          <PricingCards text="SIMPLE - &#8377;50">
            <Feature available="yes">Hello</Feature>
            <Feature available="yes"></Feature>
            <Feature available="yes"></Feature>
            <Feature available="no"></Feature>
          </PricingCards>
          <PricingCards text="PRO - &#8377;100">
            <Feature available="yes">Hello</Feature>
            <Feature available="yes"></Feature>
            <Feature available="yes"></Feature>
            <Feature available="no"></Feature>
          </PricingCards>
        </div>
        <br />
        <br />
        <div className="bg-white rounded-lg w-screen ml-[10%] pr-[10%] w-[79.99%] text-black py-10 pl-20">
          <div className=" text-6xl font-bold">Ask Us</div>
          <div className="text-lg font-['Poppins'] max-w-[70%] ">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy.
          </div>
          <br />
          <form>
            <div className="w-[30%] mb-4 border border-gray-200 rounded-lg bg-white ">
              <input
                id="comment"
                type="text"
                className="w-full block p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Name..."
              />
            </div>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-white ">
              <textarea
                id="comment"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write a comment..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-700 rounded-full focus:ring-4 focus:ring-slate-200 hover:bg-slate-800"
            >
              Post comment
            </button>
          </form>
          <br />
          <p className="ms-auto text-xs text-gray-500 ">
            Remember, contributions to this topic should follow our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Community Guidelines
            </a>
            .
          </p>
        </div>
        <div className="flex flex-row justify-end mt-2 ml-[10%] w-[80%]">
          <button className="bg-white text-black w-fit p-2 rounded">
            View more
          </button>
        </div>
      </div>
      <div className="bg-[rgba(185,203,239,255)] w-screen text-black py-20 px-[10%] font-['Poppins']">
        <span className="font-bold text-3xl">EasyLearn</span>
        <div className="flex flex-row justify-between">
          <div>
            <br />
            <div className="flex flex-row">
              <Image
                src="/media/img/IndexPage/gmail.png"
                width={32}
                height={10}
              />
              &nbsp;:&nbsp; <a>easylearn@gmail.com</a>
            </div>
            <br />
            <div className="flex flex-row">
              <Image
                src="/media/img/IndexPage/phone.png"
                width={32}
                height={10}
              />
              <div className="flex flex-col justify-center ">
                <div>
                  &nbsp;:&nbsp; <a>9852641730</a>
                </div>
              </div>
            </div>
            <br />
            <div className="flex flex-row">
              <Image
                src="/media/img/IndexPage/location.png"
                width={32}
                height={10}
              />
              <div className="flex flex-col justify-center ">
                <div>
                  &nbsp;:&nbsp; <a>Ernakulam, Kerala</a>
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold">
            Social Profile
            <div className="flex flex-row gap-2">
              <Image
                src="/media/img/IndexPage/facebook.svg"
                width={32}
                height={10}
              />
              <Image
                src="/media/img/IndexPage/linkedIn.svg"
                width={32}
                height={10}
              />
              <Image
                src="/media/img/IndexPage/instagram.svg"
                width={32}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
