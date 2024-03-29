import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../fetaures/books/SliceBook";

const store = configureStore({
  reducer: {
    booksReducer: sliceReducer,
  },
});
export default store;
