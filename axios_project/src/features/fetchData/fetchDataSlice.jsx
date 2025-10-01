import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://dummyjson.com/products/");
  return response.data;
});

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const fetchPostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.products;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        if (action.error || action.error.code === "ERR_BAD_REQUEST") {
          console.error("Request Error!");
        }
      });
  },
});

export default fetchPostSlice.reducer;
