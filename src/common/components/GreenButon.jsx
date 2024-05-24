import React from "react";

export default function GreenButton({ bg, children }) {
  return (
    <div
      className={"w-fit h-fit shadow-lg rounded-xl box-border"}
      style={{ background: bg }}
    >
      <div
        className="w-12 text-center p-3 rounded-xl h-full pr-2 pl-2 box-border"
        style={{ boxShadow: "inset 0 4px 4px 0 rgb(0 0 0 / 0.05)" }}
      >
        {children.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
    </div>
  );
}
