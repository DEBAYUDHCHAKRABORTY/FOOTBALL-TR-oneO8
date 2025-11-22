import { sponsors } from "../constatnts/sponsors";

export default function Sponsors() {
  return (
    <div className="py-2 my-2">
      <div className="ml-20 mt-10 bg-amber-100 w-60 border-l-8 border-r-8 border-amber-500">
        <h1 className="text-2xl font-serif flex justify-center">Sponsored By...</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 px-4">
        {sponsors && sponsors.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-green-200
                 shadow-xl h-24 flex items-center justify-center 
                 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <h1 className="text-lg font-semibold tracking-wide text-center px-2">
              {item?.name}
            </h1>
          </div>
        ))}
      </div>

    </div>
  );
}
