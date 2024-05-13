import Image from "next/image";
import React from "react";

export default function NavItem(props) {
  return (
    <li
      onClick={props.onClick}
      className={`pl-4 py-2 rounded-lg w-full flex flex-row block ${
        props.selected == "yes" && `bg-[#FFFFFF38]`
      }`}
    >
      <Image src={`/media/img/${props.text}.svg`} width={30} height={10} />
      <a
        className={` ml-2 flex flex-col justify-${
          props.text == "Home" ? `end` : `around`
        }`}
      >
        {props.text}
      </a>
    </li>
  );
}
