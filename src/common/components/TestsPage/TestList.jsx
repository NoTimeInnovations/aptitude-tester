import React, { useState } from "react";
import Image from "next/image";

export default function TestList({ children }) {
  const heading = children.module;
  const tests = children.tests;
  var [isOpen, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white w-full p-6">
      <div className="text-2xl h-auto font-bold">
        <div className="flex mx-2 flex-row justify-between items-center">
          {heading}
          <div className="flex flex-row gap-3 font-semibold">
            {/*toChange*/}
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
          <div className="grid grid-cols-1 divide-y">
            {tests.map((test) => (
              <div className="px-8 py-3 mt-1 mx-2 bg-white rounded-lg">
                <div className="flex flex-row justify-between text-lg font-normal">
                  {test.heading}
                  <a href={test.link}>
                    <Image
                      src="/media/img/TestsPage/externalLink.svg"
                      width={25}
                      height={10}
                    />
                  </a>
                </div>
              </div>
            ))}
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}
