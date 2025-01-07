import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoSearch } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { AppDispatch  } from "../store/Store";
import { fetchSearch } from '../Rudex/SearchProductSlice';
import { Link } from 'react-router-dom';
const Search = () => {
      const [value,setValue] = useState("")
      const dispatch = useDispatch<AppDispatch>();
  return (
    <div className=''>
               <motion.div
            initial={{ y: '50vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 25,
            }}
            className="HeroSearch relative w-full  mt-4"
          >
            
            <input
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            onInput={()=>dispatch(fetchSearch(value))}
              type="text"
              className="w-full outline-none text-gray-800 h-[50px] rounded-[50px] px-5 border"
            />
            <Link to={value != "" ? "/SearchProduct" : "/Product"} className="flex items-center h-[40px] rounded-[50px] absolute top-[5px] right-[5px] px-5 bg-orange-400">
              <span>
                <IoSearch />
              </span>
              <span>بحث</span>
            </Link>
          </motion.div>
    </div>
  )
}

export default Search