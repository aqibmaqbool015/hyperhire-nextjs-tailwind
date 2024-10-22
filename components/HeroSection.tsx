import Image from "next/image";
import centralImage from "../static/centralImage.png";
import circleImage from "../static/circle.png";
import circleArrow from "../static/circleArrow.svg";

export default function HeroSection() {
  return (
    <div className="lg:relative">
      <Image src={centralImage} alt="Hero Section" className="w-full h-auto" />

      <div className="absolute lg:right-10 lg:top-20  right-5 top-28">
        <Image src={circleImage} alt="circle" className="lg:w-24 lg:h-24 w-[80px] h-[80px] " />

        <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-white text-[12px] ">제작 문의하기</span>
          <Image src={circleArrow} alt="arrow" className="w-[20px] h-auto object-contain inline-block " />
        </div>
      </div>
    </div>
  );
}
