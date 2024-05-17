"use client";

import NavItem from "../../common/components/LoginPage/NavItem";
import TabHandler from "../../common/components/TabHandler";
import React, { useState } from "react";

const icons = ["Home", "Courses", "Tests", "Results", "Profile"];

export default function page() {
  const [tab, setTab] = useState(0);
  return (
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
              onClick={() => console.log("Login out")}
            />
          </div>
        </div>
      </div>
      <div className="ml-[20%] -mt-[100vh]">
        <TabHandler tab={tab} />
      </div>
    </>
  );
}
