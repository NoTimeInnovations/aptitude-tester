"use client";
import Image from "next/image";
import React, { useState } from "react";
Array.prototype.contains = function (obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
};
export default function ModuleList({ children }) {
  const heading = children.module;
  const topics = children.topics;
  var [isOpen, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-[#E6E6E638] w-full p-6">
      <div className="text-xl md:text-3xl h-auto font-bold">
        <div className="flex mx-2 flex-row justify-between items-center">
          <div className="capitalize">{heading}</div>
          <div className="flex flex-row gap-3 font-semibold">
            {/*toChange*/}
            <div className="bg-[#E6E6E638] flex flex-col justify-around px-5 py-2">
              {children.finished.length}/{Object.keys(topics).length}
            </div>
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
        {isOpen && (
          <>
            <div className="px-2 md:px-8 py-6 mt-3 mx-2 bg-white rounded-xl w-full">
              <div className="flex flex-row justify-between text-[10px] md:text-xl font-semibold basis-full">
                Classes
                <div className="grid grid-cols-2 w-fit md:w-[40%] justify-items-center gap-5 mr-3">
                  <div>Link</div>
                  <div>Status</div>
                </div>
              </div>
            </div>
            {topics.map((topic, index) => (
              <div className="md:px-8 py-3 mt-1 mx-2 bg-white rounded-lg w-full">
                <div className="flex flex-row justify-between text-[10px] md:text-lg font-normal w-[100%] md:w-full">
                  <div className="px-2 w-[50%]">{topic.heading}</div>
                  <div className="grid grid-cols-2 w-fit md:w-[40%] justify-items-center ">
                    <div className="flex flex-row w-fit justify-center mr-7">
                      <a href={topic.link}>
                        <Image
                          src="/media/img/TrainingPage/youtube.png"
                          width={window.innerWidth < 720 ? 20 : 30}
                          height={window.innerWidth < 720 ? 20 : 10}
                        />
                      </a>
                    </div>
                    <div className="mr-7 md:mr-2">
                      {children.finished.contains(index) && (
                        <Image
                          src="/media/img/TrainingPage/status_tick.svg"
                          width={window.innerWidth < 720 ? 20 : 20}
                          height={10}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
