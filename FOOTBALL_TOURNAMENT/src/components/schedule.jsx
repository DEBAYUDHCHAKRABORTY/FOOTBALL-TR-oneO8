import match from "../assets/match.jpeg"


export default function Matches() {
    return (
        <div>
        <div className="flex justify-between mx-5">
            <h1 className="text-lg font-bold">Matches</h1>
            <h1 className="text-md bg-yellow-100 text-red-300 ">See all</h1>
        </div>
        <div>
             <div className="flex justify-center items-center my-4">
                        <img src={match} className="rounded-2xl w-88 "/>
                    </div>
        </div>
        </div>

    )
}