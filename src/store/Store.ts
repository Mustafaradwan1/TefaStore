import { configureStore } from '@reduxjs/toolkit'
import  CategoriesSlice  from '../Rudex/CategoriesSlice'
import  CategoryIdSlice  from '../Rudex/CategoryIdSlice';
import  SingleProductSlice  from '../Rudex/SingleProductSlice';
import  SearchProductSlice  from '../Rudex/SearchProductSlice';
import  ProductsSlice  from '../Rudex/ProductsSlice';
import  cartSlice  from '../Rudex/CartSlice';


export const store = configureStore({
  reducer: {
    Categories:CategoriesSlice,
    categoryId:CategoryIdSlice,
    Single:SingleProductSlice,
    Search:SearchProductSlice,
    Products:ProductsSlice,
    cart:cartSlice,
  },
})




export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;