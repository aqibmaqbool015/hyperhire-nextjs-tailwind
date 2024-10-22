"use client";
import Image from "next/image";
import { useState } from "react";

export default function Form() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const image = {
    expand: '/collapeIcon.svg',
    tick: '/tickIcon.svg',
  };

  return (
    <div className="flex flex-col justify-center space-y-4 py-4 items-center bg-customBlack font-pretendard px-2">
   
      <div
        className="bg-[#141414] w-full md:w-[700px] px-3 flex justify-between items-center h-[66px] mb-4 border rounded-[10px] border-[#FFFFFF26] cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="text-left">
          <span className="font-pretendard opacity-60 font-bold text-white text-[20px] ">
            영상 유형 선택
          </span>
        </div>
        <div className="pr-[20px]">
          <Image
            src={isOpen ? image.expand : image.expand}
            alt="toggle"
            width={24} 
            height={24}
          />
        </div>
      </div>

      {isOpen && (
        <div className="bg-[#141414] h-auto p-[20px] border w-full md:w-[700px] px-3 rounded-[10px] border-[#FFFFFF26]">
          <ul className="text-white text-[18px] opacity-60">
            <li className="py-2">홍보 영상</li>
            <li className="py-2">프로모션 영상</li>
            <li className="py-2">IR 영상</li>
            <li className="py-2">프레젠테이션 영상</li>
          </ul>
        </div>
      )}

      <input
        type="text"
        placeholder="연락 받으실 담당자 성함"
        className="bg-[#141414]  h-[66px] opacity-60 font-bold text-white text-[20px]  border  rounded-[10px] border-solid w-full md:w-[700px] px-3 border-[#FFFFFF26] mb-4"
      />

      <input
        type="email"
        placeholder="이메일"
        className="bg-[#141414]  h-[66px] opacity-60 font-bold text-white text-[20px]  border  rounded-[10px] border-solid w-full md:w-[700px] px-3 border-[#FFFFFF26] mb-4"
      />

      <input
        type="tel"
        placeholder="휴대폰 번호"
        className="bg-[#141414]  h-[66px] opacity-60 font-bold text-white text-[20px]  border  rounded-[10px] border-solid w-full md:w-[700px] px-3 border-[#FFFFFF26] mb-4"
      />

      <textarea
        placeholder="의뢰하실 영상내용"
        className="bg-[#141414]  h-[278px] opacity-60 font-bold text-white text-[20px]  border  rounded-[10px] border-solid w-full md:w-[700px] px-3 border-[#FFFFFF26] mb-4 p-2"
      >
        고객님의 비즈니스 유형: 관공서/일반기업/소상공인 등
        영상 장르: 홍보, 프로모션/IR/프레젠테이션 등
        내용: 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.
      </textarea>

      <input
        type="text"
        placeholder="참고 영상"
        className="bg-[#141414]  h-[66px] opacity-60 font-bold text-white text-[20px]  border  rounded-[10px] border-solid w-full md:w-[700px] px-3 border-[#FFFFFF26] mb-4"
      />

      <div className=" h-[34px] text-[#FF6D51] font-pretendard">
        <strong>*</strong> 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면
        더 정확히 안내해드리겠습니다.
      </div>

      <div className="md:flex justify-between pl-4  opacity-60 text-white text-[20px]  rounded-[10px] border-solid w-full md:w-[700px] px-3 md:py-0 py-3 mb-4">
        <div className="flex justify-between items-center space-x-4 my-4 md:my-0">
          <Image src={image.tick} alt="tick" width={24} height={24} />
          <span>개인정보처리방침에 동의합니다.</span>
        </div>
        <div>
          <button className="bg-[#FF6D51] text-white h-[64px] py-[16px] px-[28px] rounded-[8px] md:w-[150px] w-full">
            문의 보내기
          </button>
        </div>
      </div>
    </div>
  );
}
