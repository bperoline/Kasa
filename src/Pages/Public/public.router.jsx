import React from 'react'
import { Routes, Route } from "react-router-dom"

import { Accueil, Apropos, E404, Fichelogement } from '@/Pages/Public/index.jsx';
import Layout from '@/Layouts/Layout.jsx';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Accueil />} />
                <Route path="/Accueil" element={<Accueil />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Fichelogement/:id" element={<Fichelogement />} />
                <Route path="*" element={<E404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;