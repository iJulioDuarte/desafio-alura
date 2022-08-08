import "../../Cadastro/FormCadastro/FormCadastro.css"
import "../../Home/Body/Body.css"
import { useState } from "react"


export function FormLogin(){
    const [exibe, setExibe] = useState(false)
    return(
    <>
        <form className="formLogin">
        <div className="form-component">
            <label>Email:</label>
            <input type="text" name="email" placeholder="Digite seu melhor email" className="campo-texto"></input>
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
                <button className="btn-login">Entrar</button>
            </div>
        </form>

        
    </>
    )
}