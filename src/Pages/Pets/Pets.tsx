import { TemplateSimples } from "../../Templates/TemplateSimples"
import "./Pets.css"

export function Pets(){
    return(
    <>
    <TemplateSimples /> 
    <div className="pag-pets">
        
        <section className="apresentacao">
            <h3>Olá! Veja os amigos disponíveis para adoção!</h3>
        </section>

        <section className="cards-pets">
            <div className="card-pets">
                <img src="src\Pages\Pets\FotosPets\DungaImg.png" alt="foto do pet" className="pet-img" />
                <div className="pet-info">
                    <h2 className="pet-name">Dunga</h2>
                    <div>
                        
                        <h4>2 anos</h4>
                        <h4>Porte pequeno</h4>
                        <h4>Calmo e Educado</h4>  
                    </div>
                    <div className="pet-contact">    
                        <h5>Rio de Janeiro(RJ)</h5>
                        <div className="pet-footer-contact">

                        <img src="src/Templates/Imagens/IconeMensagem.png" />
                        <h6>Falar com responsável</h6>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    </div>
        
    </>
    )
}