import { TemplateSimplesDesktop } from "./Desktop/TemplateSimplesDesktop";
import { Navbar } from "./Mobile/Navbar/Navbar";
import { TemplateSimples } from "./TemplateSimples";

export function TemplatePadrao2(){
    return(
        <>        
        <div className="mobile">
            <TemplateSimples />
            <Navbar showProfile />
        </div>
        <div className="desktop">
            <TemplateSimplesDesktop />
            <div className="imagens-topo">
                <img className="logo2" src="src\Pages\Home\Header\img\Logo.png" alt="logo" />
                <Navbar showProfile />
            </div>
        </div>
        </>
    )
}