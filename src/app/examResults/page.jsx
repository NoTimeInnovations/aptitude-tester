"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { EncryptStorage } from "encrypt-storage";

const encrypter = new EncryptStorage(process.env.NEXT_PUBLIC_SECRET);
export default function page() {
  const [details, setDetails] = useState(encrypter.getItem("lastExam"));
  const [results, setResults] = useState(encrypter.getItem("lastExamResults"));
  const [duration, setDuration] = useState(
    encrypter.getItem("lastExamDuration")
  );
  const [color, setColor] = useState(false);
  useEffect(() => {
    setColor(
      results.correct - results.wrong >= 20 ? "from-green-300" : "from-red-300"
    );
  }, []);

  return (
    <div className="bg-[rgba(153,187,221,100)] h-screen md:h-full w-screen md:min-h-screen p-3 md:p-12 pt-20">
      <div className="bg-[#FFFFFFE5] text-black flex flex-col w-full max-w-[1400px] mt-5 sm:mt-10 p-1 sm:p-5 rounded-2xl items-center mx-auto">
        <div className="mt-6 text-[24px] sm:text-[36px] font-['Poppins'] font-bold text-center">
          EasyLearn
        </div>
        {results.correct - results.wrong >= 20 ? (
          <div className={`w-full flex flex-row from-green-300 items-center`}>
            <div className={`bg-gradient-to-l text-green-300 w-full h-1`} />
            <span className="px-3">pass</span>
            <div className={`bg-gradient-to-r from-green-300 w-full h-1`} />
          </div>
        ) : (
          <div className={`w-full flex flex-row from-red-300 items-center`}>
            <div className={`bg-gradient-to-l text-red-300 w-full h-1`} />
            <span className="px-3">fail</span>
            <div className={`bg-gradient-to-r from-red-300 w-full h-1`} />
          </div>
        )}

        <button className="bg-[rgba(4,2,105,100)] rounded-[8px] mt-12 h-14 w-44">
          <span className="text-white text-[14px] font-['Poppins']">
            View Result
          </span>
        </button>
      </div>
    </div>
  );
}
