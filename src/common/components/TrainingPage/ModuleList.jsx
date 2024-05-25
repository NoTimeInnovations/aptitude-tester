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
            <div className="px-4 md:px-8 py-6 mt-3  bg-white rounded-xl w-full">
              <div className="grid grid-cols-3 justify-between text-sm md:text-xl font-semibold basis-full w-[97%]">
                <div>Classes</div>
                <div className="text-end">Link</div>
                <div className="text-end">Status</div>
              </div>
            </div>

            {topics.map((topic, index) => (
              <div className="px-2 md:px-8 py-3 mt-1 bg-white rounded-lg">
                <div className="flex flex-row justify-between text-xs md:text-sm font-normal w-[80%] md:w-full">
                  {topic.heading}
                  <div className="grid grid-cols-3 w-[80%] md:w-[45%] justify-items-center md:ml-3">
                    <div className="flex flex-row w-full justify-center">
                      <a href={topic.link}>
                        <Image
                          src="/media/img/TrainingPage/youtube.png"
                          width={30}
                          height={10}
                        />
                      </a>
                    </div>
                    <div>{topic.review}</div>
                    {children.finished.contains2(index) && (
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
          </>
        )}
      </div>
    </div>
  );
}
