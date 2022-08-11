import { Routes, Route, Navigate, RouteMatch } from "react-router-dom"
import { Cadastro } from "../Pages/Cadastro/Cadastro"
import { Doacao } from "../Pages/Doacao/Doacao"
import { Home } from "../Pages/Home/Home"
import { Login } from "../Pages/Login/Login"
import { Perfil } from "../Pages/Perfil/Perfil"
import { Pets } from "../Pages/Pets/Pets"

import { useState, useEffect } from "react"

export function AppRoutes(){

    return(
        <Routes>

            <Route key={"home"} path="/home" element={<Home /> } />

            <Route path="*" element={<Navigate to="/home" />} />

            <Route path="/cadastro" element={<Cadastro />} />    
            
            <Route path="/login" element={<Login />} />

            <Route path="/pets" element={<Pets />} />

            <Route path="/doacao" element={<Doacao />} />

            <Route path="/perfil" element={<Perfil />} />

        </Routes>
    )
}