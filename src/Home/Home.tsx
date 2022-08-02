import "./Home.css"
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";

export function Home(){
    return (
        <>
            <section className="home">
                <Header />
                <Body />
                <Footer />
            </section>
            
        </>
        
    )
}