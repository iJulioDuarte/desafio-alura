import "../../Cadastro/FormCadastro/FormCadastro.css"
import "../../Home/Body/Body.css"
import { useState } from "react"
import { confereDados } from "../confereSenha/confereDados"
import { useNavigate } from "react-router-dom"


export function FormLogin(){
    
    const [exibe, setExibe] = useState(false)
    const [emailLogin, setEmailLogin] = useState("")
    const [senhaLogin, setSenhaLogin] = useState("")

    const navigator = useNavigate()
    return(
    <>
        <form className="formLogin" onSubmit={() =>{
            const logado = confereDados(emailLogin, senhaLogin)
            if (logado === true){
                localStorage.setItem("user", logado.toString())
                navigator("/pets") 
                document.location.reload()
            } 
            else{
                alert("Email e/ou senha inválidos")
            } 
        }}>

        <div className="form-component">
            <label>Email:</label>
            <input required 
                type="text" 
                name="email" 
                placeholder="Digite seu melhor email" 
                className="campo-texto" 
                value={emailLogin} 
                onChange={(e) =>{
                        setEmailLogin(e.target.value)
                    }}></input>
        </div>
        <div className="form-component">
                <label>Senha:</label>
                <div className="campo-senha">
                    <input required 
                        type={exibe ? "text" : "password"} 
                        name="senha" 
                        placeholder="Crie uma senha" 
                        className="campo-texto" 
                        value={senhaLogin} 
                        onChange={(e) =>{
                            setSenhaLogin(e.target.value)
                        }}/>
                    <img  className="eye-svg" onClick={() =>{setExibe(!exibe) }} width="1rem"  src="src/Templates/Imagens/Vector.png" alt="Imagem olho"/>
                </div>
            </div>
            <div className="form-component">
                <button className="btn-login" >Entrar</button>
            </div>
        </form>

        
    </>
    )
}