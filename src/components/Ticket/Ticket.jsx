import React from "react";

const Ticket = () => {
  return (
    <div id="aviachipta" className="container max-w-[1260px] mx-auto mt-20 w-full px-4 py-20">
      <h1 className="text-start text-4xl font-bold mb-8">Aviachiptalar</h1>

      <div className="w-full bg-white p-5 rounded-xl shadow-lg">
        {/* Tugmalar */}
        <div className="flex mb-5">
          <button className="inline-flex items-center justify-center w-20 px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#e05a1d] focus:ring-4 focus:outline-none">
            Borish
          </button>
          <button className="ml-5 inline-flex items-center justify-center w-20 px-3 py-2 text-sm font-medium text-center text-black bg-gray-200 rounded-lg hover:bg-[#F26522] hover:text-white focus:ring-4 focus:outline-none">
            Qaytish
          </button>
        </div>

        {/* Input maydonlari */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Qayerdan */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="qayerdan">
              Qayerdan
            </label>
            <input
              id="qayerdan"
              type="text"
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522]"
            />
          </div>

          {/* Qayerga */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="qayerga">
              Qayerga
            </label>
            <input
              id="qayerga"
              type="text"
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522]"
            />
          </div>

          {/* Qaysi sanadan */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="sanadan">
              Qaysi sanadan
            </label>
            <input
              id="sanadan"
              type="date"
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522]"
            />
          </div>
           {/* Yo'lovchi yoshi */}
           <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="yoshi">
              Yo‘lovchilar
            </label>
            <input
              id="yoshi"
              type="number"
              min="1"
              placeholder="1"
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522]"
            />
          </div>
        </div>

        {/* Izlash tugmasi */}
        <div className="mt-6 text-center">
          <button className="w-full  bg-[#F26522] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#e05a1d] transition">
            Qidirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
