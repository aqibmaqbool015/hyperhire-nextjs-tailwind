"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "../static/logo.svg";
import globeIcon from "../static/globe.svg";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-[100px] bg-black backdrop-blur-[40px]">
      <div className="container mx-auto flex items-center justify-between h-full md:px-8 px-4">
        {/* Logo */}
        <div className="text-white text-xl">
          <Image src={logo} alt="PLOONET" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiX className="text-white w-8 h-8" />
            ) : (
              <HiMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>

        {/* Navigation Links (Hidden on Mobile, Visible on Desktop) */}
        <nav className="hidden lg:flex gap-[60px] items-center opacity-60">
          <a
            href="#"
            className=" text-[16px] font-semibold leading-5 text-left text-white"
          >
            스튜디오
          </a>
          <a
            href="#"
            className=" text-[16px] font-semibold leading-5 text-left text-white"
          >
            워크센터
          </a>
          <a
            href="#"
            className=" text-[16px] font-semibold leading-5 text-left text-white"
          >
            손비서
          </a>
          <a
            href="#"
            className=" text-[16px] font-semibold leading-5 text-left text-white"
          >
            메타휴먼
          </a>
          <a
            href="#"
            className="w-[60px] h-[19px] text-[16px] font-semibold leading-5 text-left text-white"
          >
            상제작소
          </a>
          <a
            href="#"
            className=" text-[16px] font-semibold leading-5 text-left text-white"
          >
            공지사항
          </a>
          <a
            href="#"
            className=" text-[16px] font-semibold leading-5 text-left text-white"
          >
            제휴문의
          </a>
        </nav>

        {/* Login and Globe Icon (Visible on all screen sizes) */}
        <div className="hidden lg:flex items-center space-x-4">
          <span className="text-white">로그인</span>
          <Image src={globeIcon} alt="Globe Icon" className="w-10 h-10" />
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-4 space-y-4 lg:hidden">
            <a href="#" className="text-lg">스튜디오</a>
            <a href="#" className="text-lg">워크센터</a>
            <a href="#" className="text-lg">손비서</a>
            <a href="#" className="text-lg">메타휴먼</a>
            <a href="#" className="text-lg">영상제작소</a>
            <a href="#" className="text-lg">공지사항</a>
            <a href="#" className="text-lg">제휴문의</a>
            <div className="flex items-center space-x-4">
              <span className="text-white">로그인</span>
              <Image src={globeIcon} alt="Globe Icon" className="w-8 h-8" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
