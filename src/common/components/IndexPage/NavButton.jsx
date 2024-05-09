import React from "react";

export default function NavButton(props) {
  return (
    <li>
      <button
        type="button"
        className="px-5 py-2 bg-[#36347794] rounded-2xl min-w-24 font-Poppins"
      >
        {props.text}
      </button>
    </li>
  );
}
