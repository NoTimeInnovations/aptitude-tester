import React from "react";
import Image from "next/image";

export default function StatsItem(props) {
  return (
    <div className="grid grid-cols-2 h-fit">
      <div className="w-[fit] md:w-max">{props.text}</div>
      <div className="text-sm md:text-lg flex flex-row items-center gap-1 font-light place-self-end">
        <Image src="/media/img/increaseGraph.svg" width={20} height={10} />
        {props.value}
      </div>
    </div>
  );
}
