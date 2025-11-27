import contact from "../assets/contact.jpeg"

function ContactUs() {
    return (
        <>
            <div className="relative w-fit m-5">
                <img
                    src={contact}
                    className="w-88 h-64 object-cover rounded-2xl"
                />

                <div className="absolute inset-0 flex justify-center items-center">
                    <p className="text-white text-3xl font-bold drop-shadow-lg">
                        Your Text Herehksbvksb
                    </p>
                </div>
            </div>

        </>
    )
}

export default ContactUs;