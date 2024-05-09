import React from "react";

const imageSrc = [];
export default function ServicesCards() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full px-[10%] ">
      {benefits.map((benefit) => (
        <div key={benefit} className="bg-white p-5">
          <div className="flex flex-row justify-end text-3xl font-bold">
            0{getCount()}
          </div>
          {benefit}
        </div>
      ))}
    </div>
  );
}
