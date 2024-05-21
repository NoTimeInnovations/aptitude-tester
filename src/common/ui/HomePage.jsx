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
  const user = useUserContext();
  const scheduledTest = user.scheduled ? user.scheduled : null;
  const scheduledDate =
    scheduledTest != null ? new Date(scheduledTest.date) : null;
  console.log(scheduledTest);
  const [seconds, minutes, hours, days] =
    scheduledTest != null ? timer(scheduledDate) : [null, null, null, null];
  const [speed, accuracy, passPercent, questionAttempt] =
    user.test.length < 1 ? [null, null, null, null] : getCalculation(user.test);

  return (
    <div className="flex-1 bg-white text-black pt-12 md:pt-24 pb-10 px-6 font-['Poppins']">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <span className="text-[#040269] font-bold text-3xl md:text-5xl mb-4 lg:mb-0">
          Good Morning
        </span>
        <div className="flex flex-row items-center">
          <Image
            src="/media/img/HomePage/calendar.svg"
            className="w-6 md:w-8"
            width={30}
            height={10}
            alt="Calendar Icon"
          />
          <div className="flex flex-col font-bold text-lg justify-around ml-2">
            Date
          </div>
        </div>
      </div>
      <br />
      <div
        className="text-2xl md:text-3xl font-semibold text-center md:text-left"
        id="name"
      >
        Mr Binil George
      </div>
      <br />
      <br />
      <RecentPieResults />
      <br />
      <br />
      <div className="rounded-xl bg-[#E6E6E638] w-full p-6">
        <div className="text-2xl font-bold">
          Recent Watch
          <br />
          <br />
          <div className="px-5 grid grid-rows-2 lg:grid-rows-1 lg:grid-flow-col lg:auto-cols-max w-full gap-4">
            <div>
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
            <div className="grid grid-cols-2 text-lg font-bold py-6 px-4">
              <span>Courses Type</span>
              <span>: Course</span>
              <span>Courses Name</span>
              <span>: Course</span>
              <span>Courses Code</span>
              <span>: Course</span>
              <button className="bg-[#040269CC] text-base py-2 px-3 rounded-2xl text-white col-span-2">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col lg:flex-row justify-between gap-4 px-10">
        <div className="flex flex-col items-center rounded-xl bg-[#E6E6E638] w-full lg:w-[40%] p-6">
          <div className="text-xl flex justify-between font-bold w-full mb-4">
            Scheduled Test <span>Edit</span>
          </div>
          {scheduledTest == null ? (
            <div className="mt-7 text-lg">No Test Scheduled Yet</div>
          ) : (
            <>
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
                {scheduledTest.topic} Test
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
            </>
          )}
          <button className="mt-7 rounded-full bg-[#040269E5] w-fit py-2 px-10 text-white">
            Set Another
          </button>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-[#E6E6E638] w-full lg:w-[40%] p-6">
          <div className="text-xl flex justify-center font-bold w-full mb-4">
            Overall Performance
          </div>
          {user.test.length < 1 ? (
            <div className="text-lg mt-7">
              You have not attempted any test yet
            </div>
          ) : (
            <div className="rounded-xl w-full text-xl font-light p-3 grid gap-5">
              <StatsItem text="Avg Speed" value={`${speed} Qn/Min`} />
              <StatsItem text="Accuracy" value={`${accuracy}%`} />
              <StatsItem text="Pass Percentage" value={`${passPercent}%`} />
              <StatsItem
                text="Questions Attempted"
                value={`${questionAttempt} Qns`}
              />
            </div>
          )}
          <button className="mt-7 rounded-full bg-[#040269E5] w-fit py-2 px-14 text-white">
            See Overall Results
          </button>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}
