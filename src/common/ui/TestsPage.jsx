"use client";
import React, { useState, useEffect } from "react";
import TestList from "../components/TestsPage/TestList";
import CopyRight from "../components/CopyRight";
import Image from "next/image";
import ElevatedShadowDiv from "../components/ElevatedShadowDiv";
import {
  useQuestionSetContext,
  useUserContext,
} from "../../app/dashboard/page";
import timer from "../../util/timer";

export default function TestsPage() {
  const [user, setUser] = useState(useUserContext());
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

  console.log(testDetails);

  const scheduledTest = user.scheduled ? user.scheduled : null;
  const scheduledDate =
    scheduledTest != null ? new Date(scheduledTest.date) : null;
  const [seconds, minutes, hours, days] =
    scheduledDate != null ? timer(scheduledDate) : [null, null, null, null];

  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-12 min-h-screen font-['Poppins']">
      <div className="flex flex-row justify-between">
        <span className="text-[#040269] font-bold  text-5xl ">Mock Tests</span>
      </div>
      <br />
      <br />
      <div
        className="bg-white py-5 rounded-lg px-[3.5rem]"
        style={{ filter: "drop-shadow(0 0.5px 0.5px rgb(0 0 0 / 0.25))" }}
      >
        <div className="flex flex-row justify-between font-semibold text-2xl">
          Pre Scheduled Test
          <div className=" font-semibold text-xl flex flex-row items-center">
            Edit Schedule
            <Image
              className="ml-1"
              src="/media/img/TestsPage/editPen.svg"
              width={22}
              height={10}
            />
          </div>
        </div>
        {/*toChange*/}
        {scheduledTest == null ? (
          <div className="mt-7 text-lg">No Test Scheduled Yet</div>
        ) : (
          <div className="flex flex-row mt-8 justify-between  ">
            <div>
              <div className="flex flex-row gap-2 items-center place-items-center text-2xl font-medium">
                <ElevatedShadowDiv large>{seconds}</ElevatedShadowDiv>:
                <ElevatedShadowDiv large>{minutes}</ElevatedShadowDiv>:
                <ElevatedShadowDiv large>{hours}</ElevatedShadowDiv>:
                <ElevatedShadowDiv large>{days}</ElevatedShadowDiv>
              </div>
              <div className="grid grid-cols-4 gap-[1.7rem] place-items-center">
                <span>Days</span>
                <span>Hr</span>
                <span>Min</span>
                <span>Sec</span>
              </div>
            </div>
            <div className="grid gap-8 gap-y-12 grid-cols-2">
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
                <div className="text-[#757575]">Duration</div>1 Hr, 30 min
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <div className="px-5 rounded-xl py-20 bg-[#E6E6E638]">
        {Object.keys(questionSet).map((item) => [
          <TestList>
            {{
              module: item,
              testDetails,
              tests: questionSet[item],
            }}
          </TestList>,
          <br />,
        ])}
        <CopyRight />
      </div>
    </div>
  );
}
