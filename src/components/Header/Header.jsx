import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/logoimg.png";

const Header = () => {
  return (
    <nav id='asosiy' className="text-white py-4">
      <div className="max-w-[1260px] mx-auto flex items-center justify-between px-4">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-10" alt="Logo" />
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#asosiy" className="hover:text-[#F26522]">Asosiy</a>
          <a href="#about" className="hover:text-[#F26522]">Biz haqimizda</a>
          <a href="#tur" className="hover:text-[#F26522]">Turlar</a>
          <a href="#mehmonxona" className="hover:text-[#F26522]">Mehmonxonalar</a>
          <a href="#aviachipta" className="hover:text-[#F26522]">Aviachiptalar</a>
          <a href="#aloqa" className="hover:text-[#F26522]">Aloqa</a>
        </div>
         
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium">
            UZ <KeyboardArrowDownIcon />
          </button>
          <button className="md:hidden p-2">
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
