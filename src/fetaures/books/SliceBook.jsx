import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    { id: uuidv4(), title: "BookName", author: "BookWriter" },
    { id: uuidv4(), title: "Bangladesh", author: "Khalid" },
  ],
};

const sliceBook = createSlice({
  name: "Book",

  initialState: initialBooks,

  reducers: {
    showBook: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const bookForUpdate = state.books.filter((book) => book.id == id);
      if (bookForUpdate) {
        bookForUpdate[0].title = title;
        bookForUpdate[0].author = author;
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = sliceBook.actions;

export default sliceBook.reducer;
