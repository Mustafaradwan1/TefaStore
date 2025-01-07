import React, { useEffect } from 'react';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Rudex/CategoriesSlice';
import { fetchCategoryId } from '../../Rudex/CategoryIdSlice';
import { RootState,AppDispatch  } from "../../store/Store";
import { Link } from 'react-router-dom';
const BoxSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };
      const dispatch = useDispatch<AppDispatch>();
      const { categories, loading, error } = useSelector((state: RootState) => state.Categories);
      useEffect(() => {
        dispatch(fetchCategories());
      }, [dispatch]);
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
  return (
    <div className="slider-container ">
      <Slider {...settings}>
      {categories.map((ele:any,ind) =>(
        <Link to={"/CategoryIdData"}  onClick={() => dispatch(fetchCategoryId(ele.slug))}  key={ind} className="!w-[150px] flex-col !h-[150px] shadow mb-5 hover:border-orange-600 cursor-pointer rounded-full border-2 !flex justify-center items-center">
            <p className="text-center mt-2 text-[13px]">{ele.name}</p>
        </Link>
        ))}
      </Slider>
    </div>
  )
  
}

export default BoxSlider





