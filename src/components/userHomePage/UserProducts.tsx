import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  AppDispatch, RootState  } from "../../store/Store";
import { fetchProducts } from '../../Rudex/ProductsSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const UserProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [count, setCount] = useState<number>(20)
    const [Btn, setBtn] = useState<boolean>(false)
    const { ProductsData, loading, error } = useSelector((state: RootState) => state.Products);
    const ProductsCount = ProductsData.products.slice(0,count)
console.log(ProductsCount);
const handleclick = ()=>{
    if(count < ProductsData.products.length){
        setCount(count + 20)
    }else{
       
        return false
    }
}
useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
  return (
    <div>
        <div className="container m-auto">
            <h2>Get product inspiration</h2>
            <div className='flex flex-wrap'>
                {ProductsCount.map((ele:any)=>(
                    <Link to={`/SingleProduct/${ele.id}`} key={ele.id} className=' w-1/4'>
                        <img className='h-[250px] w-full rounded-lg' src={ele.thumbnail} alt=''/>
                        <p>{ele.title}</p>
                        <p>EGP : {ele.price}</p>
                        <p>min.order : {ele.minimumOrderQuantity}</p>
                    </Link>
                ))}
            </div>
            <button className={count >= 100 ? "hidden" : "block"} onClick={handleclick}>show more</button>
        </div>
    </div>

  )
}

export default UserProducts
