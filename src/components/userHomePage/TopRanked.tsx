import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  AppDispatch, RootState  } from "../../store/Store";
import { fetchProducts } from '../../Rudex/ProductsSlice';
import { useSelector } from 'react-redux';
const TopRanked = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { ProductsData, loading, error } = useSelector((state: RootState) => state.Products);
    const beauty = ProductsData.products.filter((ele)=> ele.category === "beauty").sort((a, b) => b.rating - a.rating).slice(0,3)
    const furniture = ProductsData.products.filter((ele)=> ele.category === "furniture").sort((a, b) => b.rating - a.rating).slice(0,3)
    const groceries = ProductsData.products.filter((ele)=> ele.category === "groceries").sort((a, b) => b.rating - a.rating).slice(0,3)
    const decoration = ProductsData.products.filter((ele)=> ele.category === "home-decoration").sort((a, b) => b.rating - a.rating).slice(0,3)


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
  return (
    <div>
        <div className="container m-auto">
            <h2>Top Ranked</h2>
        <div className='flex'>
        <div className="box w-1/4">
            {beauty.map((ele:any)=>(
                <div key={ele.id} className='flex items-center gap-4'>
                    <img className='h-[150px] w-[150px] rounded-lg' src={ele.thumbnail} alt=''/>
                    <p>best rating : {ele.rating}</p>
                </div>
            ))}
        </div>
        <div className="box w-1/4">
            {furniture.map((ele:any)=>(
                <div key={ele.id} className='flex items-center gap-4'>
                    <img className='h-[150px] w-[150px] rounded-lg' src={ele.thumbnail} alt=''/>
                    <p>best rating : {ele.rating}</p>
                </div>
            ))}
        </div>
        <div className="box w-1/4">
            {groceries.map((ele:any)=>(
                <div key={ele.id} className='flex items-center gap-4'>
                    <img className='h-[150px] w-[150px] rounded-lg' src={ele.thumbnail} alt=''/>
                    <p>best rating : {ele.rating}</p>
                </div>
            ))}
        </div>
        <div className="box w-1/4">
            {decoration.map((ele:any)=>(
                <div key={ele.id} className='flex items-center gap-4'>
                    <img className='h-[150px] w-[150px] rounded-lg' src={ele.thumbnail} alt=''/>
                    <p>best rating : {ele.rating}</p>
                </div>
            ))}
        </div>
    </div>
        </div>
    </div>

  )
}

export default TopRanked