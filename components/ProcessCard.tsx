import { block, userProfile } from "@/constant";

export const ProcessCard = () => {
    const image = {
        camera: '/maker.png',
    }

    return (
        <>
            <div className="px-5 mt-16">
                <div className="relative text-center inline-block">
                    <p className="relative text-center text-[25px] font-semibold text-white before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-customGradiantTo before:rounded-full before:mr-2 before:align-middle before:mt-[-25px]">
                        MAKING PROCESS
                    </p>
                    <span className="absolute right-[-15px] top-[-8px]">
                        <img src={image.camera} alt="" className="inline-block w-[35px] h-auto object-contain " />
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-12">
                    <div className="border border-customBorder rounded-[10px] bg-customBlack md:px-10 py-4">

                        <p className="py-2 text-center text-[20px] font-semibold text-white">
                            일반 제작
                        </p>
                        <p className=" text-center text-[16px] font-light text-white mb-5">
                            제작 시작 후 5영업일 이내
                        </p>
                        {
                            block.map((item, index) => {
                                return (
                                    <div key={index} className="border border-customBorder rounded-[25px] mb-4 p-2 bg-customBlack bg-opacity-65 flex items-center relative">
                                        <div className="mx-5">
                                            <p className="text-customGradiantFrom text-[14px]  ">
                                                {item.title}
                                            </p>
                                            <p className="text-white font-semibold text-[15px ] ">
                                                {item.text}
                                            </p>
                                        </div>
                                        <p className="text-white text-[14px] text-left mx-5">
                                            {item.description}
                                        </p>
                                        <span className="absolute right-0 flex justify-center bottom-[-8px] w-full">
                                            <img src={item.icon} alt="" className="w-[20px] h-auto object-contain inline-block " />
                                        </span>
                                    </div>

                                );
                            })
                        }
                    </div>
                    <div className=" bg-gradient-to-r from-customGradiantFrom to-customGradiantTo px-0.5 py-0.5 rounded-[10px]">
                        <div className="bg-customBlack md:px-10 py-4 rounded-[10px] h-full ">
                            <p className="py-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-[20px] font-bold">
                                Ploonet Quickserve™
                            </p>
                            <p className=" text-center text-[16px] font-light text-white mb-5">
                                제작 시작 후 12~48시간 이내
                            </p>
                            {
                                userProfile.map((item, index) => {
                                    return (
                                        <div key={index} className="flex items-center justify-center my-3">
                                            <div className="bg-gradient-to-r from-customGradiantFrom to-customGradiantTo px-5 py-2 rounded-[10px]">
                                                <p className=" text-center text-[14px] font-light text-white">
                                                    {item.head}
                                                </p>
                                                <img src={item.icon} alt="" className="w-[30px] h-[30px] object-contain inline-block my-2" />
                                            </div>
                                            <div className="mx-3 border-b border-b-customBorder pb-4 px-5">
                                                <p className="py-2 text-left text-[16px] font-medium text-white">
                                                    {item.title}
                                                </p>
                                                <p className=" text-left text-[13px] font-light text-white mb-5 text-opacity-70">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}