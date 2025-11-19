// import Cards from "../components/card"
import FootballBannar from "../components/bannar";
import Footer from "../components/footer"
import Guests from "../components/guests";
import Navbar from "../components/navbar"
import Sponsors from "../components/sponsers";

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <FootballBannar/>
            <Sponsors/>
            <Guests/>
            <Footer/>
        </>
    );
}