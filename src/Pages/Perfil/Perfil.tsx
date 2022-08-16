
import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { TemplatePadrao2 } from "../../Templates/TemplatePadrao2"
import { FormPerfil } from "./FormPerfil/FormPerfil"
import "./Perfil.css"

export function Perfil(){
    return(
        <>
        <TemplatePadrao2 />
            <div className="pag-perfil">
            <section className="texto-perfil">
                    <h4>
                        Esse é o perfil que aparece para os responsáveis ou ONGs que recebem sua mensagem
                    </h4>
                </section>
                    <FormPerfil />
            </div>
            <MobileFooterTemplate />

            
        </>
    )
}