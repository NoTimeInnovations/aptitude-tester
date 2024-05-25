import React from "react";

export default function Webapp({ onClick, show }) {
  return (
    show && (
      <>
        <div className="bg-[rgb(254,254,254)] font-['Poppins'] text-md  text-black w-60 text-center p-4 rounded-md opacity-90 border border-white flex flex-col shadow-lg">
          <button onClick={onClick}>Download the app</button>
        </div>
      </>
    )
  );
}
