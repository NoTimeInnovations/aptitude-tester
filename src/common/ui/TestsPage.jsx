"use client";
import React, { useState, useEffect } from "react";
import TestList from "../components/TestsPage/TestList";
import CopyRight from "../components/CopyRight";
import Image from "next/image";
import ElevatedShadowDiv from "../components/ElevatedShadowDiv";
import TestScheduler from "../components/TestsPage/TestScheduler";
// import Datepicker from "flowbite-datepicker/Datepicker";
import {
  useQuestionSetContext,
  useUserContext,
} from "../../app/dashboard/page";
import timer from "../../util/timer";

export default function TestsPage() {
  const [user, setUser] = useState(useUserContext());
  const [showScheduler, setShowScheduler] = useState(false);
  const [testDetails, setTestDetails] = useState(
    user.test.reduce((acc, obj) => {
      return {
        ...acc,
        [obj.topic]: [
          ...(acc[obj.topic] || []),
          { id: obj["id"], index: obj["index"] },
        ],
      };
    }, {})
  );

  useEffect(() => {
    setQuestionSet(
      user.test.reduce((acc, obj) => {
        return {
          ...acc,
          [obj.topic]: [
            ...(acc[obj.topic] || []),
            { id: obj["id"], index: obj["index"] },
          ],
        };
      }, {})
    );
    console.log("Hello");
  }, [user]);

  const [setDetails, setSetDetails] = useState(useQuestionSetContext());

  const [questionSet, setQuestionSet] = useState(
    setDetails.reduce((acc, obj) => {
      return { ...acc, [obj.topic]: [...(acc[obj.topic] || []), obj["id"]] };
    }, {})
  );

  useEffect(() => {
    setQuestionSet(
      setDetails.reduce((acc, obj) => {
        return { ...acc, [obj.topic]: [...(acc[obj.topic] || []), obj["id"]] };
      }, {})
    );
  }, [setDetails]);

  const scheduledTest = user.scheduled ? user.scheduled : null;
  const scheduledDate =
    scheduledTest != null ? new Date(scheduledTest.date) : null;
  const [seconds, minutes, hours, days] =
    scheduledDate != null ? timer(scheduledDate) : [null, null, null, null];

  return [
    <TestScheduler
      questionSet={questionSet}
      show={showScheduler}
      setShow={setShowScheduler}
    />,
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 sm:px-8 md:px-12 min-h-screen font-['Poppins']">
      <div className="flex flex-col md:flex-row justify-between">
        <span className="text-[#040269] font-bold text-3xl sm:text-4xl md:text-5xl">
          Mock Tests
        </span>
      </div>
      <br />
      <br />
      <div
        className="bg-white py-5 rounded-lg px-4 sm:px-6 md:px-[3.5rem]"
        style={{ filter: "drop-shadow(0 0.5px 0.5px rgb(0 0 0 / 0.25))" }}
      >
        <div className="flex flex-col md:flex-row justify-between font-semibold text-xl md:text-2xl">
          Pre Scheduled Test
          <button onClick={() => setShowScheduler(true)}>
            <div className="font-semibold text-lg md:text-xl flex flex-row items-center mt-2 md:mt-0">
              Edit Schedule
              <Image
                className="ml-1"
                src="/media/img/TestsPage/editPen.svg"
                width={22}
                height={10}
              />
            </div>
          </button>
        </div>
        {/*toChange*/}
        {scheduledTest == null ? (
          <div className="mt-7 text-lg">No Test Scheduled Yet</div>
        ) : (
          <div className="flex flex-col md:flex-row mt-8 justify-between">
            <div>
              {minutes + seconds + hours + days >= 0
                ? [
                    <div className="flex flex-row gap-2 items-center place-items-center text-xl md:text-2xl font-medium">
                      <ElevatedShadowDiv large>{seconds}</ElevatedShadowDiv>:
                      <ElevatedShadowDiv large>{minutes}</ElevatedShadowDiv>:
                      <ElevatedShadowDiv large>{hours}</ElevatedShadowDiv>:
                      <ElevatedShadowDiv large>{days}</ElevatedShadowDiv>
                    </div>,
                    <div className="grid grid-cols-4 gap-4 md:gap-[1.7rem] place-items-center">
                      <span>Days</span>
                      <span>Hr</span>
                      <span>Min</span>
                      <span>Sec</span>
                    </div>,
                  ]
                : "You missed an scheduled Test"}
            </div>
            <div className="grid gap-6 md:gap-8 gap-y-8 md:gap-y-12 grid-cols-1 md:grid-cols-2 mt-8 md:mt-0">
              <div>
                <div className="text-[#757575]">Title</div>
                {scheduledTest.topic}&nbsp;Test
              </div>
              <div>
                <div className="text-[#757575]">Scheduled On</div>
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
              <div>
                <div className="text-[#757575]">Duration</div>30 min
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <div className="px-4 md:px-5 rounded-xl py-10 md:py-20 bg-[#E6E6E638]">
        {Object.keys(questionSet).map((item) => [
          <TestList>
            {{
              module: item,
              testDetails: testDetails[item],
              tests: questionSet[item],
            }}
          </TestList>,
          <br />,
        ])}
        <CopyRight />
      </div>
    </div>,
  ];
}
