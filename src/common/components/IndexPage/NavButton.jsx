import React from "react";
import { redirect } from "next/navigation";

export default function NavButton(props) {
  return (
    <li>
      <button
        type="button"
        className="px-5 py-2 bg-[#36347794] rounded-2xl min-w-24 font-Poppins"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </li>
  );
}
