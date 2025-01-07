import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bg from "../../assets/bg2.png";
import Search from '../../shard/Search';
const UserHeroSection = () => {
    const StatusData = JSON.parse(localStorage.getItem('usersData') || '[]');
    const StatusCheck = StatusData.find((ele:any)=> ele.status === true)
  return (
    <div
      className="h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container sm:px-0 m-auto h-full flex items-center">
        <div className="text m-auto text-white w-full sm:w-[80%] md:w-[50%]">
          <motion.h1
            initial={{ x: '-50vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 25,
            }}
            className="md:text-[44px] text-[30px] leading-[50px]"
          >
            Welcome to TefaStore.com, {StatusCheck.username}
          </motion.h1>
          <Search/>
        </div>
      </div>
    </div>
  );
};

export default UserHeroSection;


