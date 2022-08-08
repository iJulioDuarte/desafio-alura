import { MobileBodyTemplate } from "./Mobile/Body/MobileBodyTemplate";
import { MobileHeaderTemplate } from "./Mobile/Header/MobileHeaderTemplate";
import { Navbar } from "./Mobile/Navbar/Navbar";
import { Patas } from "./Mobile/Patas/Patas";
import "./TemplateCompleto.css"

export function TemplateCompleto(){
    return(
        <>
            <MobileHeaderTemplate />
            <Patas />
        
        <div className="corpo">
            <MobileBodyTemplate /> 
        </div>

        
           
            
        </>
    )
}