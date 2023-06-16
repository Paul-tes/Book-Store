import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d1euisQMjzFI5gxzQoD7/books';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    const books = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return books;
  } catch (error) {
    isRejectedWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    await axios.delete(`${url}/${bookId}`);
    return bookId;
  },
);

export const createBook = createAsyncThunk('books/postBooks', async (book) => {
  try {
    const result = await axios.post(url, book);
    return result.data;
  } catch (error) {
    return isRejectedWithValue(error.message);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, book) => {
      const newBook = {
        item_id: `item${state.books.length}`,
        title: book.payload.title,
        author: 'John Smith',
        category: book.payload.category,
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      const updatedBooks = state.books.filter((book) => book.id !== id);
      return { ...state, books: updatedBooks };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
