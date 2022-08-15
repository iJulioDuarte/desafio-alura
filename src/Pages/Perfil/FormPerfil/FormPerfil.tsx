import { useState, useEffect } from "react"
import "./FormPerfil.css"
import "../../Doacao/FormDoacao/FormDoacao.css"
import { useNavigate } from "react-router-dom"

export function FormPerfil(){
    const [image, setImage] = useState<any>('')
    const [endImg, setEndImg] =useState()
    const navigate = useNavigate()
    return(

        <div className="form-perfil">
            <h2>Perfil</h2>
            <div>
            <form>
                <div className="form-component">
                    <label>Foto</label> 
                </div>

                <div className="foto-component">
                    
                <label htmlFor="input-foto" className="perfil-picture"><img alt="not fount" className="perfil-picture" src={image? URL.createObjectURL(image) : "src/imgFundo/User.png"}/></label>
                    
                    <input type="file" name="image" id="input-foto" className="campo-texto-foto" onChange={(e) =>{
                        if (!e.target.files) return;
                        setImage(e.target.files[0])   
                    }}></input>
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
            
            <button className="button-doacao" onClick={() =>{
                navigate("/pets")
            }}>
                Enviar
            </button>
        </div>
    )
}