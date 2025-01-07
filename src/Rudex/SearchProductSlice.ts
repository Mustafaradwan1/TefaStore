import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
interface CategoryIdSliceState {
  SearchData: { products: any[] };
    loading: boolean;
    error: string | null;
  }
  const initialState: CategoryIdSliceState = {
    SearchData: { products: [] },
    loading: false,
    error: null,
  };
   const fetchSearch = createAsyncThunk(
    'Search/fetchSearch',
    async (name:string) => {
      const response = await fetch(`https://dummyjson.com/products/search?q=${name}`);
      const data = await response.json();
      return data;
    }
  );
  export const SearchProductSlice = createSlice({
    name: 'Search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearch.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSearch.fulfilled, (state, action) => {
          state.loading = false;
          state.SearchData = action.payload; 
        })
        .addCase(fetchSearch.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'An error occurred';
        });
    },
  });

export { fetchSearch };
export default SearchProductSlice.reducer;