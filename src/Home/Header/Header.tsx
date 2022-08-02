import "./header.css"

export function Header(){
    return(
        <header>
            <div className="backgroundHeader">
                <div className="imagens-topo">
                    <img src="src\Home\Header\img\Casa.png" />
                    <img src="src\Home\Header\img\Mensagens.png" />
                </div>
                <div className="logo">
                    <img src="src\Home\Header\img\Logo.png" alt="logo" />
                </div>
            </div>
        </header>
        
    )
}
