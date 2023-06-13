import { createSlice } from '@reduxjs/toolkit';
import books from '../../modules/books';

const initialState = {
  books: books,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;

      state.books = state.books.filter((item) => item.item_id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;