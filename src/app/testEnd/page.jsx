import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-[rgba(153,187,221,100)] h-screen md:h-full w-screen md:min-h-screen p-3 md:p-12 md:pl-32 pt-20">
        <div className="bg-white text-[rgba(0,0,0,100)] w-full max-w-[1400px] rounded-2xl font-['Poppins'] text-.5 xl md:text-[40px] p-6 md:pl-12 md:pt-10 font-semibold relative mx-auto">
          <div className="w-fit"> Reasoning Test-1</div>
          <div className="text-[12px] md:text-[22px] font-extralight absolute top-[25%] md:top-[30%] left-[80%] md:start-[70%] transform -translate-x-1/2 md:transform-none w-[50%] md:w-96">
            Total Questions: 30 Qs.
            <br />
            Total Time: 30 minutes.
          </div>
        </div>
        <div className="bg-white flex flex-col w-full max-w-[1400px] mt-16 sm:mt-32 p-6 sm:p-36 rounded-2xl items-center mx-auto">
          <div className="mt-12">
            <Image
              src="/media/img/testEnd.svg"
              width={100}
              height={100}
              alt="Test End"
            />
          </div>
          <div className="text-[24px] sm:text-[36px] text-black font-['Poppins'] mt-16 font-bold text-center">
            Your answers have been saved
          </div>
          <button className="bg-[rgba(4,2,105,100)] rounded-[8px] mt-12 h-14 w-44">
            <span className="text-white text-[14px] font-['Poppins']">
              View Result
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
