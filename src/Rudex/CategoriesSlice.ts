import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
interface CategoriesState {
    categories: string[];
    loading: boolean;
    error: string | null;
  }
  const initialState: CategoriesState = {
    categories: [],
    loading: false,
    error: null,
  };
   const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      return data;
    }
  );
  export const CategoriesSlice = createSlice({
    name: 'Categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCategories.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
          state.loading = false;
          state.categories = action.payload; 
        })
        .addCase(fetchCategories.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'An error occurred';
        });
    },
  });

export { fetchCategories };
export default CategoriesSlice.reducer;