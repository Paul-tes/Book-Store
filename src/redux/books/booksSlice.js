import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookList from '../../modules/books';

const url = '';
const id = 'd1euisQMjzFI5gxzQoD7';

const initialState = {
  books: bookList,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, book) => {
      const newBook = {
        id: `item${state.books.length}`,
        title: book.payload.title,
        author: 'John Smith',
        category: book.payload.category,
      };
      state.books.push(newBook);
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
