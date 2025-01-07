import React from 'react'
import bg from "../../assets/bgReady.png"
const Ready = () => {
  return (
    <div className='h-[40vh] bg-center bg-cover' style={{backgroundImage: `url(${bg})`}}>
        <div className="container m-auto h-full">
            <div className="h-full flex items-center justify-center">
                <div className="box text-center text-white">
                    <h2 className='text-4xl mb-4 font-bold'>هل أنت جاهز لبدء الاستخدام؟</h2>
                    <p className='mb-4 text-[18px] font-bold'>استكشف ملايين المنتجات من مورِّدين موثوق بهم من خلال الاشتراك اليوم!</p>
                    <button className='py-3 px-5 bg-orange-500 rounded-[50px]'>الاشتراك</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ready