"use client";

import NavItem from "../../common/components/LoginPage/NavItem";
import TabHandler from "../../common/components/TabHandler";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserContext = createContext();

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
export default function page() {
  const [tab, setTab] = useState(0);
  const [auth, setAuth] = useState("authenticating");
  const [user, setUser] = useState(null);
  let { push } = useRouter();
  useEffect(() => {
    authenticate(setAuth, setUser);
  }, []);

  return (
    <>
      {auth == "authenticated" ? (
        <>
          <div className="text-black fixed top-0 w-[25%] md:w-[20%] font-['Poppins'] bg-[rgba(185,203,239,255)] h-[100lvh]  box-border flex flex-row">
            <div className="flex flex-col py-24 h-screen w-full">
              <div className=" text-[16px] md:text-3xl pb-24 w-full text-center">
                EasyLearn
              </div>
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
              <div className=" md:-mb-24 -mb-10 flex-1 flex flex-col justify-end">
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
          <div className="ml-[20%]  h-screen overflow-y-scroll">
            <UserContext.Provider value={user}>
              <TabHandler tab={tab} />
            </UserContext.Provider>
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
