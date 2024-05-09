import React from "react";

export default function ExploreButton(props) {
  return (
    <button
      type="button"
      className="basis-1/2 grow-0 max-w-36 font-thin text-sm bg-[#040269FF] rounded-lg px-2 py-4"
    >
      {props.text}
    </button>
  );
}
