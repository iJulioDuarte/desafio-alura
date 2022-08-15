import { Navbar } from "../../../Templates/Mobile/Navbar/Navbar"
import "./header.css"

export function Header(){
    return(

            <div className="background-header">
                <div className="imagens-topo">
                    <img className="logo2" src="src\Pages\Home\Header\img\Logo.png" alt="logo" />
                    <Navbar />
                </div>
                
            </div>
        
    )
}
