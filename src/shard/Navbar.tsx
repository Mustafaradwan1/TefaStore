import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { SiSinglestore } from "react-icons/si";
import { Link, useNavigate, useLocation } from 'react-router-dom'; // استيراد useLocation
import { FaRegUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { RootState } from "../store/Store";

const Navbar = () => {
  const { itemsCount } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  
  const location = useLocation(); 
  const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
  const StatusCheck = usersData.find((ele: any) => ele.status === true);

  const handleClick = () => {
    if (StatusCheck) {
      StatusCheck.status = false;
      localStorage.setItem('usersData', JSON.stringify(usersData));
      navigate('/Register');
      return;
    }
  };

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/#") {
      setIsLocation(true); 
    } else {
      setIsLocation(false); 
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`py-5 fixed left-0 top-0 right-0 z-[900000] transition-all duration-0 ${isScrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="container m-auto">
        <div className="navUp flex justify-between items-center">
          <Link to="/" className={`flex gap-3 items-center ${isScrolled ? "text-orange-500" : "text-white"}`}>
            <SiSinglestore /> Tefa Store
          </Link>

       
          {StatusCheck ?
            <div className='flex items-center'>
              <div className='flex gap-4 text-white'>
                <Link to="/Cart" className='text-2xl text-red-500'><FaShoppingCart />{itemsCount}</Link>
                <ul>
                  <span className='cursor-pointer'><FaRegUser /></span>
                </ul>
              </div>
              <button onClick={handleClick} className='py-2 px-5 rounded-lg bg-orange-400 ml-2'>
                Sign out
              </button>
            </div>
            :
            <div>
              <Link to="/Login" className={`${isLocation ? (isScrolled ? "bg-orange-500 text-white" : "text-white") : "text-gray-800"} py-2 px-5 rounded-lg`}>
                Sign In
              </Link>
              <Link to="/Register" className={`${isLocation ? (isScrolled ? "bg-orange-500 text-white" : "text-white") : "text-gray-800"} py-2 px-5 rounded-lg ml-1`}>
                Sign Up
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
