import React from "react";
import NavButton from "./IndexPage/NavButton";
import NavItem from "./IndexPage/NavItem";

export default function NonLoginNavBar() {
  return (
    <div className=" mx-5 bg-[rgba(210,222,246,255)] rounded py-2 text-black font-base flex flex-col md:flex-row   justify-between border-[1px] gap-3">
      <ul className="flex  rtl:space-x-reverse  ml-6 gap-4">
        <NavItem text="Home" />
        <NavItem text="About" />
        <NavItem text="Contact" />
        <NavItem text="Courses" />
        <NavItem text="Teams" />
      </ul>
      <ul className="flex co rtl:space-x-reverse text-white justify-evenly gap-4 mr-8">
        <NavButton text="Login" />
        <NavButton text="Sign Up" />
      </ul>
    </div>
  );
}
