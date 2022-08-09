export function confereDados(emailLogin:string, senhaLogin:string){
    const senha = localStorage.getItem("senha")
    const email = localStorage.getItem("email")

    if (email === emailLogin && senha === senhaLogin)
    {
        return true
    }
    else{
        return false    
    }

    

}   