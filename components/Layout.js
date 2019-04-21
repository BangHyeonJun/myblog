import React, { Component } from "react";
import { Container } from "next/app";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => (
    <Container>
        <Header />
        <Menu />
        <div>{children}</div>
    </Container>
);
export default Layout;

// import Header from "./Header";

// const Layout = ({ children }) => (
//     <div>
//         <Header />
//         {children}
//     </div>
// );

// export default Layout;
