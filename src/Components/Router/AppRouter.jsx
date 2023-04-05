import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Views/HomePage";
import PokedexPage from "../../Views/PokedexPage";
import DetailPage from "../../Views/DetailPage";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="pokedex" element={<PokedexPage />} />
                <Route path="/:id" element={<DetailPage />} />
            </Routes>
        </>
    );
};

export default AppRouter;
