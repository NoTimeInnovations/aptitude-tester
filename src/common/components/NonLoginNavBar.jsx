import React from "react";
import NavButton from "./IndexPage/NavButton";
import NavItem from "./IndexPage/NavItem";

export default function NonLoginNavBar() {
  return (
    <div className=" mx-5 bg-[rgba(210,222,246,255)] rounded py-2 text-black font-bold flex-row flex  justify-between">
      <ul className="flex flex-col rtl:space-x-reverse md:flex-row ml-6">
        <NavItem text="Home" />
        <NavItem text="About" />
        <NavItem text="Contact" />
        <NavItem text="Courses" />
        <NavItem text="Teams" />
      </ul>
      <ul className="flex flex-col rtl:space-x-reverse md:flex-row text-white justify-evenly gap-4 mr-8">
        <NavButton text="Login" />
        <NavButton text="Sign Up" />
      </ul>
    </div>
  );
}
