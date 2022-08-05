
import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { TemplateSimples } from "../../Templates/TemplateSimples"
import { FormPerfil } from "./FormPerfil/FormPerfil"
import "./Perfil.css"

export function Perfil(){
    return(
        <>
        <TemplateSimples />
            <div className="pag-perfil">
            <section className="texto-perfil">
                    <h4>
                        Esse é o perfil que aparece para os responsáveis ou ONGs que recebem sua mensagem
                    </h4>
                </section>
                <section className="FormDoacao">
                    <FormPerfil />
                </section>
            </div>
            <MobileFooterTemplate />

            
        </>
    )
}