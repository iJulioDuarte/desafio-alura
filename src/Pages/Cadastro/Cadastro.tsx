import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { TemplatePadrao1 } from "../../Templates/TemplatePadrao1"
import "./Cadastro.css"
import { FormCadastro } from "./FormCadastro/FormCadastro"

export function Cadastro(){
    return(
        <>
        
        <TemplatePadrao1 />

        <div className="cadastro">
            
            
            <section className="apresentacao">
                <img className="logo" src="src\Templates\Imagens\LogoAzul.png" alt="Logo" />  
                <div className="texto-inicio">
                
                
                <h4>Ainda não tem cadastro?</h4>

                <h4>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</h4>
                </div>
            </section>
            <section className="formulario">
                <FormCadastro />
            </section>

              
            
        </div>
            
        <MobileFooterTemplate />     
        </>
       
    )   
}