import React from 'react'
import Antaliya from "../../assets/antaliya.avif"
import Istanbul from "../../assets/istanbul.avif"
import Dubai from "../../assets/dubai.jfif"
import Arabiston from "../../assets/arabiston.avif"

const Tur = () => {
  return (
    <div className='container max-w-[1420px] mx-auto mt-30 w-full px-4'>
      <h1 className='text-center text-4xl font-bold'>Mashhur shaxarlar</h1>
      <div className="grid-container flex justify-center md:justify-between items-center flex-wrap gap-5 p-4 mt-12">
        {[ 
          { img: Dubai, title: "Dubai", desc: "Zamonaviy arxitektura va hashamatli savdo markazlari" },
          { img: Arabiston, title: "Saudiya Arabistoni", desc: "Umra ziyorati uchun maxsus paketlar" },
          { img: Istanbul, title: "Istanbul", desc: "Tarixiy obidalar va zamonaviy madaniyat" },
          { img: Antaliya, title: "Antalya", desc: "Dam olish va sohil bo'yi kurortlari" }
        ].map((city, index) => (
          <div key={index} className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-[400px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <a href="#">
              <img className="rounded-t-lg w-full h-[200px] object-cover" src={city.img} alt={city.title} />
            </a>
            <div className="p-5 flex flex-col flex-grow">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{city.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{city.desc}</p>
              <a href="#" className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">
                Batafsil
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tur
