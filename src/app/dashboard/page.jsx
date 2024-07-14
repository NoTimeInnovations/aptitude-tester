"use client";

import NavItem from "../../common/components/LoginPage/NavItem";
import TabHandler from "../../common/components/TabHandler";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { scrollToTop } from "../../util/common";
import {
  UserContext,
  SetUserContext,
  QuestionSetContext,
  ClassesContext,
  SetTabContext,
} from "../../util/contexts";

import { BASE_URL } from "../../util/common";

const icons = ["Home", "Courses", "Tests", "Results", "Profile"];
async function authenticate(setter, setUser) {
  const authRes = await (
    await fetch(`${BASE_URL}api/getUser`, {
      method: "POST",
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
  ).json();
  if (authRes.user) {
    setUser(authRes.user);
    return setter("authenticated");
  } else {
    return setter(authRes.error);
  }
}
async function getQuestionSet(setter) {
  setter(
    await (
      await fetch(`${BASE_URL}api/getQuestionSetDetails`, {
        method: "GET",
      })
    ).json()
  );
}
async function getClasses(setter) {
  setter(
    await (
      await fetch(`${BASE_URL}api/getClasses`, {
        method: "GET",
      })
    ).json()
  );
}
export default function page() {
  const [tab, setTabRaw] = useState(0);
  const setTab = (x) => {
    scrollToTop();
    setTabRaw(x);
  };
  const [auth, setAuth] = useState("authenticating");
  const [user, setUser] = useState(null);
  const [classes, setClasses] = useState(null);
  const [questionSet, setQuestionSet] = useState(null);
  let { push } = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      authenticate(setAuth, setUser);
      getQuestionSet(setQuestionSet);
      getClasses(setClasses);

      const encrypt = async () => {
        const { EncryptStorage } = await import("encrypt-storage");
        const encrypter = new EncryptStorage(process.env.NEXT_PUBLIC_SECRET);
        encrypter.removeItem("lastExam");
        encrypter.removeItem("lastExamAnswers");
        encrypter.removeItem("lastExamDuration");
        encrypter.removeItem("lastExamResults");
        encrypter.removeItem("lastExamQuestions");
        encrypter.removeItem("lastExamPos");
      };
      encrypt();
    }
  }, []);

  return (
    <>
      {auth == "authenticated" ? (
        <>
          <div
            className="text-black md:pb-0 pb-10 fixed top-0 w-screen h-[10svh] md:w-[20%] font-['Poppins'] bg-[rgba(185,203,239,255)] md:h-screen  box-border flex md:flex-row flex-col"
            style={{ zIndex: 1500 }}
          >
            <div className="flex flex-col md:py-24 py-2 px-2 md:px-0 h-fit md:h-screen w-full">
              <div className=" text-[16px] md:text-3xl md:pb-24 pb-0 md:flex-col flex justify-center md:justify-around items-center w-full text-center flex-row">
                <div className="place-self-center">EasyLearn</div>
                <div className="absolute right-3 py-2 md:collapse">
                  <NavItem
                    selected="No"
                    text="Logout"
                    onClick={() => {
                      if (confirm("Do you really want to logout ?")) {
                        localStorage.removeItem("token");
                        push("/");
                      }
                    }}
                  />
                </div>
              </div>
              <div className=" divide-y box-border divide-solid">
                <div></div>
                <div></div>
              </div>
              <div className="flex md:flex-row flex-col">
                <ul className="md:w-full h-full md:h-auto flex md:flex-col flex-row">
                  {icons.map((icon, index) => (
                    <NavItem
                      selected={index == tab ? "yes" : "no"}
                      text={icon}
                      onClick={() => {
                        setTab(index);
                      }}
                    />
                  ))}
                </ul>
              </div>
              <div className=" md:-mb-24 flex-1 flex flex-col justify-end collapse md:visible">
                <NavItem
                  selected="No"
                  text="Logout"
                  onClick={() => {
                    if (confirm("Do you really want to logout ?")) {
                      localStorage.removeItem("token");
                      push("/");
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="md:ml-[20%] mt-[10%] md:mt-0  h-screen z-0">
            <SetTabContext.Provider value={setTab}>
              <QuestionSetContext.Provider value={questionSet}>
                <ClassesContext.Provider value={classes}>
                  <SetUserContext.Provider value={setUser}>
                    <UserContext.Provider value={user}>
                      <TabHandler tab={tab} />
                    </UserContext.Provider>
                  </SetUserContext.Provider>
                </ClassesContext.Provider>
              </QuestionSetContext.Provider>
            </SetTabContext.Provider>
          </div>
        </>
      ) : (
        <div>{auth}</div>
      )}
    </>
  );
}
