import React, { Component } from "react";
import { Container } from "next/app";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => (
    <Container>
        {/* <Header /> */}
        <Menu />
        {children}
    </Container>
);
export default Layout;
