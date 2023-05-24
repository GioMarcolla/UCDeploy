// import { NavBar } from "Components";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const WebLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div>
      {/* <NavBar /> */}
      {children}
    </div>
  );
};

export default WebLayout;
