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
    removeBook: (state, action) => {
      const id = action.payload;
      console.log(id);
      const updatedBooks = state.books.filter((book) => book.id !== id);
      return { ...state, books: updatedBooks };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
