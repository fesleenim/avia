import React from 'react'
import Uzb from "../../assets/uzb.jpg"
import Turk from "../../assets/turk.jfif"
import Dubai from "../../assets/dubai.jfif"
import Yevropa from "../../assets/yevropa.jfif"

const Tur = () => {
  return (
<div id='tur' className='container max-w-[1420px] mx-auto mt-30 w-full'>
  <h1 className='text-center text-4xl font-bold'>Turlar</h1>
  <p className='text-center text-2xl font-normal mt-5'>Eng yaxshi sayohat turlari</p>
  <div className="grid-container flex justify-center md:justify-between items-center flex-wrap gap-5 p-4 mt-12">
    
    <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={Uzb} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">O'zbekiston bo'ylab sayohat</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">
          Batafsil
        </a>
      </div>
    </div>

    <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={Turk} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Turkiya bo'ylab sayohat</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Istanbul, Antalya, Kappadokiya - eng mashhur joylar</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">
          Batafsil
        </a>
      </div>
    </div>

    <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={Dubai} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Dubai</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Zamonaviy arxitektura va hashamatli savdo markazlari</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">
          Batafsil
        </a>
      </div>
    </div>

    <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-[211px] w-full" src={Yevropa} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Yevropa bo'ylab sayohat</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">
          Batafsil
        </a>
      </div>
    </div>

  </div>
</div>

  )
}

export default Tur