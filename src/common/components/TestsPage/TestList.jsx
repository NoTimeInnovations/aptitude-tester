"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

Array.prototype.contains = function (obj, ids, setter) {
  var i = this.length;
  while (i--) {
    if (this[i]["index"] === obj) {
      return [true, this[i]["id"]];
    }
  }
  return [false, ids[Math.floor(Math.random() * ids.length)]];
};
export default function TestList({ children }) {
  let { push } = useRouter();
  const heading = children.module;
  const tests = children.tests;
  const userTest = children.testDetails ? children.testDetails : [];

  var choosableIDs = tests.filter(
    (x) =>
      !(
        userTest
          ? userTest.reduce((acc, obj) => {
              return [...acc, obj["id"]];
            }, [])
          : []
      ).includes(x)
  );

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
            <div className="flex flex-row justify-start text-[12px] md:text-xl font-semibold basis-full">
              Classes
            </div>
            <div className="grid grid-cols-3 w-[40%] justify-around gap-1 md:gap-0">
              <div className="col-start-1  text-[12px] md:text-xl mr-1 md:ml-11">
                Link
              </div>
              <div className="text-[12px] md:text-xl ml-3 md:ml-16">Status</div>
            </div>
          </div>,
          <div className="grid grid-cols-1 divide-y">
            {tests.map((test, index) => {
              const [isTried, ID] = userTest.contains(index, choosableIDs);

              choosableIDs = choosableIDs.filter((x) => x != ID);
              return (
                <div className="px-2 py-3 mt-1 mx-1 bg-white rounded-lg">
                  <div className="flex flex-row justify-between items-center text-lg font-normal md: w-xl">
                    Test - {index + 1}
                    <div className="grid grid-cols-3 w-[40%] md:w-[35%] justify-end  items-end gap-1">
                      <div className="flex flex-row w-3/4 justify-star col-start-2 mr-10 md:mr-0">
                        <button
                          onClick={() =>
                            push(
                              `/testStart?id=${ID}&written=${isTried}&topic=${heading}&index=${index}`
                            )
                          }
                        >
                          <Image
                            src="/media/img/TestsPage/externalLink.svg"
                            width={window.innerWidth < 720 ? 20 : 30}
                            height={window.innerWidth < 720 ? 30 : 30}
                          />
                        </button>
                      </div>
                      <div className="flex flex-row w justify-start ml-1">
                        {isTried && (
                          <Image
                            src="/media/img/TrainingPage/status_tick.svg"
                            width={window.innerWidth < 720 ? 20 : 30}
                            height={window.innerWidth < 720 ? 30 : 30}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>,
        ]}
      </div>
    </div>
  );
}
