import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="bg-[rgba(153,187,221,100)] min-h-screen p-6 md:p-12 md:pl-32 pt-20">
        <div className="bg-white text-[rgba(0,0,0,100)] w-full md:w-[1400px] h-auto md:h-[153px] rounded-2xl font-['Poppins'] text-[28px] md:text-[40px] pl-6 md:pl-12 pt-10 font-semibold relative">
          Reasoning Test-1
          <div className="text-[16px] md:text-[22px] font-extralight absolute top-[60%] md:top-[30%] left-[50%] md:left-[70%] transform -translate-x-1/2 md:translate-x-0 w-full md:w-96 text-center md:text-left">
            Total Questions: 30 Questions.
            <br />
            Total Time: 30 minutes.
          </div>
        </div>
        <div className="bg-white flex flex-col w-full md:w-[1400px] mt-12 md:mt-36 p-6 md:p-36 rounded-2xl items-center">
          <Image
            src="/media/img/testStart.svg"
            width={300}
            height={300}
            alt="Test Start Image"
          />
          <button className="bg-[rgba(4,2,105,100)] rounded-[5px] mt-8 md:mt-20 h-10 w-full md:w-auto px-4">
            <span className="text-white text-[18px] font-['Poppins']">
              Start
            </span>
          </button>
          <button className="bg-[rgba(0,0,0,100)] rounded-[5px] mt-4 md:mt-8 h-10 w-full md:w-auto px-4">
            <span className="text-white text-[18px] font-['Poppins']">
              Exit
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
