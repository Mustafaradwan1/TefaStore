import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import f1 from "../../assets/factory/f1.png";
import f2 from "../../assets/factory/f2.png";
import f3 from "../../assets/factory/f3.png";

const BuyFromFactory = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,  
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className='py-[70px] overflow-hidden'>
      <div className="container m-auto">
        <motion.h2
        ref={ref4}
            initial={{ opacity: 0, x: "-50vw" }}
            animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : "-50vw" }}
            transition={{ duration: 0.5  }}
        className='mb-[30px] font-bold text-2xl'>اشترِ من المصنع مباشرة</motion.h2>
        <div className='flex flex-wrap lg:flex-nowrap gap-3'>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: "20vh" }}
            animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : "20vh" }}
            transition={{ duration: 0.5  }}
            className="box h-[450px] lg:h-[380px] xl:h-[450px] cursor-pointer relative w-full md:w-[48%] lg:w-1/3"
          >
            <div className="image absolute w-full h-full top-0 left-0">
              <img className='rounded-lg h-full w-full' src={f1} alt="" />
            </div>
            <div className="text h-full w-full flex flex-col justify-between p-5 text-white z-[99999] relative">
              <h4 className='font-bold'> تواصل مع شركات مصنِّعة نالت أعلى التصنيفات</h4>
              <a href='#'>عرض المزيد</a>
            </div>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: "20vh" }}
            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : "20vh" }}
            transition={{ duration: 0.5,delay:0.3 }}
            className="box h-[450px] lg:h-[380px] xl:h-[450px] cursor-pointer relative  w-full md:w-[48%] lg:w-1/3"
          >
            <div className="image absolute w-full h-full top-0 left-0">
              <img className='rounded-lg h-full w-full' src={f2} alt="" />
            </div>
            <div className="text h-full w-full flex flex-col justify-between p-5 text-white z-[99999] relative">
              <h4 className='font-bold'>حصول على عينات</h4>
              <a href='#'>عرض المزيد</a>
            </div>
          </motion.div>


          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y:"20vh" }}
            animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : "20vh" }}
            transition={{ duration: 0.5,delay:0.6 }}
            className="box h-[450px] lg:h-[380px] xl:h-[450px] cursor-pointer relative  w-full md:w-[48%] lg:w-1/3"
          >
            <div className="image absolute w-full h-full top-0 left-0">
              <img className='rounded-lg h-full w-full' src={f3} alt="" />
            </div>
            <div className="text h-full w-full flex flex-col justify-between p-5 text-white z-[99999] relative">
              <h4 className='font-bold'>خُذ جولات مباشرة في المصنع</h4>
              <a href='#'>عرض المزيد</a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default BuyFromFactory;
