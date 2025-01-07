import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch  } from "../store/Store";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const CategoryIdData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category, loading, error } = useSelector((state: RootState) => state.categoryId);
  const ProductsCategory = category.products

  return (
    <div className='py-[100px]'>
      <div className="container m-auto">
        <div className='flex gap-3'>
          {ProductsCategory.map((ele)=>(
            <Link to={`/SingleProduct/${ele.id}`}  key={ele.id} className="card h-[500px] shadow relative">
              <span className='absolute top-[30px] bg-red-500 px-[30px] py-2'>beauty{ele.brand}</span>
              <div className="image h-[60%]">
                <img src={ele.thumbnail} className='h-full' alt="" />
              </div>
              <div className="text px-4 py-5">
                <p>{ele.title}</p>
                <div className="info flex justify-between">
                  <div className="price">
                    {ele.discountPercentage != 0 ? <span className='block'>خصم %{ele.discountPercentage} 
                      <span className='block'>{ele.price - (ele.price * ele.discountPercentage / 100)}</span>
                    </span> : ""}
                    <span className='mr-3'>
                      {ele.discountPercentage != 0 ? ` ${ele.price}` : `price: ${ele.price}`}
                     </span>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryIdData