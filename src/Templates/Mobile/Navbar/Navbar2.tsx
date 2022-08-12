import "./Navbar.css"
import { useNavigate } from "react-router-dom"
export function Navbar2(){
    let navigate = useNavigate()

    return(
        <nav className="navbar-model">
            <ul>
                <li onClick={() =>{
                navigate("/")
                }}><img className="item1"  src="src\Pages\Home\Header\img\Casa.png" onClick={() =>{
                    localStorage.removeItem("user")
                }}/></li>
                <li><img className="item2" src="src\Pages\Home\Header\img\Mensagens.png" /></li>
                <li onClick={() =>{
                navigate("/perfil")
                }}><img className="item3" src="src\Templates\Imagens\Usuario.png" /></li>
            </ul>
        </nav>
    )
}