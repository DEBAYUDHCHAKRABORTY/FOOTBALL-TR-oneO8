export default function Guests() {
  return (
    <>
      <div className="ml-20 mt-20 bg-amber-100 rounded-2xl w-60 border-l-8 border-r-8 border-amber-500">
        <h1 className=" flex justify-center text-2xl font-serif">Chief Guests...</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-15 mt-10 mb-10">
        <div className="mt-10 rounded-full bg-blue-200 w-30 h-30 shadow-2xl">
          <h1 className="text-1xl flex justify-center py-12">Sabitri Mitra</h1>
        </div>
        <div className="mt-10 rounded-full bg-blue-200 w-30 h-30 shadow-2xl">
          <h1 className="text-1xl flex justify-center py-12">Pinki Mandal</h1>
        </div>
        <div className=" rounded-full bg-blue-200 w-30 h-30 shadow-2xl">
          <h1 className="text-1xl flex justify-center py-12">DM Madam</h1>
        </div>
      </div>
    </>
  );
}
