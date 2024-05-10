import Image from "next/image";
import React from "react";

export const Feature = (props) => {
  return (
    <div className="bg-[#DFDFDF4D] py-3 px-2 flex flex-row rounded-lg align-text-bottom">
      <Image
        className="mr-2"
        src={`/media/img/IndexPage/${
          props.available == "yes" ? `` : `un`
        }available.svg`}
        width={20}
        height={20}
      />
      <div className="flex flex-col justify-center ">{props.children}</div>
    </div>
  );
};

export default function PricingCards(props) {
  return (
    <div className="bg-white px-5 pt-10 pb-14 rounded-lg">
      <div className="bg-[#B4D2FF4D] rounded py-5 text-center text-xl">
        {props.text}
      </div>
      <br />
      <div className="bg-[#E3E3E34D] py-6 px-4 text-center rounded-lg font-bold">
        Available features
        <br />
        <br />
        <div className="flex flex-col gap-5">{props.children}</div>
        <button className="bg-[#040269E5] text-white mt-[15%] w-full p-3">
          Get Started
        </button>
      </div>
    </div>
  );
}
