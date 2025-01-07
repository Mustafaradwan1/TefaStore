import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../store/Store";
import { fetchProducts } from '../Rudex/ProductsSlice';
import { Link } from 'react-router-dom';

const Product = () => {
  const { ProductsData, loading, error } = useSelector((state: RootState) => state.Products);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
    ? prevSelected.filter((item) => item !== category)
    : [...prevSelected, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((item) => item !== brand)
        : [...prevSelected, brand]
    );
  };

  const handlePriceChange = () => {
    const min = parseFloat((document.getElementById('min-price') as HTMLInputElement).value) || 0;
    const max = parseFloat((document.getElementById('max-price') as HTMLInputElement).value) || Infinity;
    setPriceRange({ min, max });
  };

  const filteredProducts = ProductsData.products.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

    return matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <div>
      <div className="container m-auto">
        <div className="flex">
          <div className="filter">
            <h2>filter</h2>
            <div className="h-[200px] my-5 overflow-auto">
              <h2>Category</h2>
              <ul>
                {[...new Set(ProductsData.products.map((ele) => ele.category))].map((category, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={category}
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
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
                {[...new Set(ProductsData.products.map((ele) => ele.brand))].map((brand, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={brand}
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
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
                  onChange={handlePriceChange}
                  className="mr-2"
                />
                <input
                  type="number"
                  id="max-price"
                  placeholder="Max"
                  onChange={handlePriceChange}
                  className="mr-2"
                />
                
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {filteredProducts.map((ele) => (
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
      </div>
    </div>
  );
};

export default Product;
