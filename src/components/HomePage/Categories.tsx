import React from 'react'
import BoxSlider from './BoxSlider'

const Categories = () => {
  return (
    <div className='py-[100px] Categories' id='Categories'>
        <div className="container m-auto">
            <div className="boxText  lg:flex justify-between gap-[20px] md:gap-[60px]">
                <h2 className='md:text-[44px] text-[30px] w-full mb-5 lg:mb-0 lg:w-[65%]'>استكشف ملايين العروض المصممة خصيصًا لتلبية احتياجات شركتك</h2>
                <div className="info grid grid-rows-2  md:grid-rows-1 lg:grid-rows-2 grid-flow-col gap-4 lg:w-[35%]">
                    <div className="box border-l-4 border-[rgb(203 204 211 / 82%)] px-3">
                        <h2 className='text-orange-500 font-semibold text-3xl'>200+ مليون</h2>
                        <span>منتجات</span>
                    </div>
                    <div className="box border-l-4 border-[rgb(203 204 211 / 82%)] px-3">
                        <h2 className='text-orange-500 font-semibold text-3xl'>200+ ألف</h2>
                        <span>مورِّدون</span>
                    </div>
                    <div className="box border-l-4 border-[rgb(203 204 211 / 82%)] px-3">
                        <h2 className='text-orange-500 font-semibold text-3xl'>5,900</h2>
                        <span>فئات المنتجات</span>
                    </div>
                    <div className="box border-l-4 border-[rgb(203 204 211 / 82%)] px-3">
                        <h2 className='text-orange-500 font-semibold text-3xl'>200+</h2>
                        <span>بلدان ومناطق</span>
                    </div>
                </div>
            </div>
            <div className="boxSlider mt-[100px]">
                <BoxSlider/>
            </div>
        </div>
    </div>
  )
}

export default Categories