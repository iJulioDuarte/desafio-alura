import { MobileBodyTemplate } from "./Mobile/Body/MobileBodyTemplate";
import { MobileHeaderTemplate } from "./Mobile/Header/MobileHeaderTemplate";
import { Patas } from "./Mobile/Patas/Patas";
import "./TemplateCompleto.css"

export function TemplateCompleto(){
    return(
        <>
        <header>
            <MobileHeaderTemplate />
            <Patas />
        </header>

        <div className="corpo">
            <MobileBodyTemplate /> 
        </div>

        
           
            
        </>
    )
}