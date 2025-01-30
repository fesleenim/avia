import React from 'react'

function Contact() {
  return (
    <div id='aloqa' className='container max-w-[1420px] mx-auto mt-30 w-full px-4 mb-10'>
      <h1 className='text-center text-4xl font-bold'>Biz bilan bog'lanish</h1>
      <p className='mt-3 text-center text-xl font-normal'>Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz</p>
      
      {/* Flex -> Grid bilan responsiv */}
      <div data-aos="fade-down" className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
        {/* Form */}
        <div className="bg-white p-5 rounded-xl shadow-lg  mb-20">
          <div className="flex flex-col">
            {/* Ismingiz */}
            <label className="font-semibold mb-2" htmlFor="ismingiz">Ismingiz</label>
            <input id="ismingiz" type="text" className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522]" />

            {/* Email */}
            <label className="font-semibold mb-2 mt-6" htmlFor="emailingiz">Email manzilingiz</label>
            <input id="emailingiz" type="text" className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522]" />

            {/* Telefon */}
            <label className="font-semibold mb-2 mt-6" htmlFor="tel">Telefon raqamingiz</label>
            <input id="tel" type="text" className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522]" />

            {/* Mavzu */}
            <label className="font-semibold mb-2 mt-6" htmlFor="mavzu">Mavzu</label>
            <input id="mavzu" type="text" className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522]" />

            {/* Xabaringiz */}
            <label className="font-semibold mb-2 mt-6" htmlFor="xabaringiz">Xabaringiz</label>
            <textarea id="xabaringiz" rows="4" className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#F26522] resize-none"></textarea>

            {/* Yuborish tugmasi */}
            <button className="mt-6 w-full bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#e05a1d] transition">
              Yuborish
            </button>
          </div>
        </div>

        {/* Aloqa va Google Map */}
        <div className='space-y-10 mb-20'>
          {/* Aloqa ma'lumotlari */}
          <div className='bg-white p-5 rounded-xl shadow-lg'>
            <h1 className='text-gray-900 font-bold text-xl'>Aloqa ma'lumotlari</h1>
            <p className='text-gray-500 font-normal mt-3'>Manzil: Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
            <p className='text-gray-500 font-normal mt-3'>Tel: +998 95 150 00 00</p>
            <p className='text-gray-500 font-normal mt-3'>Email: info@nemoavia.uz</p>
            <p className='text-gray-500 font-normal mt-3'>Ish vaqti: Du-Sha 24 soat</p>
          </div>

          {/* Google Map */}
          <div className="bg-white p-5 rounded-xl shadow-lg ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2818430693787!2d69.24147150000002!3d41.2809701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b17ca1217e1%3A0xc5f22ee61e83c979!2sNemo%20travel!5e0!3m2!1sru!2s!4v1738222727582!5m2!1sru!2s"
              className="w-full h-[450px] border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
