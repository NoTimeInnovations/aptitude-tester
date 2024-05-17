import React from "react";
export default function NavItem(props) {
  return (
    <li className=" flex flex-col block justify-around">
      <a>{props.text}</a>
    </li>
  );
}
