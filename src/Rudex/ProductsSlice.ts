import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
interface CategoryIdSliceState {
    ProductsData: { products: any[] };
    loading: boolean;
    error: string | null;
  }
  const initialState: CategoryIdSliceState = {
    ProductsData: { products: [] },
    loading: false,
    error: null,
  };
   const fetchProducts = createAsyncThunk(
    'Products/fetchProducts',
    async () => {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const data = await response.json();
      return data;
    }
  );
  export const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.ProductsData = action.payload; 
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'An error occurred';
        });
    },
  });

export { fetchProducts };
export default ProductsSlice.reducer;