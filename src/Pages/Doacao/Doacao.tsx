import { FormDoacao } from "./FormDoacao/FormDoacao"
import "./Doacao.css"
import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { TemplatePadrao2 } from "../../Templates/TemplatePadrao2"

export function Doacao(){
    return(
        <>
            <TemplatePadrao2 />
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