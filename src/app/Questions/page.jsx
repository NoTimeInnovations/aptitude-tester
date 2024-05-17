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
        <div className="flex justify-between py-8 px-24">
          <div className="font-['Poppins'] text-black font-semibold text-[40px]">
            Reasoning-Test 1
          </div>
          <div className="bg-[rgba(4,2,105,100)] w-48 text-white p-2 pl-12 rounded-xl text-[32px] ">
            30:00
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-white font-['Poppins'] w-[60%] ml-24 rounded-xl pb-16">
            <div className="flex justify-between">
              <div className="text-[rgba(4,2,105,100)] font-semibold text-[22px] p-5 pt-6">
                Question 1
              </div>
              <div className="flex text-[rgba(4,2,105,100)] p-5 rounded-2xl h-5 items-center mt-6 mr-8 mb-4 border-[rgba(4,2,105,50)] shadow-xl">
                3 Points
              </div>
            </div>
            <div className="text-black text-[20px] p-5">
              Lörem ipsum sara dialören därför att bokstav teran är neostik
              laskapet autonöpuktig kroliga. Vapossade självka rantän
              pompekunskap carpa.
            </div>
            <div className="text-[rgba(189,189,189,70)] mt-24 ml-5">
              OPTIONS:Select any of the following
            </div>
            <div className="flex items-center mt-9 ">
              <input
                type="checkbox"
                className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
              ></input>
              <div className="text-black ml-2">
                Lörem ipsum sara dialören därför att
              </div>
            </div>
            <div className="flex items-center mt-7">
              <input
                type="checkbox"
                className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
              ></input>
              <div className="text-black ml-2">
                Lörem ipsum sara dialören därför att
              </div>
            </div>
            <div className="flex items-center mt-7">
              <input
                type="checkbox"
                className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
              ></input>
              <div className="text-black ml-2">
                Lörem ipsum sara dialören därför att
              </div>
            </div>
            <div className="flex items-center mt-7">
              <input
                type="checkbox"
                className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
              ></input>
              <div className="text-black ml-2">
                Lörem ipsum sara dialören därför att
              </div>
            </div>
          </div>
          <div className=" bg-white mr-24 rounded-xl">
            <div className="font-['Poppins'] text-2xl font-semibold text-[rgba(4,2,105,100)] pr-8 p-5 pl-28 pr-28">
              Question Bank
            </div>

            <div className="grid grid-cols-5 gap-0.5 ml-6 mt-4 gap-y-5">
              {arr1.map((item) => (
                <button>
                  <ElevatedShadowDiv>
                    <div className="w-5 flex items-center">
                      {item < 10 ? "0" : ""}
                      {item}
                    </div>
                  </ElevatedShadowDiv>
                </button>
              ))}
            </div>
            <div className="bg-[rgb(224,224,224)] w-80 h-0.5 mt-8 ml-10"></div>
            <div className="flex justify-around">
              <div className="flex flex-row items-center font-['Poppins'] text-black ml-5 mt-5">
                <GreenButton bg="#2FD790">
                  <div className=" pr-2 pl-2">1</div>
                </GreenButton>
                <span className="ml-2"> Answered</span>
              </div>
              <div className="flex flex-row items-center font-['Poppins'] text-black ml-5 mt-5">
                <GreenButton bg="#E44848">
                  <div className=" pr-2 pl-2">1</div>
                </GreenButton>
                <span className="ml-2">Not Answered</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-14 pb-6 flex flex-row w-108 ml-24 ">
          <button className="bg-[rgb(255,255,255)] rounded-[5px] p-3 pl-10 pr-10">
            <span className="text-black text-[18px] font-['Poppins']">
              Previous
            </span>
          </button>

          <button className="bg-[rgba(4,2,105,100)] rounded-[5px] p-3 pl-10 pr-10 ml-16">
            <span className="text-white text-[18px] font-['Poppins']">
              Save & Next
            </span>
          </button>
          <button className="bg-[rgb(0,0,0)] rounded-[5px] p-3 pl-10 pr-10 ml-[28%]">
            <span className="text-white text-[18px] font-['Poppins']">
              Review
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
