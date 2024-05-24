"use client";
import React, { useEffect, useRef, useState } from "react";
import ElevatedShadowDiv from "../../common/components/ElevatedShadowDiv";
import GreenButton from "../../common/components/GreenButon";
import { useRouter, useSearchParams } from "next/navigation";
import { EncryptStorage } from "encrypt-storage";

const arr1 = [];
for (var i = 1; i < 31; i++) {
  arr1.push(i);
}

var l;

async function authenticate(setter, setUser, setQuestions, topic, id) {
  const authRes = await (
    await fetch("api/getQuestions", {
      method: "POST",
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        topic,
        id,
      }),
    })
  ).json();
  if (authRes.user) {
    setUser(authRes.user);
    setQuestions(authRes.questions);
    return setter("authenticated");
  } else {
    return setter(authRes.error);
  }
}

function assignPositions() {
  var array = [1, 2, 3, 4];
  let currentIndex = 4;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const positions = arr1.map((i) => assignPositions());
const encrypter = new EncryptStorage(process.env.NEXT_PUBLIC_SECRET);

export default function page() {
  encrypter.setItem("lastExamPos", positions);
  const [auth, setAuth] = useState("authenticating");
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [answered, setAnswered] = useState(0);

  const [answers, setAnswers] = useState({});

  const isMounted = useRef(false);

  const searchParams = useSearchParams();

  const [topic, setTopic] = useState(searchParams.get("topic"));
  const [id, setId] = useState(searchParams.get("id"));
  const [index, setIndex] = useState(searchParams.get("index"));
  const [isTried, setIsTried] = useState(searchParams.get("written"));

  const [currentQuestions, setCurrentQuestion] = useState(0);

  const [started, setStarted] = useState(new Date());
  const [minutes, setMinutes] = useState(-1);
  const [seconds, setSeconds] = useState(-1);

  let { push } = useRouter();
  useEffect(() => {
    authenticate(setAuth, setUser, setQuestions, topic, Number(id));
    const preExam = encrypter.getItem("lastExam");
    if (preExam) {
      setAnswers(preExam.answers);
      setTopic(preExam.topic);
      setId(preExam.id);
      setIndex(preExam.index);
      setIsTried(preExam.isTried);
      setStarted(preExam.started);
    }
  }, []);

  useEffect(() => {
    if (questions == null) {
      return;
    }
    encrypter.setItem("lastExamAnswers", JSON.stringify(questions.questions));
  }, [questions]);

  useEffect(() => {
    if (isMounted.current) {
      encrypter.setItem(
        "lastExam",
        JSON.stringify({
          answers: answers,
          topic,
          id,
          index,
          isTried,
          started,
        })
      );
    } else {
      isMounted.current = true;
    }
  }, [JSON.stringify(answers), isMounted.current == false]);

  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        const { newMinutes, newSeconds, isTimeOver } = calculateTimeLeft(
          new Date(started)
        );
        setMinutes(newMinutes);
        setSeconds(newSeconds);
        if (isTimeOver) {
          clearInterval(interval);
          encrypter.setItem(
            "lastExamDuration",
            JSON.stringify({ minutes: 0, seconds: 0 })
          );
          push(`/testEnd`);
        }
      }, 1000);
    }
  }, [started]);

  return (
    <>
      {auth == "authenticated" ? (
        <div className="bg-[rgba(138,170,229,50)] min-h-screen pt-16">
          <div className="flex flex-col md:flex-row justify-between py-8 px-6 md:px-24">
            <div className="font-['Poppins'] text-black font-semibold text-[28px] md:text-[40px] capitalize">
              {topic}-Test {Number(index) + 1}
            </div>
            <div className="bg-[rgba(4,2,105,100)] w-32 md:w-48 text-white p-2 pl-6 md:pl-12 rounded-xl text-[24px] md:text-[32px] mt-4 md:mt-0">
              {minutes}:{seconds}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pb-0 px-6 md:px-24">
            <div className="w-full md:w-[60%]">
              <div className="bg-white font-['Poppins'] rounded-xl h-fit pb-16">
                <div className="flex justify-between">
                  <div className="text-[rgba(4,2,105,100)] font-semibold text-[20px] md:text-[22px] p-5 pt-6">
                    Question {currentQuestions + 1}
                  </div>
                  <div className="flex text-[rgba(4,2,105,100)] p-5 rounded-2xl h-5 items-center mt-6 mr-8 mb-4 border-[rgba(4,2,105,50)] shadow-xl">
                    1 Points
                  </div>
                </div>
                <div className="text-black text-[18px] md:text-[20px] p-5 h-fit">
                  {questions.questions[currentQuestions].question}
                </div>
                <div className="text-[rgba(189,189,189,70)] mt-2 ml-5">
                  OPTIONS:Select any of the following
                </div>
                <RadioButtonGroup
                  group={currentQuestions}
                  setAnswered={setAnswered}
                  answered={answered}
                  answers={answers}
                  setAnswers={setAnswers}
                >
                  {questions.questions[currentQuestions]}
                </RadioButtonGroup>
              </div>
              <div className="pt-14 pb-6 flex flex-col md:flex-row w-full md:w-108">
                <button
                  onClick={() => {
                    setCurrentQuestion(
                      currentQuestions == 0 ? 29 : currentQuestions - 1
                    );
                  }}
                  className="bg-[rgb(255,255,255)] rounded-[5px] p-3 pl-10 pr-10 mb-4 md:mb-0"
                >
                  <span className="text-black text-[16px] md:text-[18px] font-['Poppins']">
                    Previous
                  </span>
                </button>
                <button
                  onClick={() => {
                    setCurrentQuestion(
                      currentQuestions == 29 ? 0 : currentQuestions + 1
                    );
                  }}
                  className="bg-[rgba(4,2,105,100)] rounded-[5px] p-3 pl-10 pr-10 mb-4 md:mb-0 md:ml-16"
                >
                  <span className="text-white text-[16px] md:text-[18px] font-['Poppins']">
                    Save & Next
                  </span>
                </button>
                <button
                  onClick={() => {
                    encrypter.removeItem("lastExam");
                  }}
                  className="bg-[rgb(0,0,0)] rounded-[5px] p-3 pl-10 pr-10 md:ml-[28%]"
                >
                  <span className="text-white text-[16px] md:text-[18px] font-['Poppins']">
                    Review
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-white p-7 rounded-xl flex flex-col justify-center mt-8 mb-8 md:mt-0">
              <div className="font-['Poppins'] text-xl md:text-2xl font-semibold text-[rgba(4,2,105,100)] text-center">
                Question Bank
              </div>
              <div className="grid grid-cols-5 gap-0.5 mt-4 gap-y-5">
                {arr1.map((item) => {
                  return (
                    <button
                      key={item}
                      onClick={() => {
                        setCurrentQuestion(item - 1);
                      }}
                    >
                      {answers[`${item - 1}`] == undefined ? (
                        <ElevatedShadowDiv>{item}</ElevatedShadowDiv>
                      ) : answers[`${item - 1}`] == "unansweredx1000bhy" ? (
                        <GreenButton bg="#E44848">{item}</GreenButton>
                      ) : (
                        <GreenButton bg="#2FD790">{item}</GreenButton>
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="text-end text-[rgba(4,2,105,100)] text-[12px] mt-3 font-bold font-['Poppins']">
                {answered}/30 Answered
              </div>
              <div className="bg-[rgb(224,224,224)] w-full h-0.5 mt-6"></div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-around w-fit">
                  <div className="flex flex-row items-center font-['Poppins'] text-black mt-5">
                    <GreenButton bg="#2FD790">1</GreenButton>
                    <span className="ml-2 text-[14px]"> Answered</span>
                  </div>
                  <div className="flex flex-row items-center font-['Poppins'] text-black mt-5 ml-5">
                    <GreenButton bg="#E44848">1</GreenButton>
                    <span className="ml-2 text-[14px]">Not Answered</span>
                  </div>
                </div>
                <div className="flex w-fit ">
                  <div className="flex flex-row items-center font-['Poppins'] text-black mt-5">
                    <GreenButton bg="#2F4AD7" className="mr-8">
                      1
                    </GreenButton>
                    <span className="ml-2 mr-4 text-[14px]">Review</span>
                  </div>
                  <div className="flex flex-row items-center font-['Poppins'] text-black mt-5 ml-7">
                    <GreenButton bg="#F0EEED">1</GreenButton>
                    <span className="ml-2 text-[14px]">Not Visited</span>
                  </div>
                </div>
              </div>
              <button className="font-['Poppins'] text-[#153462] border border-sky-700 md:w-full mt-9 rounded-md shadow-md h-12">
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>{auth}</div>
      )}
    </>
  );
}

function RadioButtonGroup({
  children,
  group,
  setAnswered,
  answered,
  setAnswers,
  answers,
}) {
  const handleChange = (event) => {
    setAnswers({ ...answers, [group]: event.target.value });

    if (
      answers[`${group}`] == undefined ||
      answers[`${group}`] == "unansweredx1000bhy"
    ) {
      setAnswered(answered + 1);
    }
  };

  const handleClear = () => {
    setAnswers({ ...answers, [group]: "unansweredx1000bhy" });
    setAnswered(answered - 1);
  };
  return (
    <div className="flex flex-col">
      {children.wrong_answers.map((item, index) => (
        <CheckBox
          index={index}
          group={group}
          checked={answers[`${group}`] == item}
          handleChange={handleChange}
          handleClear={handleClear}
        >
          {item}
        </CheckBox>
      ))}
      <CheckBox
        index={3}
        group={group}
        handleChange={handleChange}
        checked={answers[`${group}`] == children.correct_answer}
        handleClear={handleClear}
      >
        {children.correct_answer}
      </CheckBox>
    </div>
  );
}

function CheckBox({
  children,
  index,
  group,
  handleChange,
  checked,
  handleClear,
}) {
  return (
    <div
      className="flex items-center mt-7"
      style={{ order: positions[group][index] }}
    >
      <input
        type="radio"
        className="accent-[rgba(4,2,105,100)] h-5 w-5 ml-5"
        name={`answers${group}`}
        checked={checked}
        onChange={handleChange}
        value={children}
        onClick={() => {
          if (checked) {
            handleClear();
          }
        }}
      />
      <div className="text-black ml-2">{children}</div>
    </div>
  );
}

function calculateTimeLeft(startedDate) {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - startedDate.getTime();
  const timeLeft = 1 * 10 * 1000 - timeDifference; // 30 minutes in milliseconds

  if (timeLeft <= 0) {
    return { newMinutes: 0, newSeconds: 0, isTimeOver: true };
  }

  const newMinutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const newSeconds = Math.floor((timeLeft / 1000) % 60);

  return { newMinutes, newSeconds, isTimeOver: false };
}
