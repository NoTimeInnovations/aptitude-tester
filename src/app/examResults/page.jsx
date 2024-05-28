"use client";
import React, { useEffect, useRef, useState } from "react";
import { EncryptStorage } from "encrypt-storage";
import { useRouter } from "next/navigation";

const options = {
  allowTaint: true,
  useCORS: true,
  backgroundColor: "rgba(0,0,0,0)",
  removeContainer: true,
};

const encrypter = new EncryptStorage(process.env.NEXT_PUBLIC_SECRET);
export default function page() {
  let { push } = useRouter();
  const [questions, setQuestions] = useState(
    encrypter.getItem("lastExamQuestions")
  );
  const positions = encrypter.getItem("lastExamPos");
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
  useEffect(() => {
    setShow("all");
    setColor(
      results.correct - results.wrong >= 20 ? "text-green-300" : "text-red-300"
    );
    const time = 1800 - duration.minutes * 60 - duration.seconds;
    setDuration({ minutes: Math.floor(time / 60), seconds: time % 60 });
  }, []);

  const cardRef = useRef();
  const prepareURL = async () => {
    const cardElement = cardRef.current;

    if (!cardElement) return;

    try {
      // lazy load this package
      const html2canvas = await import(
        /* webpackPrefetch: true */ "html2canvas"
      );

      const result = await html2canvas.default(cardElement, options);

      const asURL = result.toDataURL("image/jpeg");
      // as far as I know this is a quick and dirty solution
      const anchor = document.createElement("a");
      anchor.href = asURL;
      anchor.download = "your-report.jpeg";
      anchor.click();
      anchor.remove();
      // maybe this part should set state with `setURLData(asURL)`
      // and when that's set to something you show the download button
      // which has `href=URLData`, so that people can click on it
    } catch (reason) {
      console.log(reason);
    }
  };

  return (
    <div
      ref={cardRef}
      className="font-['Poppins'] bg-[rgba(153,187,221,100)] max-w-screen h-fit md:h-fit box-border w-screen md:min-h-screen p-3 md:p-12 pt-20 "
    >
      <div className="bg-[#FFFFFFE5] text-black flex flex-col w-full max-w-[1400px] mt-5 sm:mt-10 p-1 sm:p-5 rounded-2xl items-center mx-auto">
        <div className="mt-6 text-[24px] mb-7 sm:text-[36px] font-['Poppins'] font-bold text-center">
          EasyLearn
        </div>
        <div
          className={`w-full flex flex-col sm:flex-row text-lg ${color} font-semibold items-center`}
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

        <div className="w-full md:w-3/5 mx-10 px-10 mt-5 justify-between bg-white border-[#00000033] border flex flex-col md:flex-row p-3 rounded-md">
          <div
            className={`shadow-xl rounded-full w-fit p-14 flex items-center ${color} text-5xl aspect-square border ${
              results.correct - results.wrong >= 20
                ? "border-green-300"
                : "border-red-300"
            }`}
            style={{ borderRadius: "50%" }}
          >
            {results.correct - results.wrong}/30
          </div>
          <div className="grid gap-2 grid-cols-2 capitalize text-[#757575] mt-5 md:mt-0 md:ml-10">
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

        <div className="flex flex-col md:flex-row mt-3 justify-end w-full md:w-3/5 text-white">
          <div className="flex w-full md:w-fit gap-2 flex-col md:flex-row justify-between">
            <button onClick={() => push("/dashboard")}>
              <div className="w-full md:w-36 h-fit px-2 py-3.5 text-center align-middle rounded-xl bg-[#0000009E]">
                Exit
              </div>
            </button>
            <button onClick={prepareURL}>
              <div className="w-full md:w-36 h-fit px-2 py-3.5 min-w-max rounded-xl bg-[#0402699E]">
                Download PDF
              </div>
            </button>
          </div>
        </div>
        <div className="w-full md:w-10/12 mt-3 border border-[#E6E6E699] py-20 px-5 md:px-10 bg-[#E6E6E638] rounded-md">
          <span className="text-2xl md:text-5xl font-extrabold">Answers</span>
          {result.map(
            (item, i) =>
              (show == "all" ||
                (result[i] == show && result[i] != "unanswered")) && (
                <div className="my-10" key={i}>
                  <div className="text-[#153462] font-bold text-lg">
                    Question {i + 1}
                  </div>
                  <div className="mt-5">{questions[i].question}</div>
                  <div className="flex flex-col md:flex-row w-full mt-3 justify-between">
                    <div className="flex flex-col">
                      {questions[i].wrong_answers.map((wrong, index) => {
                        console.log(i, index);
                        return (
                          <div
                            key={index}
                            className="flex items-center flex-row gap-2 w-fit"
                            style={{ order: positions[i][index] }}
                          >
                            <div
                              className={`h-4 aspect-square border rounded-full ${
                                wrong == details.answers[`${i}`] && "bg-red-300"
                              }  ${
                                result[i] != "unanswered" &&
                                (result[i]
                                  ? "border-green-300"
                                  : "border-red-300")
                              }`}
                            />
                            {wrong}
                          </div>
                        );
                      })}
                      <div
                        className="flex items-center flex-row gap-2 w-fit"
                        style={{ order: positions[i][3] }}
                      >
                        <div
                          className={`h-4 aspect-square border rounded-full border-green-300 bg-green-300`}
                        />
                        {questions[i].correct_answer}
                      </div>
                    </div>
                    <div className="flex flex-col text-sm">
                      <div
                        className={`w-28 text-center p-2 font-[10] rounded-full shadow ${
                          result[i] == "unanswered"
                            ? "border text-black"
                            : result[i]
                            ? "bg-green-300 text-white"
                            : "bg-red-300 text-white"
                        }`}
                      >
                        {result[i] != "unanswered"
                          ? result[i]
                            ? "correct"
                            : "wrong"
                          : "unanswered"}
                      </div>
                      <div
                        className={`w-28 text-center border p-2 font-thin mt-2 rounded-full shadow ${
                          result[i] == "unanswered"
                            ? "text-black"
                            : result[i]
                            ? "border-green-300 text-green-300"
                            : "border-red-300 text-red-300"
                        }`}
                      >
                        {result[i] != "unanswered"
                          ? result[i]
                            ? "+1 Points"
                            : "-1 Points"
                          : "0 Points"}
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
