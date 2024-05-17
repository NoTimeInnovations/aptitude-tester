import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="bg-[rgba(153,187,221,100)] min-h-screen p-12 pl-32 pt-20">
        <div className="bg-white text-[rgba(0,0,0,100)] w-[1400px] h-[153px] rounded-2xl font-['Poppins'] text-[40px] pl-12 pt-10 font-semibold relative">
          Reasoning Test-1
          <div className="text-[22px] font-extralight absolute top-[30%] start-[70%] w-96">
            Total Questions:30 Questions.
            <br />
            Totat Time:30 minutes.
          </div>
        </div>
        <div className="bg-white flex flex-col w-[1400px] mt-36 p-36 rounded-2xl items-center">
          <Image
            src="/media/img/testStart.svg"
            width={300}
            height={300}
          ></Image>
          <button className="bg-[rgba(4,2,105,100)] rounded-[5px] mt-20 h-10">
            <span className="text-white text-[18px] p-24 font-['Poppins']">
              Start
            </span>
          </button>
          <button className="bg-[rgba(0,0,0,100)] rounded-[5px] mt-8 p-1 h-10 pl-2 pr-2">
            <span className="text-white text-[18px] p-24 font-['Poppins']">
              Exit
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
