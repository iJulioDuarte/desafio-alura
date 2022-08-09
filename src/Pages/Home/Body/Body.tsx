import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import "./Body.css"

export function Body(){
    let navigate = useNavigate()
    return(
        <>
        <div className="backgroundCorpo">

                
                <div className="textoHome">
                    <img className="logo-inicio" src="src\Pages\Home\Header\img\Logo.png" alt="Adopet" />
                    <h1>Boas-vindas!</h1>

                    <h3>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</h3>
                </div>
                    <button onClick={() =>{
                        navigate("/login")
                        }} className="btn-login">Já tenho conta</button>

                    <button  onClick={() =>{
                        navigate("/cadastro")
                        }}className="btn-cadastro">Quero me cadastrar</button>   

                
            
            
        </div>

        
        </>
        
    )
}