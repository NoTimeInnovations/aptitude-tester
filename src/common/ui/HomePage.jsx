"use client";
import Image from "next/image";
import React from "react";
import RecentPieResults from "../components/RecentPieResults";
import CopyRight from "../components/CopyRight";
import ElevatedShadowDiv from "../components/ElevatedShadowDiv";
import { useUserContext } from "../../app/dashboard/page";
import timer from "../../util/timer";
import getCalculation from "../../util/perfomanceCalculator";
import StatsItem from "../components/StatsItem";

export default function HomePage() {
  const today = new Date();
  const user = useUserContext();
  const scheduledTest = user.scheduled ? user.scheduled : null;
  const scheduledDate =
    scheduledTest != null ? new Date(scheduledTest.date) : null;
  const [seconds, minutes, hours, days] =
    scheduledDate != null ? timer(scheduledDate) : null;
  const [speed, accuracy, passPercent, questionAttempt] = getCalculation(
    user.test
  );

  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 font-['Poppins']">
      <div className="flex flex-row justify-between">
        <span className="text-[#040269] font-bold  text-5xl ">
          Good Morning
        </span>
        <div className="flex flex-row">
          <Image
            src="/media/img/HomePage/calendar.svg"
            width={30}
            height={10}
          />
          <div className="flex flex-col ml-2 font-bold text-lg justify-around">
            {`${today.getDate().toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}/${(today.getMonth() + 1).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}/${today.getFullYear().toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}`}
          </div>
        </div>
      </div>
      <br />
      <span className="text-3xl font-semibold" id="name">
        Mr {user.firstname + " " + user.lastname}
      </span>
      <br />
      <br />
      <RecentPieResults />
      <br />
      <br />
      <div className=" rounded-xl bg-[#E6E6E638] w-full p-6">
        <div className="text-2xl font-bold">
          Recent Test Result
          <br />
          <br />
          <div className="px-5 grid grid-rows-2 lg:grid-rows-1 lg:grid-flow-col lg:auto-cols-max w-full ">
            <div className="">
              <iframe
                className="md:h-[16vw] h-[20vh] aspect-video"
                src="https://www.youtube.com/embed/S-L-keJA0u8?si=eoxeeBYWBrPzIR3Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-2 text-lg font-[700] py-6 px-4 min-w-3/12 w-fit md:justify-self-center">
              Courses Type&nbsp;<span className="w-fit">: Course</span>
              Courses Name&nbsp;<span className="w-fit">: Course</span>
              Courses Code&nbsp;<span className="w-fit">: Course</span>
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
          <div className="mt-8">
            <div className="flex w-full flex-row gap-2 items-center justify-center">
              <ElevatedShadowDiv>{seconds}</ElevatedShadowDiv>:
              <ElevatedShadowDiv>{minutes}</ElevatedShadowDiv>:
              <ElevatedShadowDiv>{hours}</ElevatedShadowDiv>:
              <ElevatedShadowDiv>{days}</ElevatedShadowDiv>
            </div>
            <div className="grid grid-cols-4 gap-[1.2rem] place-items-center">
              <span>Days</span>
              <span>Hr</span>
              <span>Min</span>
              <span>Sec</span>
            </div>
          </div>
          <div className="mt-5 text-lg w-full text-center">
            {scheduledTest.topic}&nbsp;Test
          </div>
          <div className="mt-1 text-[#BDBDBD] text-base w-full text-center">
            {`${scheduledDate.getDate().toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}/${(scheduledDate.getMonth() + 1).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}/${scheduledDate.getFullYear().toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}`}
          </div>
          <button className="mt-7 rounded-full bg-[#040269E5] w-fit py-2 px-10 text-white ">
            Set Another
          </button>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-[#E6E6E638] w-[40%] p-6">
          <div className="text-xl flex flex-row justify-center font-bold w-full">
            Overall Perfomance
          </div>
          <div className=" rounded-xl w-full text-xl font-light rounded-xlg p-3 grid grid-cols-1 gap-5">
            <StatsItem text="Avg Speed" value={`${speed} Qn/Min`} />
            <StatsItem text="Accuracay" value={`${accuracy}%`} />
            <StatsItem text="Pass Percentage" value={`${passPercent}%`} />
            <StatsItem
              text="Questions Attempted"
              value={`${questionAttempt} Qns`}
            />
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
