export default function Highlight() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-customBlack">
        <div className="flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-pretendard text-[24x] font-bold">
          영상 제작 문의
        </div>
        <div className=" flex justify-center items-center text-white font-[300]">
          <span className="font-bold leading-[68px] ">
            영상 제작이 필요하다면,
          </span>{" "}
          지금 문의 주세요.
        </div>
        <div className=" flex justify-center md:px-2 px-3 items-center text-center text-white leading-8 font-pretendard opacity-60">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시
          연락 드리겠습니다.
        </div>
        <div className=" mb-14 mt-4 font-pretendard text-[18px] font-normal leading-[21.48px] text-center">
          <a href="#">henry.lim@saltlux.com</a>
        </div>
      </div>

    </>
  );
}
