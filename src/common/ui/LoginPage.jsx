import React from "react";
import NavItem from "../components/NavItem";

export default function LoginPage() {
  return (
    <>
      <div className="bg-[rgba(185,203,239,255)] w-screen h-[50vh] pt-10">
        <div className=" mx-5 bg-[rgba(210,222,246,255)] rounded py-5 text-black font-bold">
          <ul className="flex flex-col rtl:space-x-reverse md:flex-row">
            <NavItem text="Home" />
            <NavItem text="About" />
            <NavItem text="Contact" />
            <NavItem text="Courses" />
            <NavItem text="Teams" />
          </ul>
        </div>
      </div>
    </>
  );
}
