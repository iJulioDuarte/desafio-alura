import "./FormDoacao.css"

export function FormDoacao(){
    return(
        <>
        
        <div className="form-doacao">
            <div>
            <form>
                <div className="form-component">
                    <label>Nome:</label>
                    <input type="text" name="nome" placeholder="Digite seu nome completo" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Telefone:</label>
                    <input type="tel" name="telefone" placeholder="Insira seu telefone e/ou whatsapp" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Nome do animal:</label>
                    <input type="text" name="nomeAnimal" placeholder="Por qual animal se interessou?" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Mensagem</label>
                    <textarea rows={16} cols={40} maxLength={480} name="telefone" placeholder="Escreva sua mensagem" className="campo-texto"></textarea>
                </div>
            </form>
            </div>   
            
            <button className="button-doacao">
                Enviar
            </button>
        </div>
        </>

    )
}