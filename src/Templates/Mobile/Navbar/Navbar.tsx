import { Navigate } from "react-router-dom"
import { Home } from "../../../Pages/Home/Home"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"

export function Navbar(){
    let navigate = useNavigate()

    return(
        <nav className="navbar-model">
            <ul>
                <li onClick={() =>{
                navigate("/home")
                }}><img className="item1"  src="src\Pages\Home\Header\img\Casa.png" /></li>
                <li><img className="item2" src="src\Pages\Home\Header\img\Mensagens.png" /></li>
            </ul>
        </nav>
    )
}