import { FormDoacao } from "./FormDoacao/FormDoacao"
import { TemplateSimples } from "../../Templates/TemplateSimples"
import "./Doacao.css"
import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { Navbar2 } from "../../Templates/Mobile/Navbar/Navbar2"

export function Doacao(){
    return(
        <>
            <TemplateSimples />
            <Navbar2 />
            <div className="pag-doacao">
                <section className="texto-doacao">
                    <h4>
                        Envie uma mensagem para a pessoa ou instituição que está cuidando deste animal:
                    </h4>
                </section>
                <section className="FormDoacao">
                    <FormDoacao />
                </section>
            </div>

            <MobileFooterTemplate />
        </>
    )
}