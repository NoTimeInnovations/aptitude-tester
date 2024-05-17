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
        <div className="bg-white flex flex-col w-[1400px] mt-32 p-36 rounded-2xl items-center">
          <div className="mt-12">
            <Image
              src="/media/img/testEnd.svg"
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="text-[36px] text-black font-['Poppins'] mt-16 font-bold">
            Your answers have been saved
          </div>
          <button className="bg-[rgba(4,2,105,100)] rounded-[8px] mt-12 h-14 p-4 w-44">
            <span className="text-white text-[14px] pt-24 pb-24 font-['Poppins'] ">
              View Result
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
