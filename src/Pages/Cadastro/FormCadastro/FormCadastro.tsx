import "./FormCadastro.css"
import "../../Home/Body/Body.css"
import { useState } from "react"
import { armazenaDados } from "../Dados/Dados"
import { useNavigate } from "react-router-dom"




export function FormCadastro(){
const [exibe, setExibe] = useState(false)
const [senha, setSenha] = useState("")
const [confirmaSenha, setConfirmaSenha] = useState("")
const [email, setEmail] = useState("")


const navigate = useNavigate()
    return(
    <>
    <div className="formulario-cadastro">
        <form onSubmit={(e) => {
            e.preventDefault()
            const valido = armazenaDados(email, senha, confirmaSenha)
            if (valido){
                navigate("/home")
                alert("Cadastro realizado com sucesso!")
            }
            else{
                alert("As senhas não conferem")
            }
            }}>
            
            <div className="form-component">
                <label>Email:</label>
                <input required type="text" name="email" placeholder="Digite seu melhor" className="campo-texto" value={email} onChange={(e) =>{
                        setEmail(e.target.value)
                    }}></input>
            </div>

            <div className="form-component">
                <label>Nome:</label>
                <input required={true} type="text" name="nome" placeholder="Digite seu nome" className="campo-texto"></input>
            </div>
            
            <div className="form-component">
                <label>Senha:</label>
                <div className="campo-senha">
                    <input 
                        required={true} 
                        type={exibe ? "text" : "password"} 
                        name="senha" 
                        placeholder="Crie uma senha" 
                        className="campo-texto" 
                        value={senha} 
                        onChange={(e) =>{
                            setSenha(e.target.value)
                        }} />
                    <img  className="eye-svg" onClick={() =>{setExibe(!exibe)}} width="1rem"  src="src/Templates/Imagens/Vector.png" alt="Imagem olho"/>
                </div>
            </div>
            
            <div className="form-component">
                <label>Confirma:</label>
                <div className="campo-senha">
                    <input 
                        required={true} 
                        type={exibe ? "text" : "password"} 
                        name="senha" 
                        placeholder="Repita a senha criada acima" 
                        className="campo-texto" value={confirmaSenha} 
                        onChange={(e) =>{
                            setConfirmaSenha(e.target.value)
                            }}/>
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