import Image from "next/image";
import React from "react";

export default function NavItem(props) {
  return (
    <li
      onClick={props.onClick}
      className={`pl-1 md:pl-4 py-2 rounded-lg w-full flex flex-row block ${
        props.selected === "yes" && "bg-[#FFFFFF38]"
      }`}
    >
      <div className="flex items-start md:items-center">
        <Image
          src={`/media/img/${props.text}.svg`}
          className="w-4 h-5 md:w-12 md:h-6 lg:w-14 lg:h-7"
          width={props.text === "Home" ? 40 : 30}
          height={props.text === "Home" ? 15 : 10}
          alt={`${props.text} icon`}
        />
        <a className="ml-2 mt-1 text-[10px] md:text-xl">{props.text}</a>
      </div>
    </li>
  );
}
