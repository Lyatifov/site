import React from "react";
import cl from "./Header.module.css";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import NavBar from "./NavBar/NavBar";
import Hat from "./MobileVersion/Hat";
import MiniNavBar from "./MobileVersion/MiniNavBar/MiniNavBar";

export default function Header() {
    return (
        <header className={cl.header}>
            <Hat />
            <MiniNavBar />
            <HeaderInfo />
            <NavBar />
        </header>
    );
}
