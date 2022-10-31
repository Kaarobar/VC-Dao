import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
  bottom?: boolean
}

const Layout: FC<Props> = ({ children, bottom }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer bottom={bottom} />
    </div>
  );
};

export default Layout;
