import React from "react";
import Header from "./Header";

type Props = {
  // Define your props here (if any)
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
