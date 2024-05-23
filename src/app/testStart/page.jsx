"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

export default function page() {
  let { push } = useRouter();
  const index = useSearchParams().get("index");
  const topic = useSearchParams().get("topic");
  const params = useSearchParams().toString();
  return (
    <>
      <div className="bg-[rgba(153,187,221,100)] min-h-screen p-3 md:p-12 md:pl-32 pt-20">
        <div className="bg-white text-[rgba(0,0,0,100)] w-full md:w-[1400px] h-auto md:h-[153px] rounded-2xl font-['Poppins'] text-.5xl md:text-[40px] pl-6 md:pl-12 pt-6 pb-8 md:pb-0 md:pt-10 font-semibold relative">
          <div className="mt-2 text-start items-center capitalize">
            {topic} Test - {Number(index) + 1}
          </div>
          <div className="text-[12px] md:text-[22px] font-extralight absolute top-[25%] md:top-[30%] left-[80%] md:left-[70%] transform -translate-x-1/2 md:translate-x-0 w-[50%] md:w-96 text-left">
            <div className="-mb-2">Total Questions: 30 Qs.</div>
            <br />
            <div> Total Time: 30 minutes.</div>
          </div>
        </div>
        <div className="bg-white flex flex-col w-full md:w-[1400px] mt-12 md:mt-36 p-6 md:p-36 rounded-2xl items-center">
          <Image
            src="/media/img/testStart.svg"
            width={300}
            height={300}
            alt="Test Start Image"
          />
          <button
            onClick={() => {
              push(`/questions?${params}`);
            }}
            className="bg-[rgba(4,2,105,100)] rounded-[5px] mt-8 md:mt-20 h-10 w-full md:w-auto px-4"
          >
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
