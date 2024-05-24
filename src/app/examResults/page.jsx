"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { EncryptStorage } from "encrypt-storage";

const encrypter = new EncryptStorage(process.env.NEXT_PUBLIC_SECRET);
export default function page() {
  const [questions, setQuestions] = useState(
    encrypter.getItem("lastExamQuestions")
  );
  const [details, setDetails] = useState(encrypter.getItem("lastExam"));
  const [result, setResult] = useState(encrypter.getItem("lastExamResults"));
  const [show, setShow] = useState("all");
  const results = {
    correct: result.filter((x) => x && x != "unanswered").length,
    wrong: result.filter((x) => !x).length,
  };
  const [duration, setDuration] = useState(
    encrypter.getItem("lastExamDuration")
  );
  const [color, setColor] = useState(false);
  console.log(questions);
  useEffect(() => {
    setShow("all");
    setColor(
      results.correct - results.wrong >= 20 ? "text-green-300" : "text-red-300"
    );
    const time = 1800 - duration.minutes * 60 - duration.seconds;
    setDuration({ minutes: Math.floor(time / 60), seconds: time % 60 });
  }, []);

  return (
    <div className=" font-['Poppins'] bg-[rgba(153,187,221,100)] max-w-screen h-screen md:h-full box-border w-screen md:min-h-screen p-3 md:p-12 pt-20">
      <div className="bg-[#FFFFFFE5] text-black flex flex-col w-full max-w-[1400px] mt-5 sm:mt-10 p-1 sm:p-5 rounded-2xl items-center mx-auto">
        <div className="mt-6 text-[24px] mb-7 sm:text-[36px] font-['Poppins'] font-bold text-center">
          EasyLearn
        </div>
        <div
          className={`w-full flex flex-row text-lg ${color}  font-semibold items-center`}
        >
          {results.correct - results.wrong >= 20
            ? [
                <div
                  className={`bg-gradient-to-l from-green-300 w-full h-1`}
                />,
                <span className="px-3">Pass</span>,
                <div
                  className={`bg-gradient-to-r from-green-300 w-full h-1`}
                />,
              ]
            : [
                <div className={`bg-gradient-to-l from-red-300 w-full h-1`} />,
                <span className="px-3">Fail</span>,
                <div className={`bg-gradient-to-r from-red-300 w-full h-1`} />,
              ]}
        </div>

        <div className=" w-3/5 mx-10 px-10 mt-5 justify-between bg-white border-[#00000033] border flex flex-row p-3 rounded-md">
          <div
            className={` shadow-xl rounded-full w-fit p-14 flex items-center ${color} text-5xl aspect-square border ${
              results.correct - results.wrong >= 20
                ? "border-green-300"
                : "border-red-300"
            }`}
            style={{ borderRadius: "50%" }}
          >
            {results.correct - results.wrong}/30
          </div>
          <div className="grid gap-2 grid-cols-2 capitalize text-[#757575]">
            Test
            <span className="text-black">
              : {`${details.topic}-Test ${Number(details.index) + 1}`}
            </span>
            Time Taken
            <span className="text-black">
              : {`${duration.minutes}min ${duration.seconds}sec`}
            </span>
            Questions Attempted
            <span className="text-black">
              : {results.correct + results.wrong}
            </span>
            Correct Answers
            <span className="text-black">: {results.correct}</span>
            Wrong Answers <span className="text-black">: {results.wrong}</span>
            Overall result :
            <span className="text-black">
              :
              {Math.round(
                (((results.correct - results.wrong) * 10) / 3 +
                  Number.EPSILON) *
                  100
              ) / 100}
              %
            </span>
          </div>
        </div>

        <div className="flex flex-row mt-3 justify-end w-3/5 text-white ">
          <div className="flex w-fit gap-2 flex-row justify-between">
            <button>
              <div className="w-36 h-fit px-2 py-3.5 rounded-xl bg-[#0000009E]">
                Exit
              </div>
            </button>
            <button>
              <div className="w-36 h-fit px-2 py-3.5 min-w-max rounded-xl bg-[#0402699E]">
                Download PDF
              </div>
            </button>
          </div>
        </div>
        <div className=" w-10/12 mt-3 border border-[#E6E6E699] py-20 px-10 bg-[##E6E6E638]">
          <span className="text-5xl font-extrabold">Answers</span>
          {result.map(
            (item, i) =>
              (show == "all" ||
                (result[i] == show && result[i] != "unanswered")) && (
                <div className="my-10">
                  <div className="text-[#153462] font-bold text-lg">
                    Question {i + 1}
                  </div>
                  <div></div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
