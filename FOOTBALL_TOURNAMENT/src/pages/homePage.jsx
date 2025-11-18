import Cards from "../components/card"
import Footer from "../components/footer"
import Guests from "../components/guests";
import Navbar from "../components/navbar"
import Sponsors from "../components/sponsers";

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <Sponsors/>
            <Guests/>
            <Footer/>
        </>
    );
}