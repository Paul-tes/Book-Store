import BookStatus from './BookStatus';

const Book = () => (
  <div className="book-card">
    <div>
      <div className="categoy">Action</div>
      <div className="book-name">Book1</div>
      <div className="author">Paul</div>
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

export default Book;
