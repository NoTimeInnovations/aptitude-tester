import Image from "next/image";
import React from "react";

function listItems(text) {
  return (
    <li>
      <div className="flex flex-row items-center">
        <div className="h-4 w-4 border border-black bg-green-300" />
        &nbsp;
        {text}
      </div>
    </li>
  );
}

export default function RecentPieResults() {
  return (
    <div className=" rounded-xl bg-[#E6E6E638] w-full p-6">
      <div className="text-2xl font-bold">
        Recent Test Result
        <br />
        <br />
        <div className="px-5 flex flex-row justify-between">
          <div>
            <Image
              src="/media/img/HomePage/piechart.svg"
              width={260}
              height={260}
            />
            <div className="grid grid-cols-2 mt-5 gap-y-3 gap-x-10">
              <span className="text-[#040269] text-2xl font-bond">30</span>
              <span className="text-[#040269] text-2xl font-bond">30</span>

              <span className="text-black text-lg font-bond">
                Total Questions
              </span>
              <span className="text-black text-lg font-bond">Time Taken</span>
            </div>
          </div>

          <div className="bg-white text-lg font-[700] py-6 px-4 w-3/12">
            <ul className="flex flex-col justify-around h-full">
              {listItems("Lullu")}
              {listItems("Lullu")}
              {listItems("Lullu")}
              {listItems("Lullu")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
