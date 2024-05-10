import React from "react";

export default function ElevatedShadowDiv({ children }) {
  return (
    <div className="w-fit h-fit bg-[#F0EEED] shadow-lg rounded-lg">
      <div
        className="w-full p-3 rounded-lg h-full"
        style={{ boxShadow: "inset 0 4px 4px 0 rgb(0 0 0 / 0.05)" }}
      >
        {children}
      </div>
    </div>
  );
}
