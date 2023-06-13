import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import BookStatus from './BookStatus';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeOnClick = (event) => {
    const { id } = event.target;
    dispatch(removeBook(id));
  };

  return (
    <div className="book-card">
      <div>
        <div className="categoy">{category}</div>
        <div className="book-name">{title}</div>
        <div className="author">{author}</div>
        <div className="action-btns-container">
          <button type="button" className="action-btn comment">Comments</button>
          <button
            id={id}
            type="button"
            className="action-btn remove"
            onClick={(e) => removeOnClick(e)}
          >
            Remove

          </button>
          <button type="button" className="action-btn edit">Edit</button>
        </div>
      </div>
      <div>
        <BookStatus />
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
