import { createSlice } from '@reduxjs/toolkit';
import bookList from '../../modules/books';

const initialState = {
  books: bookList,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, book) => {
      state.books.payload(book);
    },
    removeBook: (state, id) => {
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
