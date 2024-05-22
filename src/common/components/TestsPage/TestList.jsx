import React, { useState } from "react";
import Image from "next/image";

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
          <div className="px-8 py-6 mt-3 mx-2 bg-white rounded-xl">
            <div className="flex flex-row justify-between text-xl font-semibold basis-full">
              Classes
              <div className="grid grid-cols-3 w-[40%] justify-items-center">
                <div className="col-start-2">Link</div>
                <div>Status</div>
              </div>
            </div>
          </div>,
          <div className="grid grid-cols-1 divide-y">
            {tests.map((test, index) => (
              <div className="px-8 py-3 mt-1 mx-2 bg-white rounded-lg">
                <div className="flex flex-row justify-between text-lg font-normal">
                  Test - {index + 1}
                  <div className="grid grid-cols-3 w-[40%] justify-items-center">
                    <div className="flex flex-row w-full justify-center col-start-2">
                      <a href={test.link}>
                        <Image
                          src="/media/img/TrainingPage/youtube.png"
                          width={30}
                          height={10}
                        />
                      </a>
                    </div>
                    {userTest[heading] && userTest[heading].contains(index) && (
                      <Image
                        src="/media/img/TrainingPage/status_tick.svg"
                        width={30}
                        height={10}
                      />
                    )}
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
