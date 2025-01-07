import React from 'react'
import Slider from "react-slick";
import { DiscountsAndServicesData } from '../../Dummy/Data';
const DiscountsAndServices = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='py-[70px] bg-gray-200'>
        <div className="container m-auto">
            <div>
                <div className="text flex flex-col justify-center items-center m-auto w-[60%] mb-[50px]">
                    <h2 className='text-center text-4xl font-bold mb-5'>احصل على خصومات وخدمات وأدوات مصممة خصيصًا لمرحلة شركتك.</h2>
                    <p className='text-center text-[18px] mb-5'>حقق النمو باستخدام مزايا منتقاة بعناية تقدمها عضوية tefaStore.com المجانية، سواء أكنت تمثل شركة صغيرة تحتاج إلى الأساسيات لبدء الشراء، أم مؤسسة عريقة تبحث عن أدوات وحلول لطلبات أكثر تعقيدًا.</p>
                    <a href='#' className='underline font-bold'>معرفة المزيد
                    </a>
                </div>
                <div className="box dis bg-white h-[40vh] rounded-lg p-[70px]">
                    <Slider className='h-full' {...settings}>
                        {DiscountsAndServicesData.map((ele,ind)=>(
                            <div key={ind} className='!flex items-center gap-5 h-full px-[80px] py-[30px]'>
                                <div className="box h-full w-1/2 flex items-center gap-4">
                                    <div className="image h-full w-[35%] flex items-center">
                                        <img className='h-[100%] rounded-full' src={ele.img} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2 className='font-bold mb-3 text-xl'>{ele.h2}</h2>
                                        <span className='text-gray-400'>{ele.span}</span>
                                    </div>
                                </div>
                                <div className="box h-full w-1/2 flex font-bold text-[18px] items-center">
                                    <p>{ele.p}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscountsAndServices