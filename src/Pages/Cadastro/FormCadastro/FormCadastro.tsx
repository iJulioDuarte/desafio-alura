import "./FormCadastro.css"
import "../../Home/Body/Body.css"
import { useState } from "react"


export function FormCadastro(){

const [exibe, setExibe] = useState(false)

    return(
    <>
    <div className="formulario-cadastro">
        <form>
            
            <div className="form-component">
                <label>Email:</label>
                <input type="text" name="email" placeholder="Digite seu melhor email" className="campo-texto"></input>
            </div>

            <div className="form-component">
                <label>Nome:</label>
                <input type="text" name="nome" placeholder="Digite seu nome" className="campo-texto"></input>
            </div>
            
            <div className="form-component">
                <label>Senha:</label>
                <div className="campo-senha">
                    <input type={exibe ? "text" : "password"} name="senha" placeholder="Crie uma senha" className="campo-texto" />
                    <img  className="eyeSvg" onClick={() =>{
                
                        if (exibe === true){
                            return(
                                setExibe(false)
                            )
                        }
                        else{
                            return(
                                setExibe(true)
                            )
                        }
                
                    }} width="1rem"  src="src/Templates/Imagens/Vector.png" alt="Imagem olho"/>
                </div>
            </div>
            
            <div className="form-component">
                <label>Confirma:</label>
                <div className="campo-senha">
                    <input type={exibe ? "text" : "password"} name="senha" placeholder="Repita a senha criada acima" className="campo-texto" />
                </div>
            </div>
            <div className="form-component">
              <button className="btn-cadastro">Cadastrar</button>  
            </div>
            
        </form>

        
    </div>
    
    </>
     
    )
}