import { Navbar } from "../../../Templates/Mobile/Navbar/Navbar"
import "./header.css"

export function Header(){
    return(
        <header>
            <div className="backgroundHeader">
                <div className="imagens-topo">
                    <Navbar />
                </div>
                <div className="logo2">
                    <img src="src\Pages\Home\Header\img\Logo.png" alt="logo" />
                </div>
            </div>
        </header>
        
    )
}
