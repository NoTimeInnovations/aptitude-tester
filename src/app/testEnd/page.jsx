"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

var encrypter;
async function update(
  index,
  id,
  topic,
  correct,
  wrong,
  duration,
  isTried,
  setter
) {
  const res = await (
    await fetch(`${BASE_URL}api/updateTestDetails`, {
      method: "POST",
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        index,
        id,
        topic,
        correct,
        wrong,
        duration,
        isTried,
      }),
    })
  ).json();
  if (res.error) {
    alert(
      `Connection Issues, Try refreshing the page \nMessage : ${res.error}`
    );
    return setter(res.error);
  }
  setter("");
  encrypter.removeItem("lastExamAnswers");
}

export default function Page() {
  let { push } = useRouter();
  const searchParams = useSearchParams();

  const [errors, setErrors] = useState("");

  const [details, setDetails] = useState();
  const [rawAll, setRawAll] = useState();
  const [answers, setAnswers] = useState();
  const [duration, setDuration] = useState();
  const [result, setResult] = useState([]);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!rawAll) {
      return;
    }
    setAnswers(
      rawAll.reduce((acc, obj) => {
        return [...acc, obj["correct_answer"]];
      }, [])
    );
  }, [rawAll]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const encrypt = async () => {
        const { EncryptStorage } = await import("encrypt-storage");
        encrypter = new EncryptStorage(process.env.NEXT_PUBLIC_SECRET);
        setDetails(encrypter.getItem("lastExam"));
        setRawAll(encrypter.getItem("lastExamAnswers"));
        setDuration(encrypter.getItem("lastExamDuration"));
      };
      encrypt();
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      if (!details || !answers) return;
      for (var i = 0; i < 30; i++) {
        if (details.answers[`${i}`]) {
          if (details.answers[`${i}`] == "unansweredx1000bhy") {
            result.push("unanswered");
            continue;
          }
          result.push(details.answers[`${i}`] == answers[i]);
          continue;
        }
        result.push("unanswered");
      }
      update(
        Number(details.index),
        Number(details.id),
        details.topic,
        result.filter((x) => x && x != "unanswered").length,
        result.filter((x) => !x).length,
        Math.floor(30 - duration.minutes - duration.seconds / 60),
        details.isTried == "true",
        setErrors
      );
    } else {
      isMounted.current = true;
    }
  }, [details, answers]);

  // encrypter.removeItem("lastExam");

  if (!encrypter) {
    return <div>This is Server</div>;
  }

  return (
    <>
      <div className="bg-[rgba(153,187,221,100)] h-screen md:h-full w-screen md:min-h-screen p-3 pr-3 md:pr-24 md:p-12 md:pl-32 pt-20">
        <div className="bg-white text-[rgba(0,0,0,100)] w-full max-w-8xl rounded-2xl font-['Poppins'] text-.5 xl md:text-2xl pb-8 p-6 md:pl-12 md:pt-10 font-semibold relative mx-auto">
          <div className="w-fit capitalize">
            {details.topic} Test-{Number(details.index) + 1}
          </div>
          <div className="text-[12px] md:text-[22px] font-extralight absolute top-[25%] md:top-[30%] left-[80%] md:start-[70%] transform -translate-x-1/2 md:transform-none w-[50%] md:w-96">
            Total Questions: 30 Qs.
            <br />
            Total Time: 30 minutes.
          </div>
        </div>
        <div className="bg-white flex flex-col w-full max-w-8xl mt-16 sm:mt-32 p-6 sm:p-36 rounded-2xl items-center mx-auto">
          <div className="mt-12">
            <Image
              src="/media/img/testEnd.svg"
              width={100}
              height={100}
              alt="Test End"
            />
          </div>
          <div className="text-[24px] sm:text-[36px] text-black font-['Poppins'] mt-16 font-bold text-center">
            Your answers have been saved
          </div>
          <button
            onClick={() => {
              encrypter.setItem("lastExamResults", JSON.stringify(result));
              encrypter.setItem("lastExamQuestions", JSON.stringify(rawAll));
              push("/examResults");
            }}
            className="bg-[rgba(4,2,105,100)] rounded-[8px] mt-12 h-14 w-44"
          >
            <span className="text-white text-[14px] font-['Poppins']">
              View Result
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
