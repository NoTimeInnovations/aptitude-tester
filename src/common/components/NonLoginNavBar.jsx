"use client";
import React from "react";
import NavButton from "./IndexPage/NavButton";
import NavItem from "./IndexPage/NavItem";
import { useRouter } from "next/navigation";

export default function NonLoginNavBar() {
  let { push } = useRouter();
  return (
    <div className="flex justify-center">
      <div className=" mx-5 bg-[rgba(210,222,246,255)] rounded py-2 text-black font-base flex flex-col md:flex-row w-full marker: md:w-[80.5%] justify-between border-[1px] gap-4 px-2 md:h-20">
        <ul className="flex  rtl:space-x-reverse  ml-6 gap-3 text-xs md:text-lg">
          <NavItem text="Home" onClick={() => push("/")} />
          <NavItem text="About" onClick={() => push("/#About")} />
          <NavItem text="Contact" onClick={() => push("/")} />
          <NavItem text="Courses" onClick={() => push("/#Courses")} />
          <NavItem text="Teams" onClick={() => push("/")} />
        </ul>
        <ul className="flex co rtl:space-x-reverse text-white justify-evenly md:mt-3 gap-4 md:mr-8 text-sm md:text-">
          <NavButton text="Login" onClick={() => push("/login")} />
          <NavButton text="Sign Up" onClick={() => push("/signup")} />
          {typeof window !== "undefined" && localStorage.getItem("token") && (
            <NavButton text="Home" onClick={() => push("/dashboard")} />
          )}
        </ul>
      </div>
    </div>
  );
}
