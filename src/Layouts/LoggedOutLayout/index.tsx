import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LoggedOutLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div>
      {children}
      {/* Footer TODO */}
    </div>
  );
};

export default LoggedOutLayout;
