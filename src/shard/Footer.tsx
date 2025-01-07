import React from 'react'
import { FooterData } from '../Dummy/Data'

const Footer = () => {
  return (
    <div className='pt-[70px] border-t border-gray-300'>
        <div className="container m-auto">
            <div className='flex justify-between pb-[40px]'>
                {FooterData.map((ele,ind)=>(
                    <div key={ind} className=''>
                        <h2 className='mb-5 font-bold text-xl'>{ele.h2}</h2>
                        {ele.ul.map((e,ind)=>(
                            <ul key={ind}>
                                <li className='mb-3'>
                                    <a href='#'>{e}</a>
                                </li>
                            </ul>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <div className="text flex flex-col justify-center bg-gray-100 py-[40px]">
                <div className='text-center mb-3'>
                    <span className='px-2 border-r border-gray-400'>tefaStore</span>
                    <span className='px-2 border-r border-gray-400'>1688.com</span>
                    <span className='px-2 border-r border-gray-400'>Tmall Taobao World</span>
                    <span className='px-2 border-r border-gray-400'>Alipay</span>
                    <span className='px-2 border-r border-gray-400'>Lazada</span>
                    <span className='px-2'>Taobao Global</span>
                </div>
                <div className='text-center mb-3 flex gap-2 items-center justify-center'>
                    <span>Policies and rules</span> <span className='w-[6px]  bg-gray-800 h-[6px] rounded-full'></span>
                    <span>Legal Notice</span> <span className='w-[6px]  bg-gray-800 h-[6px] rounded-full'></span>
                    <span>Product Listing Policy</span> <span className='w-[6px]  bg-gray-800 h-[6px] rounded-full'></span>
                    <span>Intellectual Property Protection</span> <span className='w-[6px]  bg-gray-800 h-[6px] rounded-full'></span>
                    <span>Privacy Policy</span> <span className='w-[6px]  bg-gray-800 h-[6px] rounded-full'></span>
                    <span>Terms of Use</span> <span className='w-[6px]  bg-gray-800 h-[6px] rounded-full'></span>
                    <span>Integrity Compliance</span>
                </div>
                <div className='text-center'>
                    <span>© 1999-2024 Alibaba.com。版权所有：杭州阿里巴巴海外信息技术有限公司浙公网安备33010002000366浙ICP备2024067534号-3</span>
                </div>
        </div>
    </div>
  )
}

export default Footer