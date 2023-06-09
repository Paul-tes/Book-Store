const BookStatus = () => (
  <div className="book-status">
    <div className="progression-bar">
      <div className="progress-circular-bar" />
      <div className="progress-percent">
        <div className="amount">64%</div>
        <div className="completion">Completed</div>
      </div>
    </div>
    <div className="chapter-info">
      <div className="heading">CURRENT CHAPTER</div>
      <div className="current-chapter">Chapter 17: A Lesson Learned</div>
      <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
    </div>
  </div>
);

export default BookStatus;
