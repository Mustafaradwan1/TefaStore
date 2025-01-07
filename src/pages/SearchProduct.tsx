import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch  } from "../store/Store";
import { Link } from 'react-router-dom';
const SearchProduct = () => {
    const { SearchData, loading, error } = useSelector((state: RootState) => state.Search);
    const [GetGategory, setGetGategory] = useState<string[]>([])
    const [GetBrand, setGetBrand] = useState<string[]>([])
    const [GetPrice, setGetPrice] = useState<{min:number,max:number}>({min:0,max:Infinity})

    console.log(SearchData);
    
    const  handleGategory = (category:string)=>{
      setGetGategory((ele)=>ele.includes(category)
    ? ele.filter((e)=> e !==  category)
    : [...ele,category])
    }
    const  handleBrand = (brand:string)=>{
      setGetBrand((ele)=>ele.includes(brand)
    ? ele.filter((e)=> e !==  brand)
    : [...ele,brand])
    }
    const  handlePrice = ()=>{
      const min = parseFloat((document.getElementById("min-price") as HTMLInputElement).value )|| 0
      const max = parseFloat((document.getElementById("max-price") as HTMLInputElement ).value ) || Infinity
      setGetPrice({min,max})
    }

    const FilterData = SearchData.products.filter((ele)=>{
      const gategoryilter = GetGategory.length === 0 || GetGategory.includes(ele.category) ;
      const brandilter = GetBrand.length === 0 || GetBrand.includes(ele.brand) ;
      const priceilter = ele.price >= GetPrice.min && ele.price <= GetPrice.max ;
      return gategoryilter && brandilter && priceilter
    })
  return (
    <div>
      <div className="container m-auto">
        {SearchData.products.length === 0 
          ?
          <div className='h-[50vh] flex justify-center items-center'>no data to show</div>
          :
          <div className="flex">
          <div className="filter">
            <h2>filter</h2>
            <div className="h-[200px] my-5 overflow-auto">
              <h2>Category</h2>
              <ul>
                {[...new Set(SearchData.products.map((ele) => ele.category))].map((category, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={category}
                      id={category}
                      onChange={()=>handleGategory(category)}
                    />
                    <label htmlFor={category} style={{ userSelect: 'none' }} className="cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </ul>
            </div>

            <div className="h-[200px] my-5 overflow-auto">
              <h2>Brand</h2>
              <ul>
                {[...new Set(SearchData.products.map((ele) => ele.brand))].map((brand, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={brand}
                      id={brand}
                      onChange={()=>handleBrand(brand)}
                    />
                    <label htmlFor={brand} style={{ userSelect: 'none' }} className="cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
              </ul>
            </div>

            <div>
              <h2>Price</h2>
              <ul>
              <input
                  type="number"
                  id="min-price"
                  placeholder="Min"
                  onChange={handlePrice}
                  className="mr-2"
                />
                <input
                  type="number"
                  id="max-price"
                  placeholder="Max"
                  onChange={handlePrice}
                  className="mr-2"
                />
                
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {FilterData.map((ele) => (
              <Link to={`/SingleProduct/${ele.id}`} key={ele.id} className="h-[500px] w-[24%]">
                <div className="image h-1/2 w-full border-b-2">
                  <img src={ele.thumbnail} className="h-full w-full" alt="" />
                </div>
                <div className="text">
                  <p>{ele.title}</p>
                  <p>{ele.minimumOrderQuantity}</p>
                  <p>{ele.price}</p>
                  <p>{ele.discountPercentage}</p>
                  <p>{ele.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        }

      </div>
    </div>
  )
}

export default SearchProduct