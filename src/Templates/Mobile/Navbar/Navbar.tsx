import "./Navbar.css"
export function Navbar(){
    return(
        <nav className="navbar-model">
            <ul>
                <li><img className="item1" src="src\Pages\Home\Header\img\Casa.png" /></li>
                <li><img className="item2" src="src\Pages\Home\Header\img\Mensagens.png" /></li>
                <li><img className="item3" src="src\Templates\Imagens\Usuario.png" /></li>
            </ul>
        </nav>
    )
}