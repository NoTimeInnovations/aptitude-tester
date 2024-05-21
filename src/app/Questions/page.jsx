import React from "react";
import ElevatedShadowDiv from "../../common/components/ElevatedShadowDiv";
import GreenButton from "../../common/components/GreenButon";

const arr1 = [];
for (var i = 1; i < 31; i++) {
  arr1.push(i);
}

export default function page() {
  return (
    <>
      <div className="bg-[rgba(138,170,229,50)] min-h-screen pt-16">
        <div className="flex flex-col md:flex-row justify-between py-8 px-6 md:px-24">
          <div className="font-['Poppins'] text-black font-semibold text-[28px] md:text-[40px]">
            Reasoning-Test 1
          </div>
          <div className="bg-[rgba(4,2,105,100)] w-32 md:w-48 text-white p-2 pl-6 md:pl-12 rounded-xl text-[24px] md:text-[32px] mt-4 md:mt-0">
            30:00
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pb-0 px-6 md:px-24">
          <div className="w-full md:w-[60%]">
            <div className="bg-white font-['Poppins'] rounded-xl h-fit pb-16">
              <div className="flex justify-between">
                <div className="text-[rgba(4,2,105,100)] font-semibold text-[20px] md:text-[22px] p-5 pt-6">
                  Question 1
                </div>
                <div className="flex text-[rgba(4,2,105,100)] p-5 rounded-2xl h-5 items-center mt-6 mr-8 mb-4 border-[rgba(4,2,105,50)] shadow-xl">
                  3 Points
                </div>
              </div>
              <div className="text-black text-[18px] md:text-[20px] p-5">
                Lörem ipsum sara dialören därför att bokstav teran är neostik
                laskapet autonöpuktig kroliga. Vapossade självka rantän
                pompekunskap carpa.
              </div>
              <div className="text-[rgba(189,189,189,70)] mt-24 ml-5">
                OPTIONS:Select any of the following
              </div>
              <div className="flex items-center mt-9">
                <input
                  type="checkbox"
                  className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
                />
                <div className="text-black ml-2">
                  Lörem ipsum sara dialören därför att
                </div>
              </div>
              <div className="flex items-center mt-7">
                <input
                  type="checkbox"
                  className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
                />
                <div className="text-black ml-2">
                  Lörem ipsum sara dialören därför att
                </div>
              </div>
              <div className="flex items-center mt-7">
                <input
                  type="checkbox"
                  className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
                />
                <div className="text-black ml-2">
                  Lörem ipsum sara dialören därför att
                </div>
              </div>
              <div className="flex items-center mt-7">
                <input
                  type="checkbox"
                  className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
                />
                <div className="text-black ml-2">
                  Lörem ipsum sara dialören därför att
                </div>
              </div>
            </div>
            <div className="pt-14 pb-6 flex flex-col md:flex-row w-full md:w-108">
              <button className="bg-[rgb(255,255,255)] rounded-[5px] p-3 pl-10 pr-10 mb-4 md:mb-0">
                <span className="text-black text-[16px] md:text-[18px] font-['Poppins']">
                  Previous
                </span>
              </button>
              <button className="bg-[rgba(4,2,105,100)] rounded-[5px] p-3 pl-10 pr-10 mb-4 md:mb-0 md:ml-16">
                <span className="text-white text-[16px] md:text-[18px] font-['Poppins']">
                  Save & Next
                </span>
              </button>
              <button className="bg-[rgb(0,0,0)] rounded-[5px] p-3 pl-10 pr-10 md:ml-[28%]">
                <span className="text-white text-[16px] md:text-[18px] font-['Poppins']">
                  Review
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white p-7 rounded-xl flex flex-col justify-center mt-8 md:mt-0">
            <div className="font-['Poppins'] text-xl md:text-2xl font-semibold text-[rgba(4,2,105,100)] text-center">
              Question Bank
            </div>
            <div className="grid grid-cols-5 gap-0.5 mt-4 gap-y-5">
              {arr1.map((item) => (
                <button key={item}>
                  <ElevatedShadowDiv>{item}</ElevatedShadowDiv>
                </button>
              ))}
            </div>
            <div className="text-end text-[rgba(4,2,105,100)] text-[12px] mt-3 font-bold font-['Poppins']">
              0/30 Answered
            </div>
            <div className="bg-[rgb(224,224,224)] w-full h-0.5 mt-6"></div>
            <div className="flex flex-col justify-center">
              <div className="flex justify-around w-fit">
                <div className="flex flex-row items-center font-['Poppins'] text-black mt-5">
                  <GreenButton bg="#2FD790">
                    <div className="pr-2 pl-2">1</div>
                  </GreenButton>
                  <span className="ml-2"> Answered</span>
                </div>
                <div className="flex flex-row items-center font-['Poppins'] text-black mt-5 ml-5">
                  <GreenButton bg="#E44848">
                    <div className="pr-2 pl-2">1</div>
                  </GreenButton>
                  <span className="ml-2">Not Answered</span>
                </div>
              </div>
              <div className="flex w-fit p-3">
                <div className="flex flex-row items-center font-['Poppins'] text-black mt-5">
                  <GreenButton bg="#2F4AD7" className="mr-8">
                    <div className="pr-2 pl-2">1</div>
                  </GreenButton>
                  <span className="ml-2 mr-4">Review</span>
                </div>
                <div className="flex flex-row items-center font-['Poppins'] text-black mt-5 ml-7">
                  <GreenButton bg="#F0EEED">
                    <div className="pr-2 pl-2">1</div>
                  </GreenButton>
                  <span className="ml-2">Not Visited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
