import logo from "./morningFootball.png"
import first_match from "../assets/1st_match.png"
import secound_match from "../assets/2nd_match.png"
import third_match from "../assets/3rd_match.png"
import forth_match from "../assets/4th_match.png"
import semi_final from "../assets/5th_semifinal_match.png"
import semi_final_pro from "../assets/6th_semifinal_match.png"
import final_match from "../assets/final_match.png"
function FootballBannar() {
    return (
        <>
            <img src={logo} />
            <div className="flex flex-wrap justify-center gap-2 mt-10">
                <img src={first_match} style={{ width: "40%", height: "25%" }} />
                <img src={secound_match} style={{ width: "40%", height: "25%" }} />
                <img src={third_match} style={{ width: "40%", height: "25%" }} />
                <img src={forth_match} style={{ width: "40%", height: "25%" }} />
                <img src={semi_final} style={{ width: "40%", height: "25%" }} />
                <img src={semi_final_pro} style={{ width: "40%", height: "25%" }} />
                <img src={final_match} style={{ width: "60%", height: "30%" }} />
            </div>
        </>
    )
}

export default FootballBannar;