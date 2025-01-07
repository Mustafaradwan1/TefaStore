import React from 'react'
import e1 from "../../assets/EmpoweringCompanies/e1.png"
import e2 from "../../assets/EmpoweringCompanies/e2.png"
import e3 from "../../assets/EmpoweringCompanies/e3.png"
import { EmpoweringCompaniesData } from '../../Dummy/Data'
const EmpoweringCompanies = () => {
  return (
    <div className='py-[70px]'>
        <div className="container m-auto">
            <div className="text w-[70%] m-auto">
                <h2 className='text-center text-3xl mb-4'>تمكين الشركات من خلال التجارة العالمية</h2>
                <p className='text-center text-[18px]'>تقدم TefaStore.com حلول تداول تجاري في مجال B2B شاملة بمكان واحد للشركات العالمية الصغيرة والمتوسطة الحجم، ما يزودها بالقدرات اللازمة للتحول من خلال التداول التجاري رقميًا، واغتنام الفرص، وتسريع النمو على المستوى العالمي.</p>
            </div>
            <div className='h-[600px] flex gap-5 mt-[60px]'>
                <div className="box w-1/2 h-full relative">
                    <img src={e1} className='h-full w-full rounded-[16px]' alt="" />
                    <div className="text absolute bottom-[50px] left-[50px]">
                        <span className='text-orange-500 font-bold'>مهمتنا</span>
                        <h2 className='text-white text-3xl font-bold'>سهِّل مزاولة الأعمال التجارية في أي مكان.</h2>
                    </div>
                </div>
                <div className="box w-1/2 flex flex-col gap-5">
                    <div className='h-[60%] relative'>
                        <img src={e2} className='h-full w-full rounded-[16px]' alt="" />
                        <div className="text absolute bottom-[50px] left-[50px]">
                            <span className='text-orange-500 font-bold'>مواقعنا</span>
                            <h2 className='text-gray-800 text-3xl font-bold'>لدينا فِرق منتشرة حول العالم.</h2>
                        </div>
                    </div>
                    <div className='h-[40%] relative'>
                        <img src={e3} className='h-full w-full rounded-[16px]' alt="" />
                        <div className="text absolute bottom-[50px] left-[50px]">
                            <span className='text-orange-500 font-bold'>وعودنا تجاه الممارسات البيئية والاجتماعية والحوكمة (ESG)</span>
                            <h2 className='text-white text-3xl font-bold'>تكنولوجيا مسؤولة. مستقبل مستدام.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[60px]'>
                <div className='flex justify-between items-center mb-[60px]'>
                    <h4 className='text-xl font-bold'>اعثر على مورِّدين حسب البلد أو المنطقة</h4>
                    <a href='#' className='underline'>عرض المزيد</a>
                </div>
                <div className='flex justify-around'>
                    {EmpoweringCompaniesData.map((ele,ind)=>(
                        <div key={ind} className='flex flex-col items-center justify-center'>
                            <div className="image mb-4 flex items-center justify-center w-[70px] h-[70px] rounded-full bg-gray-200">
                                <img src={ele.img} alt="" className='w-[32px] h-[32px] object-cover' />
                            </div>
                            <p>{ele.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmpoweringCompanies