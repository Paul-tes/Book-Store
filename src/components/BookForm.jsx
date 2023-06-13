import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: '',
    category: '',
  });

  const onChangeEvent = (event) => {
    const { value, name } = event.target;
    setBook({ ...book, [name]: value });
  };

  const addBookOnlick = (event) => {
    event.preventDefault();
    if (book.title !== '' && book.category !== '') {
      dispatch(addBook(book));
    }
  };

  return (
    <div className="book-form">
      <h2>ADD NEW BOOK</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Book title"
          className="book-title-input"
          value={book.title}
          name="title"
          onChange={(e) => onChangeEvent(e)}
        />
        <select
          id="category"
          value={book.category}
          name="category"
          placeholder="Category"
          onChange={(e) => onChangeEvent(e)}
        >
          <option disabled selected value="">Category</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="poetry">Poetry</option>
          <option value="biography">Biography</option>
        </select>
        <button
          type="submit"
          className="add-book-btn"
          onClick={(e) => addBookOnlick(e)}
        >
          ADD BOOK

        </button>
      </div>
    </div>
  );
};

export default BookForm;
