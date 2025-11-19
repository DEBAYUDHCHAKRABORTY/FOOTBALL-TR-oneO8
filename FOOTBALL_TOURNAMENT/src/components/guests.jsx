import { guests } from "../constatnts/guests";

export default function Guests() {
  return (
    <div className="bg-green-100 py-0.5">
      <div className="ml-20 mt-20 bg-amber-100 w-60 border-l-8 border-r-8 border-amber-500">
        <h1 className=" flex justify-center text-2xl font-serif">Chief Guests...</h1>
      </div>
      <div className="flex items-center justify-center gap-2 mt-10 mb-10">
        {guests && guests.map((item, idx) => (
          // <div key={idx} className="mt-10 rounded-full bg-green-50 w-30 h-30 shadow-2xl">
            <h1 className="m-2 p-2">{item.name}</h1>
          // </div>
        ))}


      </div>
    </div>
  );
}
