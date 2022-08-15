import { MobileFooterTemplate } from "../../Templates/Mobile/Footer/MobileFooterTemplate"
import { TemplatePadrao2 } from "../../Templates/TemplatePadrao2"
import { CardsPets } from "./CardsPets/CardsPets"
import { CardsPetsProps } from "./CardsPets/CardsPetsProps"
import "./Pets.css"

export function Pets(){

    const pets: CardsPetsProps[] = [
        {
            nome: "Dunga",
            idade: "2 anos",
            porte: "pequeno",
            personalidade: "Calmo",
            cidade: "Rio de Janeiro (RJ)",
            
        },
        {
            nome:"Felicia",
            idade:"3 meses",
            porte:"pequeno",
            personalidade:"Ativa e carinhosa",    
            cidade:"Nova Iguaçu (RJ)" ,
        },
        {
            nome:"Sirius",
            idade:"6 meses", 
            porte:"grande", 
            personalidade:"Ativo e educado", 
            cidade:"Duque de Caixias (RJ)",
        },
        {
            nome:"Fiona", 
            idade:"3 anos", 
            porte:"pequeno", 
            personalidade:"Calma e carinhosa", 
            cidade:"São Gonçalo (RJ)",
        },
        {
            nome:"Sid",
            idade:"8 meses", 
            porte:"médio/grande", 
            personalidade:"Bricalhão e amável", 
            cidade:"Rio de Janeiro (RJ)",
        },
        {    
            nome:"Yoda", 
            idade:"1 ano", 
            porte:"médio", 
            personalidade:"Ativo e carinhoso", 
            cidade:"Nova Iguaçu (RJ)",
        },
        {
            nome:"Lua", 
            idade:"6 meses", 
            porte:"médio", 
            personalidade:"Ativa e carinhosa", 
            cidade:"Duque de Caixias (RJ)",
        },
        {
            nome:"Amora", 
            idade:"45 dias", 
            porte:"grande", 
            personalidade:"Calma e carinhosa", 
            cidade:"São Gonçalo (RJ)",
        },
        {
            nome:"Zelda", 
            idade:"5 meses", 
            porte:"médio", 
            personalidade:"Ativa e amável", 
            cidade:"Rio de Janeiro (RJ)", 
        }
    ]

    return(
    <div className="pets">
    <TemplatePadrao2 />
    <div className="pag-pets">
        
        <section className="apresentacao">
            <h3>Olá! Veja os amigos disponíveis para adoção!</h3>
        </section>
        <div className="cards">
            <div className="card">
                {pets.map(x => (
                    <CardsPets
                        key={x.nome}
                        {...x}
                        imagem={`src/Pages/Pets/FotosPets/${x.nome}Img.png`}
                    />
                ))}
            </div>
            
        </div>
     
    </div>
    <footer>
        <MobileFooterTemplate />
    </footer>     
    </div>
    )
}