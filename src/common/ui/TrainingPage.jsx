import Image from "next/image";
import React from "react";
import CopyRight from "../components/CopyRight";

export default function TrainingPage() {
  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6">
      <div className="flex flex-row justify-between">
        <span className="text-[#040269] font-bold  text-4xl ">Your Course</span>
      </div>
      <br />
      <br />
      <span className="font-bold" id="name">
        How to Succeed in Aptitude Test:
      </span>
      This Course Line provides Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book.
      <br />
      <br />
      {/*toChanage*/}
      <br />
      <br />
      <div className="bg-[#040269E5] py-5 px-5 rounded-lg grid gapx-12 gap-5 grid-cols-2 w-4/12 text-white">
        <div className="text-left">
          Your Progress <span>0</span>/100
        </div>
        <div className="text-right">
          <span>0</span>% Complete
        </div>
        <div className="col-span-2 h-2 bg-white w-full" />
      </div>
      <br />
      <br />
      <div className=" rounded-xl bg-[#E6E6E638] w-full p-6">
        <div className="text-2xl font-bold">
          Reasoning
          <br />
          <br />
          <div className="px-5 flex flex-row justify-between">
            <div>
              <Image
                src="/media/img/HomePage/piechart.svg"
                width={260}
                height={260}
              />
              <div className="grid grid-cols-2 mt-5 gap-y-3 gap-x-10">
                <span className="text-[#040269] text-2xl font-bond">30</span>
                <span className="text-[#040269] text-2xl font-bond">30</span>

                <span className="text-black text-lg font-bond">
                  Total Questions
                </span>
                <span className="text-black text-lg font-bond">Time Taken</span>
              </div>
            </div>

            <div className="bg-white text-lg font-[700] py-6 px-4 w-3/12">
              <ul className="flex flex-col justify-around h-full"></ul>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}
