import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Hero = () => {
  return (
    <div className='max-w-[1260px] mx-auto text-center mt-10 md:mt-28 px-4'>
      <h1 data-aos="fade-up" className='text-white text-3xl md:text-6xl font-medium mb-6'>
        Sayohatingizni biz bilan boshlang
      </h1>
      <p data-aos="fade-up" className='text-white text-xl md:text-3xl mb-8'>Nemo Travel - huzur uchun yo'l</p>
      <div className="bg-white text-gray-800 rounded-3xl py-8 px-8 flex flex-wrap md:justify-center gap-8 md:gap-16 shadow-lg max-w-4xl mx-auto ">
        {[
          { icon: <PermIdentityIcon />, label: 'Mamnun mijozlar', value: '45000+' },
          { icon: <OutlinedFlagIcon />, label: 'Mamlakatlar', value: '30+' },
          { icon: <AccessTimeIcon />, label: 'Tajriba', value: '5+ yil' }
        ].map((item, index) => (
          <div key={index} className='flex items-center gap-3'>
            <div className='bg-[#F26522] w-10 h-10 flex items-center justify-center rounded-full text-white'>
              {item.icon}
            </div>
            <div className='text-left'>
              <p className='text-sm'>{item.label}</p>
              <strong className='font-bold'>{item.value}</strong>
            </div>
          </div>
        ))}
        <button className="bg-[#F26522] text-white px-6 py-2 rounded-full hover:bg-[#E85A1F] transition">
          Batafsil ma'lumot
        </button>
      </div>

    </div>
  );
};
export default Hero