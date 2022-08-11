import { useState, useEffect } from "react"
import "./FormPerfil.css"
import "../../Doacao/FormDoacao/FormDoacao.css"

export function FormPerfil(){
    const [urlImage, setUrlImage] = useState("")
    const [image, setImage] = useState("https://github.com/iJulioDuarte.png")
 
    return(

        <div className="form-perfil">
            <h2>Perfil</h2>
            <div>
            <form onSubmit={(e) =>{
                e.preventDefault()
                setImage(urlImage)
            }}>
                <div className="form-component">
                    <label>Foto</label> 
                </div>
                <div className="foto-component">
                    <img className="perfil-picture" src={image} />
                    
                    <input type="text" placeholder="Digite a url da imagem" className="campo-texto-foto" onChange={(e) =>{
                        setUrlImage(e.target.value)
                    }}></input> 
                    <button>Enviar</button>
                </div>    
            </form>
            
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