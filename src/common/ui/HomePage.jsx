import Image from "next/image";
import React from "react";
import RecentPieResults from "../components/RecentPieResults";
import CopyRight from "../components/CopyRight";

export default function HomePage() {
  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6">
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
      <div className="flex flex-row justify-between">
        <div className=" rounded-xl bg-[#E6E6E638] w-[40%] p-6">
          <div className="text-xl flex flex-row justify-between font-bold">
            Scheduled Test <spand>Edit</spand>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}
