import React, { useEffect, useState,useRef  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch  } from "../store/Store";
import { fetchSingleProduct } from '../Rudex/SingleProductSlice';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Rudex/CartSlice';
const SingleProduct = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {id} = useParams()
    const { SingleData, loading, error } = useSelector((state: RootState) => state.Single);
    const [currentImage, setCurrentImage] = useState("");
    const [CheckUser, setCheckUser] = useState(false);

    const handleCheckUser = ()=> {


        
    };
    const handleImageHover = (image: string) => {
      setCurrentImage(image);
    };
    useEffect(() => {
      dispatch( fetchSingleProduct(id));
    }, [id,dispatch])
    if (loading) {
      return <div>Loading...</div>;
    }
    const handleAddToCart = () => {
      const statusData = JSON.parse(localStorage.getItem('usersData') || '[]');
      const userStatus = statusData.find((ele: any) => ele.status === true);
      if(userStatus){
        if (SingleData) {
          dispatch(addToCart(SingleData));
          alert("product added secssecfuly")
        }
      }else{
        alert("please login or create an account")
      }
    };
    if (error) {
      return <div>Error: {error}</div>;
    }
  return (
    <div className='py-[100px]'>
      <div className="container">
        <div className='flex h-[500px]'>
          <div className="image h-full w-[50%]" >
            <img src={currentImage === "" ? SingleData?.thumbnail :currentImage } className='w-full h-3/4' alt="" />
            <div className='h-1/4 flex'>
              {SingleData.images?.map((ele:string,ind:number)=>(
                <img className='h-full w-1/3 cursor-pointer' onMouseEnter={() => handleImageHover(ele)} key={ind}  src={ele} alt="" />
              ))}
            </div>
          </div>
          <div className='w-1/2'>
          <p className='font-bold text-xl mb-4'>{SingleData.title}</p>
          <p className='mb-3'>{SingleData.description}</p>
          <p>{SingleData.availabilityStatus}</p>
          <p>stock : {SingleData.stock}</p>
          <p>{SingleData.price}</p>
          <p>{SingleData.brand}</p>
          <p>{SingleData.category}</p>
          <p>{SingleData.discountPercentage}</p>
          <p>{SingleData.rating}</p>
          <p>{SingleData.returnPolicy}</p>
          <p>{SingleData.stock}</p>
          <button onClick={handleAddToCart} className='bg-orange-400 py-2 px-5 rounded-lg mt-4 text-white'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct