import cl from "./PopUp.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function PopUp({ text }) {
    const active = useSelector((state) => state.states.isActivePopUp);

    return (
        <div
            className={
                active ? cl.__popUp + " " + cl.__popUp_active : cl.__popUp
            }
        >
            <div className={cl.__text}>{text}</div>
        </div>
    );
}
