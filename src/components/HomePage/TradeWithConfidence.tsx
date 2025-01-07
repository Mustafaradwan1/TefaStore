import React from 'react'
import t1 from "../../assets/TradeWithConfidence/t1.png"
import t2 from "../../assets/TradeWithConfidence/t2.png"
import bg from "../../assets/TradeWithConfidence/bg.png"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const  TradeWithConfidence = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.5,  
      });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.5,  
      });
  return (
    <div className='h-auto py-[70px] bg-cover bg-center' style={{backgroundImage: `url(${bg})`}}>
        <div className="container m-auto">
            <motion.h2
                ref={ref1}
                initial={{ opacity: 0, y: "-20vh" }}
                animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : "-20vh" }}
                transition={{ duration: 0.5  }}
            className='mb-[80px] font-bold text-4xl text-white'>تاجِر بثقة من جودة الإنتاج إلى حماية المشتريات</motion.h2>
            <div className="md:flex  gap-[40px] justify-between ">
                <div className="box bg-[#ffffff21] text-white mb-5 md:mb-0  w-full md:w-1/2 rounded-[12px] backdrop-blur-[50px] shadow-lg p-[50px]">
                    <span className='text-lg font-bold mb-5 block'>ضمان جودة الإنتاج باستخدام</span>
                    <div className="image">
                        <img className='w-[60%]' src={t1} alt='' />
                    </div>
                    <p className='mb-[50px] text-sm'>تواصل مع مجموعة متنوعة من مورِّدين تم إثبات صحة شهادات اعتمادهم وقدراتهم بواسطة شركات تابعة لجهات خارجية. ابحث عن شعار الاعتماد "Verified" لبدء الشراء مع مورِّدين ذوي خبرة واسعة يمكن لشركتك الاعتماد عليهم.</p>
                    <div className="info">
                        <button className='border rounded-[50px] py-3 mr-5 px-5 text-sm'>شاهد الفديو</button>
                        <a className='underline text-sm' href='#'>معرفة المزيد</a>
                    </div>
                </div>
                <div className="box bg-[#ffffff21] text-white w-full md:w-1/2 rounded-[12px] backdrop-blur-[50px] shadow-lg p-[50px]">
                    <span className='text-lg font-bold  mb-5 block'>احمِ مشترياتك باستخدام</span>
                    <div className="image">
                        <img className='w-[60%]' src={t2} alt='' />
                    </div>
                    <p className='mb-[50px] text-sm'>اشتر بكل بثقة مع إمكانية الوصول إلى خيارات دفع آمنة، وحماية من مشكلات المنتجات أو الشحن، ودعم بوساطة في أي مشكلات تنشأ فيما يتعلق بالشراء عند الطلب والدفع على tefaStore.com.</p>
                    <div className="info">
                        <button className='border rounded-[50px] py-3 mr-5 px-5 text-sm'>شاهد الفديو</button>
                        <a className='underline text-sm' href='#'>معرفة المزيد</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TradeWithConfidence