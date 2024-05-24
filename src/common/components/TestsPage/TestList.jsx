"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

Array.prototype.contains = function (obj) {
  var i = this.length;
  while (i--) {
    if (this[i]["index"] === obj) {
      return true;
    }
  }
  return false;
};
export default function TestList({ children }) {
  let { push } = useRouter;
  const heading = children.module;
  const tests = children.tests;
  const userTest = children.testDetails;
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white w-full p-6">
      <div className="text-2xl h-auto font-bold">
        <div className="flex mx-2 flex-row justify-between items-center">
          <span className="capitalize">{heading}</span>
          <div className="flex flex-row gap-3 font-semibold">
            <button
              className={`bg-[#E6E6E638] p-3 ${!isOpen && `rotate-180`}`}
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              <Image src="/media/img/arrow.png" width={25} height={10} />
            </button>
          </div>
        </div>
        {isOpen && [
          <div className="flex flex-row px-2 py-6 mt-3 mx- bg-white rounded-xl">
            <div className="flex flex-row justify-start text-sm md:text-xl font-semibold basis-full">
              Classes
            </div>
            <div className="grid grid-cols-3 w-[40%] justify-around">
              <div className="col-start-1  text-sm md:text-xl mr-1">Link</div>
              <div className="text-sm md:text-xl ml-4 md:ml-0 ">Status</div>
            </div>
          </div>,
          <div className="grid grid-cols-1 divide-y">
            {tests.map((test, index) => (
              <div className="px-2 py-3 mt-1 mx-1 bg-white rounded-lg">
                <div className="flex flex-row justify-between items-center text-lg font-normal w-[95%]">
                  Test - {index + 1}
                  <div className="grid grid-cols-3 w-[35%] justify-end  items-end ">
                    <div className="flex flex-row w-fit justify-start col-start-2">
                      <button
                        onClick={() => {
                          push("/testStart?");
                        }}
                      >
                        <Image
                          src="/media/img/TestsPage/externalLink.svg"
                          width={30}
                          height={10}
                        />
                      </button>
                    </div>
                    <div className="flex flex-row w-fit justify-start">
                      {userTest[heading] &&
                        userTest[heading].contains(index) && (
                          <Image
                            src="/media/img/TrainingPage/status_tick.svg"
                            width={30}
                            height={10}
                          />
                        )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div></div>
          </div>,
        ]}
      </div>
    </div>
  );
}
