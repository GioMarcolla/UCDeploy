import React from "react";
import NavItem from "./NavItem";

type Props = {};

const NavBar = ({}: Props) => {
  return (
    <div>
      <NavItem name="Home" path="/" />
      <NavItem name="Profile" path="/profile" />
      <NavItem name="Chat" path="/chat" />
      <NavItem name="Map" path="/map" />
    </div>
  );
};

export default NavBar;
