import { Header } from "../../Home/Header/Header"
import "./HeaderCadastro.css"

export function HeaderCadastro(){
    return(
        <header>
            <div className="backgroundHeader">
                <div className="imagens-topo">
                    <img src="src\Home\Header\img\Casa.png" />
                    <img src="src\Home\Header\img\Mensagens.png" />
                </div>
            </div>
        </header>
    )
}