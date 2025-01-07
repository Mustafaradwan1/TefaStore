import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState: any = {
  SingleData: {},  
  loading: false,
  error: null,
};
   const fetchSingleProduct = createAsyncThunk(
    'Single/fetchSingleProduct',
    async (id:string | undefined) => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      return data;
    }
  );
  export const SingleProductSlice = createSlice({
    name: 'Single',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSingleProduct.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSingleProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.SingleData = action.payload; 
        })
        .addCase(fetchSingleProduct.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'An error occurred';
        });
    },
  });

export { fetchSingleProduct };
export default SingleProductSlice.reducer;