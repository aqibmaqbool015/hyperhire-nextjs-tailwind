import Image from "next/image";
import centralImage from "../static/centralImage.png";
import circleImage from "../static/circle.png";
import circleArrow from "../static/circleArrow.svg";

export default function HeroSection() {
  return (
    <div className="relative">
      <Image src={centralImage} alt="Hero Section" className="w-full h-auto" />

      <div className="absolute right-10 top-20">
        <Image src={circleImage} alt="circle" className="md:w-24 md:h-24 w-[12px] h-[12px] " />

        <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-white">제작 문의하기</span>
          <Image src={circleArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
