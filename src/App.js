import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { requestCatalog } from "./store/catalogSlice";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCatalog());
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Body />
                <Footer />
            </div>
        </BrowserRouter>
    );
}
