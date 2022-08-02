import "./Home.css"
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";
import { HeaderCadastro } from "../Cadastro/Header/HeaderCadastro";

export function Home(){
    return (
        <>
            <section className="home">
                <Header />
                <Body />
                <Footer />
            </section>
            <section className="cadastro">
                <HeaderCadastro />
            </section>
            
        </>
        
    )
}