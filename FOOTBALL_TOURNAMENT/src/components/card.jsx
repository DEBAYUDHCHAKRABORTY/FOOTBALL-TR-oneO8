import backgroundImage from "../assets/background.png";


export default function Cards() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="ml-20 mt-20">
        <h1 className="text-4xl font-serif">Tournament Starting...</h1>
      </div>
      <div className=" bg-blue-200 mt-10 w-200 font-bold [word-spacing:3px] h-20 justify-center ml-120 rounded-4xl">
        <h1 className="text-2xl justify-center flex p-5.5">
          3rd December 2025 onwards at Mathurapur Hospital Field
        </h1>
      </div>
      <div className="ml-20 mt-20">
        <h1 className="text-4xl font-serif">Sponsered By...</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-20 mt-10">
        <div className="mt-10 rounded-2xl bg-blue-200 w-100 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            Choton Jewellery
          </h1>
        </div>
        <div className="mt-10 rounded-2xl bg-blue-200 w-100 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            Abhijit Chakraborty
          </h1>
        </div>
        <div className="mt-10 rounded-2xl bg-blue-200 w-100 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            Annapurna Jewellery
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        <div className="mt-10 rounded-2xl bg-blue-200 w-100 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            Choton Jewellery
          </h1>
        </div>
        <div className="mt-10 rounded-2xl bg-blue-200 w-100 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            Abhijit Chakraborty
          </h1>
        </div>
        <div className="mt-10 rounded-2xl bg-blue-200 w-100 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            Annapurna Jewellery
          </h1>
        </div>
      </div>
      <div className="ml-20 mt-20">
        <h1 className="text-4xl font-serif">Chief Guests...</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-25 mt-10 mb-10">
        <div className="mt-10 rounded-full bg-blue-200 w-80 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            Sabitri Mitra
          </h1>
        </div>
        <div className="mt-10 rounded-full bg-blue-200 w-80 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            IC
          </h1>
        </div>
        <div className="mt-10 rounded-full bg-blue-200 w-80 h-80 shadow-2xl">
          <h1 className="text-3xl flex justify-center py-35">
            DM Madam
          </h1>
        </div>
      </div>
    </div>
  );
}
