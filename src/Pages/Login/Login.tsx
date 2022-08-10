import { TemplateCompletoDesktop } from "../../Templates/Desktop/TemplateCompletoDesktop"
import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { Navbar } from "../../Templates/Mobile/Navbar/Navbar"
import { TemplateCompleto } from "../../Templates/TemplateCompleto"
import { TemplatePadrao1 } from "../../Templates/TemplatePadrao1"
import { FormLogin } from "./FormLogin/FormLogin"
import "./Login.css"

export function Login(){
    return(
        <>
        <TemplatePadrao1 />
        
        <div className="login">
            

            <section className="apresentacao">
                <img className="logo" src="src\Templates\Imagens\LogoAzul.png" alt="Logo" />  
                <div className="texto-inicio">
                
                
                <h4>Já tem uma conta? Faça seu login:</h4>
                </div>
            </section>
            <section className="formulario">
                <FormLogin />
            </section>
        </div>

        <MobileFooterTemplate />
        
        </>

        
    )
}