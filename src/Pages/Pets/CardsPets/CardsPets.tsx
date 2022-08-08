import "./CardsPets.css"
import { CardsPetsProps } from "./CardsPetsProps"
import { useNavigate } from "react-router-dom"
export function CardsPets({imagem, nome, idade, porte, personalidade, cidade}:CardsPetsProps){
    
    let navigator = useNavigate()
    return(
        <section className="cards-pets">
            <div className="card-pets" onClick={() =>{
                navigator("/doacao")
            }}>
                <img src={imagem} alt="foto do pet" className="pet-img" />
                <div className="pet-info">
                    <h3 className="pet-name">{nome}</h3>
                    <div className="pet-character">
                        
                        <h4>{idade}</h4>
                        <h4>Porte {porte}</h4>
                        <h4>{personalidade}</h4>  
                    </div>
                    <div className="pet-contact">    
                        <h5>{cidade}</h5>
                        <div className="pet-footer-contact">

                        <img src="src/Templates/Imagens/IconeMensagem.png" />
                        <h6>Falar com responsável</h6>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}