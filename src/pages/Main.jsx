import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavbarComp } from "../components";
import HomePage from "./Home/HomePage";
import LayananPage from "./layanan/LayananPage";

const Main = () => {
    return (
        <>
            <NavbarComp />
            <div className="pt-14 lg:pt-[70px]">

                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={`*`} element={<LayananPage />} />
                </Routes>

            </div>
        </>
    );
};

export default Main;
