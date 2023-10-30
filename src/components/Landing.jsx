import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addcar from "./Addcar";
import Showcar from "./Showcar";
import { Navigation } from "./Navigation";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Navigation />
            <Routes>
                <Route path="/" element={<Addcar />} />
                <Route path="/showcar" element={<Showcar />} />
            </Routes>
        </BrowserRouter>
    );
}