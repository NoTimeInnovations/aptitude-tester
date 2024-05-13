import React from "react";
import NavItem from "./LoginPage/NavItem";

export default function SideBar() {
  return (
    <div className="text-black w-[20%] font-['Poppins'] bg-[rgba(185,203,239,255)]">
      <div className="py-24 h-screen box-border">
        <div className="text-3xl pb-8 w-full text-center">H</div>
        <div className=" divide-y box-border divide-solid">
          <div></div>
          <div></div>
        </div>
        <br />
        <div className="flex flex-row">
          <ul className="w-full">
            <NavItem selected text="Hello" />
            <NavItem text="Courses" />
            <NavItem text="Tests" />
            <NavItem text="Results" />
            <NavItem text="Profile" />
          </ul>
        </div>
      </div>
    </div>
  );
}
