import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "../../routers/routers";
import ConstPopUp from "../UI/ConstPopUp/ConstPopUp";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import PopUp from "../UI/PopUp/PopUp";

export default function Main() {
    return (
        <>
            <ModalWindow />
            <Routes>
                {PublicRoutes.map((route) => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                ))}
            </Routes>
            <ConstPopUp />
            <PopUp text="Чтобы с Вами связаться нам необходимы Ваши контактнные данных. Нам подойдет Ваш номер телефона или адрес электронной почты." />
        </>
    );
}
