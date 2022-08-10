import { TemplateCompletoDesktop } from "./Desktop/TemplateCompletoDesktop";
import { Navbar } from "./Mobile/Navbar/Navbar";
import { TemplateCompleto } from "./TemplateCompleto";

export function TemplatePadrao1(){
    return(
        <>        
        <div className="mobile">
            <TemplateCompleto />
            <Navbar />
        </div>
        <div className="desktop">
            <TemplateCompletoDesktop />
            <div className="imagens-topo">
                <img className="logo2" src="src\Pages\Home\Header\img\Logo.png" alt="logo" />
                <Navbar />
            </div>
        </div>
        </>
    )
}