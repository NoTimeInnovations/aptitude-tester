"use client";

import NavItem from "../../common/components/LoginPage/NavItem";
import TabHandler from "../../common/components/TabHandler";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserContext = createContext();
const QuestionsContext = createContext();
const ClassesContext = createContext();

const icons = ["Home", "Courses", "Tests", "Results", "Profile"];
async function authenticate(setter, setUser) {
  const authRes = await (
    await fetch("api/getUser", {
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
async function getQuestions(setter) {
  setter(
    await (
      await fetch("api/getQuestions", {
        method: "GET",
      })
    ).json()
  );
}
async function getClasses(setter) {
  setter(
    await (
      await fetch("api/getClasses", {
        method: "GET",
      })
    ).json()
  );
}
export default function page() {
  const [tab, setTab] = useState(0);
  const [auth, setAuth] = useState("authenticating");
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [classes, setClasses] = useState(null);
  let { push } = useRouter();
  useEffect(() => {
    authenticate(setAuth, setUser);
    getQuestions(setQuestions);
    getClasses(setClasses);
  }, []);

  return (
    <>
      {auth == "authenticated" ? (
        <>
          <div className="text-black sticky top-0 w-[20%] font-['Poppins'] bg-[rgba(185,203,239,255)] h-screen box-border">
            <div className="flex flex-col py-24 h-screen">
              <div className="text-3xl pb-24 w-full text-center">EasyLearn</div>
              <div className=" divide-y box-border divide-solid">
                <div></div>
                <div></div>
              </div>
              <div className="flex flex-row">
                <ul className="w-full">
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
              <div className="-mb-24 flex-1 flex flex-col justify-end">
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
          <div className="ml-[20%] -mt-[100vh]">
            <ClassesContext.Provider value={classes}>
              <QuestionsContext.Provider value={questions}>
                <UserContext.Provider value={user}>
                  <TabHandler tab={tab} />
                </UserContext.Provider>
              </QuestionsContext.Provider>
            </ClassesContext.Provider>
          </div>
        </>
      ) : (
        <div>{auth}</div>
      )}
    </>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
export function useQuestionsContext() {
  return useContext(QuestionsContext);
}
export function useClassesContext() {
  return useContext(ClassesContext);
}
