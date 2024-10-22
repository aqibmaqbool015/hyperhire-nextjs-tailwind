import { works } from "@/constant";
import { ProcessCard } from "./ProcessCard";

export const Features = () => {
    const features = [
        {
            title: 'Fast',
            text: 'X2'
        },
        {
            title: 'Quality',
            text: 'A++'
        },
        {
            title: 'LOW PRICE',
            text: '1/2'
        },
        {
            title: 'HIGH TECH',
            text: 'Gen AI'
        },
    ]



    return (
        <>
            <div className="bg-customBlack py-10 text-center">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-[17px] font-medium text-center">
                    영상 제작소
                </p>
                <p className="py-2 text-center text-[22px] font-normal text-white">
                    당장 내일  <b>‘고품질 맞춤 영상’</b> 을 받아보세요.
                </p>
                <ul className="my-5 text-center">
                    {features.map((item, index) => (
                        <li
                            key={index}
                            className="inline-block w-[150px] h-[150px] rounded-full p-0.5 bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                        >
                            <div
                                className="flex flex-col items-center justify-center w-full h-full bg-customBlack rounded-full text-white"
                            >
                                <p className="font-bold text-lg
                                bg-clip-text text-transparent bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-[17px]">{item.title}</p>
                                <p className="text-sm
                                bg-clip-text text-transparent bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-[15px]">{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 text-center md:inline-block md:w-[50%] 
                 ">
                    <p className="py-2 text-center text-[22px] font-medium text-white">
                        AI VIDEO ON YOUR DEMAND
                    </p>
                    <p className="text-[15px] font-normal text-white opacity-70 mb-4">
                        가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에
                        영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
                    </p>
                    <p className="text-[15px] font-normal text-white opacity-70 ">
                        가격은 절반으로, 속도는 두배로, 품질은 A++!
                        기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등
                        당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.
                    </p>
                    <div className="border-b border-b-white pb-8 mx-10 opacity-80">

                    </div>
                </div>

                <div className="my-8">
                    <p className="relative text-center text-[25px] font-semibold text-white before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-customGradiantTo before:rounded-full before:mr-2 before:align-middle before:mt-[-25px]">
                        PREVIOUS WORKS
                    </p>

                    <div className="mt-5">
                        <div className="grid grid-cols-4 gap-0">
                            {
                                works.map((item, index) => {
                                    return (

                                        <span key={index} className="">
                                            <img src={item.image} alt="" className="" />
                                        </span>

                                    )
                                })
                            }
                        </div>
                    </div>
                    <ProcessCard />
                </div>


            </div>
        </>
    );
}