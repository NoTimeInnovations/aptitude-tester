import React, { useState } from "react";

export default function TestsDetails({ children }) {
  const tests = children.tests;
  var [isOpen, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-[#E6E6E638] w-full p-6">
      <div className="text-2xl h-auto font-base text-[#757575]">
        Test Details
        <div className="px-8 py-6 mt-3 mr-2 bg-white rounded-xl">
          <div className="grid grid-cols-11 gap-y-6 place-items-center text-base font-normal text-black">
            <div className="place-self-start text-[#757575] text-sm font-base pb-12">
              Test
            </div>
            <div className="col-start-6 text-[#757575] text-sm font-base pb-12">
              Marks
            </div>
            <div className="col-span-2 text-center text-[#757575] text-sm font-base pb-12">
              Questions Attempted
            </div>
            <div className="text-[#757575] text-sm font-base pb-12">
              Correct
            </div>
            <div className="text-[#757575] text-sm font-base pb-12">Wrong</div>
            <div className="text-[#757575] text-sm font-base pb-12">Result</div>
            {tests.slice(0, 4).map((test) => [
              <div className="place-self-start">
                {test.heading}
                <div className="mt-2 flex min-w-max flex-row gap-2 justify-between text-[#757575] text-sm">
                  {test.date}
                  <span>{test.time}</span>
                </div>
              </div>,
              <div className="col-start-6">{test.marks}</div>,
              <div className="col-span-2">{test.attempted}</div>,
              <div>{test.correct}</div>,
              <div>{test.wrong}</div>,
              <button
                className={`py-1 px-3 h-fit min-w-[70%] border-[1px] text-sm rounded-lg ${
                  test.pass
                    ? `text-[#2FD74A] bg-[#2FD74A4D] border-[#2FD74A] `
                    : `text-[#F14747] bg-[#F147474D] border-[#F14747] `
                }]`}
              >
                {test.pass ? "Pass" : "Fail"}
              </button>,

              <div className="bg-gray-100 col-span-11 w-full h-[1px]" />,
            ])}
            {isOpen &&
              tests.slice(3, tests.length).map((test) => [
                <div className="place-self-start">
                  {test.heading}
                  <br />
                  <div className="flex min-w-max flex-row gap-2 justify-between text-[#757575] text-sm">
                    {test.date}
                    <span>{test.time}</span>
                  </div>
                </div>,
                <div className="col-start-6">{test.marks}</div>,
                <div className="col-span-2">{test.attempted}</div>,
                <div>{test.correct}</div>,
                <div>{test.wrong}</div>,
                <button
                  className={`py-1 px-3 h-fit min-w-[70%] border-[1px] text-sm rounded-lg ${
                    test.pass
                      ? `text-[#2FD74A] bg-[#2FD74A4D] border-[#2FD74A] `
                      : `text-[#F14747] bg-[#F147474D] border-[#F14747] `
                  }]`}
                >
                  {test.pass ? "Pass" : "Fail"}
                </button>,
                <div className="bg-gray-100 col-span-11 w-full h-[1px]" />,
              ])}
          </div>
          <div className="flex flex-row mt-2 w-full justify-end">
            <button
              onClick={() => {
                setOpen(!isOpen);
              }}
              className="text-sm py-3 px-3 rounded-lg bg-[#F7F7F8] font-light"
            >
              View {isOpen ? "Less" : "More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
