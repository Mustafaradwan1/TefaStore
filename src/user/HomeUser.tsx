import React, { useState } from 'react';
import { TopRanked, UserHeroSection, UserProducts } from '../components/userHomePage';
const HomeUser = () => {
    const StatusData = JSON.parse(localStorage.getItem('usersData') || '[]');
    const StatusCheck = StatusData.find((ele:any)=> ele.status === true)
  return (
    <div>
        <UserHeroSection/>
        <TopRanked/>
        <UserProducts/>
    </div>
  );
};

export default HomeUser;

