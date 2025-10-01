import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/fetchData/fetchDataSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
