import { Menu, TopBar } from "Components";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <TopBar/>
      {children}
      <Menu />
    </div>
  );
};

export default MainLayout;
