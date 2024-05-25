import React from "react";

export default function Webapp() {
  return (
    <>
      <div className="bg-[rgba(239,241,246,200)] font-['Poppins'] text-md  text-black w-1/4 text-center p-4 rounded-md opacity-70 border border-white flex flex-col">
        <div className="font-['Poppins'] text-md  text-black text-center flex flex-row gap-4 justify-between  rounded-sm">
          <div>Download the EasyLearn webapp</div>
          <div className="border p-1 px-3 border-black rounded">
            <button className="text-black">x</button>
          </div>
        </div>
        <div className="w-full flex justify-around mt-5 ">
          <div className="bg-[#030091] border w-24 h-9 flex justify-center text-white rounded-md">
            <button>Download</button>
          </div>
          <div className="bg-[#E44848] border w-24 h-9 flex justify-center text-white rounded-md">
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
