import { FormEvent } from "react";

export function armazenaDados(email:string, senha:string, confirmaSenha:string){

    if(senha === confirmaSenha){
        localStorage.setItem("senha", senha) 
        localStorage.setItem("email", email)
        return true
    }
    else{
        return false
    }
}   


