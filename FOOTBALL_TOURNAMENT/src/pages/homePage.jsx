// import Cards from "../components/card"
import FootballBannar from "../components/bannar";
import Footer from "../components/footer"
import Guests from "../components/guests";
import Navbar from "../components/navbar"
import Matches from "../components/schedule";
import Sponsors from "../components/sponsers";
import Committee from "../components/committee";
import ContactUs from "../components/contact";

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <FootballBannar/>
            <Matches/>
            <Sponsors/>
            <ContactUs/>
            <Guests/>
            <Committee/>
            <Footer/>
        </>
    );
}