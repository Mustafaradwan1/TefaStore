import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import { TbMobiledata } from "react-icons/tb";
import { TbWorldPin } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import {MatchesData,MatchesImgData} from "../../Dummy/Data"
const Matches = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | any >(0);
  return (
    <div className='py-[70px]'>
        <div className="container m-auto">
            <h2 className='text-3xl font-bold w-1/2'>بسِّط عملية الطلب من لحظة البحث حتى التنفيذ، وكل ذلك في مكان واحد</h2>
            <div className='flex mt-[80px]'>
                <div className="box relative w-1/2">
                    {MatchesData.map((ele,ind)=>(
                        <div key={ind} className={`content bg-white relative z-[9999] mt-5 cursor-pointer`}
                        onMouseEnter={()=>{
                            setHoveredIndex(ind)
                        }}
                        >
                            {hoveredIndex === ind ? 
                            <div className="flex gap-5 items-center">
                                <div className={`icon  rounded-full text-4xl bg-[#f5640342] text-[#f60] p-3 scale-125 transiton `}>
                                <ele.icon/>
                                </div>
                                <div className="text w-3/4">
                                    <h2 className='text-3xl mb-4'>{ele.h2}</h2>
                                    <p className=''>{ele.p}</p>
                                </div>
                            </div>
                            : 
                            <div className="flex gap-5 items-center">
                                <div className={`icon border-2 transiton rounded-full text-3xl text-[#856254] p-3 `}>
                                    <ele.icon/>
                                </div>
                                <div className="text w-3/4">
                                    <h2 className='text-2xl mb-4'>{ele.h2}</h2>
                                    <p className='hidden'>{ele.p}</p>
                                </div>
                            </div>
                            }
                        </div>
                    ))}
                    <div className="br w-[3px]
                    h-[70%] absolute bg-gray-300 top-[10%]  left-[27px]"  ></div>
                </div>
                <div className="box w-1/2">
                    <div className="image">
                        <img className="max-h-[500px]" src={MatchesImgData[hoveredIndex].img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Matches