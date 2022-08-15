import "./Navbar.css"
import { useNavigate } from "react-router-dom"

type NavbarProps ={
    showProfile?: boolean
}

export function Navbar({ showProfile }: NavbarProps){
    let navigate = useNavigate()

    return(
        <nav className="navbar-model">
            <ul>
                <li onClick={() =>{
                    navigate("/")
                }}>
                    <img className="item1"  src="src\Pages\Home\Header\img\Casa.png" />
                </li>

                <li onClick={()=>{
                    alert("Função disponível em breve")
                }}>
                    <img className="item2" src="src\Pages\Home\Header\img\Mensagens.png" />
                </li>

                {showProfile &&
                <li onClick={() => navigate("/perfil")}>
                    <img className="item3" src="src\Templates\Imagens\Usuario.png" />
                </li>
                }
            </ul>
        </nav>
    )
}