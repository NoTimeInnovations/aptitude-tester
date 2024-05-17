import React from "react";

export default function GreenButton(props) {
  return (
    <div
      className={"w-fit h-fit shadow-lg rounded-xl"}
      style={{ background: props.bg }}
    >
      <div
        className="w-full p-3 rounded-xl h-full"
        style={{ boxShadow: "inset 0 4px 4px 0 rgb(0 0 0 / 0.05)" }}
      >
        {props.children}
      </div>
    </div>
  );
}
