export const ProcessCard = () => {
    const image = {
        camera: '/maker.png',
    }
    const block = [
        {
            title: 'STEP1',
            text: '사전 논의',
            description: '영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의'
        },
        {
            title: 'STEP2',
            text: '사전 논의',
            description: '영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의'
        },
        {
            title: 'STEP3',
            text: '사전 논의',
            description: '영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의'
        },
        {
            title: 'STEP4',
            text: '사전 논의',
            description: '영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의'
        },
        {
            title: 'STEP5',
            text: '사전 논의',
            description: '영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의'
        },
    ]
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
                    <div className="border border-customBorder rounded-[10px] bg-customBlack p-3">

                        <p className="py-2 text-center text-[20px] font-semibold text-white">
                            일반 제작
                        </p>
                        <p className=" text-center text-[16px] font-light text-white">
                            제작 시작 후 5영업일 이내
                        </p>
                        {
                            block.map((item,index) => {
                                return (
                                    <div key={index} className="border border-customBorder rounded-[25px] p-2 bg-customBlack bg-opacity-65 ">
                                        fwcsdcsdc()
                                    </div>

                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    );
}