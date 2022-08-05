import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { TemplateSimples } from "../../Templates/TemplateSimples"
import { CardsPets } from "./CardsPets/CardsPets"
import "./Pets.css"

export function Pets(){
    return(
    <>
    <TemplateSimples /> 
    <div className="pag-pets">
        
        <section className="apresentacao">
            <h3>Olá! Veja os amigos disponíveis para adoção!</h3>
        </section>
        <div className="cards">
            <div className="card">
                <CardsPets imagem="src\Pages\Pets\FotosPets\DungaImg.png" nome="Dunga" idade="2 anos" porte="pequeno" personalidade="Calmo e educado" cidade="Rio de Janeiro (RJ)" />

                <CardsPets imagem="src\Pages\Pets\FotosPets\FeliciaImg.png" nome="Felicia" idade="3 meses" porte="pequeno" personalidade="Ativa e carinhosa" cidade="Nova Iguaçu (RJ)" />

                <CardsPets imagem="src\Pages\Pets\FotosPets\SiriusImg.png" nome="Sirius" idade="6 meses" porte="grande" personalidade="Ativo e educado" cidade="Duque de Caixias (RJ)" />

                <CardsPets imagem="src\Pages\Pets\FotosPets\FionaImg.png" nome="Fiona" idade="3 anos" porte="pequeno" personalidade="Calma e carinhosa" cidade="São Gonçalo (RJ)" />

                <CardsPets imagem="src\Pages\Pets\FotosPets\SidImg.png" nome="Sid" idade="8 meses" porte="médio/grande" personalidade="Bricalhão e amável" cidade="Rio de Janeiro (RJ)" />

                <CardsPets imagem="src\Pages\Pets\FotosPets\YodaImg.png" nome="Yoda" idade="1 ano" porte="médio" personalidade="Ativo e carinhoso" cidade="Nova Iguaçu (RJ)" />

                <CardsPets imagem="src\Pages\Pets\FotosPets\LuaImg.png" nome="Lua" idade="6 meses" porte="médio" personalidade="Ativa e carinhosa" cidade="Duque de Caixias (RJ)" />

                <CardsPets imagem="src\Pages\Pets\FotosPets\AmoraImg.png" nome="Amora" idade="45 dias" porte="grande" personalidade="Calma e carinhosa" cidade="São Gonçalo (RJ)" />

                <CardsPets imagem="src\Pages\Pets\FotosPets\ZeldaImg.png" nome="Zelda" idade="5 meses" porte="médio" personalidade="Ativa e amável" cidade="Rio de Janeiro (RJ)" />
            </div>
            
        </div>
     
    </div>
    <footer>
        <MobileFooterTemplate />
    </footer>     
    </>
    )
}