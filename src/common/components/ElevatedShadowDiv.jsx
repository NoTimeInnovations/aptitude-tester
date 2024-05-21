import React from "react";

export default function ElevatedShadowDiv({ children, large }) {
  return (
    <div
      className={
        "box-border " +
        (large ? "w-14" : "w-12") +
        " h-fit bg-[#F0EEED] shadow-lg rounded-xl"
      }
    >
      <div
        className={
          "box-border " +
          (large ? "w-14" : "w-12") +
          " text-center p-3 rounded-xl h-full"
        }
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
