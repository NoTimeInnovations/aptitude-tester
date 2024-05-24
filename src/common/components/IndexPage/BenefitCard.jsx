import React from "react";
var count = 0;
const benefits = ["Hello", "Java", "C++", "Tree", "Athira", "HTML"];
function getCount() {
  count = count + 1;
  return count;
}
export default function BenefitCards() {
  count = 0;
  return (
    <div className="grid grid-cols-3 gap-4 w-full px-[10%] ">
      {benefits.map((benefit) => (
        <div key={benefit} className="bg-white rounded p-5 text-sm md:text-lg">
          <div className="flex flex-row justify-end text-xl md:text-3xl font-bold">
            0{getCount()}
          </div>
          {benefit}
        </div>
      ))}
    </div>
  );
}
