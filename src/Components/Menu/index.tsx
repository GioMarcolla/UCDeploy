import React, { FC } from "react";
import MenuItem from "./MenuItem";

type Props = {};

const Menu: FC<Props> = ({}: Props) => {
  return (
    <div>
      <MenuItem name="Home" path="/" />
      <MenuItem name="Profile" path="/profile" />
      <MenuItem name="Chats" path="/chats" />
      <MenuItem name="Map" path="/map" />
      <MenuItem name="LogIn" path="/login" />
      <MenuItem name="SignUp" path="/signup" />
    </div>
  );
};

export default Menu;
