const BookForm = () => (
  <form className="book-form">
    <h2>ADD NEW BOOK</h2>
    <div className="inputs">
      <input type="text" placeholder="Book title" className="book-title-input" />
      <select id="category" name="category" placeholder="Category">
        <option disabled selected value="">Category</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="poetry">Poetry</option>
        <option value="biography">Biography</option>
      </select>
      <button type="submit" className="add-book-btn">ADD BOOK</button>
    </div>
  </form>
);

export default BookForm;
