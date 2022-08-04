import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { TemplateCompleto } from "../../Templates/TemplateCompleto"
import { FormLogin } from "./FormLogin/FormLogin"
import "./Login.css"

export function Login(){
    return(
        <>
        <TemplateCompleto />
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