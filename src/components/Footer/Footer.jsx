import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-[1360px]">
        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1st card - Logo and Address */}
          <div className="text-start p-6 rounded-3xl w-full md:w-[350px]">
            <div className="mb-4">
              <img src={Logo} alt="Logo" className="h-12" />
            </div>
            <p className="text-md text-gray-400">
              Toshkent shahri, Muqimiy ko'chasi 44-A uy
            </p>
          </div>

          {/* 2nd card - Contact info */}
          <div className="p-6 rounded-3xl w-full md:w-[350px]">
            <h3 className="text-2xl font-semibold mb-4 text-start">Bog'lanish</h3>
            <p className="text-start text-md mb-2 text-gray-400">Tel: 
              <a href="tel:+998951500000" className="hover:underline">
                +998 95 150 00 00
              </a>
            </p>
            <p className="text-start text-md mb-2 text-gray-400">Email: 
              <a href="mailto:info@nemoavia.uz" className="hover:underline">
                info@nemoavia.uz
              </a>
            </p>
          </div>

          {/* 3rd card - Social media */}
          <div className="p-6 rounded-3xl w-full md:w-[350px]">
            <h3 className="text-2xl font-semibold mb-4 text-start">Ijtimoiy tarmoqlar</h3>
            <div className="flex justify-start space-x-6 text-3xl text-gray-400">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className=" transition-colors" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className=" transition-colors" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <FaTelegram className=" transition-colors" />
              </a>
            </div>
          </div>

          {/* 4th card - Address */}
          <div className="p-6 rounded-3xl w-full md:w-[350px]">
            <h3 className="text-2xl font-semibold mb-4 text-start">Manzil</h3>
            <p className="text-md text-gray-400">
              Toshkent shahri, Muqimiy ko'chasi 44-A uy
            </p>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className='bg-gray-600 my-6 h-[1px]' />

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
