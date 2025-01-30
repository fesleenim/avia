import React from 'react'
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'




const About = () => {
  return (
    <>
      <div id='about' className=' container max-w-[1420px] mx-auto mt-10 w-full'>
        <h1 className='text-center text-4xl font-bold'>Biz haqimizda</h1>
        <p className='text-center text-2xl font-normal mt-5'>Sizning ishonchli sayohat hamkoringiz</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16  mt-7  px-10">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-7">
            <strong className='font-bold text-2xl '>Bizning vazifamiz</strong>
            <p className='mt-6 font-normal'>Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg mb-7">
            <strong className='font-bold text-2xl '>Bizning maqsadimiz</strong>
            <p className='mt-6 font-normal'>O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro miqyosida tan olingan brend bo'lish</p>
          </div>
        </div>
        <div className='sm:flex mt-10 sm:justify-evenly sm:items-center sm:flex-wrap'>
          <div  data-aos="fade-right" className=' md:w-[48%] sm:text-start w-[95%] px-10 text-xl '>
            <p className='mb-3'>Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.</p>
            <p>Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.</p>
          </div>
          <div  className='md:w-[38%] w-[94%] px-10'>
            <div  className='md:w-[560px] sm:h-[320px] mb-5 w-full h-[300px]  '>
              <img  className='w-full rounded-2xl h-full m-auto md:m-0 mt-5' src={Img1} alt="" />
            </div>
            <div className='md:w-[560px]  md:h-[250px] flex items-center justify-between h-[150px]  w-full'>
              <img className='rounded-2xl w-[45%]  h-full' src={Img2} alt="" />
              <img className='rounded-2xl w-[45%]  h-full' src={Img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About