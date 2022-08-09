import { FormEvent } from "react";

export function armazenaDados(email:string, senha:string, confirmaSenha:string){
    const _email = email
    const _senha = senha
    const _senhaConfirma = confirmaSenha

    if(_senha === _senhaConfirma){
        localStorage.setItem("senha", _senha) 
        localStorage.setItem("email", _email)
        return true
    }
    else{
        return false
    }
}   


