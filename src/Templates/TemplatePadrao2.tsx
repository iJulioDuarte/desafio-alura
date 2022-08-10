import { TemplateCompletoDesktop } from "./Desktop/TemplateCompletoDesktop";
import { TemplateSimplesDesktop } from "./Desktop/TemplateSimplesDesktop";
import { Navbar2 } from "./Mobile/Navbar/Navbar2";
import { TemplateCompleto } from "./TemplateCompleto";
import { TemplateSimples } from "./TemplateSimples";

export function TemplatePadrao2(){
    return(
        <>        
        <div className="mobile">
            <TemplateSimples />
            <Navbar2 />
        </div>
        <div className="desktop">
            <TemplateSimplesDesktop />
            <div className="imagens-topo">
                <img className="logo2" src="src\Pages\Home\Header\img\Logo.png" alt="logo" />
                <Navbar2 />
            </div>
        </div>
        </>
    )
}