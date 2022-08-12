import { Routes, Route, Navigate, useNavigate} from "react-router-dom"
import { Cadastro } from "../Pages/Cadastro/Cadastro"
import { Doacao } from "../Pages/Doacao/Doacao"
import { Home } from "../Pages/Home/Home"
import { Login } from "../Pages/Login/Login"
import { Perfil } from "../Pages/Perfil/Perfil"
import { Pets } from "../Pages/Pets/Pets"


export function AppRoutes(){

    const user = localStorage.getItem("user")
    const logado = user!=null ? user.toString() === "true" : false
    const navigator = useNavigate()
    
    return(
        <Routes>

            <Route path="/home" element={<Home /> } />

            <Route path="*" element={<Home />} />

            <Route path="/cadastro" element={<Cadastro />} />    
            
            <Route path="/login" element={<Login />} />

            {logado?<Route path="/pets" element={<Pets />} /> : ''}

            {logado?<Route path="/doacao" element={<Doacao />} /> : ''}

            {logado?<Route path="/perfil" element={<Perfil />} /> : ''}

        </Routes>
    )
}