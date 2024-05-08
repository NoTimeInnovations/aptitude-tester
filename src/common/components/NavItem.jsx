import React from "react";

export default function NavItem(props) {
  return (
    <li className="pl-8">
      <a>{props.text}</a>
    </li>
  );
}
