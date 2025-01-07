import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { ImgSliderData } from '../../Dummy/Data'
import q1 from "../../assets/found/q1.png"
import q2 from "../../assets/found/q2.png"
import q3 from "../../assets/found/q3.png"
import q4 from "../../assets/found/q4.png"
import q5 from "../../assets/found/q5.png"
import q6 from "../../assets/found/q6.png"
const FoundSection = () => {
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    let sliderRef1 = useRef<Slider | null>(null);
    let sliderRef2 = useRef<Slider | null>(null);
    useEffect(() => {
        if (sliderRef1.current) {
            setNav1(sliderRef1.current);
          }
          if (sliderRef2.current) {
            setNav2(sliderRef2.current);
          }
      }, []);
  return (
    <div className='py-[80px] bg-gray-200'>
        <div className="container m-auto">
            <div className="mainBox flex flex-wrap lg:flex-nowrap gap-4">
                <div className="box w-full  md:w-[48%] lg:w-1/3 h-[650px]">
                <div className="slider-container flex-col gap-3 flex">
                    <div className="bigDiv bg-white h-[75%] rounded-lg bg-white p-5">
                    <h2 className="font-bold">Slider Syncing (AsNavFor)</h2>
                    <h4 className="mb-5">First Slider</h4>
                        <Slider autoplay={true}   asNavFor={nav2} ref={sliderRef1}>
                            {ImgSliderData.map((ele,ind)=>(
                                <div key={ind}>
                                    <img src={ele.mainImg} className="w-full cursor-pointer h-[100%] rounded-lg" alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="small bg-white p-5 rounded-lg h-[25%] flex items-center">
                        <Slider
                        asNavFor={nav1}
                        ref={sliderRef2}
                        slidesToShow={1}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        >
                            {ImgSliderData.map((ele,ind)=>(
                                <div key={ind}>
                                    <img src={ele.mainImg} className="w-[31%] h-full shadow cursor-pointer rounded-lg" alt="" />
                                    <img src={ele.img1} className="w-[31%] h-full shadow cursor-pointer rounded-lg" alt="" />
                                    <img src={ele.img2} className="w-[31%] h-full shadow cursor-pointer rounded-lg" alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                </div>
                <div className="box flex-col gap-3 flex w-full md:w-[48%] lg:w-1/3 h-[650px]">
                    <div className="bigDiv bg-white p-5 rounded-lg h-[75%]">
                        <h4 className='mb-5 font-bold'>تم إضافة 112,000+ منتج اليوم</h4>
                        <div className="image grid h-[88%] grid-rows-2 grid-flow-col gap-3">
                            <img className='w-full rounded-lg shadow h-full cursor-pointer' src={q1} alt='' />
                            <img className='w-full rounded-lg shadow h-full cursor-pointer' src={q3} alt='' />
                            <img className='w-full rounded-lg shadow h-full cursor-pointer' src={q6} alt='' />
                            <img className='w-full rounded-lg shadow h-full cursor-pointer' src={q4} alt='' />
                        </div>
                    </div>
                    <div className="small bg-white p-5 rounded-lg h-[25%] flex items-center">
                        <img className='w-[30%] rounded-lg shadow h-full' src={q1} alt='' />
                        <p className='ml-4'>
                        الجديد هذا الأسبوع <br/>
                        منتجات من مورِّدين معتمدين فقط
                        </p>
                    </div>
                </div>
                <div className="box flex-col gap-3 flex w-full md:w-1/2 lg:w-1/3 h-[650px]">
                    <div className="small bg-white p-5 rounded-lg h-[25%] flex items-center">
                        <img className='w-[30%] h-full rounded-lg shadow ' src={q5} alt='' />
                        <p className='ml-4'>أقل سعر بيع خلال 180 يومًا</p>
                    </div>
                    <div className="bigDiv bg-white h-[75%] rounded-lg bg-white p-5">
                        <h2 className='mb-5 font-bold'>عروض على أفضل المنتجات مبيعًا</h2>
                        <img className='w-full h-[88%] rounded-lg shadow ' src={q2} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoundSection