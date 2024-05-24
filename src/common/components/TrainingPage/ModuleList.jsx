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
      <div className="text-3xl h-auto font-bold">
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
            <div className="px-8 py-6 mt-3 mx-2 bg-white rounded-xl">
              <div className="flex flex-row justify-between text-xl font-semibold basis-full">
                Classes
                <div className="grid grid-cols-3 w-[40%] justify-items-center">
                  <div>Link</div>
                  <div>Review</div>
                  <div>Status</div>
                </div>
              </div>
            </div>
            {topics.map((topic, index) => (
              <div className="px-8 py-3 mt-1 mx-2 bg-white rounded-lg">
                <div className="flex flex-row justify-between text-lg font-normal">
                  {topic.heading}
                  <div className="grid grid-cols-3 w-[40%] justify-items-center">
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
