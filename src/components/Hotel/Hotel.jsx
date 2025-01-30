import React from 'react'
import Hayat from "../../assets/hayat.jpg"
import Hilton from "../../assets/hilton.jpg"
import Place from "../../assets/place.jpg"

const Hotel = () => {
  return (
    <div id='mehmonxona' className='container max-w-[1420px] mx-auto mt-30 w-full px-4'>
      <h1 className='text-center text-4xl font-bold'>Mehmonxonalar</h1>
      <div className="grid-container flex justify-center md:justify-between items-center flex-wrap gap-5 p-4 mt-12">
        {[ 
          { img: Hayat, title: "Hyatt Regency Tashkent", desc: "Navoi ko'chasi 1-uy, Toshkent\n\nZamonaviy mehmonxona markaz markazida" }, 
          { img: Hilton, title: "Hilton Tashkent City", desc: "Islom Karimov ko'chasi 2-uy, Toshkent\n\nBiznes mehmonxona shahar markazida" },
          { img: Place, title: "City Palace Hotel", desc: "Amir Temur ko'chasi 15-uy, Toshkent\n\nQulay mehmonxona diqqatga sazovor joylar yaqinida" }
        ].map((hotel, index) => (
          <div key={index} className="w-full sm:w-[48%] md:w-[31%] lg:w-[30%] h-[450px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <a href="#aloqa">
              <img className="rounded-t-lg w-full h-[250px] object-cover" src={hotel.img} alt={hotel.title} />
            </a>
            <div className="p-5 flex flex-col flex-grow">
              <a href="#aloqa">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{hotel.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{hotel.desc}</p>
              <a href="#aloqa" className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#d8541a] focus:ring-4 focus:outline-none">
                Batafsil ma'lumot
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotel
