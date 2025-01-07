import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
interface CategoryIdSliceState {
  category: { products: any[] };
    loading: boolean;
    error: string | null;
  }
  const initialState: CategoryIdSliceState = {
    category: { products: [] },
    loading: false,
    error: null,
  };
   const fetchCategoryId = createAsyncThunk(
    'categoryId/fetchCategoryId',
    async (name:string) => {
      const response = await fetch(`https://dummyjson.com/products/category/${name}`);
      const data = await response.json();
      return data;
    }
  );
  export const CategoryIdSlice = createSlice({
    name: 'categoryId',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCategoryId.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCategoryId.fulfilled, (state, action) => {
          state.loading = false;
          state.category = action.payload; 
        })
        .addCase(fetchCategoryId.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'An error occurred';
        });
    },
  });

export { fetchCategoryId };
export default CategoryIdSlice.reducer;