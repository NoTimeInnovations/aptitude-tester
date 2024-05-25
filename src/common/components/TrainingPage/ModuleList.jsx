"use client";
import Image from "next/image";
import React, { useState } from "react";
Array.prototype.contains2 = function (obj) {
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
      <div className="text-xl md:text-3xl h-auto font-bold w- fit">
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
            <div className="px-4 md:px-8 py-6 mt-3 bg-white rounded-xl w-full">
              <div className="grid grid-cols-3 text-sm md:text-xl font-semibold w-full md:w-[90%]">
                <div>Classes</div>
                <div className="text-right">Link</div>
                <div className="text-right">Status</div>
              </div>
            </div>

            {topics.map((topic, index) => (
              <div
                key={index}
                className="px-2 md:px-8 py-3 mt-1 bg-white rounded-lg grid grid-cols-2 items-center"
              >
                <div className="text-xs md:text-sm font-normal w-full">
                  {topic.heading}
                </div>
                <div className="flex justify-between w-full md:w-[45%] md:ml-3 items-center">
                  <div className="ml-3 md:ml-10">
                    <a href={topic.link}>
                      <Image
                        src="/media/img/TrainingPage/youtube.png"
                        width={30}
                        height={10}
                        alt="YouTube"
                      />
                    </a>
                  </div>
                  {children.finished.contains2(index) && (
                    <Image
                      className="ml-3 md:ml-10"
                      src="/media/img/TrainingPage/status_tick.svg"
                      width={20}
                      height={10}
                      alt="Status Tick"
                    />
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
