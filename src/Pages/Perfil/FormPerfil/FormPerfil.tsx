import "./FormPerfil.css"

import "../../Doacao/FormDoacao/FormDoacao.css"

export function FormPerfil(){
    return(

        <div className="form-perfil">
            <h2>Perfil</h2>
            <div>
            <form>
                <div className="form-component">
                    <label>Foto</label> 
                </div>
                <div className="foto-component">
                    <img className="perfil-picture" src="https://github.com/iJulioDuarte.png" /> 
                    <h6>Clique na foto para editar</h6> 
                </div>

                <div className="form-component">
                    <label>Nome:</label>
                    <input type="text" name="nome" placeholder="Digite seu nome completo" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Telefone:</label>
                    <input type="tel" name="telefone" placeholder="Insira seu telefone e/ou whatsapp" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Cidade:</label>
                    <input type="text" name="cidade" placeholder="Informe em qual cidade você mora" className="campo-texto"></input>
                </div>

                <div className="form-component">
                    <label>Sobre:</label>
                    <textarea maxLength={255} name="telefone" placeholder="Escreva uma pequena descrição sobre você" className="campo-texto"></textarea>
                </div>
            </form>
            </div>   
            
            <button className="button-doacao">
                Enviar
            </button>
        </div>
    )
}