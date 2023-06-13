import BookStatus from './BookStatus';
import PropTypes from 'prop-types';

const Book = ({ title, author, category }) => (
  <div className="book-card">
    <div>
      <div className="categoy">{category}</div>
      <div className="book-name">{title}</div>
      <div className="author">{author}</div>
      <div className="action-btns-container">
        <button type="button" className="action-btn comment">Comments</button>
        <button type="button" className="action-btn remove">Remove</button>
        <button type="button" className="action-btn edit">Edit</button>
      </div>
    </div>
    <div>
      <BookStatus />
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
