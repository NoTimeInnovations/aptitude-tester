import Image from "next/image";
import React from "react";
import RecentPieResults from "../components/RecentPieResults";
import CopyRight from "../components/CopyRight";
import ElevatedShadowDiv from "../components/ElevatedShadowDiv";

export default function HomePage() {
  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 font-['Poppins']">
      <div className="flex flex-row justify-between">
        <span className="text-[#040269] font-bold  text-4xl ">
          Good Morning
        </span>
        <div className="flex flex-row">
          <Image
            src="/media/img/HomePage/calendar.svg"
            width={30}
            height={10}
          />
          {/*toChanage*/}
          <div className="flex flex-col font-bold text-lg justify-around">
            Date
          </div>
        </div>
      </div>
      {/*toChanage*/}
      <span className="" id="name">
        Mr Binil George
      </span>
      <br />
      <br />
      {/*toChanage*/}
      <RecentPieResults />
      <br />
      <br />
      <div className=" rounded-xl bg-[#E6E6E638] w-full p-6">
        <div className="text-2xl font-bold">
          Recent Test Result
          <br />
          <br />
          <div className="px-5 flex flex-row">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/S-L-keJA0u8?si=eoxeeBYWBrPzIR3Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />

            <div className="grid grid-cols-2 text-lg font-[700] py-6 px-4 min-w-3/12">
              Courses Type : <span>Course</span>
              Courses Name : <span>Course</span>
              Courses Code : <span>Course</span>
              <button
                className="bg-[#040269CC] text-base w-fit h-fit py-2 px-3
               rounded-2xl text-white"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      {/*toChange*/}
      <div className="flex px-10 flex-row justify-between">
        <div className="flex flex-col items-center rounded-xl bg-[#E6E6E638] w-[40%] p-6">
          <div className="text-xl flex flex-row justify-between font-bold w-full">
            Scheduled Test <spand>Edit</spand>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center mt-8">
            <div className="flex flex-col items-center">
              <ElevatedShadowDiv>00</ElevatedShadowDiv>hr
            </div>
            :
            <div className="flex flex-col items-center">
              <ElevatedShadowDiv>00</ElevatedShadowDiv>min
            </div>
            :
            <div className="flex flex-col items-center">
              <ElevatedShadowDiv>00</ElevatedShadowDiv>sec
            </div>
          </div>
          <div className="mt-5 text-lg w-full text-center">English Test</div>
          <div className="mt-1 text-[#BDBDBD] text-base w-full text-center">
            Created on Date
          </div>
          <button className="mt-7 rounded-full bg-[#040269E5] w-fit py-2 px-10 text-white ">
            Set Another
          </button>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-[#E6E6E638] w-[40%] p-6">
          <div className="text-xl flex flex-row justify-center font-bold w-full">
            Overall Perfomance
          </div>
          <div className="flex flex-row justify-center gap-2 items-center mt-8">
            <div className="flex flex-col items-center">
              <ElevatedShadowDiv>00</ElevatedShadowDiv>hr
            </div>
            :
            <div className="flex flex-col items-center">
              <ElevatedShadowDiv>00</ElevatedShadowDiv>min
            </div>
            :
            <div className="flex flex-col items-center">
              <ElevatedShadowDiv>00</ElevatedShadowDiv>sec
            </div>
          </div>
          <div className="mt-5 text-lg w-full text-center">English Test</div>
          <div className="mt-1 text-[#BDBDBD] text-base w-full text-center">
            Created on Date
          </div>
          <button className="mt-7 rounded-full bg-[#040269E5] w-fit py-2 px-14 text-white ">
            See Overall Results
          </button>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}
