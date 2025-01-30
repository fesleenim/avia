import React from 'react'

const Team = () => {
  return (
    <div className='container max-w-[1420px] mx-auto mt-10 w-full'>
      <h1 className='text-center text-4xl font-bold'>Bizning jamoa</h1>
      <div className="grid-container flex justify-center md:justify-between items-center flex-wrap gap-4 p-4 mt-12">
        <div className=" text-center w-full sm:w-[48%] md:w-[32%] lg:w-[24%] p-8 shadow-[0px_0px_8px_#F26522] rounded-lg bg-white font-bold">Direktor</div>
        <div className=" text-center w-full sm:w-[48%] md:w-[32%] lg:w-[24%] p-8 shadow-[0px_0px_8px_#F26522] rounded-lg bg-white font-bold">Yurist</div>
        <div className=" text-center w-full sm:w-[48%] md:w-[32%] lg:w-[24%] p-8 shadow-[0px_0px_8px_#F26522] rounded-lg bg-white font-bold">Operator</div>
        <div className=" text-center w-full sm:w-[48%] md:w-[32%] lg:w-[24%] p-8 shadow-[0px_0px_8px_#F26522] rounded-lg bg-white font-bold">Administrator</div>
      </div>
    </div>
  )
}

export default Team