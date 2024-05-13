import React from "react";
import TestList from "../components/TestsPage/TestList";
import CopyRight from "../components/CopyRight";
import Image from "next/image";
import ElevatedShadowDiv from "../components/ElevatedShadowDiv";

export default function TestsPage() {
  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 min-h-screen">
      <div className="flex flex-row justify-between">
        <span className="text-[#040269] font-bold  text-5xl ">Mock Tests</span>
      </div>
      <br />
      <br />
      <div
        className="bg-white py-5 rounded-lg px-[3.5rem]"
        style={{ filter: "drop-shadow(0 0.5px 0.5px rgb(0 0 0 / 0.25))" }}
      >
        <div className="flex flex-row justify-between font-semibold text-2xl">
          Pre Scheduled Test
          <div className=" font-semibold text-xl flex flex-row items-center">
            Edit Schedule
            <Image
              className="ml-1"
              src="/media/img/TestsPage/editPen.svg"
              width={22}
              height={10}
            />
          </div>
        </div>
        {/*toChange*/}
        <div className="flex flex-row mt-3">
          <div className="flex flex-row gap-2 items-center place-items-center text-2xl font-medium">
            <ElevatedShadowDiv>
              <div className=" p-1">00</div>
            </ElevatedShadowDiv>
            :
            <ElevatedShadowDiv>
              <div className="p-1">00</div>
            </ElevatedShadowDiv>
            :
            <ElevatedShadowDiv>
              <div className="p-1">00</div>
            </ElevatedShadowDiv>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="px-5 rounded-xl py-20 bg-[#E6E6E638]">
        <TestList>
          {{
            module: "Reasoning",
            tests: [
              {
                heading: "Python",
                link: "",
              },
              {
                heading: "Python",
                link: "",
              },
            ],
          }}
        </TestList>
        <CopyRight />
      </div>
    </div>
  );
}
