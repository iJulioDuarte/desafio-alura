import "./FormDoacao.css"
import { useNavigate } from "react-router-dom"
export function FormDoacao(){
    const navigate = useNavigate()
    return(
        <>
        
        <div className="form-doacao">
            <div>
            <form onSubmit={()=>{
                alert("Mensagem enviada com sucesso! Em breve você será contatado.")
                navigate("/pets")
            }}>
                <div className="form-component">
                    <label>Nome:</label>
                    <input required type="text" name="nome" placeholder="Digite seu nome completo" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Telefone:</label>
                    <input required type="tel" name="telefone" placeholder="Insira seu telefone e/ou whatsapp" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Nome do animal:</label>
                    <input required type="text" name="nomeAnimal" placeholder="Por qual animal se interessou?" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Mensagem</label>
                    <textarea rows={16} cols={40} maxLength={480} name="telefone" placeholder="Escreva sua mensagem" className="campo-texto"></textarea>
                </div>
            
            <button className="button-doacao">
                Enviar
            </button>
            </form>
            </div>   
            
            
        </div>
        </>

    )
}