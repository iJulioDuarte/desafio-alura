import { MobileHeaderTemplate } from "../Mobile/Header/MobileHeaderTemplate";
import { Patas } from "../Mobile/Patas/Patas";
import "./TemplateCompletoDesktop.css"
export function TemplateCompletoDesktop(){
    return(
        <>
            <MobileHeaderTemplate />
            
            <Patas />
        
        <div className="corpo">
            <div className="body-template-desktop">
            <img src="src/imgFundo/Forma2.png" />
            </div>

        </div>
           
            
        </>
    )
}