export function confereDados(emailLogin:string, senhaLogin:string){
    const senha = localStorage.getItem("senha")
    const email = localStorage.getItem("email")

    return(email === emailLogin && senha === senhaLogin)
    

}   