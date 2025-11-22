import person from "../assets/president.jpeg"
import person2 from "../assets/secretary.jpeg"


export default function Committee() {
    return (
        <div className="my-4">
            <h1 className="text-2xl font-serif ml-5">Organizing Committee</h1>

            <div className="flex justify-center items-center gap-4 mt-4 mb-0">
                <img
                    src={person}
                    className="rounded-2xl w-43 h-25 object-cover"
                    alt="Member 1"
                />
                <img
                    src={person2}
                    className="rounded-2xl w-40 h-25 object-cover"
                    alt="Member 2"
                />
            </div>
            <div className="flex justify-between w-full px-5">
                <div>
                    <h2 className="text-sm">
                        Mr. Swadesh Chowdhury <br />
                        <b className="ml-12">President</b>
                    </h2>
                </div>

                <div>
                    <h2 className="text-sm text-right mr-6">
                        Mr. Mihir Mandal <br />
                        <b className="mr-7">Secretary</b>
                    </h2>
                </div>
            </div>


        </div>

    )
}