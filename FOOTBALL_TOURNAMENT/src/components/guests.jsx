import { guests } from "../constatnts/guests";
import person from "../assets/president.jpeg"
import person2 from "../assets/secretary.jpeg"


export default function Guests() {
  return (
    <div className=" py-2">
      <div className="">
        <h1 className="ml-5 text-2xl font-serif">Chief Guests...</h1>
      </div>
      <div className="flex justify-center items-center gap-6 mt-6">
        <img
          src={person}
          className="w-40 h-40 rounded-full object-cover border-4 border-amber-400 shadow-lg"
          alt="Member 1"
        />
        <img
          src={person2}
          className="w-40 h-40 rounded-full object-cover border-4 border-amber-400 shadow-lg"
          alt="Member 2"
        />
      </div>
      <div className="flex items-center justify-center gap-8 mt-2 mb-10">
        {guests &&
          guests.map((item, idx) => (
            <div
              key={idx}
              className=" flex items-center justify-center bg-green-50  shadow-xl b"
            >
              <h1 className="text-center text-base font-semibold">{item.name}</h1>
            </div>
          ))}
      </div>
    </div>


  );
}
