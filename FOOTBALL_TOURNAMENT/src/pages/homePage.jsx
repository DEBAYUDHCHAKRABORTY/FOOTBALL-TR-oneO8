import Footer from "../components/footer"
import Guests from "../components/guests";
import Navbar from "../components/navbar"
import Sponsors from "../components/sponsers";
import Bannar from "../components/bannar"

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <Bannar/>
            <Sponsors/>
            <Guests/>
            <Footer/>
            
        </>
    );
}