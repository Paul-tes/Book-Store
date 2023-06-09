const BookForm = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <div className="inputs">
      <input type="text" placeholder="Book title" />
      <select id="category" name="category" placeholder="Category">
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="poetry">Poetry</option>
        <option value="biography">Biography</option>
      </select>
    </div>
  </form>
);

export default BookForm;
