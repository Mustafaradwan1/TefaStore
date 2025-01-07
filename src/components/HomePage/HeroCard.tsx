import React from 'react'
import {HeroCardData} from "../../Dummy/Data"
import { motion } from 'framer-motion';
const HeroCard = () => {

  return (
    <div className='py-[70px] bg-[#3a190b]'>
        <div className="container  m-auto">
            <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.7, 
            },
          },
        }}
                className='flex justify-between flex-wrap'>
                {HeroCardData.map((ele,index)=>(
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', stiffness: 50, damping: 20, delay: index * 0.4, }}
                    key={ele.h2} className='px-5 mb-3 w-full md:w-1/2 lg:w-[25%] '>
                        <div  className='bg-[#ffffff08] md:h-[330px] lg:h-[420px] xl:h-[380px]  py-[30px] block rounded-lg px-5 text-white cursor-pointer hover:bg-[#c4511821]'>
                            <span className='block w-[60px] bg-[#ffffff08] mb-5  h-[60px] rounded-full shadow flex justify-center items-center'><ele.icon/></span>
                            <h2 className="text-[24px] mb-[30px]">{ele.h2}</h2>
                            <p className="text-[16px]">{ele.p}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default HeroCard